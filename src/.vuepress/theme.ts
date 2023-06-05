import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  pure: true,
  breadcrumb: false,
  pageInfo: false,
  print: false,
  copyright: "",
  footer: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9936052907746352" crossorigin="anonymous"></script><p><img width=120 src="/yslqrcode.jpg"><br/>关注公众号<br/>加作者微信9830131，暗号“读者”进修仙群</p><p>Copyright © ${(new Date()).getFullYear()} 艺述论，由 <a href='https://vuepress-theme-hope.github.io/v2/' target='_blank'>VuePress Theme Hope</a> 驱动<br/><a href='https://beian.miit.gov.cn/' target='_blank'>京ICP备第14007000号-7号</a></p><br/><br/><br/>`,
  displayFooter: true,
  darkmode: "disable",
  // 不显示文章右侧浮动目录
  toc: true,
  lastUpdated: false,
  editLink: false,
  contributors: false,

  // 顶部导航栏
  navbarLayout: {
    start: ["Brand", "Links"],
    center: [],
    end: ["Search"],
  },

  blog: {
    avatar: "/avatar.png",
    description: "计算机讲师/作家，用唯物辩证法这个工具在艺术与技术领域挖啊挖。",
    medias: {
      QQ: "tencent://message/?uin=9830131",
      Twitter: "https://twitter.com/coderliyi",
    },
    articleInfo: [],
    timeline: "发布历史",
    sidebarDisplay: "none",
    roundAvatar: true,
  },

  author: {
    name: "LIYI",
    url: "https://yishulun.com",
  },

  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "rixingyike/rixingyike.github.io",
  repoDisplay: false,
  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,

      // footer: "Default footer",
      // displayFooter: true,

      // metaLocales: {
      //   editLink: "Edit this page on GitHub",
      // },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhSidebar,

    //   footer: "默认页脚",

    //   displayFooter: true,

    //   // page meta
    //   metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    //   },
    // },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    comment: {
      // Using Giscus
      provider: "Giscus",
      repo: "rixingyike/rixingyike.github.io",
      repoId: "R_kgDOH5MeXQ",
      category: "Announcements",
      categoryId: "DIC_kwDOH5MeXc4CTRJB",
    },

    copyright: {
      global: true,
      author: "LIYI",
      license: "CC BY-SA 4.0",
    },
    blog: {
      // tag:"/tags.html",
      // tagItem:"/tags/:name.html",
      // category:"/categories.html",
      // categoryItem:"/categories/:name.html",
      // timeline:"archives.html",
      // article:"posts.html",
      // star:"stars.html",
      excerptLength:80,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
