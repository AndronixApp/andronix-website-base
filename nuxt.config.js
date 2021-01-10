export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'andronix-website',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/animxyz.js',
      mode: 'client'
    },
    {
      src: '~/plugins/anime.js',
      mode: 'client'
    },
    {
      src: '~/plugins/viewer.js',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBvHOXLIFJZZsFdVCjxP3XLP_tw6n5BdW8',
          authDomain: 'andronix-techriz.firebaseapp.com',
          databaseURL: 'https://andronix-techriz.firebaseio.com',
          projectId: 'andronix-techriz',
          storageBucket: 'andronix-techriz.appspot.com',
          messagingSenderId: '83697300023',
          appId: '1:83697300023:web:1e5962e3c087affb9a45b2',
          measurementId: 'G-J4235J74QY'
        },
        services: {
          auth: true,
          database: true,
          performance: true,
          analytics: true,
          remoteConfig: true,
          firestore: true
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
