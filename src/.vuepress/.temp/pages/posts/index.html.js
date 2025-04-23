import comp from "C:/Users/98301/work/yishulun_blog_mdandcode/src/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"index\":true,\"sidebar\":true,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"posts/README.md\",\"categoryList\":[{\"id\":\"18958e\",\"sort\":10002,\"name\":\"posts\"}]}")
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
