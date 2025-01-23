// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    debug: true,
    defaultLocale: 'en',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'all',
    },
    locales: [
        {
            code: 'en',
            name: 'English',
        },
        {
            code: 'fr',
            name: 'Français',
        },
    ],
    strategy: 'prefix_except_default',
  }
})
