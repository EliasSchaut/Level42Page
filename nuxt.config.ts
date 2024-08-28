// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  workspaceDir: '.',
  srcDir: './src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [{ name: 'Montserrat', provider: 'google' }],
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pinia: {
    autoImports: ['defineStore'],
  },

  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 30,
    },
  },
});
