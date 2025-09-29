// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-29',
  devtools: { enabled: true },
  workspaceDir: '.',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/fonts',
  ],

  typescript: {
    typeCheck: true,
  },

  fonts: {
    families: [{ name: 'Montserrat', provider: 'local' }],
  },

  tailwindcss: {
    cssPath: [`~/assets/css/tailwind.css`],
    config: {},
    viewer: true,
    exposeConfig: false,
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  piniaPluginPersistedstate: {
    storage: 'cookies',
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 30,
    },
  },
});
