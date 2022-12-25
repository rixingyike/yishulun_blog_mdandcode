import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "博客",
    // icon: "blog",
    // prefix: "https://yishulun.com",
    link: "https://yishulun.com",
    children: [
      {text: "文章", link: "/posts.html"},
      {text: "标签", link: "/tags.html"},
      {text: "分类", link: "/categories.html"},
      {text: "归档", link: "/archives.html"},
      {text: "友情链接", link: "/friendlinks.html"},
      {text: "留言", link: "/guestbook.html"},
      {text: "联系作者", link: "/about.html"},
    ],
  },
  {
    text: "电子书",
    // icon: "read",
    prefix: "https://yishulun.com",
    children: [
      // {text: "TS PBL一本通", link: "/ts/"},
      {text: "给初学者看的Web开发教程", link: "/Web-Dev-For-Beginners-CN/"},
    ],
  },
]);
