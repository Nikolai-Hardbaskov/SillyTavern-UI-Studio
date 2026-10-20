const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');

// Exercise the actual settings tab renderer with a minimal fake panel.
const code = script.replace(/export function onDisable\(\)[\s\S]*$/, '') + `
globalThis.previewForTab = tab => {
    settings = normalize({ style: { modelSize: 27, userSize: 19, cardBorder: 'dashed' } });
    chosenTab = tab;
    elements.preview = { hidden: false };
    elements.tabContent = { innerHTML: '', querySelector: () => null };
    renderTab();
    return { visible: !elements.preview.hidden, html: elements.tabContent.innerHTML };
};`;
const sandbox = { URL, structuredClone, console };
vm.runInNewContext(code, sandbox, { filename: 'index.js' });

for (const tab of ['text', 'messages', 'avatars', 'profiles']) {
    const result = sandbox.previewForTab(tab);
    assert.equal(result.visible, true, `Preview must be visible on ${tab}`);
    if (tab !== 'profiles') assert.ok(result.html.includes('data-field="style.'), 'Editable fields remain available');
}
assert.equal(sandbox.previewForTab('general').visible, false);

assert.match(script, /id="stui-preview"/);
assert.match(script, /id="stui-preview-toggle"/);
assert.match(script, /id="stui-preview-chat"/);
assert.match(css, /#stui-preview-chat[\s\S]*?max-height/);
for (const variable of [
    '--stui-model-font', '--stui-user-font', '--stui-model-size', '--stui-user-size',
    '--stui-card-border', '--stui-card-radius', '--stui-card-padding', '--stui-card-color',
    '--stui-avatar-size', '--stui-avatar-radius', '--stui-avatar-border', '--stui-chat-overlay',
]) assert.ok(css.includes(`var(${variable}`), `Live preview uses ${variable}`);

console.log('Theme Studio live preview render and styling checks passed.');
