import comp from "C:/Users/98301/work/yishulun_blog_mdandcode/src/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于作者\",\"lang\":\"zh-CN\",\"frontmatter\":{\"createTime\":\"2002-12-23T00:00:00.000Z\",\"comments\":false,\"title\":\"关于作者\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.76,\"words\":529},\"filePathRelative\":\"about.md\",\"categoryList\":[]}")
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
