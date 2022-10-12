import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
      meta: {
        lang: 'ru',
        link: [
            { rel: "stylesheet", href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" },
        ],
        script: [
            { src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' }
        ]
    },
    modules: ['@nuxtjs/color-mode','@nuxtjs/strapi','@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
        transpile: ['@headlessui/vue']

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
 