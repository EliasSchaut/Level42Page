// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-29',
  devtools: { enabled: true },
  workspaceDir: '.',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
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

  i18n: {
    langDir: '',
    locales: [
      {
        code: 'en_US',
        iso: 'en-US',
        name: 'English',
        isCatchallLocale: true,
        file: 'en_US.json',
      },
      {
        code: 'de_DE',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de_DE.json',
      },
    ],
    defaultLocale: 'en_US',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en_US',
    },
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  },
});
