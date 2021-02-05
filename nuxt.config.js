export default {
  vue: {
    config: {
      silent: true
    }
  },
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [
      {
        scr: 'https://checkout.razorpay.com/v1/checkout.js'
      }
    ],
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
    '~/plugins/formulate.js',
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
    '~/plugins/firebase.js',
    {
      src: '~/plugins/hamburger.js',
      mode: 'client'
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['@nuxtjs/recaptcha', {
      hideBadge: true,
      siteKey: '6LdFXUgaAAAAALL5FTDtMLppqC7yq4f0veevt_ad',
      version: 2,
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3030/v1'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
