import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  // add google analytics & adsense
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
  
  base: "/",

  lang: "zh-CN",
  title: "艺述论博客",
  description: "著有《微信小游戏开发》等。",

  theme,

  markdown: {
    // 修改TOC匹配规则，与Typora一致
    toc: { pattern: /^\[TOC\]$/i },
  },
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-8N64Q25EK9',
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
