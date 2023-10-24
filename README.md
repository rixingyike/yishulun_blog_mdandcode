# 博客

由vitepress & vitepress-blog-zaun 改造。

- 文章底部添加了引用信息；
- 支持生成sitemap.txt；
- 支持社交分享；
- 支持生成feed.atom/json/xml；
- 支持评论；
- 支持搜索。

## 修改记录

遇到了错误 ReferenceError: window is not defined

原因在于vitepress是SSR框架，在服务器端取不到window对象，将用到window的代码封闭在onMounted之内即可。

## Detail

This is a blog theme used vitepress to build. You could [click here](https://visionary-sunflower-dc7ae3.netlify.app/) to see what it looks like.

## Highlights

- [x] pagination
- [x] dark mode
- [x] archives
- [x] tags
- [x] content level
- [x] comments
- [x] lastUpdated
- [x] github actions
- [x] mobile + desktop
- [x] RSS
- [x] Local Search
- [x] Math Equation(markdown-it-mathjax3)
## Start

```shell
npx degit clark-cui/vitepress-blog-zaun my-vitepress-blog
cd my-vitepress-blog
pnpm i # If you didn't install pnpm,you can run: npm install -g pnpm
pnpm dev
```

If you want to view rss result or use local search in development mode, you should run

```shell
pnpm run build
pnpm run serve
```
