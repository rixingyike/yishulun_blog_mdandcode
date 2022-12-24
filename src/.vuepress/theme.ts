import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://yishulun.com",

  author: {
    name: "LIYI",
    url: "https://yishulun.com",
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "rixingyike/rixingyike.github.io",
  docsDir: "src",

  pageInfo: ["Author", "Word", "ReadingTime"],
  breadcrumb: false,
  copyright: "",
  displayFooter: false,

  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Repo","Search"],
  },

  blog: {
    medias: {
      QQ: "tencent://message/?uin=9830131",
    },
    articleInfo:["Date"],
    timeline: "昨日像那东流水",
    sidebarDisplay: "none",
  },

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      footer: `<p><img width=80 src="/yslqrcode.jpg"><br/>关注公众号艺述论，保持更新<br/>加作者v9830131，回复【读者】进修仙群</p><p>Copyright © ${(new Date()).getFullYear()} 艺述论，由<a href='https://vuepress-theme-hope.github.io/v2/' target='_blank'>VuePress Theme Hope 2.0</a>驱动<br/><a href='https://beian.miit.gov.cn/' target='_blank'>京ICP备第14007000号-7号</a></p><br/><br/><br/><br/><br/>`,
      displayFooter: true,

      blog: {
        description: "计算机讲师/作家",
        intro: "/about.html",
      },

      // page meta
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    copyright: {
      global: true,
      author: "LIYI",
      license: "CC BY-SA 4.0",
    },
    blog: {
      tag:"/tags.html",
      tagItem:"/tags/:name.html",
      category:"/categories.html",
      categoryItem:"/categories/:name.html",
      timeline:"archives.html",
      article:"posts.html",
      excerptLength:120,
      star:"stars.html",
    },
    feed: {
      rss: true,
      atom: true,
      rssOutputFilename: "index.xml",
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "rixingyike/yishulun.com_comments",
      repoId: "R_kgDOH5b_lw",
      category: "Announcements",
      categoryId: "DIC_kwDOH5b_l84CTLca",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
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

    // uncomment these if you want a PWA
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
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
