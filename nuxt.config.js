import webpack from 'webpack'

const env = require('dotenv').config()
console.log(env)
export default {
  mode: 'spa',
  env: env.parsed,
  generate: {
    fallback: false,
    routes: [
      '/product/1'
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ], script: [
      {
        lang: 'javascript',
        src: '//at.alicdn.com/t/font_1533766_yyiii3wsgs.js'
      },
      { src: 'https://widget.cloudinary.com/v2.0/global/all.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'blue' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/tailwind.scss',
    'vue-multiselect/dist/vue-multiselect.min.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/globalComponent.js',
    '~/plugins/extComponent.js',
    { src: '~/plugins/notification' },
    { src: '~/plugins/vuex-persist' },
    { src: '~/plugins/alert' },
    { src: '~/plugins/validate' },
    { src: '~/plugins/loader' },
    { src: '~/plugins/pusher' },
    { src: '~/plugins/search' },
    { src: '~/plugins/globalComponent.js' },
    { src: '~/plugins/extComponent.js' },
    { src: '~/plugins/mixins' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    'nuxt-vue-multiselect'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://elox.xyz/api/v1/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'Swiper': 'swiper'
      })
    ],
    extend(config, ctx) {
    }
  }
}
