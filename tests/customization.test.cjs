const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const js = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');
const script = js.replace(/export function onDisable\(\)[\s\S]*$/, '') + `
const a = normalize({style:{
 avatarShape:'rectangle',avatarWidth:123,avatarHeight:74,
 avatarBorderStyle:'dotted',avatarBorderWidth:4,
 modelFont:'Caveat',modelItalic:true,modelLetterSpacing:2,modelAlign:'center',
 userWeight:700,userAlign:'right',
 cardBorder:'ridge',cardShadow:'glow',cardGradient:'diagonal'
}});
globalThis.checks = {a,vars:styleVariables(a.style),fonts:FONTS,
 shapes:AVATAR_SHAPES,presets:AVATAR_PRESETS,
 legacy:normalize({style:{avatarSize:91,avatarShape:'rounded'}}),
 invalid:normalize({style:{modelFont:'BAD',avatarShape:'INVALID',modelAlign:'INVALID'}})};
`;
const sandbox = {URL,structuredClone,console};
vm.runInNewContext(script,sandbox,{filename:'index.js'});
const {a,vars,fonts,shapes,presets,legacy,invalid}=sandbox.checks;
assert.ok(fonts.length >= 40);
assert.ok(shapes.length >= 15);
assert.ok(presets.rectangle[0] > presets.rectangle[1], 'Horizontal rectangle must be wide');
assert.ok(presets.portrait[1] > presets.portrait[0], 'Vertical rectangle must be tall');
assert.equal(a.style.avatarWidth,123);
assert.equal(a.style.avatarHeight,74);
assert.equal(vars['--stui-avatar-width'],'123px');
assert.equal(vars['--stui-avatar-height'],'74px');
assert.equal(vars['--stui-avatar-radius'],'0');
assert.equal(vars['--stui-avatar-border'],'4px dotted #c2a7e8');
assert.equal(vars['--stui-model-style'],'italic');
assert.equal(vars['--stui-model-spacing'],'2px');
assert.equal(vars['--stui-model-align'],'center');
assert.equal(vars['--stui-user-weight'],'700');
assert.equal(vars['--stui-user-align'],'right');
assert.match(vars['--stui-card-background'],/linear-gradient/);
assert.notEqual(vars['--stui-card-shadow'],'none');
assert.equal(legacy.style.avatarWidth,91);
assert.equal(legacy.style.avatarHeight,91);
assert.equal(legacy.style.avatarShape,'rounded');
assert.equal(invalid.style.avatarShape,'circle');
assert.equal(invalid.style.modelFont,'inherit');
assert.equal(invalid.style.modelAlign,'left');
for(const prop of ['--stui-model-weight','--stui-user-style','--stui-model-spacing','--stui-user-align','--stui-avatar-width','--stui-avatar-height','--stui-card-shadow']) {
 assert.ok(css.includes('var('+prop),'CSS missing '+prop);
}
assert.match(js,/function stageSettings\(\)[\s\S]*?renderDraftPreview\(\)/);
assert.match(js,/id="stui-save-changes"/);
console.log('Expanded fonts, avatar shapes, card effects and migration tests passed');
