/* SillyTavern UI Studio — mobile-first frontend extension. Keep legacy art references for existing saved decorations. */
const KEY = 'sillytavern_ui_studio';
const PREFIX = 'stui';
const ICONS = ['fa-sliders', 'fa-plug', 'fa-font', 'fa-book-atlas', 'fa-user-gear', 'fa-panorama', 'fa-cubes', 'fa-clock', 'fa-face-smile', 'fa-address-card', 'fa-palette', 'fa-star', 'fa-heart', 'fa-moon', 'fa-wand-magic-sparkles', 'fa-gear', 'fa-image', 'fa-book', 'fa-comments', 'fa-bars'];
const GALLERY = [
    {
        "id": "books",
        "category": "cozy",
        "label": "Стопка книг",
        "url": "https://openclipart.org/image/400px/296597"
    },
    {
        "id": "open-book",
        "category": "cozy",
        "label": "Старинная книга",
        "url": "https://openclipart.org/image/400px/171937"
    },
    {
        "id": "teacup",
        "category": "cozy",
        "label": "Чайная чашка",
        "url": "https://openclipart.org/image/400px/288224"
    },
    {
        "id": "coffee",
        "category": "cozy",
        "label": "Чашка кофе",
        "url": "https://openclipart.org/image/400px/285384"
    },
    {
        "id": "teapot",
        "category": "cozy",
        "label": "Чайник",
        "url": "https://openclipart.org/image/400px/318263"
    },
    {
        "id": "lantern",
        "category": "cozy",
        "label": "Фонарь",
        "url": "https://openclipart.org/image/400px/274914"
    },
    {
        "id": "gift",
        "category": "cozy",
        "label": "Подарок",
        "url": "https://openclipart.org/image/400px/174410"
    },
    {
        "id": "flowers",
        "category": "flowers",
        "label": "Цветы",
        "url": "https://openclipart.org/image/400px/353628"
    },
    {
        "id": "rose",
        "category": "flowers",
        "label": "Роза",
        "url": "https://openclipart.org/image/400px/177016"
    },
    {
        "id": "tulip",
        "category": "flowers",
        "label": "Тюльпан",
        "url": "https://openclipart.org/image/400px/221396"
    },
    {
        "id": "sunflower",
        "category": "flowers",
        "label": "Подсолнух",
        "url": "https://openclipart.org/image/400px/57145"
    },
    {
        "id": "flowerpot",
        "category": "flowers",
        "label": "Цветы в горшке",
        "url": "https://openclipart.org/image/400px/333123"
    },
    {
        "id": "bouquet",
        "category": "flowers",
        "label": "Букет",
        "url": "https://openclipart.org/image/400px/291439"
    },
    {
        "id": "pinkrose",
        "category": "flowers",
        "label": "Розовая роза",
        "url": "https://openclipart.org/image/400px/254960"
    },
    {
        "id": "fern",
        "category": "nature",
        "label": "Папоротник",
        "url": "https://openclipart.org/image/400px/249259"
    },
    {
        "id": "mushroom",
        "category": "nature",
        "label": "Гриб",
        "url": "https://openclipart.org/image/400px/250393"
    },
    {
        "id": "leaf",
        "category": "nature",
        "label": "Кленовый лист",
        "url": "https://openclipart.org/image/400px/77431"
    },
    {
        "id": "pinecone",
        "category": "nature",
        "label": "Шишка",
        "url": "https://openclipart.org/image/400px/322639"
    },
    {
        "id": "acorn",
        "category": "nature",
        "label": "Жёлудь",
        "url": "https://openclipart.org/image/400px/300891"
    },
    {
        "id": "pine-branch",
        "category": "nature",
        "label": "Хвойная ветка",
        "url": "https://openclipart.org/image/400px/266238"
    },
    {
        "id": "leaves",
        "category": "nature",
        "label": "Осенние листья",
        "url": "https://openclipart.org/image/400px/286998"
    },
    {
        "id": "snow",
        "category": "winter",
        "label": "Снежинка",
        "url": "https://openclipart.org/image/400px/206250"
    },
    {
        "id": "snowflakes",
        "category": "winter",
        "label": "Россыпь снежинок",
        "url": "https://openclipart.org/image/400px/350299"
    },
    {
        "id": "snowman",
        "category": "winter",
        "label": "Снеговик",
        "url": "https://openclipart.org/image/400px/310692"
    },
    {
        "id": "pine-tree",
        "category": "winter",
        "label": "Ель в снегу",
        "url": "https://openclipart.org/image/400px/227269"
    },
    {
        "id": "xmas-tree",
        "category": "winter",
        "label": "Нарядная ёлка",
        "url": "https://openclipart.org/image/400px/100885"
    },
    {
        "id": "candle",
        "category": "winter",
        "label": "Свеча",
        "url": "https://openclipart.org/image/400px/350703"
    },
    {
        "id": "telephone",
        "category": "vintage",
        "label": "Ретро-телефон",
        "url": "https://openclipart.org/image/400px/201543"
    },
    {
        "id": "camera",
        "category": "vintage",
        "label": "Старая камера",
        "url": "https://openclipart.org/image/400px/189528"
    },
    {
        "id": "key",
        "category": "vintage",
        "label": "Старинный ключ",
        "url": "https://openclipart.org/image/400px/9277"
    },
    {
        "id": "quill",
        "category": "vintage",
        "label": "Перо для письма",
        "url": "https://openclipart.org/image/400px/310379"
    },
    {
        "id": "watch",
        "category": "vintage",
        "label": "Карманные часы",
        "url": "https://openclipart.org/image/400px/307602"
    },
    {
        "id": "letter",
        "category": "vintage",
        "label": "Письмо в конверте",
        "url": "https://openclipart.org/image/400px/350911"
    },
    {
        "id": "clock",
        "category": "vintage",
        "label": "Напольные часы",
        "url": "https://openclipart.org/image/400px/261134"
    }
];
const FONTS = ['inherit', 'system-ui', 'Arial', 'Georgia', 'Verdana', 'Trebuchet MS', 'Times New Roman', 'Courier New', 'Tahoma', 'serif', 'sans-serif', 'monospace'];
const NAV_META = {
    'ai-config-button': ['Chat Completion Presets', 'fa-sliders'],
    'sys-settings-button': ['API', 'fa-plug'],
    'advanced-formatting-button': ['Advanced Formatting', 'fa-font'],
    'WI-SP-button': ['Worlds / Lorebooks', 'fa-book-atlas'],
    'user-settings-button': ['User Settings', 'fa-user-gear'],
    'backgrounds-button': ['Backgrounds', 'fa-panorama'],
    'extensions-settings-button': ['Extensions', 'fa-cubes'],
    'persona-management-button': ['Persona Management', 'fa-face-smile'],
    'rightNavHolder': ['Characters', 'fa-address-card'],
};
const DEFAULTS = {
    navigation: {
        hideTopBar: false, hideTopBarConfirmed: false, triggerTop: 43, triggerSide: 'left',
        triggerWidth: 35, triggerHeight: 77,
        triggerColor: '#4c4956', triggerIconColor: '#f4edf9', triggerOpacity: 0.92,
        autoFade: true, fadeOpacity: 0.48, fadeDelay: 5,
    },
    style: {
        modelFont: 'inherit', userFont: 'inherit', modelSize: 17, userSize: 17,
        modelColor: '#eae5e0', userColor: '#e7d8f7', lineHeight: 1.55,
        cardBorder: 'none', cardBorderWidth: 1, cardBorderColor: '#8876a8',
        cardRadius: 12, cardAlpha: 0, cardColor: '#25212d', cardPadding: 10,
        avatarSize: 44, avatarShape: 'circle', avatarPosition: 'side',
        avatarBorderWidth: 0, avatarBorderColor: '#c2a7e8',
        chatColor: '#17151e', chatAlpha: 0,
        iconColor: '#dac9f5', iconSize: 19,
    },
    icons: {},
    decorations: [],
    profiles: {},
};
const TABS = [
    ['text', 'Текст'], ['messages', 'Сообщения'], ['avatars', 'Аватары'],
    ['icons', 'Иконки'], ['decorations', 'Декор'], ['profiles', 'Темы'], ['general', 'Общее'],
];
const DANGEROUS_KEYS = new Set(['__proto__', 'prototype', 'constructor']);

let settings;
let context;
let holder;
let observer;
let started = false;
let chosenTab = 'text';
let navItems = [];
let focusBefore = null;
let dragState = null;
let fadeTimer = null;
let studioBaseline = null;
let studioDirty = false;
let studioSession = 0;
const elements = {};

function clamp(value, min, max, fallback) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : fallback;
}
function safeColor(value, fallback) {
    return typeof value === 'string' && /^#[\da-fA-F]{6}$/.test(value) ? value : fallback;
}
function hexRgba(hex, alpha) {
    const n = Number.parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
function plainText(value) { return String(value ?? '').replace(/[<>"'&]/g, ''); }
function safeImage(value) {
    return typeof value === 'string' && value.length < 150000 && /^data:image\/(png|jpeg|webp|gif);base64,[a-zA-Z0-9+/=]+$/.test(value) ? value : '';
}
function cleanIcons(value) {
    const icons = {};
    if (!value || typeof value !== 'object' || Array.isArray(value)) return icons;
    for (const [key, icon] of Object.entries(value).slice(0, 40)) {
        if (!/^[\w-]{1,80}$/.test(key) || DANGEROUS_KEYS.has(key) || !icon || typeof icon !== 'object') continue;
        const klass = ICONS.includes(icon.klass) ? icon.klass : '';
        const image = safeImage(icon.image);
        if (klass || image) icons[key] = { klass, image };
    }
    return icons;
}
function validClipartId(value) {
    return typeof value === 'string' && /^[1-9]\d{0,8}$/.test(value) ? value : '';
}

function safeDecorationUrl(value) {
    if (typeof value !== 'string' || value.length > 2048) return '';
    try {
        const url = new URL(value.trim());
        if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) return '';
        // Only direct PNG file links, not pages containing images.
        if (!/\.png$/i.test(url.pathname)) return '';
        return url.href;
    } catch { return ''; }
}

function decorationSource(item) {
    const asset = GALLERY.find(x => x.id === item.assetId);
    if (asset) return asset.url;
    const id = validClipartId(item.openclipartId);
    if (id) return `https://openclipart.org/image/400px/${id}`;
    return safeDecorationUrl(item.url) || safeImage(item.image);
}

function decorationLabel(item) {
    const asset = GALLERY.find(x => x.id === item.assetId);
    if (asset) return asset.label;
    if (validClipartId(item.openclipartId)) return plainText(item.caption || 'Картинка с Openclipart').slice(0, 90);
    return safeDecorationUrl(item.url) ? 'PNG по ссылке' : 'Мой PNG';
}

function cleanDecorations(value) {
    if (!Array.isArray(value)) return [];
    return value.slice(0, 15).filter(item => {
        if (!item || typeof item !== 'object') return false;
        return GALLERY.some(asset => asset.id === item.assetId) || Boolean(validClipartId(item.openclipartId)) || Boolean(safeDecorationUrl(item.url)) || Boolean(safeImage(item.image));
    }).map(item => {
        const assetId = GALLERY.some(asset => asset.id === item.assetId) ? item.assetId : '';
        const openclipartId = assetId ? '' : validClipartId(item.openclipartId);
        const url = assetId || openclipartId ? '' : safeDecorationUrl(item.url);
        const image = assetId || openclipartId || url ? '' : safeImage(item.image);
        return {
            id: typeof item.id === 'string' && /^[\w-]{1,60}$/.test(item.id) ? item.id : `d${Math.random().toString(36).slice(2)}`,
            assetId, openclipartId, url, image,
            caption: openclipartId ? plainText(item.caption || 'Openclipart').slice(0, 90) : '',
            x: clamp(item.x, 3, 97, 50), y: clamp(item.y, 3, 97, 50),
            size: clamp(item.size, 28, 200, 88),
        };
    });
}
function normalize(raw, includeProfiles = true) {
    const data = structuredClone(DEFAULTS);
    if (!raw || typeof raw !== 'object') return data;
    // v0.2.0 upgrades must not hide native controls until the user explicitly opts in.
    data.navigation.hideTopBarConfirmed = raw.navigation?.hideTopBarConfirmed === true;
    data.navigation.hideTopBar = raw.navigation?.hideTopBar === true && data.navigation.hideTopBarConfirmed;
    data.navigation.triggerTop = clamp(raw.navigation?.triggerTop, 8, 90, 43);
    const n = raw.navigation || {};
    if (['left', 'right'].includes(n.triggerSide)) data.navigation.triggerSide = n.triggerSide;
    for (const k of ['triggerColor', 'triggerIconColor']) data.navigation[k] = safeColor(n[k], data.navigation[k]);
    for (const [k, min, max] of [
        ['triggerWidth', 30, 74], ['triggerHeight', 55, 120],
        ['triggerOpacity', 0.3, 1], ['fadeOpacity', 0.2, 0.9], ['fadeDelay', 2, 15],
    ]) data.navigation[k] = clamp(n[k], min, max, data.navigation[k]);
    data.navigation.autoFade = n.autoFade !== false;
    const s = raw.style || {};
    const d = data.style;
    for (const k of ['modelFont', 'userFont']) if (FONTS.includes(s[k])) d[k] = s[k];
    for (const k of ['modelColor', 'userColor', 'cardBorderColor', 'cardColor', 'avatarBorderColor', 'chatColor', 'iconColor']) d[k] = safeColor(s[k], d[k]);
    for (const [k, min, max] of [
        ['modelSize', 12, 32], ['userSize', 12, 32], ['lineHeight', 1.1, 2.5],
        ['cardBorderWidth', 0, 6], ['cardRadius', 0, 36], ['cardAlpha', 0, 1],
        ['cardPadding', 0, 30], ['avatarSize', 24, 120], ['avatarBorderWidth', 0, 6],
        ['chatAlpha', 0, 1], ['iconSize', 14, 34],
    ]) d[k] = clamp(s[k], min, max, d[k]);
    if (['none', 'solid', 'dashed', 'double'].includes(s.cardBorder)) d.cardBorder = s.cardBorder;
    if (['circle', 'rounded', 'square'].includes(s.avatarShape)) d.avatarShape = s.avatarShape;
    if (['side', 'top-center', 'top-left'].includes(s.avatarPosition)) d.avatarPosition = s.avatarPosition;
    data.icons = cleanIcons(raw.icons);
    data.decorations = cleanDecorations(raw.decorations);
    if (includeProfiles && raw.profiles && typeof raw.profiles === 'object' && !Array.isArray(raw.profiles)) {
        for (const [name, profile] of Object.entries(raw.profiles).slice(0, 15)) {
            if (name.length <= 40 && !DANGEROUS_KEYS.has(name) && profile && typeof profile === 'object') {
                const clean = normalize(profile, false);
                data.profiles[name] = { style: clean.style, icons: clean.icons, decorations: clean.decorations };
            }
        }
    }
    return data;
}
function persist() {
    if (!context) return;
    context.extensionSettings[KEY] = settings;
    context.saveSettingsDebounced();
}
function persistAndApply() { persist(); applyTheme(); }

// Changes made inside Theme Studio are a private draft until explicitly saved.
// Keep the saved object in extensionSettings untouched throughout the session.
function stageSettings() {
    settings = normalize(settings);
    studioDirty = true;
    renderDraftPreview();
    updateDraftStatus();
}
function updateDraftStatus() {
    const status = elements.studio?.querySelector('#stui-draft-status');
    const save = elements.studio?.querySelector('#stui-save-changes');
    if (status) status.textContent = studioDirty ? 'Не сохранено · только предпросмотр' : 'Все изменения сохранены';
    if (save) save.disabled = !studioDirty;
}
function saveStudioChanges() {
    if (!studioBaseline || !studioDirty) return;
    settings = normalize(settings);
    persistAndApply();
    syncNav();
    studioBaseline = structuredClone(settings);
    studioDirty = false;
    updateDraftStatus();
}
function discardStudioChanges() {
    if (!studioBaseline) return;
    settings = studioBaseline;
    studioBaseline = null;
    studioDirty = false;
    updateDraftStatus();
}

function makeIcon(icon, override) {
    if (override?.image) {
        const img = document.createElement('img');
        img.className = 'stui-icon-image';
        img.alt = '';
        img.src = override.image;
        return img;
    }
    const i = document.createElement('i');
    i.setAttribute('aria-hidden', 'true');
    i.className = `fa-solid ${override?.klass || icon} fa-fw`;
    return i;
}
function findNativeDrawers() {
    if (!holder) return [];
    return [...holder.children].filter(node => node.matches?.('.drawer') && node.querySelector('.drawer-toggle'));
}
function syncNav() {
    const nodes = findNativeDrawers();
    navItems = nodes.map((node, index) => {
        const toggle = node.querySelector('.drawer-toggle');
        const nativeIcon = toggle.querySelector('.drawer-icon') || toggle;
        const classes = [...nativeIcon.classList];
        const icon = classes.find(c => c.startsWith('fa-') && !['fa-solid', 'fa-regular', 'fa-fw'].includes(c)) || 'fa-gear';
        const title = nativeIcon.getAttribute('title') || toggle.getAttribute('title') || node.id || `Раздел ${index + 1}`;
        const [knownLabel, knownIcon] = NAV_META[node.id] || [];
        return { id: node.id || `dynamic-${index}`, node, label: knownLabel || plainText(title), icon: knownIcon || icon };
    });
    // Optional extensions (including Horae) are included automatically if they add a native top-bar drawer.
    const list = elements.menuList;
    list.replaceChildren();
    for (const item of navItems) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'stui-menu-item';
        button.dataset.nativeDrawer = item.id;
        button.append(makeIcon(item.icon, settings.icons[item.id]));
        const label = document.createElement('span');
        label.textContent = item.label;
        button.append(label);
        list.append(button);
    }
    elements.menuEmpty.hidden = navItems.length > 0;
    if (chosenTab === 'icons' && elements.studio.classList.contains('stui-open')) renderTab();
}
function nativeDrawerClick(id) {
    const item = navItems.find(it => it.id === id);
    if (!item) return;
    closeMenu();
    const toggle = item.node.querySelector('.drawer-toggle');
    if (toggle) toggle.click();
}

function createUI() {
    elements.trigger = document.createElement('button');
    elements.trigger.type = 'button';
    elements.trigger.id = 'stui-trigger';
    elements.trigger.setAttribute('aria-label', 'Открыть главное меню');
    elements.trigger.setAttribute('aria-controls', 'stui-menu');
    elements.trigger.setAttribute('aria-expanded', 'false');
    elements.trigger.innerHTML = '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';

    elements.scrim = document.createElement('div');
    elements.scrim.id = 'stui-scrim';
    elements.scrim.hidden = true;

    elements.menu = document.createElement('aside');
    elements.menu.id = 'stui-menu';
    elements.menu.setAttribute('aria-label', 'Главное меню SillyTavern');
    elements.menu.setAttribute('aria-hidden', 'true');
    elements.menu.innerHTML = `
      <header class="stui-panel-header"><div><small>SILLYTAVERN</small><h2>Главное меню</h2></div>
        <button type="button" class="stui-icon-button" id="stui-menu-close" aria-label="Закрыть меню"><i class="fa-solid fa-xmark"></i></button></header>
      <div class="stui-scroll"><div id="stui-menu-list"></div>
        <p id="stui-menu-empty" hidden>Пока не найдены штатные разделы.</p>
        <div class="stui-menu-divider"></div>
        <button class="stui-menu-item stui-studio-link" id="stui-studio-link" type="button"><i class="fa-solid fa-palette fa-fw"></i><span>Theme Studio</span><i class="fa-solid fa-chevron-right"></i></button>
      </div>`;
    elements.menuList = elements.menu.querySelector('#stui-menu-list');
    elements.menuEmpty = elements.menu.querySelector('#stui-menu-empty');

    elements.studio = document.createElement('aside');
    elements.studio.id = 'stui-studio';
    elements.studio.setAttribute('role', 'dialog');
    elements.studio.setAttribute('aria-modal', 'true');
    elements.studio.setAttribute('aria-label', 'Theme Studio');
    elements.studio.setAttribute('aria-hidden', 'true');
    elements.studio.innerHTML = `
      <header class="stui-panel-header"><div><small>UI STUDIO</small><h2>Theme Studio</h2></div>
        <button id="stui-studio-close" class="stui-icon-button" type="button" aria-label="Закрыть настройки"><i class="fa-solid fa-xmark"></i></button></header>
      <div id="stui-tabs" role="tablist" aria-label="Разделы оформления"></div>
      <section id="stui-preview" aria-label="Предпросмотр оформления чата">
        <div class="stui-preview-header">
          <span><i class="fa-solid fa-eye" aria-hidden="true"></i> Предпросмотр</span>
          <button type="button" id="stui-preview-toggle" aria-expanded="true" aria-controls="stui-preview-chat">Свернуть</button>
        </div>
        <div id="stui-preview-chat">
          <div class="stui-preview-message stui-preview-model">
            <div class="stui-preview-avatar" aria-hidden="true">AI</div>
            <div class="stui-preview-content"><span class="stui-preview-name">Модель</span>
              <p class="stui-preview-text">В комнате было тихо, лишь часы отсчитывали секунды…</p></div>
          </div>
          <div class="stui-preview-message stui-preview-user">
            <div class="stui-preview-avatar" aria-hidden="true">Я</div>
            <div class="stui-preview-content"><span class="stui-preview-name">Ты</span>
              <p class="stui-preview-text">Мне нравится этот вариант оформления.</p></div>
          </div>
        </div>
      </section>
      <div id="stui-tab-content" class="stui-scroll stui-settings"></div>
      <footer class="stui-footer">
        <span id="stui-draft-status" role="status" aria-live="polite">Все изменения сохранены</span>
        <div class="stui-footer-actions">
          <button type="button" id="stui-cancel-changes">Отмена</button>
          <button type="button" id="stui-save-changes" disabled>Сохранить изменения</button>
        </div>
      </footer>`;
    elements.tabs = elements.studio.querySelector('#stui-tabs');
    elements.preview = elements.studio.querySelector('#stui-preview');
    elements.tabContent = elements.studio.querySelector('#stui-tab-content');

    elements.decorations = document.createElement('div');
    elements.decorations.id = 'stui-decorations';
    document.body.append(elements.scrim, elements.trigger, elements.menu, elements.studio, elements.decorations);
    elements.trigger.addEventListener('click', openMenu);
    elements.scrim.addEventListener('click', closeAll);
    elements.menu.querySelector('#stui-menu-close').addEventListener('click', closeMenu);
    elements.menu.querySelector('#stui-studio-link').addEventListener('click', openStudio);
    elements.menuList.addEventListener('click', event => {
        const button = event.target.closest('[data-native-drawer]');
        if (button) nativeDrawerClick(button.dataset.nativeDrawer);
    });
    elements.studio.querySelector('#stui-studio-close').addEventListener('click', closeStudio);
    elements.preview.querySelector('#stui-preview-toggle').addEventListener('click', event => {
        const collapsed = elements.preview.classList.toggle('stui-preview-collapsed');
        event.currentTarget.setAttribute('aria-expanded', String(!collapsed));
        event.currentTarget.textContent = collapsed ? 'Развернуть' : 'Свернуть';
    });
    elements.studio.querySelector('#stui-save-changes').addEventListener('click', saveStudioChanges);
    elements.studio.querySelector('#stui-cancel-changes').addEventListener('click', () => {
        discardStudioChanges();
        closeStudio();
    });
    document.addEventListener('keydown', onKeyDown);
    bindStudio();
    bindTriggerDrag();
    elements.trigger.addEventListener('pointerenter', event => {
        if (event.pointerType === 'mouse') revealTrigger();
    });
    elements.trigger.addEventListener('pointerleave', event => {
        if (event.pointerType === 'mouse') scheduleFade();
    });
    renderTabs();
}
function onKeyDown(event) {
    if (event.key === 'Escape') closeAll();
}
function updateScrim() {
    const isOpen = elements.menu.classList.contains('stui-open') || elements.studio.classList.contains('stui-open');
    elements.scrim.hidden = !isOpen;
    document.body.classList.toggle('stui-overlay-open', isOpen);
    if (isOpen) revealTrigger();
    else scheduleFade();
}
function revealTrigger() {
    clearTimeout(fadeTimer);
    fadeTimer = null;
    document.body.classList.remove('stui-trigger-faded');
}
function scheduleFade() {
    revealTrigger();
    if (!started || !settings.navigation.autoFade || document.body.classList.contains('stui-overlay-open')) return;
    fadeTimer = setTimeout(() => {
        if (started && !document.body.classList.contains('stui-overlay-open')) {
            document.body.classList.add('stui-trigger-faded');
        }
        fadeTimer = null;
    }, settings.navigation.fadeDelay * 1000);
}
function openMenu() {
    focusBefore = document.activeElement;
    if (closeStudio() === false) return;
    syncNav();
    elements.menu.classList.add('stui-open');
    elements.menu.setAttribute('aria-hidden', 'false');
    elements.trigger.setAttribute('aria-expanded', 'true');
    updateScrim();
    elements.menu.querySelector('#stui-menu-close').focus();
}
function closeMenu() {
    elements.menu.classList.remove('stui-open');
    elements.menu.setAttribute('aria-hidden', 'true');
    elements.trigger.setAttribute('aria-expanded', 'false');
    updateScrim();
}
function openStudio() {
    focusBefore = document.activeElement;
    closeMenu();
    // Clone before editing: no draft mutation may leak into SillyTavern's saved settings.
    studioBaseline = structuredClone(settings);
    settings = structuredClone(studioBaseline);
    studioDirty = false;
    studioSession += 1;
    elements.studio.classList.add('stui-open');
    elements.studio.setAttribute('aria-hidden', 'false');
    renderTabs();
    renderTab();
    renderDraftPreview();
    updateDraftStatus();
    updateScrim();
    elements.studio.querySelector('#stui-studio-close').focus();
}
function closeStudio() {
    if (studioBaseline && studioDirty && !confirm('Закрыть Theme Studio без сохранения? Все изменения черновика будут потеряны.')) return false;
    if (studioBaseline) studioSession += 1;
    discardStudioChanges();
    elements.studio.classList.remove('stui-open');
    elements.studio.setAttribute('aria-hidden', 'true');
    updateScrim();
    return true;
}
function closeAll() {
    if (closeStudio() === false) return;
    closeMenu();
    if (focusBefore && focusBefore.isConnected) focusBefore.focus();
}
// Use viewport units instead of percentages of a possibly transformed theme container.
function positionTrigger() {
    const n = settings.navigation;
    if (window.CSS?.supports?.('top', '1dvh')) {
        const visibleTop = `clamp(8px, ${n.triggerTop}dvh, calc(100dvh - ${n.triggerHeight}px - env(safe-area-inset-bottom, 0px) - 8px))`;
        elements.trigger.style.setProperty('top', visibleTop, 'important');
    } else {
        const height = window.visualViewport?.height || window.innerHeight;
        const pixelTop = Math.max(8, Math.min(n.triggerTop / 100 * height, height - n.triggerHeight - 8));
        elements.trigger.style.setProperty('top', `${Math.round(pixelTop)}px`, 'important');
    }
}
function bindTriggerDrag() {
    let start = null;
    let suppressNextClick = false;
    elements.trigger.addEventListener('click', event => {
        if (!suppressNextClick) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        suppressNextClick = false;
    }, true);
    elements.trigger.addEventListener('pointerdown', event => {
        if (!event.isPrimary) return;
        revealTrigger();
        start = { y: event.clientY, top: settings.navigation.triggerTop, pointer: event.pointerId, moved: false };
        elements.trigger.setPointerCapture(event.pointerId);
    });
    elements.trigger.addEventListener('pointermove', event => {
        if (!start || event.pointerId !== start.pointer) return;
        if (Math.abs(event.clientY - start.y) > 7) start.moved = true;
        if (!start.moved) return;
        settings.navigation.triggerTop = clamp(start.top + ((event.clientY - start.y) / window.innerHeight * 100), 8, 90, 43);
        positionTrigger();
    });
    elements.trigger.addEventListener('pointerup', event => {
        if (!start || event.pointerId !== start.pointer) return;
        if (start.moved) {
            event.preventDefault();
            suppressNextClick = true;
            persist();
            setTimeout(() => { suppressNextClick = false; }, 200);
        }
        start = null;
        scheduleFade();
    });
    elements.trigger.addEventListener('pointercancel', () => { start = null; scheduleFade(); });
}

function styleVariables(s) {
    return {
        '--stui-model-font': s.modelFont === 'inherit' ? 'inherit' : `"${s.modelFont}"`,
        '--stui-user-font': s.userFont === 'inherit' ? 'inherit' : `"${s.userFont}"`,
        '--stui-model-size': `${s.modelSize}px`, '--stui-user-size': `${s.userSize}px`,
        '--stui-model-color': s.modelColor, '--stui-user-color': s.userColor,
        '--stui-line-height': String(s.lineHeight),
        '--stui-card-border': s.cardBorder === 'none' ? 'none' : `${s.cardBorderWidth}px ${s.cardBorder} ${s.cardBorderColor}`,
        '--stui-card-radius': `${s.cardRadius}px`,
        '--stui-card-color': hexRgba(s.cardColor, s.cardAlpha),
        '--stui-card-padding': `${s.cardPadding}px`,
        '--stui-avatar-size': `${s.avatarSize}px`,
        '--stui-avatar-radius': s.avatarShape === 'circle' ? '50%' : s.avatarShape === 'square' ? '0' : '14px',
        '--stui-avatar-border': `${s.avatarBorderWidth}px solid ${s.avatarBorderColor}`,
        '--stui-chat-overlay': hexRgba(s.chatColor, s.chatAlpha),
        '--stui-icon-color': s.iconColor, '--stui-icon-size': `${s.iconSize}px`,
    };
}
function renderDraftPreview() {
    if (!elements.preview) return;
    for (const [name, value] of Object.entries(styleVariables(settings.style))) {
        elements.preview.style.setProperty(name, value);
    }
    elements.preview.dataset.stuiAvatarPosition = settings.style.avatarPosition;
}
function applyTheme() {
    if (!settings) return;
    const root = document.documentElement;
    const s = settings.style;
    for (const [name, value] of Object.entries(styleVariables(s))) root.style.setProperty(name, value);
    document.body.classList.toggle('stui-hide-top', settings.navigation.hideTopBar);
    document.body.dataset.stuiAvatarPosition = s.avatarPosition;
    const n = settings.navigation;
    document.body.dataset.stuiTriggerSide = n.triggerSide;
    positionTrigger();
    root.style.setProperty('--stui-trigger-width', `${n.triggerWidth}px`);
    root.style.setProperty('--stui-trigger-height', `${n.triggerHeight}px`);
    root.style.setProperty('--stui-trigger-background', n.triggerColor);
    root.style.setProperty('--stui-trigger-icon-color', n.triggerIconColor);
    root.style.setProperty('--stui-trigger-opacity', String(n.triggerOpacity));
    root.style.setProperty('--stui-trigger-faded-opacity', String(Math.min(n.fadeOpacity, n.triggerOpacity)));
    const arrow = elements.trigger.querySelector('i');
    arrow.classList.toggle('fa-chevron-right', n.triggerSide === 'left');
    arrow.classList.toggle('fa-chevron-left', n.triggerSide === 'right');
    scheduleFade();
    renderDecorations();
}

function field(label, key, type, options = {}) {
    const value = key.startsWith('navigation.') ? settings.navigation[key.slice(11)] : settings.style[key.slice(6)];
    const id = `stui-input-${key.replace(/\W/g, '-')}`;
    const name = `<label for="${id}">${label}</label>`;
    if (type === 'select') {
        return `<div class="stui-field">${name}<select id="${id}" data-field="${key}">${options.values.map(([v, l]) => `<option value="${v}" ${value === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>`;
    }
    if (type === 'checkbox') return `<label class="stui-field stui-check"><span>${label}</span><input id="${id}" type="checkbox" data-field="${key}" ${value ? 'checked' : ''}></label>`;
    if (type === 'range') return `<div class="stui-field">${name}<div class="stui-range"><input id="${id}" type="range" min="${options.min}" max="${options.max}" step="${options.step || 1}" value="${value}" data-field="${key}"><output for="${id}">${value}${options.unit || ''}</output></div></div>`;
    return `<div class="stui-field">${name}<input id="${id}" type="color" value="${value}" data-field="${key}"></div>`;
}
function renderTabs() {
    elements.tabs.replaceChildren();
    for (const [key, label] of TABS) {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.textContent = label;
        tab.className = key === chosenTab ? 'stui-tab stui-selected' : 'stui-tab';
        tab.dataset.tab = key;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(key === chosenTab));
        elements.tabs.append(tab);
    }
}
function renderTab() {
    // Keep the sample visible above the scroll area while editing text, cards, avatars, and presets.
    // Its CSS variables are overridden on the sample only until the user saves.
    if (elements.preview) elements.preview.hidden = !['text', 'messages', 'avatars', 'profiles'].includes(chosenTab);
    const fontOptions = FONTS.map(name => [name, name === 'inherit' ? 'Как в SillyTavern' : name]);
    let html = '';
    switch (chosenTab) {
        case 'text':
            html = `<h3>Ответы модели</h3>${field('Шрифт модели', 'style.modelFont', 'select', {values: fontOptions})}${field('Размер текста', 'style.modelSize', 'range', {min:12,max:32,unit:' px'})}${field('Цвет текста', 'style.modelColor', 'color')}
              <h3>Мои сообщения</h3>${field('Мой шрифт', 'style.userFont', 'select', {values: fontOptions})}${field('Мой размер текста', 'style.userSize', 'range', {min:12,max:32,unit:' px'})}${field('Мой цвет текста', 'style.userColor', 'color')}
              <h3>Общее</h3>${field('Межстрочный интервал', 'style.lineHeight', 'range', {min:1.1,max:2.5,step:.05})}`;
            break;
        case 'messages':
            html = `<h3>Карточки сообщений</h3>${field('Рамка', 'style.cardBorder', 'select', {values:[['none','Нет'],['solid','Сплошная'],['dashed','Пунктир'],['double','Двойная']]})}${field('Толщина рамки', 'style.cardBorderWidth', 'range', {min:0,max:6,unit:' px'})}${field('Цвет рамки', 'style.cardBorderColor', 'color')}${field('Закругление углов', 'style.cardRadius', 'range', {min:0,max:36,unit:' px'})}${field('Отступы внутри', 'style.cardPadding', 'range', {min:0,max:30,unit:' px'})}
              <h3>Подложка текста</h3>${field('Цвет карточки', 'style.cardColor', 'color')}${field('Непрозрачность карточки', 'style.cardAlpha', 'range', {min:0,max:1,step:.05})}${field('Цвет фона чата', 'style.chatColor', 'color')}${field('Непрозрачность подложки чата', 'style.chatAlpha', 'range', {min:0,max:1,step:.05})}`;
            break;
        case 'avatars':
            html = `<h3>Аватарки в переписке</h3>${field('Размер', 'style.avatarSize', 'range', {min:24,max:120,unit:' px'})}${field('Форма', 'style.avatarShape', 'select', {values:[['circle','Круг'],['rounded','Скруглённый квадрат'],['square','Квадрат']]})}${field('Расположение', 'style.avatarPosition', 'select', {values:[['side','Сбоку'],['top-center','Над текстом, по центру'],['top-left','Над текстом, слева']]})}${field('Толщина рамки', 'style.avatarBorderWidth', 'range', {min:0,max:6,unit:' px'})}${field('Цвет рамки', 'style.avatarBorderColor', 'color')}`;
            break;
        case 'icons':
            html = `<h3>Значки меню</h3><p>Меняй стандартные значки выдвижного меню. Можно выбрать встроенную иконку или загрузить PNG/JPEG/WebP/GIF (до 90 КБ).</p><div id="stui-icon-rows"></div><h3>Цвет и размер</h3>${field('Цвет обычных значков', 'style.iconColor', 'color')}${field('Размер значков', 'style.iconSize', 'range', {min:14,max:34,unit:' px'})}<p class="stui-hint">В этой версии заменяются значки левого меню, а не все внутренние кнопки SillyTavern.</p>`;
            break;
        case 'decorations':
            html = `<h3>PNG по ссылке с сайта</h3>
              <p class="stui-hint">Вставь прямую HTTPS-ссылку на файл .png с любого сайта, а не адрес страницы. Некоторые сайты запрещают показ изображений по внешней ссылке.</p>
              <div class="stui-deco-search"><input type="url" id="stui-deco-paste-link" placeholder="https://example.com/decor.png" inputmode="url" aria-label="Прямая ссылка на PNG"><button type="button" data-action="png-add-link">Добавить</button></div>
              <h3>PNG из галереи телефона</h3><label class="stui-upload-button stui-deco-upload">Выбрать PNG из галереи или файлов <input type="file" id="stui-decoration-file" accept=".png,image/png"></label>
              <p class="stui-hint">Выбери изображение с прозрачным фоном до 3 МБ. Оно уменьшится для сохранения в настройках. Фон автоматически не удаляется.</p>
              <h3>Мои украшения</h3><p id="stui-decoration-count" aria-live="polite"></p>
              <div id="stui-decoration-list"></div>
              <p class="stui-hint">Чтобы украшения появились в чате, нажми «Сохранить изменения». После этого их можно перемещать пальцем. Украшения не передаются модели.</p>`;
            break;
        case 'profiles':
            html = `<h3>Мои темы</h3><p>Создай пресет или выбери готовый, проверь оформление в предпросмотре и нажми «Сохранить изменения» внизу панели.</p><div class="stui-save-row"><input type="text" id="stui-profile-name" maxlength="40" placeholder="Название темы"><button type="button" data-action="save-profile">Добавить пресет</button></div><div id="stui-profile-list"></div><div class="stui-action-row"><button type="button" data-action="export">Экспорт JSON</button><button type="button" data-action="import">Импорт JSON</button></div><input id="stui-import-file" type="file" accept=".json,application/json" hidden>`;
            break;
        case 'general':
            html = `<h3>Навигация</h3><p class="stui-hint">Безопасный старт: стандартное верхнее меню остаётся видимым, пока ты сама не включишь его скрытие. Сперва проверь стрелку.</p>${field('Скрыть стандартные верхние иконки после проверки стрелки', 'navigation.hideTopBar', 'checkbox')}${field('Сторона стрелки', 'navigation.triggerSide', 'select', {values:[['left','Слева'],['right','Справа']]})}${field('Положение по высоте', 'navigation.triggerTop', 'range', {min:8,max:90,unit:' %'})}
              <p class="stui-hint">Стрелку можно перетаскивать пальцем вверх и вниз. При смене стороны она остаётся полностью видимой.</p>
              <h3>Внешний вид стрелки</h3>${field('Ширина стрелки', 'navigation.triggerWidth', 'range', {min:30,max:74,step:1,unit:' px'})}${field('Высота стрелки', 'navigation.triggerHeight', 'range', {min:55,max:120,step:1,unit:' px'})}${field('Цвет подложки', 'navigation.triggerColor', 'color')}${field('Цвет значка', 'navigation.triggerIconColor', 'color')}${field('Непрозрачность стрелки', 'navigation.triggerOpacity', 'range', {min:.3,max:1,step:.05})}
              <h3>Автоматическое затухание</h3>${field('Включить затухание при бездействии', 'navigation.autoFade', 'checkbox')}${field('Прозрачность после затухания', 'navigation.fadeOpacity', 'range', {min:.2,max:.9,step:.05})}${field('Задержка перед затуханием', 'navigation.fadeDelay', 'range', {min:2,max:15,step:1,unit:' с'})}
              <p class="stui-hint">При касании стрелка вновь становится яркой и открывает меню. Затухание не прячет кнопку полностью: её всегда можно найти. Выключи эту функцию, если предпочитаешь постоянную яркость.</p>
              <h3>Восстановление</h3><p class="stui-hint">Изменения вступят в силу после нажатия «Сохранить изменения» внизу панели.</p><div class="stui-action-row"><button type="button" data-action="reset-style" class="stui-danger">Сбросить оформление</button><button type="button" data-action="show-native">Показать верхнее меню</button></div>
              <p class="stui-hint">Если стрелка исчезла и верхнее меню недоступно, добавь ?stui_safe=1 к адресу SillyTavern и перезагрузи страницу. Это временно отключит UI Studio без удаления настроек.</p>`;
            break;
    }
    elements.tabContent.innerHTML = html;
    if (chosenTab === 'icons') renderIconRows();
    if (chosenTab === 'decorations') renderDecorationRows();
    if (chosenTab === 'profiles') renderProfileRows();
}
function bindStudio() {
    elements.tabs.addEventListener('click', event => {
        const key = event.target.closest('[data-tab]')?.dataset.tab;
        if (!key) return;
        chosenTab = key; renderTabs(); renderTab();
    });
    elements.tabContent.addEventListener('input', event => {
        const slider = event.target.closest('[data-deco-size]');
        if (slider) {
            const item = settings.decorations.find(d => d.id === slider.dataset.decoSize);
            if (item) {
                item.size = clamp(slider.value, 28, 200, item.size);
                const output = slider.parentElement.querySelector('output');
                if (output) output.textContent = `${item.size} px`;
                stageSettings();
            }
            return;
        }
        const input = event.target.closest('[data-field]');
        if (!input) return;
        const [section, name] = input.dataset.field.split('.');
        if (!Object.hasOwn(DEFAULTS[section] || {}, name)) return;
        // A deliberate toggle in Theme Studio unlocks toolbar hiding for future visits.
        if (section === 'navigation' && name === 'hideTopBar' && input.checked) settings.navigation.hideTopBarConfirmed = true;
        settings[section][name] = input.type === 'checkbox' ? input.checked : input.type === 'range' ? Number(input.value) : input.value;
        const output = elements.tabContent.querySelector(`output[for="${input.id}"]`);
        if (output) output.textContent = `${input.value}${input.dataset.field === 'navigation.triggerTop' ? ' %' : name === 'fadeDelay' ? ' с' : ['modelSize','userSize','cardBorderWidth','cardRadius','cardPadding','avatarSize','avatarBorderWidth','iconSize','triggerWidth','triggerHeight'].includes(name) ? ' px' : ''}`;
        stageSettings();
    });
    elements.tabContent.addEventListener('keydown', event => {
        if (event.key === 'Enter' && event.target.id === 'stui-deco-paste-link') {
            event.preventDefault();
            addDecorationFromLink();
        }
    });
    elements.tabContent.addEventListener('change', event => {
        const input = event.target;
        if (input.matches('[data-icon-choice]')) {
            const id = input.dataset.iconChoice;
            settings.icons[id] = { klass: ICONS.includes(input.value) ? input.value : 'fa-gear', image: '' };
            stageSettings(); renderIconRows();
        }
        if (input.matches('[data-icon-file]')) handleIconFile(input);
        if (input.id === 'stui-decoration-file') handleDecorationFile(input);
        if (input.id === 'stui-import-file') handleImport(input);
    });
    elements.tabContent.addEventListener('click', event => {
        const decoDel = event.target.closest('[data-remove-decoration]');
        if (decoDel) return removeDecoration(decoDel.dataset.removeDecoration);
        const iconReset = event.target.closest('[data-reset-icon]');
        if (iconReset) { delete settings.icons[iconReset.dataset.resetIcon]; stageSettings(); renderIconRows(); return; }
        const profileLoad = event.target.closest('[data-load-profile]');
        if (profileLoad) return loadProfile(profileLoad.dataset.loadProfile);
        const profileDelete = event.target.closest('[data-delete-profile]');
        if (profileDelete) return deleteProfile(profileDelete.dataset.deleteProfile);
        const action = event.target.closest('[data-action]')?.dataset.action;
        if (action === 'png-add-link') return addDecorationFromLink();
        if (action === 'save-profile') saveProfile();
        if (action === 'export') exportSettings();
        if (action === 'import') elements.tabContent.querySelector('#stui-import-file')?.click();
        if (action === 'reset-style') resetStyle();
        if (action === 'show-native') { settings.navigation.hideTopBar = false; stageSettings(); renderTab(); }
    });
}

function renderIconRows() {
    const list = elements.tabContent.querySelector('#stui-icon-rows');
    if (!list) return;
    list.replaceChildren();
    for (const item of navItems) {
        const row = document.createElement('div');
        row.className = 'stui-icon-row';
        const name = document.createElement('strong');
        name.textContent = item.label;
        const controls = document.createElement('div');
        controls.className = 'stui-icon-controls';
        const select = document.createElement('select');
        select.dataset.iconChoice = item.id;
        for (const klass of ICONS) {
            const option = document.createElement('option');
            option.value = klass;
            option.textContent = klass.replace('fa-', '');
            if ((settings.icons[item.id]?.klass || item.icon) === klass) option.selected = true;
            select.append(option);
        }
        const upload = document.createElement('label');
        upload.className = 'stui-upload-button';
        upload.textContent = 'Загрузить';
        const file = document.createElement('input');
        file.type = 'file'; file.accept = 'image/png,image/jpeg,image/webp,image/gif';
        file.dataset.iconFile = item.id;
        upload.append(file);
        const reset = document.createElement('button');
        reset.type = 'button'; reset.textContent = '↺'; reset.title = 'Стандартная иконка'; reset.dataset.resetIcon = item.id;
        controls.append(select, upload, reset);
        row.append(name, controls);
        list.append(row);
    }
}
async function handleIconFile(input) {
    const file = input.files?.[0];
    const session = studioSession;
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type) || file.size > 90000) {
        alert('Нужен файл PNG, JPEG, WebP или GIF размером не более 90 КБ.'); input.value = ''; return;
    }
    try {
        const data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
        const safe = safeImage(data);
        if (!safe) throw new Error('Недопустимое изображение');
        if (!studioBaseline || session !== studioSession) return;
        settings.icons[input.dataset.iconFile] = { klass: '', image: safe };
        stageSettings(); renderIconRows();
    } catch (error) { alert(`Не получилось загрузить иконку: ${error.message}`); }
}

function renderDecorations() {
    if (!elements.decorations) return;
    const current = new Map([...elements.decorations.children].map(node => [node.dataset.decoId, node]));
    for (const item of settings.decorations) {
        let node = current.get(item.id);
        if (!node) {
            node = document.createElement('button');
            node.type = 'button';
            node.className = 'stui-decoration';
            node.dataset.decoId = item.id;
            node.title = 'Удерживай и перетаскивай пальцем';
            node.addEventListener('pointerdown', startDecorationDrag);
            node.addEventListener('pointermove', moveDecorationDrag);
            node.addEventListener('pointerup', endDecorationDrag);
            node.addEventListener('pointercancel', endDecorationDrag);
            elements.decorations.append(node);
        }
        const source = decorationSource(item);
        const key = source;
        if (node._stuiRenderKey !== key) {
            if (source) {
                const image = document.createElement('img');
                image.src = source;
                image.alt = '';
                image.draggable = false;
                image.decoding = 'async';
                node.replaceChildren(image);
            }
            node._stuiRenderKey = key;
        }
        node.setAttribute('aria-label', `Украшение ${decorationLabel(item)}, перетащить`);
        node.classList.add('stui-decoration-image');
        node.style.left = `${item.x}%`;
        node.style.top = `${item.y}%`;
        node.style.width = `${item.size}px`;
        node.style.height = `${item.size}px`;
        node.style.fontSize = `${Math.round(item.size * .68)}px`;
        current.delete(item.id);
    }
    current.forEach(node => node.remove());
}

function startDecorationDrag(event) {
    const item = settings.decorations.find(d => d.id === event.currentTarget.dataset.decoId);
    if (!item) return;
    event.preventDefault();
    dragState = { id: item.id, pointer: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
}

function moveDecorationDrag(event) {
    if (!dragState || dragState.pointer !== event.pointerId || dragState.id !== event.currentTarget.dataset.decoId) return;
    const item = settings.decorations.find(d => d.id === dragState.id);
    if (!item) return;
    const width = window.visualViewport?.width || window.innerWidth;
    const height = window.visualViewport?.height || window.innerHeight;
    const edgeX = Math.min(40, Math.max(3, (item.size / 2 + 4) / width * 100));
    const edgeY = Math.min(40, Math.max(3, (item.size / 2 + 4) / height * 100));
    item.x = clamp(event.clientX / width * 100, edgeX, 100 - edgeX, 50);
    item.y = clamp(event.clientY / height * 100, edgeY, 100 - edgeY, 50);
    event.currentTarget.style.left = `${item.x}%`;
    event.currentTarget.style.top = `${item.y}%`;
}

function endDecorationDrag(event) {
    if (!dragState || dragState.pointer !== event.pointerId || dragState.id !== event.currentTarget.dataset.decoId) return;
    dragState = null;
    persist();
}

function addDecoration(assetId = '', image = '', openclipartId = '', caption = '', url = '') {
    if (settings.decorations.length >= 15) {
        alert('Можно добавить до 15 украшений. Сначала удали ненужные.');
        return;
    }
    const asset = GALLERY.find(g => g.id === assetId);
    const id = asset ? '' : validClipartId(openclipartId);
    const cleanedUrl = asset || id ? '' : safeDecorationUrl(url);
    const cleanedImage = asset || id || cleanedUrl ? '' : safeImage(image);
    if (!asset && !id && !cleanedUrl && !cleanedImage) return;
    const offset = settings.decorations.length % 3;
    settings.decorations.push({
        id: `d${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        assetId: asset?.id || '', openclipartId: id,
        caption: id ? plainText(caption || 'Openclipart').slice(0, 90) : '',
        url: cleanedUrl, image: cleanedImage,
        x: 48 + offset * 5, y: 48 + offset * 5, size: 88,
    });
    stageSettings();
    renderDecorationRows();
}
function removeDecoration(id) {
    settings.decorations = settings.decorations.filter(item => item.id !== id);
    stageSettings();
    renderDecorationRows();
}

async function addDecorationFromLink() {
    const session = studioSession;
    const input = elements.tabContent.querySelector('#stui-deco-paste-link');
    const url = safeDecorationUrl(input?.value);
    if (!url) {
        alert('Нужна прямая HTTPS-ссылка на PNG-файл (заканчивается на .png), а не адрес страницы сайта. Можно сохранить PNG на телефон и добавить через галерею.');
        return;
    }
    if (settings.decorations.length >= 15) {
        alert('Можно добавить до 15 украшений. Сначала удали ненужные.');
        return;
    }
    const button = elements.tabContent.querySelector('[data-action="png-add-link"]');
    if (button?.disabled) return;
    if (button) { button.disabled = true; button.textContent = 'Проверяю…'; }
    try {
        await new Promise((resolve, reject) => {
            const preview = new Image();
            const timer = setTimeout(() => {
                preview.onload = preview.onerror = null;
                reject(new Error('Сайт слишком долго не отвечает'));
            }, 12000);
            preview.onload = () => { clearTimeout(timer); resolve(); };
            preview.onerror = () => { clearTimeout(timer); reject(new Error('Сайт не разрешил загрузку изображения')); };
            preview.src = url;
        });
        if (!studioBaseline || session !== studioSession) return;
        addDecoration('', '', '', '', url);
        if (input) input.value = '';
    } catch (error) {
        alert(`Не удалось загрузить PNG по ссылке: ${error.message}. Сохрани картинку на телефон и добавь её из галереи.`);
    } finally {
        if (button?.isConnected) { button.disabled = false; button.textContent = 'Добавить'; }
    }
}

function renderDecorationRows() {
    const list = elements.tabContent.querySelector('#stui-decoration-list');
    const counter = elements.tabContent.querySelector('#stui-decoration-count');
    if (!list) return;
    list.replaceChildren();
    if (counter) counter.textContent = `Добавлено: ${settings.decorations.length} из 15`;
    for (const item of settings.decorations) {
        const row = document.createElement('div');
        row.className = 'stui-deco-row';
        const description = document.createElement('div');
        description.className = 'stui-deco-row-info';
        const source = decorationSource(item);
        const preview = document.createElement('img');
        preview.src = source;
        preview.alt = '';
        preview.loading = 'lazy';
        description.append(preview);
        const title = document.createElement('span');
        title.textContent = `${decorationLabel(item)} · ${Math.round(item.x)}%, ${Math.round(item.y)}%`;
        description.append(title);
        const controls = document.createElement('div');
        controls.className = 'stui-deco-row-controls';
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Размер';
        const sizeSlider = document.createElement('input');
        sizeSlider.type = 'range';
        sizeSlider.min = '28';
        sizeSlider.max = '200';
        sizeSlider.step = '2';
        sizeSlider.value = String(item.size);
        sizeSlider.dataset.decoSize = item.id;
        sizeSlider.setAttribute('aria-label', `Размер украшения ${title.textContent}`);
        const sizeOutput = document.createElement('output');
        sizeOutput.textContent = `${item.size} px`;
        sizeSlider.id = `stui-deco-size-${item.id}`;
        sizeOutput.htmlFor = sizeSlider.id;
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Удалить';
        remove.dataset.removeDecoration = item.id;
        sizeLabel.append(sizeSlider, sizeOutput);
        controls.append(sizeLabel, remove);
        row.append(description, controls);
        list.append(row);
    }
}
async function handleDecorationFile(input) {
    const session = studioSession;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    if ((file.type && file.type !== 'image/png') || !/\.png$/i.test(file.name) || file.size > 3000000) {
        alert('Выбери PNG не больше 3 МБ. Лучше всего подойдёт изображение с прозрачным фоном.');
        return;
    }
    const url = URL.createObjectURL(file);
    try {
        const image = await new Promise((resolve, reject) => {
            const picture = new Image();
            picture.onload = () => resolve(picture);
            picture.onerror = () => reject(new Error('Картинка не открывается'));
            picture.src = url;
        });
        if (image.naturalWidth > 6000 || image.naturalHeight > 6000) throw new Error('Слишком большие размеры изображения');
        const canvas = document.createElement('canvas');
        const ratio = Math.min(1, 320 / Math.max(image.naturalWidth, image.naturalHeight));
        canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        let data = canvas.toDataURL('image/webp', .82);
        if (!safeImage(data)) {
            const factor = Math.min(1, 200 / Math.max(canvas.width, canvas.height));
            canvas.width = Math.max(1, Math.round(canvas.width * factor));
            canvas.height = Math.max(1, Math.round(canvas.height * factor));
            canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
            data = canvas.toDataURL('image/webp', .65);
        }
        if (!safeImage(data)) throw new Error('PNG слишком сложный для хранения в настройках. Попробуй уменьшить размер');
        if (!studioBaseline || session !== studioSession) return;
        const used = settings.decorations.reduce((sum, item) => sum + (item.image?.length || 0), 0);
        if (used + data.length > 400000) throw new Error('В настройках уже много картинок. Удали часть своих PNG перед добавлением');
        addDecoration('', data);
    } catch (error) {
        alert(`Не получилось добавить PNG: ${error.message}`);
    } finally {
        URL.revokeObjectURL(url);
    }
}
function snapshotProfile() {
    return structuredClone({ style: settings.style, icons: settings.icons, decorations: settings.decorations });
}
function saveProfile() {
    const input = elements.tabContent.querySelector('#stui-profile-name');
    const name = plainText(input.value.trim()).slice(0, 40);
    if (!name || DANGEROUS_KEYS.has(name)) { alert('Введи другое название темы.'); return; }
    if (!settings.profiles[name] && Object.keys(settings.profiles).length >= 15) { alert('Можно сохранить до 15 тем.'); return; }
    settings.profiles[name] = snapshotProfile();
    input.value = '';
    stageSettings(); renderProfileRows();
}
function loadProfile(name) {
    const profile = settings.profiles[name];
    if (!profile) return;
    const clean = normalize(profile, false);
    settings.style = clean.style; settings.icons = clean.icons; settings.decorations = clean.decorations;
    stageSettings(); renderTab();
}
function deleteProfile(name) {
    if (!settings.profiles[name] || !confirm(`Удалить сохранённую тему «${name}»?`)) return;
    delete settings.profiles[name]; stageSettings(); renderProfileRows();
}
function renderProfileRows() {
    const list = elements.tabContent.querySelector('#stui-profile-list');
    if (!list) return;
    list.replaceChildren();
    for (const name of Object.keys(settings.profiles).sort()) {
        const row = document.createElement('div'); row.className = 'stui-list-row';
        const label = document.createElement('span'); label.textContent = name;
        const load = document.createElement('button'); load.type = 'button'; load.textContent = 'Выбрать'; load.dataset.loadProfile = name;
        const del = document.createElement('button'); del.type = 'button'; del.textContent = '×'; del.title = 'Удалить'; del.dataset.deleteProfile = name;
        row.append(label, load, del); list.append(row);
    }
}
function exportSettings() {
    const blob = new Blob([JSON.stringify({ format: 'sillytavern-ui-studio', version: 1, settings }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'sillytavern-ui-studio-theme.json';
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function handleImport(input) {
    const session = studioSession;
    const file = input.files?.[0]; input.value = '';
    if (!file) return;
    if (file.size > 1500000) { alert('Файл настроек слишком большой (максимум 1,5 МБ).'); return; }
    try {
        const imported = JSON.parse(await file.text());
        if (!studioBaseline || session !== studioSession) return;
        if (imported?.format !== 'sillytavern-ui-studio' || imported.version !== 1 || !imported.settings) throw new Error('Неизвестный формат темы');
        if (!confirm('Заменить текущие настройки UI Studio настройками из файла?')) return;
        settings = normalize(imported.settings);
        stageSettings(); renderTab();
    } catch (error) { alert(`Не удалось импортировать тему: ${error.message}`); }
}
function resetStyle() {
    if (!confirm('Сбросить оформление, иконки и декор? Сохранённые темы останутся.')) return;
    const keepProfiles = settings.profiles;
    const keepNavigation = settings.navigation;
    settings = normalize({ profiles: keepProfiles, navigation: keepNavigation });
    stageSettings(); renderTab();
}
function dispose() {
    if (!started) return;
    studioSession += 1;
    discardStudioChanges();
    clearTimeout(fadeTimer);
    fadeTimer = null;
    observer?.disconnect();
    document.removeEventListener('keydown', onKeyDown);
    for (const item of ['trigger','scrim','menu','studio','decorations']) elements[item]?.remove();
    document.body.classList.remove('stui-active', 'stui-hide-top', 'stui-overlay-open', 'stui-trigger-faded');
    delete document.body.dataset.stuiAvatarPosition;
    delete document.body.dataset.stuiTriggerSide;
    for (const property of [...document.documentElement.style]) if (property.startsWith('--stui-')) document.documentElement.style.removeProperty(property);
    started = false;
}
function initialize(attempt = 0) {
    // Emergency bypass: reload with ?stui_safe=1 to restore the native toolbar.
    if (new URLSearchParams(window.location.search).get('stui_safe') === '1') {
        console.info('[UI Studio] Safe mode active; UI Studio was not initialized.');
        return;
    }
    if (started) return;
    holder = document.querySelector('#top-settings-holder');
    if (!holder || !window.SillyTavern?.getContext) {
        if (attempt < 40) setTimeout(() => initialize(attempt + 1), 500);
        return;
    }
    context = window.SillyTavern.getContext();
    if (!context?.extensionSettings || !context.saveSettingsDebounced) {
        if (attempt < 40) setTimeout(() => initialize(attempt + 1), 500);
        return;
    }
    started = true;
    settings = normalize(context.extensionSettings[KEY]);
    context.extensionSettings[KEY] = settings;
    document.body.classList.add('stui-active');
    createUI();
    syncNav();
    applyTheme();
    observer = new MutationObserver(mutations => {
        if (mutations.some(m => m.type === 'childList' && (m.target === holder))) syncNav();
    });
    observer.observe(holder, { childList: true });
    console.info('[UI Studio] Initialized');
}
export function onDisable() { dispose(); }
export function onEnable() { initialize(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initialize(), { once: true });
else initialize();
