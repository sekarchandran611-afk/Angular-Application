
export default {
  basePath: 'https://sekarchandran.github.io/smart-text-app',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
