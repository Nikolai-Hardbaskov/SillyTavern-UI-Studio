const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const src=fs.readFileSync(path.join(__dirname,'..','index.js'),'utf8')
  .replace(/export function onDisable\(\)[\s\S]*$/,'');
const sandbox={URL,structuredClone};
vm.runInNewContext(src+`
settings=normalize({style:{modelCustomFont:'"Cormorant Garamond", Georgia, serif',
 userCustomFont:'Arial, sans-serif'}});
globalThis.testValues={
 model:styleVariables(settings.style)['--stui-model-font'],
 user:styleVariables(settings.style)['--stui-user-font'],
 valid:sanitizeFontFamily('Noto Sans, serif'),
 blocked:sanitizeFontFamily('Verdana; background:red'),
 migrated:normalize({style:{modelFont:'Georgia'}}).style.modelCustomFont,
};
`,sandbox);
assert.equal(sandbox.testValues.model,'"Cormorant Garamond", Georgia, serif');
assert.equal(sandbox.testValues.user,'Arial, sans-serif');
assert.equal(sandbox.testValues.valid,'Noto Sans, serif');
assert.equal(sandbox.testValues.blocked,'');
assert.equal(sandbox.testValues.migrated,'');
assert.match(src,/modelCustomFont.*fontName/);
assert.match(src,/userCustomFont.*fontName/);
assert.match(src,/function saveStudioChanges/);
console.log('Custom font-family input, validation and legacy styles passed.');
