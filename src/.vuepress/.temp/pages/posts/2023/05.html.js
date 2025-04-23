import comp from "C:/Users/98301/work/yishulun_blog_mdandcode/src/.vuepress/.temp/pages/posts/2023/05.html.vue"
const data = JSON.parse("{\"path\":\"/posts/2023/05.html\",\"title\":\"Bun 1.0 发布了，以后 Node.js 项目谁还用 Webpack 与 pnpm？！是时候祭出大杀器 Bun了（一）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"createTime\":\"2023-09-23T09:39:33.000Z\",\"tags\":[\"bun\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":8.83,\"words\":2650},\"filePathRelative\":\"posts/2023/05.md\",\"categoryList\":[{\"id\":\"18958e\",\"sort\":10002,\"name\":\"posts\"},{\"id\":\"ac244c\",\"sort\":10018,\"name\":\"2023\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
