import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"index\":true,\"sidebar\":true},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"git\":{},\"filePathRelative\":\"posts/README.md\",\"categoryList\":[{\"id\":\"18958e\",\"sort\":10000,\"name\":\"posts\"}],\"bulletin\":true}")
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
