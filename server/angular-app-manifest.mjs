
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 590, hash: '668802258099df8b03db52d93165e8316368eee9ac2c55e928212e791e9d2087', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 901, hash: '9d4b90b31a008529904ea349c0ddb575bdae79a97a1e128b45d2560f21ebccd6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21738, hash: 'cbf44eb7cec2b212ed93367e155151727c876ece48cb2360fc162a4620f2b9b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UTHNVEK6.css': {size: 529, hash: 'MuqgBlkHUZ4', text: () => import('./assets-chunks/styles-UTHNVEK6_css.mjs').then(m => m.default)}
  },
};
