import { generateSidebar } from 'vitepress-sidebar'

// .vitepress/config.js
export default {
  // site-level options
  base: '/',
  lang: 'zh-CN',
  title: '艺述论博客',
  description: '80后，社恐+老码农一枚，有20年以上上网经历。',
  srcDir: ".",
  lastUpdated: true,

  themeConfig: {
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备第14007000号-7号</a>，由<a href="https://vitepress.dev/" target="_blank">VitePress 1.0 beta5</a>驱动。',
      copyright: 'Copyright © 2002-present LIYI'
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
  }
}
