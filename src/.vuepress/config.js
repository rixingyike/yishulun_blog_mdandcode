import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import gc from './global_config' // 引用全局配置

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: gc.title, // 从全局配置中引用
  description: gc.description, // 从全局配置中引用

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: "CC-BY-NC-SA-4.0",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: gc.site_favicon }], // 从全局配置中引用
    ['meta', { name: 'og:author', content: gc.author }], // 添加 author 信息
    ['meta', { property: 'og:description', content: gc.description }], // 添加 og:description 信息
    // 添加 Google Analytics
    ['script', { async: true, src: `//www.googletagmanager.com/gtag/js?id=${gc.googleAnalyticsId}` }], // 从全局配置中引用
    ['script', {}, `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${gc.googleAnalyticsId}');`], // 从全局配置中引用
    // 添加 Google Ads
    ['script', { async: true, crossorigin: 'anonymous', src: `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gc.googleAdsClient}` }], // 从全局配置中引用
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    hostname: gc.hostname,
    permalink: ":slug.html",

    // 自动生成文章的permalinks，只有新创作的article和notes目录下的文章才会生成
    // 生成的文章地址均会以/article/开头，与它在哪个目录下无关
    autoFrontmatter: {
      include: ['article/*.md','notes/*.md'],
      exclude: ['posts/**/*.md','docs/**/*.md'],
      permalink: false,
      createTime: true,
      title: true,
    },

    git: true,
    changelog: {
      maxCount: 10,
      repoUrl: gc.repoUrl, // 从全局配置中引用
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },

    docsRepo: gc.repoUrl, // 从全局配置中引用
    docsBranch: gc.repoBranch, // 从全局配置中引用
    docsDir: 'docs',

    editLink: true,
    lastUpdated: true,
    contributors: false,

    article: gc.article,

    blog: {
      link: gc.article,
      /**
       * 博客文章 & 随笔
       * 通过 glob string 配置包含文件，
       * 默认读取 源目录中的所有 `.md` 文件，但会排除 `notes` 配置中用于笔记的目录。
       */
      // include: ['**/*.md'],
      // 如果希望只将源目录下某个目录下的文章读取为博客文章，比如 `blog` 目录，可以配置为：
      include: ['blog/**/*.md','posts/**/*.md','docs/**/*.md'],

      /**
       * 通过 glob string 配置排除的文件，相对于 源目录
       */
      exclude: ['.vuepress/', 'EXAMPLE.md', 'assets'],

      // 禁用分页
      // pagination: false,
      // 每页显示的文章数量
      pagination: 15,

      tags: true,
      tagsLink: '/tags.html',
      archives: true,
      archivesLink: '/archives.html',
      categories: true,
      categoriesLink: '/categories.html',

      // 配置 封面图 布局位置
      // postCover: 'left', // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'
      postCover: {
        layout: 'left',
        ratio: '16:9',
        width: 300,
        compact: true
      },
    },

    cache: 'memory',

    plugins: {

      git: true,
      feed: {
        hostname: gc.hostname,
        devServer: gc.devServer, // 从全局配置中引用
        rss: true,
        atom: true,
        json: true,
        devHostname: gc.devHostname,
      },
      shiki: {
        languages: ['shell', 'bash', 'ts', 'js', 'html', 'css', 'json', 'yaml', 'markdown', 'python', 'java', 'php', 'go', 'rust', 'kotlin', 'swift', 'ruby', 'sql', 'dockerfile', 'plaintext'],
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
      comment: {
        provider: 'Giscus',
        comment: gc.comment, // 从全局配置中引用
        repo: gc.commentRepo,
        repoId: gc.commentRepoId,
        category: gc.commentCategory,
        categoryId: gc.commentCategoryId,
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
  }),
})
