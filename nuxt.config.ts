const BASE_URL = 'https://combogic.com'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      BASE_URL,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: BASE_URL,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'tw',
    locales: [
      {
        code: 'tw',
        iso: 'zh-Hant-TW',
        name: '中文',
        file: 'tw.json',
        dir: 'ltr'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
        dir: 'ltr'
      },
    ],
  },
  css: [
    '~/assets/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
        class: 'scroll-smooth'
      },
      title: 'Combogic Tech. 櫛構科技',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport' , content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
        { name: 'copyright', content: `Copyright ${ new Date().getFullYear() } © Combogic Technology Co., Ltd. All Rights Reserved.` },
        { name: 'og:image' , content: `${ BASE_URL }/images/combogic.png` },
        { name: 'og:title' , content: 'Combogic Tech. 櫛構科技' },
        { name: 'og:site_name', content: 'Combogic Tech. 櫛構科技' },
        { name: 'twitter:title', content: 'Combogic Tech. 櫛構科技' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
