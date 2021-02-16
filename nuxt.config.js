export default {
  generate: {
    fallback: true
  },
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
    title: 'Andronix App',
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
    '~/plugins/tippyjs.js',
    '~/plugins/toasts.js',
    {
      src: '~/plugins/animxyz.js',
      mode: 'client'
    },
    {
      src: '~/plugins/viewer.js',
    },
    '~/plugins/firebase.js',
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
    ['@nuxtjs/sentry', {
      dsn: 'https://25a36cb298bf4a9faf84ef539fe4bb20@o524509.ingest.sentry.io/5637050',
      config: {}, // Additional config
    }],
    [
      'nuxt-social-meta',
      {
        url: 'https://next.andronix.app',
        title: 'Andronix App',
        site_name: 'Andronix App',
        description: 'Install Linux distributions like Ubuntu, Debian, Manjaro and more on your un-rooted Android device.',
        img: 'Link to image in static folder',
        locale: 'en_US',
        twitter: '@AndronixApp',
        twitter_card: 'summary_large_image',
        themeColor: '#FF8B25',
      },
    ],
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: '/user'
    }],
    /* ['@nuxtjs/sitemap', {
       hostname: 'https://',
       gzip: true,
       exclude: [
         '/user/!**',
       ]
     }],*/
    'vue-scrollto/nuxt',
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

  publicRuntimeConfig: {},
  privateRuntimeConfig: {
    testAccountEmail: process.env.TEST_ACCOUNT_EMAIL,
    testAccountPassword: process.env.TEST_ACCOUNT_PASSWORD
  }
}

