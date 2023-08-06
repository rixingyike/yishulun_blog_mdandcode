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
        src: '//www.googletagmanager.com/gtag/js?id=G-8N64Q25EK9',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8N64Q25EK9');",
    ],
    ['script', 
      { 
        async: true,
        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9936052907746352",
        crossorigin:"anonymous",
      }
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
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    returnToTopLabel: "Return to top",
    editLink: {
      pattern: 'https://github.com/rixingyike/rixingyike.github.io/edit/main/src/:path',
      text: 'Edit on GitHub'
    },
    footer: {
      message: '该站由<a href="https://vitepress.dev/" target="_blank">VitePress</a>驱动，采用<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh" target="_blank">署名-非商业性使用-禁止演绎(CC BY-NC-ND 4.0)共享。</a>',
      copyright: `<a href="/privacy.html" target="_blank">Privacy</a> Copyright © 2002-${new Date().getFullYear()} LIYI`
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
      excludeFiles: ['about.md','index.md'],
      // useFolderLinkAsIndexPage: false,
      // includeFolderIndexFile: false,
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
