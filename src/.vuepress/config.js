import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import gc from './global_config' // 引用全局配置

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: gc.title, // 从全局配置中引用
  description: gc.description, // 从全局配置中引用

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: gc.site_favicon }], // 从全局配置中引用
    ['meta', { name: 'og:author', content: gc.author }], // 添加 author 信息
    ['meta', { property: 'og:description', content: gc.description }], // 添加 og:description 信息
    // 添加 Google Analytics
    ['script', { defer: true, crossorigin: 'anonymous', src: `//www.googletagmanager.com/gtag/js?id=${gc.googleAnalyticsId}` }], // 从全局配置中引用
    ['script', {}, `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${gc.googleAnalyticsId}');`], // 从全局配置中引用
    // 添加 Google Ads
    ['script', { defer: true, crossorigin: 'anonymous', src: `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gc.googleAdsClient}` }], // 从全局配置中引用
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    plugins: {
      comment: {
        comment: gc.comment, // 从全局配置中引用
        provider: 'Giscus',
        repo: gc.commentRepo,
        repoId: gc.commentRepoId,
        category: gc.commentCategory,
        categoryId: gc.commentCategoryId,
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
    git: true,

    // 是否启用 feed 订阅功能
    feed: {
      hostname: gc.hostname,
      devServer: gc.devServer, // 从全局配置中引用
      devHostname: gc.devHostname,
      rss: true,
      atom: true,
      json: true,
    },
    shiki: {
      languages: ["rust","bash","xml","go","c","js","ruby","json","python","shell","java","py","html","yaml","ts","jsx","javascript"],
      whitespace: true,
      lineNumbers: true,
    },
    search: true,
    readingTime: true,
    markdownPower: {
      pdf: true,
      caniuse: true,
      plot: true,
      bilibili: true,
      youtube: true,
      audioReader: true,
      icons: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      npmTo: true,
      demo: true,
      repl: {
        go: true,
        rust: true,
        kotlin: true,
      },
      imageSize: 'local',
    },
  }),
})
