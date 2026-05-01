
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-Application/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-Application"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 610, hash: '8965d2b33ee31082cec247b2efe90a61810f1a83119fa9c9e5e43b8aa451b660', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 921, hash: 'a4e497425715d89f955a504511f5a8465bccd546b4536f70eca0e815f3debc1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21758, hash: '6ccbdf57667eb0d39b96823223b52a19fb22daab6da169773c436d9f7e459b1b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UTHNVEK6.css': {size: 529, hash: 'MuqgBlkHUZ4', text: () => import('./assets-chunks/styles-UTHNVEK6_css.mjs').then(m => m.default)}
  },
};
