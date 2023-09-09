import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://yishulun.com",

  author: {
    name: "LIYI",
    url: "https://yishulun.com/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "rixingyike/yishulun_src",

  docsDir: "src",

  // navbar
  navbar,
  navbarLayout:{ start: ["Brand"], center: ["Links"], end: ["Search"] },

  // sidebar
  sidebar,

  footer: `该站由<a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Hope</a>驱动<br/>采用<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh" target="_blank">署名-非商业性使用-禁止演绎(CC BY-NC-ND 4.0)协议共享</a><br/><a href="/privacy.html" target="_blank">Privacy</a>`,

  displayFooter: true,

  blog: {
    avatar:"/avatar.png",
    description: "码农一枚",
    intro: "/about.html",
    medias: {
      Twitter: "https://twitter.com/coderliyi",
      Youtube: "https://www.youtube.com/@yishulun",
      Pinterest: "https://www.pinterest.com/coderliyi",
      GitHub: "https://github.com/rixingyike/",
      // Facebook: "https://www.facebook.com/coderliyi/",
      // Linkedin: "https://www.linkedin.com/in/coderliyi/",
      // Weibo: "https://weibo.com/ixiaochengxu",
      // Zhihu: "https://www.zhihu.com/people/liyi2005",
      Rss: "https://example.com",
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: "在Github上编辑此页",
  },

  plugins: {
    blog: true,

    sitemap:true,
    seo:true,
    feed:{
      rss:true,
      atom:true,
      json:true,
    },

    // 只有此处开启的组件，才可以使用
    components:{
      components:["Share","Badge","YouTube","BiliBili","SiteInfo"],
      componentOptions:{
        share:{
          services:["facebook","twitter","qrcode","reddit","qq","weibo"],
        }
      },
    },
    // componentOptions:{
    //   share:{}
    // },

    // feed:{
    //   rss:true,
    //   atom:true,
    // },

    copyright:{
      author:"LIYI",
      license:"CC BY-NC-ND 4.0",
      disableCopy:true,
    },

    comment: {
      // You should generate and use your own comment service
      provider: "Giscus",
      repo: "rixingyike/yishulun.com_discus",
      repoId: "R_kgDOKRUETQ",
      category:"Announcements",
      categoryId:"DIC_kwDOKRUETc4CZMWJ"
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
      presentation: ["highlight", "math", "search", "notes", "zoom"],
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
  },
});
