import { generateSidebar } from 'vitepress-sidebar'
import { URL, fileURLToPath } from 'node:url'

// .vitepress/config.js
export default {
  // add google analytics
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8N64Q25EK9',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8N64Q25EK9');",
    ],
  ],
  // site-level options
  base: '/',
  lang: 'zh-CN',
  title: '艺述论博客',
  description: '80后社恐+老码农一枚，有20年以上上网经历。',
  srcDir: ".",
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    returnToTopLabel: "Return to top",
    editLink: {
      pattern: 'https://github.com/rixingyike/rixingyike.github.io/edit/main/src/:path',
      text: 'Edit on GitHub'
    },
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备第14007000号-7号</a>，由<a href="https://vitepress.dev/" target="_blank">VitePress</a>驱动。',
      copyright: 'Copyright © 2002-2023 LIYI'
    },
    logo: '/logo.png',
    outlineTitle: '目录',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '博客', link: '/posts/' },
      { text: '文档', link: '/docs/' },
      { text: '关于', link: '/about.html' },
      { text: 'Github', link: 'https://github.com/rixingyike' },
    ],
    sidebar: generateSidebar({
      rootGroupText: 'Contents',
      documentRootPath: '/src',
      resolvePath: "/",
      collapseDepth: 2,
      hyphenToSpace: true,
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      excludeFiles: ['about.md', 'index.md'],
    }),
  },
  markdown: {
    // 修改TOC匹配规则，与Typora一致
    toc: { pattern: /^\[TOC\]$/i },
  },

  // Vite
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./theme', import.meta.url)),
      },
    },
  },
}
