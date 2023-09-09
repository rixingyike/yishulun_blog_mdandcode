import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "article",
      prefix: "posts/",
      children: "structure",
    },
    "about",
    // "slides",
  ],
});
