const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');
const harness = script.replace(/export function onDisable\(\)[\s\S]*$/, '') + `
let persistCount = 0;
let applyCount = 0;
let navCount = 0;
applyTheme = () => { applyCount++; };
syncNav = () => { navCount++; };
const status = { textContent: '' };
const saveButton = { disabled: true };
const draftVars = {};
elements.preview = {
  style: { setProperty: (key, value) => { draftVars[key] = value; } },
  dataset: {},
};
elements.studio = {
  querySelector: selector => selector === '#stui-draft-status' ? status : selector === '#stui-save-changes' ? saveButton : null,
};
context = {
  extensionSettings: { [KEY]: normalize({ style: { modelSize: 17, avatarBorderWidth: 0 } }) },
  saveSettingsDebounced: () => { persistCount++; },
};
settings = context.extensionSettings[KEY];
globalThis.draftHarness = {
  begin: () => {
    studioBaseline = structuredClone(settings);
    settings = structuredClone(studioBaseline);
    studioDirty = false;
    renderDraftPreview();
  },
  change: () => {
    settings.style.modelSize = 29;
    settings.style.avatarBorderWidth = 4;
    settings.style.avatarPosition = 'top-center';
    stageSettings();
  },
  discard: discardStudioChanges,
  save: saveStudioChanges,
  inspect: () => ({
    savedFont: context.extensionSettings[KEY].style.modelSize,
    savedAvatarBorder: context.extensionSettings[KEY].style.avatarBorderWidth,
    draftFont: settings.style.modelSize,
    draftAvatarBorder: settings.style.avatarBorderWidth,
    previewFont: draftVars['--stui-model-size'],
    previewAvatarBorder: draftVars['--stui-avatar-border'],
    previewPosition: elements.preview.dataset.stuiAvatarPosition,
    message: status.textContent,
    saveDisabled: saveButton.disabled,
    persistCount, applyCount, navCount,
  }),
};`;
const sandbox = { structuredClone, URL, console };
vm.runInNewContext(harness, sandbox, { filename: 'index.js' });
const editor = sandbox.draftHarness;

editor.begin();
editor.change();
let state = editor.inspect();
assert.equal(state.savedFont, 17, 'Draft must not mutate SillyTavern saved settings');
assert.equal(state.savedAvatarBorder, 0);
assert.equal(state.draftFont, 29);
assert.equal(state.previewFont, '29px', 'Preview must reflect unsaved size');
assert.equal(state.previewAvatarBorder, '4px solid #c2a7e8');
assert.equal(state.previewPosition, 'top-center', 'Preview position must be independent of actual chat');
assert.equal(state.persistCount, 0, 'Editing must not call saveSettingsDebounced');
assert.equal(state.applyCount, 0, 'Editing must not apply styles to real chat');
assert.equal(state.saveDisabled, false);

editor.discard();
state = editor.inspect();
assert.equal(state.draftFont, 17, 'Cancel must restore saved font');
assert.equal(state.persistCount, 0);

editor.begin();
editor.change();
editor.save();
state = editor.inspect();
assert.equal(state.savedFont, 29, 'Explicit Save commits the changed font');
assert.equal(state.savedAvatarBorder, 4);
assert.equal(state.persistCount, 1);
assert.equal(state.applyCount, 1, 'Explicit Save applies styles to real chat');
assert.equal(state.navCount, 1);
assert.equal(state.saveDisabled, true);

assert.match(script, /id="stui-save-changes"/);
assert.match(script, /id="stui-cancel-changes"/);
assert.match(css, /#stui-preview\[data-stui-avatar-position="top-center"\]/);
assert.match(css, /#stui-save-changes/);
console.log('Draft preview, explicit Save, and Cancel isolation checks passed.');
