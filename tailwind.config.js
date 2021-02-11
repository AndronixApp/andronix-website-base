const colors = require('tailwindcss/colors')
module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  purge: {
    content: [
      './static/Data/*.json',
    ],
    options: {
      safelist: [
        'bg-primary-400', 'bg-purple-600', 'text-teal-400', 'bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-indigo-400', 'bg-pink-400', 'bg-red-400', 'w-10', 'w-6', 'stroke-current',
        'text-primary-400', 'text-blue-400', 'text-purple-400', 'text-green-400', 'text-indigo-400', 'text-pink-400', 'text-red-400'
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        teal: {
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        primary: {
          100: '#ffc592',
          200: '#ffb97c',
          300: '#ffae66',
          400: '#ffa251',
          500: '#ff973b',
          600: '#ff8b25',
          700: '#e67d21',
          800: '#cc6f1e',
        },
        gradient1: '#fc4a1a',
        gradient2: '#f7b733',
        gradient3: '#F27121',
        background: '#0c112b',
        background2: '#1e214a',
        violet: '#801354',
        violet2: '#9B0ABF',
        card_background: '#303653',
        card_background_accent: '#454a64',
        card_background_dark: '#070a1a',
        card_background2: '#3E3F64'
      },
      backgroundImage: () => ({
        'landing-pattern': 'url(\'~assets/images/background/landing_bg.svg\')',
        'final-pattern': 'url(\'~assets/images/background/final_edited.svg\')',
        'triangle-pattern': 'url(\'~assets/images/background/triangle_background.svg\')',
        'circle-pattern': 'url(\'~assets/images/background/circle_background.svg\')',
        'rect-pattern': 'url(\'~assets/images/background/square_background.svg\')',
      }),
      fontFamily: {
        'sans': ['Manrope'],
        'head': ['Manrope']
      }
    }
  }
}
