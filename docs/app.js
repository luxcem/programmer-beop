'use strict';

/* Key data transcribed from linux/symbols/prbeop-fren.
   Each key: g = [direct, shift, altgr, shift+altgr], cat = category shown in the readout.
   Dead keys are shown with their spacing-diacritic glyph. */
const NNBSP = ' ';      // espace fine insecable (U+202F)
const BELOWDOT = ' ̣'; // dead_belowdot, rendered as combining dot under NBSP

const KEYS = [
  [ // E row (numbers)
    { g: ['⎄', '', '', ''], cat: 'compose',
      note: { fr: 'Compose : enchaînez deux caractères. ⎄ < < → «, ⎄ - - → —, ⎄ o c → ©.', en: 'Compose: chain two characters. ⎄ < < → «, ⎄ - - → —, ⎄ o c → ©.' } }, // TLDE
    { g: ['&', '1', '—', '–'], cat: 'prog',
      note: { fr: '— tiret cadratin (dialogues) ; – demi-cadratin (intervalles).', en: '— em dash (dialogue); – en dash (ranges).' } }, // AE01
    { g: ['«', '2', '⸮', '“'], cat: 'typo' },        // AE02 << 2 reversed-? "
    { g: ['»', '3', '‽', '”'], cat: 'typo' },        // AE03 >> 3 interrobang "
    { g: ["'", '4', '≈', '²'], cat: 'punct' },            // AE04
    { g: ['"', '5', 'ß', 'ẞ'], cat: 'punct' },            // AE05
    { g: ['@', '6', '−', '‑'], cat: 'prog',
      note: { fr: '− moins mathématique ; ‑ trait d’union insécable (pas de coupure de ligne).', en: '− true minus sign; ‑ non-breaking hyphen (no line break).' } }, // AE06
    { g: ['+', '7', '±', '¬'], cat: 'math' },             // AE07
    { g: ['-', '8', '©', '∞'], cat: 'math' },             // AE08
    { g: ['/', '9', '÷', '½'], cat: 'math' },             // AE09
    { g: ['*', '0', '×', '¼'], cat: 'math' },             // AE10
    { g: ['=', '°', '≠', '′'], cat: 'math',
      note: { fr: '′ minutes (angles, coordonnées) ; ″ secondes sur la touche #.', en: '′ minutes (angles, coordinates); ″ seconds on the # key.' } }, // AE11
    { g: ['#', '%', '‰', '″'], cat: 'prog' },             // AE12
    { mod: 'sys', label: '⌫', w: 1.7 }
  ],
  [ // D row
    { mod: 'sys', label: '↹', w: 1.6 },
    { g: ['b', 'B', '|', '¦'], cat: 'letter' },                // AD01
    { g: ['é', 'É', '´', '´'], cat: 'letter', dead: [2],
      note: { fr: 'Alt Gr : accent aigu mort — ´ puis a → á.', en: 'Alt Gr: dead acute — ´ then a → á.' } }, // AD02
    { g: ['o', 'O', 'œ', 'Œ'], cat: 'letter' },            // AD03
    { g: ['p', 'P', '§', '¶'], cat: 'letter' },           // AD04
    { g: ['è', 'È', '`', '`'], cat: 'letter', dead: [2],
      note: { fr: 'Alt Gr : accent grave mort — ` puis o → ò. Maj + Alt Gr : ` littéral.', en: 'Alt Gr: dead grave — ` then o → ò. Shift + Alt Gr: literal `.' } }, // AD05
    { g: ['w', 'W', '^', '^'], cat: 'letter', dead: [2],
      note: { fr: 'Alt Gr : circonflexe mort — ^ puis o → ô. Maj + Alt Gr : ^ littéral.', en: 'Alt Gr: dead circumflex — ^ then o → ô. Shift + Alt Gr: literal ^.' } }, // AD06
    { g: ['v', 'V', 'ˇ', '✓'], cat: 'letter', dead: [2],
      note: { fr: 'Alt Gr : caron mort — ˇ puis c → č.', en: 'Alt Gr: dead caron — ˇ then c → č.' } }, // AD07
    { g: ['d', 'D', '$', '¤'], cat: 'letter', dead: [3],
      note: { fr: 'Maj + Alt Gr : ¤ monétaire mort — ¤ puis l → £, b → ₿, y → ¥.', en: 'Shift + Alt Gr: dead currency ¤ — ¤ then l → £, b → ₿, y → ¥.' } }, // AD08
    { g: ['l', 'L', '*', '/'], cat: 'letter' },                     // AD09
    { g: ['j', 'J', 'ĳ', 'Ĳ'], cat: 'letter' },           // AD10 ij IJ
    { g: ['z', 'Z', 'ə', 'Ə'], cat: 'letter' },           // AD11 schwa
    { g: ['ê', 'Ê', '^', NNBSP], cat: 'letter', dead: [2],
      note: { fr: 'Maj + Alt Gr : espace fine insécable, avant ; : ! ? en français.', en: 'Shift + Alt Gr: narrow no-break space, before ; : ! ? in French.' } }, // AD12
    { g: ['¨', '⌀', '→', '←'], cat: 'dead', dead: [0, 1],
      note: { fr: '⌀ barre la lettre suivante : o → ø, l → ł. ¨ tréma : i → ï.', en: '⌀ strokes the next letter: o → ø, l → ł. ¨ diaeresis: i → ï.' } } // BKSL
  ],
  [ // C row (home)
    { mod: 'sys', label: '⇪ Hyper', w: 1.85 },
    { g: ['a', 'A', 'æ', 'Æ'], cat: 'letter' },            // AC01
    { g: ['u', 'U', 'ù', 'Ù'], cat: 'letter' },            // AC02
    { g: ['e', 'E', '(', '€'], cat: 'letter' },                 // AC03
    { g: ['i', 'I', ')', '˙'], cat: 'letter', dead: [3],
      note: { fr: 'Maj + Alt Gr : point suscrit mort (ż).', en: 'Shift + Alt Gr: dead dot above (ż).' } }, // AC04
    { g: [',', '!', ';', '¡'], cat: 'punct' },                 // AC05
    { g: ['c', 'C', 'ç', 'Ç'], cat: 'letter' },           // AC06
    { g: ['t', 'T', '<', '≤'], cat: 'letter' },                // AC07
    { g: ['s', 'S', '>', '≥'], cat: 'letter' },                // AC08
    { g: ['r', 'R', '+', '-'], cat: 'letter' },                     // AC09
    { g: ['n', 'N', 'ñ', 'Ñ'], cat: 'letter' },           // AC10
    { g: ['f', 'F', '↓', '↑'], cat: 'letter' },           // AC11
    { mod: 'sys', label: '⏎', w: 1.85 }
  ],
  [ // B row (bottom letters)
    { mod: 'shift', label: '⇧ Maj', w: 2.3 },
    { g: ['à', 'À', '\\', '№'], cat: 'letter' },      // AB01
    { g: ['y', 'Y', '{', '≠'], cat: 'letter' },                // AB02
    { g: ['x', 'X', '}', '•'], cat: 'letter' },                // AB03
    { g: ['.', ':', '…', '·'], cat: 'punct' },            // AB04
    { g: ['’', '?', '‘', '¿'], cat: 'typo' },        // AB05
    { g: ['k', 'K', '~', '~'], cat: 'letter', dead: [3],
      note: { fr: 'Alt Gr : ~ littéral. Maj + Alt Gr : tilde mort — ~ puis n → ñ.', en: 'Alt Gr: literal ~. Shift + Alt Gr: dead tilde — ~ then n → ñ.' } }, // AB06
    { g: ['q', 'Q', '[', '⎄'], cat: 'letter',
      note: { fr: 'Maj + Alt Gr : touche Compose, comme ⎄.', en: 'Shift + Alt Gr: Compose key, same as ⎄.' } }, // AB07
    { g: ['g', 'G', ']', 'μ'], cat: 'letter',
      note: { fr: 'Maj + Alt Gr : μ grec — μ puis a → α, l → λ, p → π.', en: 'Shift + Alt Gr: Greek μ — μ then a → α, l → λ, p → π.' } }, // AB08
    { g: ['h', 'H', '†', '‡'], cat: 'letter' },           // AB09 dagger
    { g: ['m', 'M', '¯', BELOWDOT], cat: 'letter', dead: [2, 3],
      note: { fr: 'Alt Gr : macron mort (ā). Maj + Alt Gr : point souscrit mort (ạ).', en: 'Alt Gr: dead macron (ā). Shift + Alt Gr: dead dot below (ạ).' } }, // AB10
    { mod: 'shift', label: '⇧ Maj', w: 2.55 }
  ],
  [ // modifier row (logical keys after remap)
    { mod: 'sys', label: 'Alt', w: 1.5 },
    { mod: 'altgr', label: 'Alt Gr', w: 1.3 },
    { mod: 'sys', label: 'Ctrl', w: 1.3 },
    { g: ['␣', '␣', '_', '⍽'], cat: 'punct', w: 5.4,
      note: { fr: 'Alt Gr : tiret bas. Maj + Alt Gr : espace insécable.', en: 'Alt Gr: underscore. Shift + Alt Gr: no-break space.' } }, // SPCE
    { mod: 'altgr', label: 'Alt Gr', w: 1.4 },
    { mod: 'sys', label: 'Super', w: 1.1 },
    { mod: 'sys', label: 'Hyper', w: 1.1 },
    { mod: 'sys', label: 'Ctrl', w: 1.3 }
  ]
];

const TINT = '#88C0D0'; // Nord frost, same hover/active tint for every key

// Keyboard Layout Analyzer results, one entry per corpus share link
const KLA_RESULTS = {
  nextjs: {
    url: 'https://patorjk.com/keyboard-layout-analyzer/#/load/qL9x1qX0',
    scores: [
      { n: 'Programmer Béop', s: 48.09 },
      { n: 'Programmer Dvorak', s: 47.89 },
      { n: 'Bépo', s: 45.92 },
      { n: 'Qwerty', s: 37.36 },
      { n: 'Azerty', s: 33.03 }
    ]
  },
  django: {
    url: 'https://patorjk.com/keyboard-layout-analyzer/#/load/72DSk2dX',
    scores: [
      { n: 'Programmer Béop', s: 53.94 },
      { n: 'Bépo', s: 52.77 },
      { n: 'Programmer Dvorak', s: 52.26 },
      { n: 'Qwerty', s: 43.92 },
      { n: 'Azerty', s: 42.01 }
    ]
  },
  miserables: {
    url: 'https://patorjk.com/keyboard-layout-analyzer/#/load/Gj1cS8s6',
    scores: [
      { n: 'Programmer Béop', s: 67.51 },
      { n: 'Bépo', s: 65.82 },
      { n: 'Programmer Dvorak', s: 63.07 },
      { n: 'Qwerty', s: 51.57 },
      { n: 'Azerty', s: 47.98 }
    ]
  },
  alice: {
    url: 'https://patorjk.com/keyboard-layout-analyzer/#/load/Zd77pwRK',
    scores: [
      { n: 'Programmer Béop', s: 66.77 },
      { n: 'Programmer Dvorak', s: 66.11 },
      { n: 'Bépo', s: 60.48 },
      { n: 'Qwerty', s: 53.06 },
      { n: 'Azerty', s: 49.54 }
    ]
  }
};

const I18N = {
  fr: {
    heroKicker: 'Disposition de clavier ergonomique · basée sur le bépo',
    heroTitle: 'Pensé pour le français, l’anglais et le code.',
    heroSub: 'Une disposition ergonomique dérivée du bépo : accents et typographie française en accès direct, symboles de programmation regroupés par paires sous Alt Gr, lettres fréquentes de l’anglais replacées.',
    hint: 'Cliquez sur ⇧ Maj et Alt Gr pour révéler les couches. Survolez ou cliquez une touche. Les touches mortes (diacritiques) sont en ambre.',
    ctaTry: 'Installer la disposition', ctaGithub: 'Voir sur GitHub',
    whyKicker: 'Pourquoi', whyTitle: 'Du bépo au programmer béop.',
    whyBody: 'Le bépo est formidable pour le texte long, mais la programmation et l’administration système réclament des touches qu’il place mal : accolades, crochets, chevrons. Le programmer béop déplace ces caractères — et quelques lettres anglaises — vers des positions accessibles, tout en restant proche du bépo. La disposition existe depuis 2014 et sert d’outil de travail quotidien depuis.',
    featKicker: 'Ce qui change', featTitle: 'Qualité de vie, touche après touche.',
    features: [
      { g: '( )', t: 'Paires sur Alt Gr', d: '( ) { } < > [ ] sur les touches fortes e i y x t s q g, regroupées par paires.' },
      { g: '« »', t: 'Typographie française', d: '’ « » “ ” … · en accès direct ou facile. L’apostrophe typographique par défaut.' },
      { g: '$ #', t: 'Symboles regroupés', d: '$ # & accessibles. Le point-virgule passe en Alt Gr — il soulage le petit doigt.' },
      { g: '¤ μ', t: 'Compose monétaire & grec', d: '¤ puis l → £, b → ₿. μ puis a → α, l → λ, p → π.' },
      { g: '~ `', t: 'Morte ou littérale', d: 'Les diacritiques utiles au code existent en deux versions : ~ littéral (chemins, code) et ~ mort (ñ) ; ` littéral (backtick JS) et ` mort (accents).' },
      { g: '⌃⌥', t: 'Modificateurs repensés', d: 'Ctrl ↔ Alt pour des raccourcis sous le pouce. Caps Lock devient Hyper.' }
    ],
    compKicker: 'Comparaison', compTitle: 'Quatre corpus, cinq dispositions.',
    compBody: 'Évalué avec le Keyboard Layout Analyzer contre le bépo, l’azerty, le qwerty et le programmer-dvorak, sur quatre corpus représentatifs des usages réels.',
    corpora: [
      { k: 'Français', t: 'Les Misérables', d: 'Prose littéraire — Victor Hugo (chapitre 1)', res: 'miserables' },
      { k: 'Anglais', t: 'Alice in Wonderland', d: 'Récit — Lewis Carroll (chapitre 1)', res: 'alice' },
      { k: 'Python', t: 'runserver.py', d: 'Code — framework Django', res: 'django' },
      { k: 'TypeScript', t: 'pack-next.ts', d: 'Code — framework Next.js', res: 'nextjs' }
    ],
    installKicker: 'Installation', installTitle: 'X11, Wayland, macOS.',
    xkbHead: 'Linux · X11', xkbNote: 'Copiez (ou liez) le dossier linux vers ~/.xkb, puis :',
    xkbCode: 'setxkbmap -I $HOME/.xkb prbeop-fren -print \\\n  | xkbcomp -I$HOME/.xkb - $DISPLAY 2>/dev/null',
    wayHead: 'Linux · Wayland', wayNote: 'libxkbcommon lit les dispositions depuis ~/.config/xkb (sway, Hyprland, river…) :',
    wayCode: 'mkdir -p ~/.config/xkb/symbols\ncp linux/symbols/prbeop-fren \\\n  ~/.config/xkb/symbols/\n# sway : xkb_layout "prbeop-fren"',
    osxHead: 'macOS', osxNote: 'La disposition s’installe avec <a href="https://software.sil.org/ukelele/" target="_blank" rel="noopener">Ukelele</a> pour les caractères (PrBeop.keylayout) et <a href="https://karabiner-elements.pqrs.org/" target="_blank" rel="noopener">Karabiner-Elements</a> pour les modificateurs — Ctrl ⇄ Alt, Caps en Hyper (karabiner.json) :',
    osxCode: 'cp macos/PrBeop.keylayout ~/Library/Keyboard\\ Layouts/\ncp macos/karabiner.json ~/.config/karabiner/\n# puis Réglages Système → Clavier → Sources de saisie',
    footCredit: 'Basé sur le bépo · depuis 2014 · sous licence GPL-3.0 · par luxcem',
    layers: { base: 'Direct', shift: 'Maj', altgr: 'Alt Gr', l4: 'Maj + Alt Gr', cat: 'Catégorie' },
    cats: { prog: 'Programmation', typo: 'Typographie', math: 'Mathématiques', dead: 'Touche morte', compose: 'Compose', punct: 'Ponctuation', letter: 'Lettre' },
    title: 'Programmer Béop — disposition de clavier ergonomique'
  },
  en: {
    heroKicker: 'Ergonomic keyboard layout · based on bépo',
    heroTitle: 'The keyboard that speaks French, English, and code.',
    heroSub: 'An ergonomic layout derived from bépo: French accents and typography within direct reach, programming symbols grouped in pairs under Alt Gr, common English letters repositioned.',
    hint: 'Click ⇧ Shift and Alt Gr to reveal the layers. Hover or click any key. Dead keys (diacritics) are shown in amber.',
    ctaTry: 'Install the layout', ctaGithub: 'View on GitHub',
    whyKicker: 'Why', whyTitle: 'From bépo to programmer béop.',
    whyBody: 'Bépo is wonderful for long-form text, but programming and system administration demand keys it places poorly: braces, brackets, chevrons. Programmer Béop moves those characters — and a few English letters — to reachable positions, while staying close to bépo. The layout has existed since 2014 and has been a daily driver ever since.',
    featKicker: 'What changes', featTitle: 'Quality of life, key by key.',
    features: [
      { g: '( )', t: 'Pairs on Alt Gr', d: '( ) { } < > [ ] on the strong keys e i y x t s q g, grouped as pairs.' },
      { g: '« »', t: 'French typography', d: '’ « » “ ” … · within direct or easy reach. Typographic apostrophe by default.' },
      { g: '$ #', t: 'Symbols grouped', d: '$ # & within reach. The semicolon moves to Alt Gr — it spares the pinky.' },
      { g: '¤ μ', t: 'Currency & Greek compose', d: '¤ then l → £, b → ₿. μ then a → α, l → λ, p → π.' },
      { g: '~ `', t: 'Dead or literal', d: 'Diacritics that matter in code come in both flavours: literal ~ (paths, code) and dead ~ (ñ); literal ` (JS backtick) and dead ` (accents).' },
      { g: '⌃⌥', t: 'Rethought modifiers', d: 'Ctrl ↔ Alt for shortcuts under the thumb. Caps Lock becomes Hyper.' }
    ],
    compKicker: 'Comparison', compTitle: 'Four corpora, five layouts.',
    compBody: 'Scored with the Keyboard Layout Analyzer against bépo, azerty, qwerty and programmer-dvorak, over four corpora representative of real use.',
    corpora: [
      { k: 'French', t: 'Les Misérables', d: 'Literary prose — Victor Hugo (chapter 1)', res: 'miserables' },
      { k: 'English', t: 'Alice in Wonderland', d: 'Narrative — Lewis Carroll (chapter 1)', res: 'alice' },
      { k: 'Python', t: 'runserver.py', d: 'Code — Django framework', res: 'django' },
      { k: 'TypeScript', t: 'pack-next.ts', d: 'Code — Next.js framework', res: 'nextjs' }
    ],
    installKicker: 'Installation', installTitle: 'X11, Wayland, macOS.',
    xkbHead: 'Linux · X11', xkbNote: 'Copy (or symlink) the linux folder to ~/.xkb, then:',
    xkbCode: 'setxkbmap -I $HOME/.xkb prbeop-fren -print \\\n  | xkbcomp -I$HOME/.xkb - $DISPLAY 2>/dev/null',
    wayHead: 'Linux · Wayland', wayNote: 'libxkbcommon picks up layouts from ~/.config/xkb (sway, Hyprland, river…):',
    wayCode: 'mkdir -p ~/.config/xkb/symbols\ncp linux/symbols/prbeop-fren \\\n  ~/.config/xkb/symbols/\n# sway: xkb_layout "prbeop-fren"',
    osxHead: 'macOS', osxNote: 'The layout installs with <a href="https://software.sil.org/ukelele/" target="_blank" rel="noopener">Ukelele</a> for the characters (PrBeop.keylayout) and <a href="https://karabiner-elements.pqrs.org/" target="_blank" rel="noopener">Karabiner-Elements</a> for the modifiers — Ctrl ⇄ Alt, Caps as Hyper (karabiner.json):',
    osxCode: 'cp macos/PrBeop.keylayout ~/Library/Keyboard\\ Layouts/\ncp macos/karabiner.json ~/.config/karabiner/\n# then System Settings → Keyboard → Input Sources',
    footCredit: 'Based on bépo · since 2014 · GPL-3.0 licensed · by luxcem',
    layers: { base: 'Direct', shift: 'Shift', altgr: 'Alt Gr', l4: 'Shift + Alt Gr', cat: 'Category' },
    cats: { prog: 'Programming', typo: 'Typography', math: 'Math', dead: 'Dead key', compose: 'Compose', punct: 'Punctuation', letter: 'Letter' },
    title: 'Programmer Béop — ergonomic keyboard layout'
  }
};

const state = {
  lang: 'fr',
  mode: document.documentElement.dataset.mode || 'light', // set pre-paint in index.html
  shift: false, altgr: false, hoverKey: null, pinnedKey: null
};

const UNIT = 60, GAP = 8;
const board = document.getElementById('board');
const boardWrap = document.getElementById('board-wrap');
const readout = document.getElementById('readout');

function keyWidth(w) { w = w || 1; return w * UNIT + (w - 1) * GAP; }

function activeLayer() {
  if (state.shift && state.altgr) return 'l4';
  if (state.shift) return 'shift';
  if (state.altgr) return 'altgr';
  return 'base';
}

function buildBoard() {
  board.textContent = '';
  KEYS.forEach((row, ri) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'krow';
    row.forEach((key, ci) => {
      const id = ri + '-' + ci;
      if (key.mod) {
        const el = document.createElement('div');
        el.className = 'mod';
        // Edge modifiers stretch so every row fills the board exactly
        if (ci === 0 || ci === row.length - 1) {
          el.style.flex = '1 1 ' + keyWidth(key.w) + 'px';
        } else {
          el.style.width = keyWidth(key.w) + 'px';
        }
        el.textContent = key.label;
        if (key.mod === 'shift' || key.mod === 'altgr') {
          el.classList.add('clickable');
          el.dataset.mod = key.mod;
          el.addEventListener('click', () => {
            state[key.mod === 'shift' ? 'shift' : 'altgr'] = !state[key.mod === 'shift' ? 'shift' : 'altgr'];
            renderState();
          });
        }
        rowEl.appendChild(el);
      } else {
        const el = document.createElement('div');
        el.className = 'key';
        el.dataset.id = id;
        el.style.width = keyWidth(key.w) + 'px';
        const corners = [['g-c', 0], ['g-tl', 1], ['g-br', 2], ['g-tr', 3]];
        corners.forEach(([cls, gi]) => {
          if (!key.g[gi]) return;
          const s = document.createElement('span');
          s.className = cls;
          if (key.dead && key.dead.indexOf(gi) !== -1) s.classList.add('dk');
          s.dataset.layer = ['base', 'shift', 'altgr', 'l4'][gi];
          s.textContent = key.g[gi];
          el.appendChild(s);
        });
        el.addEventListener('mouseenter', () => { state.hoverKey = id; renderState(); });
        el.addEventListener('mouseleave', () => { if (state.hoverKey === id) { state.hoverKey = null; renderState(); } });
        el.addEventListener('click', () => {
          state.pinnedKey = state.pinnedKey === id ? null : id;
          renderState();
        });
        rowEl.appendChild(el);
      }
    });
    board.appendChild(rowEl);
  });
}

function renderState() {
  const layer = activeLayer();
  const layerIdx = { base: 0, shift: 1, altgr: 2, l4: 3 };

  document.querySelectorAll('.mod.clickable').forEach(el => {
    el.classList.toggle('on', state[el.dataset.mod === 'shift' ? 'shift' : 'altgr']);
  });

  document.querySelectorAll('.key').forEach(el => {
    const [ri, ci] = el.dataset.id.split('-').map(Number);
    const key = KEYS[ri][ci];
    const isActive = state.hoverKey === el.dataset.id || state.pinnedKey === el.dataset.id;
    const layerGlyph = key.g[layerIdx[layer]];
    const layerOn = layer !== 'base' && layerGlyph;
    const tinted = isActive || layerOn;

    el.classList.toggle('hover', isActive);
    el.style.background = tinted ? `color-mix(in oklab, ${TINT} 14%, var(--key-bg))` : '';
    el.style.borderColor = tinted ? `color-mix(in oklab, ${TINT} 50%, var(--key-line))` : '';

    el.querySelectorAll('span').forEach(s => {
      s.classList.toggle('emph', s.dataset.layer === layer);
    });
  });

  renderReadout(layer);
}

function renderReadout(layer) {
  const t = I18N[state.lang];
  readout.textContent = '';
  let key = null;
  const sel = state.hoverKey || state.pinnedKey; // hover previews, click pins
  if (sel) {
    const [ri, ci] = sel.split('-').map(Number);
    const k = KEYS[ri][ci];
    if (k && !k.mod) key = k;
  }
  // Always render the same chip structure so hovering never shifts the layout
  [['base', 0], ['shift', 1], ['altgr', 2], ['l4', 3]].forEach(([name, gi]) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    const l = document.createElement('span');
    l.className = 'l';
    l.textContent = t.layers[name];
    const v = document.createElement('span');
    v.className = 'v' + (layer === name ? ' on' : '');
    v.textContent = key ? (key.g[gi] || '—') : ' ';
    chip.append(l, v);
    readout.appendChild(chip);
  });
  const spacer = document.createElement('div');
  spacer.className = 'spacer';
  readout.appendChild(spacer);
  const cat = document.createElement('div');
  cat.className = 'cat';
  const dot = document.createElement('span');
  dot.className = 'dot';
  if (key) dot.style.background = TINT;
  const cl = document.createElement('span');
  cl.className = 'cl';
  cl.textContent = key ? (t.cats[key.cat] || '') : ' ';
  cat.append(dot, cl);
  readout.appendChild(cat);
  const note = document.createElement('div');
  note.className = 'note';
  note.textContent = (key && key.note) ? key.note[state.lang] : ' ';
  readout.appendChild(note);
}

function renderI18n() {
  const t = I18N[state.lang];
  document.documentElement.lang = state.lang;
  document.title = t.title;
  const htmlKeys = ['osxNote']; // trusted strings carrying <a> markup
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (typeof v !== 'string') return;
    if (htmlKeys.indexOf(el.dataset.i18n) !== -1) el.innerHTML = v;
    else el.textContent = v;
  });

  const featGrid = document.getElementById('feat-grid');
  featGrid.textContent = '';
  t.features.forEach(f => {
    const row = document.createElement('div');
    row.className = 'feat-row';
    const g = document.createElement('div'); g.className = 'glyph'; g.textContent = f.g;
    const body = document.createElement('div');
    const ti = document.createElement('div'); ti.className = 'title'; ti.textContent = f.t;
    const d = document.createElement('div'); d.className = 'desc'; d.textContent = f.d;
    body.append(ti, d);
    row.append(g, body);
    featGrid.appendChild(row);
  });

  const corporaGrid = document.getElementById('corpora-grid');
  corporaGrid.textContent = '';
  t.corpora.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card corpus';
    const k = document.createElement('div'); k.className = 'tag'; k.textContent = c.k;
    const ti = document.createElement('div'); ti.className = 'title'; ti.textContent = c.t;
    const d = document.createElement('div'); d.className = 'desc'; d.textContent = c.d;
    card.append(k, ti, d);
    const res = c.res && KLA_RESULTS[c.res];
    if (res) {
      const list = document.createElement('div');
      list.className = 'scores';
      res.scores.forEach((row, i) => {
        const r = document.createElement('div');
        r.className = 'score-row' + (row.n === 'Programmer Béop' ? ' me' : '');
        const name = document.createElement('span'); name.textContent = (i + 1) + '. ' + row.n;
        const val = document.createElement('span'); val.textContent = row.s.toFixed(2);
        r.append(name, val);
        list.appendChild(r);
      });
      card.appendChild(list);
      const a = document.createElement('a');
      a.className = 'score-link';
      a.href = res.url; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = (state.lang === 'fr' ? 'Détails sur le KLA' : 'Details on KLA') + ' ↗';
      card.appendChild(a);
    }
    corporaGrid.appendChild(card);
  });

  renderState();
}

function renderMode() {
  document.documentElement.dataset.mode = state.mode;
  document.getElementById('btn-dark').classList.toggle('active', state.mode === 'dark');
  document.getElementById('btn-light').classList.toggle('active', state.mode === 'light');
  document.getElementById('btn-fr').classList.toggle('active', state.lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', state.lang === 'en');
}

function updateScale() {
  const w = boardWrap.clientWidth;
  const s = Math.min(1, w / 980);
  board.style.transform = 'scale(' + s + ')';
  boardWrap.style.height = ((UNIT * KEYS.length + GAP * (KEYS.length - 1)) * s) + 'px';
}

function pick(prop, value, storageKey) {
  state[prop] = value;
  try { localStorage.setItem(storageKey, value); } catch (e) {}
  renderMode();
  renderI18n();
}

document.getElementById('btn-dark').addEventListener('click', () => pick('mode', 'dark', 'prbeop.mode'));
document.getElementById('btn-light').addEventListener('click', () => pick('mode', 'light', 'prbeop.mode'));
document.getElementById('btn-fr').addEventListener('click', () => pick('lang', 'fr', 'prbeop.lang'));
document.getElementById('btn-en').addEventListener('click', () => pick('lang', 'en', 'prbeop.lang'));

try {
  const l = localStorage.getItem('prbeop.lang');
  if (l === 'fr' || l === 'en') state.lang = l;
} catch (e) {}

// Follow system theme changes unless the user picked a mode explicitly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  let stored = null;
  try { stored = localStorage.getItem('prbeop.mode'); } catch (err) {}
  if (stored !== 'light' && stored !== 'dark') {
    state.mode = e.matches ? 'dark' : 'light';
    renderMode();
  }
});

buildBoard();
renderMode();
renderI18n();
updateScale();
new ResizeObserver(updateScale).observe(boardWrap);
