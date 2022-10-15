import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
    ssr: true,
      meta: {
        lang: 'ru',
    },
    // css: ["assets/Golos-Text/Golos-Text_VF.css",],
    modules: ['@nuxtjs/color-mode','@nuxtjs/strapi','@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image-edge','nuxt-font-loader'],
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
        transpile: ['@headlessui/vue'],
        fontLoader: {
          url: '~/assets/fonts/font-face.css',
        }
      },
      strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
      },
      vite: {
        plugins: [
          Icons({
            // experimental
            autoInstall: true,
          })
        ],
        server: {
          watch: {
            usePolling: true
          }
        }
       },
       
})
 