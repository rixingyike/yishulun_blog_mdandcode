// src\.vuepress\global_config.js
import vueJsx from "@vitejs/plugin-vue-jsx";

// 博客配置信息在这里定义
const blog_url = "https://yishulun.com"
const blog_name = "艺述论"
const description = "分享技术，论述艺术"
const author_name = "李艺"
const avatar = "/avatar.png"

export default {
  base: "/",
  lang: "zh-CN",
  title: blog_name,
  description,
  hostname: blog_url,
  blog_logo: avatar,
  sourceDir: 'src',
  // permalinkPattern: '/posts/:year/:slug.html',

  // 这是底部信息的内容，在page内可以重写
  footer: false,
  // 这是底部copyright是否显示
  displayFooter: true,

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: author_name,
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: description,
      },
    ],
    // add google analytics
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
    ], // add google analytics end
    // add google ads
    [
      'script',
      {
        async: true,
        crossorigin: "anonymous",
        src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2139303336591479',
      },
    ],
  ],

  author: {
    name: author_name,
    url: blog_url,
  },

  bundlerConfig: {
    viteOptions: {
      plugins: [vueJsx()]
    }
  },

  plugins: [
    ["md-enhance", { 
      tex: false, // 启用 Tex 语法（可选）
      container: true // 启用容器解析，避免误解析 HTML
    }],
    "@vuepress/plugin-shiki",
      {
        theme: "github-dark", // 你可以换成喜欢的主题，比如 "github-dark"
        langs: ["rust", "javascript", "typescript", "bash", "json", "html", "css", "markdown", "sql", "python", "java", "php", "go", "ruby", "csharp", "cpp", "swift", "dart"],
      },
  ],

  repo: "rixingyike/yishulun_src",

  blog: {
    description,
    intro: "/about.html",
    medias: {
      Email: "mailto:9830131@qq.com",
      GitHub: "https://github.com/rixingyike",
      RSS: "https://yishulun.com/feed.xml",
      Twitter: "https://x.com/coderliyi",
      Youtube: "https://www.youtube.com/@yishulun",
      Zhihu: "https://www.zhihu.com/people/liyi2005",
      VuePressThemeHope: {
        icon: blog_url + avatar,
        link: "/about.html",
      },
    },
  },

  // 加密示例
  encrypt: {
    config: {
      "/docs/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  markdown: {
    // 修改TOC匹配规则，与Typora一致
    toc: { pattern: /^\[TOC\]$/i },
    pageSuffix: '.html',
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 测边栏
  sidebar:{
    "/": [
      {
        text: "随笔",
        icon: "book",
        prefix: "posts/",
        children: "structure",
      },
      // {
      //   text: "文档",
      //   icon: "laptop-code",
      //   prefix: "docs/",
      //   children: "structure",
      // },
    ],
  },
  
  // 顶部导航
  navbar:[
    {
      text: "首页",
      icon: "house",
      link: "/",
    },
    {
      text: "随笔",
      icon: "laptop-code",
      link: "/posts/",
    },
    {
      text: "专栏",
      icon: "user-pen",
      link: "/docs/",
    },
    {
      text: "联系作者",
      icon: "address-card",
      link: "/about.html",
    },
    {
      text: "更多",
      // icon: "link",
      children: [
        {
          text: "全部文章",
          icon: "note-sticky",
          link: "/article/",
        },
        {
          text: "星标文章",
          icon: "star",
          link: "/star/",
        },
        {
          text: "分类",
          icon: "bars-staggered",
          link: "/category/",
        },
        {
          text: "标签",
          icon: "tag",
          link: "/tag/",
        },
        {
          text: "时间表",
          icon: "align-justify",
          link: "/timeline/",
        },
        {
          text: "Github",
          icon: "code-branch",
          link: "https://github.com/rixingyike",
        },
      ],
    },
  ],
}