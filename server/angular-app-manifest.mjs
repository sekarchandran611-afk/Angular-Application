
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sekarchandran.github.io/smart-text-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/smart-text-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 636, hash: '2d90e5e869aaf12379853aa8c4803b5d8b8cfb5b3f4b67a884fd78539ca639e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '1be101870fc459828bcd9580e6ea6272add6d1378992087c4b6b787a5f461d08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21784, hash: '26a5e00abe0e0264782416ecd9a40db0e37a4e8a4721d67bb772c1ed40b0be52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UTHNVEK6.css': {size: 529, hash: 'MuqgBlkHUZ4', text: () => import('./assets-chunks/styles-UTHNVEK6_css.mjs').then(m => m.default)}
  },
};
