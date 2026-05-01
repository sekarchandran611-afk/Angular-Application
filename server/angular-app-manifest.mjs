
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/smart-text-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/smart-text-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 605, hash: '16000dd891c5e5d1351715b168c8611c47c076b3d374f349b7991954a63710c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 916, hash: 'e701cfb90c1849636af93b4e15fdd02336d4f297f04bca69165f815bf0be2da8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21753, hash: '4bfd654e7d2bff13b60f60b67992087030468f5194126e7523a7f8173cf298b1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UTHNVEK6.css': {size: 529, hash: 'MuqgBlkHUZ4', text: () => import('./assets-chunks/styles-UTHNVEK6_css.mjs').then(m => m.default)}
  },
};
