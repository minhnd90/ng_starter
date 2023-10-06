// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/styles/main.scss'],
  modules: [
    // https://nuxt.com/modules/vuetify-nuxt-module
    'vuetify-nuxt-module',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
  ],
  vuetify: {
    vuetifyOptions: {
      display: {
        mobileBreakpoint: 'md',
        thresholds: {
          xs: 0,
          sm: 340,
          md: 540,
          lg: 768,
          xl: 1280,
          xxl: 1440,
        },
      },
      labComponents: true,
    },
    moduleOptions: {
      styles: {
        configFile: 'assets/styles/settings.scss',
      },
    },
  },
  experimental: {
    inlineSSRStyles: process.env.NODE_ENV !== 'production',
  },
});
