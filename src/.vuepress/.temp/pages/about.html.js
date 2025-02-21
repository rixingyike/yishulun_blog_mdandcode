import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于作者\",\"lang\":\"zh-CN\",\"frontmatter\":{\"createTime\":\"2002-12-23T00:00:00.000Z\",\"cover\":\"/assets/images/cover3.jpg\",\"comments\":false,\"title\":\"关于作者\"},\"headers\":[],\"readingTime\":{\"minutes\":1.75,\"words\":524},\"git\":{},\"filePathRelative\":\"about.md\",\"categoryList\":[],\"bulletin\":true}")
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
