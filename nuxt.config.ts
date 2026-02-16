// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'hub.tv',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  // Global CSS
  css: ['@/assets/css/tailwind.pcss'],

  // Google Fonts
  googleFonts: {
    display: 'swap',
    download: false,
    families: {
      Montserrat: true,
    },
  },

  // Modules:
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-feather-icons',
    '@nuxtjs/tailwindcss',
  ],
});