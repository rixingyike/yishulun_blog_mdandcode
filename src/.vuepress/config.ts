import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { tocPlugin } from '@mdit-vue/plugin-toc';

export default defineUserConfig({
  base: "/",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
    // tocPlugin({
    //   // 配置项
    //   componentName: "TOC",
    //   defaultPropsOptions: {
    //     tocRegexp: /^\[toc\]/im,
    //   },
    // }),
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "艺述论",
      description: "计算机讲师/作家，用唯物辩证法这个工具在艺术与技术领域持续挖啊挖。",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  markdown: {
    // 修改TOC匹配规则，与Typora一致
    toc: { pattern: /^\[TOC\]$/i },
  },
});
