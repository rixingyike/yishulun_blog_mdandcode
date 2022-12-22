import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文章", link: "/posts.html" },
  { text: "标签", link: "/tags.html" },
  { text: "分类", link: "/categories.html" },
  { text: "归档", link: "/archives.html" },
  { text: "留言", link: "/guestbook.html" },
  { text: "关于作者", link: "/about.html" },
  // {
  //   text: "电子书",
  //   icon: "book",
  //   prefix: "/",
  //   children: [
  //     { text: "《TS PBL一本通》", link: "ts/" },
  //   ],
  // },
]);
