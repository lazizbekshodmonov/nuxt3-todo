// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/styles/main.css', 'vue3-toastify/dist/index.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // '@vue3-toastify',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'],
          'stores' // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  
  vite: {
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "localhost",
    },
  },
  devServerHandlers: [],
  nitro: {
    serveStatic: true,
  },
  experimental:{
    payloadExtraction: false
  }
})
