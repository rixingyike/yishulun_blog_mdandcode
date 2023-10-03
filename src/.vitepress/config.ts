import { getPosts, getPostLength } from "./theme/serverUtils";
import { buildBlogRSS } from "./theme/rss";
import { generateSidebar } from 'vitepress-sidebar'
import { URL, fileURLToPath } from 'node:url'
import fs from 'fs';

const desc = "yishulun Blog"
const DOMAIN = "https://yishulun.com"

async function config() {
  return {
    lang: "en-US",
    title: "艺述论",
    description: desc,
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
          content: "LIYI",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: desc,
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
    // cleanUrls: "with-subfolders",
    appearance: "light",
    lastUpdated: false,
    ignoreDeadLinks: true,
    themeConfig: {
      author:"LIYI",
      logo: "/logo.png",
      avator: "/avatar.png",
      search: {
        provider: "local",
      },
      base: '/',
      srcDir: ".", // 在src目录下，src目录是在package.json中指定的项目目录
      docsDir: "./src/docs",
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 7,
      postLength: await getPostLength(),
      nav: [
        {
          text: "🏡 Home",
          link: "/",
        },
        {
          text: '🚩 Blogs',
          items: [
            {
              text: "🔖 Tags",
              link: "/tags",
            },
            {
              text: "📃 Archives",
              link: "/archives",
            },
            {
              text: "🔥 RSS",
              link: "/feed.xml",
            },
          ]
        },
        { text: '📖 Docs', link: '/docs/' },
        { text: '🧑 About', link: '/about' },
      ],
      sidebar: generateSidebar({
        rootGroupCollapsed: true,
        rootGroupText: 'Contents',
        documentRootPath: '/src',
        resolvePath: "/",
        collapseDepth: 2,
        hyphenToSpace: true,
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: true,
        excludeFiles: ['about.md','index.md','privacy.md','archives.md','tags.md'],
        // useFolderLinkAsIndexPage: true,
        // includeFolderIndexFile: true,
      }),
      socialLinks: [
        // { icon: "github", link: "https://github.com/rixingyike" },
        { icon: "twitter", link: "https://twitter.com/coderliyi" },
        { icon: "youtube", link: "https://www.youtube.com/@yishulun" },
      ],
      outline: 3, //设置右侧aside显示层级
      aside: false,
      showFireworksAnimation: false, // 是否显示烟花
      showCustomCategory: true, // 是否显示自定义右目录导航模块
      docFooter:{
        prev:false,
        next:false,
      },
    },
    markdown: {
      // 修改TOC匹配规则，与Typora一致
      toc: { pattern: /^\[TOC\]$/i },
      // config: (md) => {
      //   md.use(require("markdown-it-mathjax3"));
      // },
    },
    // Vite
    vite: {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./theme', import.meta.url)),
        },
      },
    },
    async buildEnd(siteConfig) {
      // build rss
      buildBlogRSS();

      // build sitemap 配置网站基础路径
      const baseURL = DOMAIN;
      let siteMapStr = '';
      for (const page of siteConfig.pages) {
        siteMapStr += `${baseURL}/${page.replace(/md$/, 'html')}\n`;
      }
      // 生成文件
      try {
        fs.writeFileSync(`${siteConfig.outDir}/sitemap.txt`, siteMapStr);
      } catch (err) {
        console.log('create sitemap.txt failed!', err);
      }
    },
  };
}
export default config();
