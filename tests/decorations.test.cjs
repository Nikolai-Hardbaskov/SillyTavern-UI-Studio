const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8');
// Run the pure helpers without starting SillyTavern or accessing a browser DOM.
const helpers = source.replace(/export function onDisable\(\)[\s\S]*$/, '') + '\n' +
    'globalThis.testHelpers = { safeDecorationUrl, cleanDecorations, decorationSource, normalize, revealTrigger, scheduleFade };';
const sandbox = {
    URL, structuredClone, console, clearTimeout,
    document: { body: { classList: { remove() {}, contains() { return false; } } } },
};
vm.runInNewContext(helpers, sandbox, { filename: 'index.js' });
const { safeDecorationUrl, cleanDecorations, decorationSource, normalize, revealTrigger, scheduleFade } = sandbox.testHelpers;

// This caught the v0.2.6 regression: clicking the arrow used to reference
// gallerySearchAbort after the gallery and its state had been removed.
assert.doesNotThrow(() => revealTrigger());
assert.doesNotThrow(() => scheduleFade());

assert.equal(safeDecorationUrl('https://assets.example.org/flower.png?size=320'), 'https://assets.example.org/flower.png?size=320');
assert.equal(safeDecorationUrl('https://assets.example.org/flower.PNG'), 'https://assets.example.org/flower.PNG');
for (const invalid of [
    'https://assets.example.org/product/flower',
    'https://assets.example.org/flower.jpg',
    'http://assets.example.org/flower.png',
    'javascript:alert(1)',
    'data:image/png;base64,AA==',
    'https://user:pass@assets.example.org/flower.png',
]) assert.equal(safeDecorationUrl(invalid), '', invalid);

const decorations = cleanDecorations([
    { id: 'link1', url: 'https://art.example.net/decor.png', x: 34, y: 76, size: 92 },
    { id: 'legacy', assetId: 'books', x: 20, y: 80, size: 60 },
    { id: 'oldlink', openclipartId: '296597', x: 30, y: 40, size: 80 },
    { id: 'unsafe', url: 'javascript:alert(1)' },
]);
assert.equal(decorations.length, 3);
assert.equal(decorations[0].url, 'https://art.example.net/decor.png');
assert.equal(decorationSource(decorations[0]), 'https://art.example.net/decor.png');
assert.equal(decorations[0].y, 76);
assert.equal(decorationSource(decorations[1]), 'https://openclipart.org/image/400px/296597');
assert.equal(decorationSource(decorations[2]), 'https://openclipart.org/image/400px/296597');
assert.equal(normalize({ decorations }).decorations.length, 3);

assert.match(source, /accept="\.png,image\/png"/);
assert.doesNotMatch(source, /stui-decoration-gallery/);
assert.doesNotMatch(source, /searchOpenclipart/);
console.log('Decoration URL, mobile upload, and legacy migration checks passed.');
