const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const script=fs.readFileSync(path.join(__dirname,'..','index.js'),'utf8')
  .replace(/export function onDisable\(\)[\s\S]*$/,'');
const nodes=new Map();
const document={
  getElementById:id=>nodes.get(id)||null,
  createElement:tag=>({tag,textContent:'',id:''}),
  head:{append(node){nodes.set(node.id,node);}}
};
const sandbox={URL,structuredClone,document,console};
vm.runInNewContext(script+`
  globalThis.fontTest={
    normalize,cleanLocalFonts,fontStack,syncLocalFonts,
    setSettings:v=>{settings=v;}
  };
`,sandbox);
const api=sandbox.fontTest;
const local={id:'stui-local-1234a',name:'My Cyrillic WOFF2',format:'woff2',data:'data:font/woff2;base64,AAEC'};
const state=api.normalize({fonts:[local],style:{modelFont:local.id,userFont:'Georgia'}});
assert.equal(state.fonts.length,1);
assert.equal(state.style.modelFont,local.id);
api.setSettings(state);
assert.equal(api.fontStack(local.id),'"'+local.id+'", sans-serif');
api.syncLocalFonts();
assert.match(nodes.get('stui-local-font-faces').textContent,/@font-face/);
assert.match(nodes.get('stui-local-font-faces').textContent,/data:font\/woff2;base64,AAEC/);
assert.equal(api.normalize({style:{modelFont:local.id}}).style.modelFont,'inherit');
assert.equal(api.cleanLocalFonts([{...local,data:'javascript:alert(1)'}]).length,0);
assert.equal(api.normalize({fonts:[local], profiles:{demo:{style:{modelFont:local.id}}}}).profiles.demo.style.modelFont,local.id);
assert.match(script,/id="stui-font-file"/);
assert.match(script,/stageSettings\(\);renderTab\(\);/);
console.log('Local font settings validation, face installation and saved profile migration passed.');
