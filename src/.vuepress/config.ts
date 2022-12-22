import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "艺述论",
      description: "编写立体式渐进式交互式PBL实战项目，提高读者职业技能学习效率。",
    },
  },

  theme,

  shouldPrefetch: false,
});
