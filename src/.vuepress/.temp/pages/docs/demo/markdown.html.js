import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/docs/demo/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/docs/demo/markdown.html\",\"title\":\"markdown\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"title\":\"markdown\",\"createTime\":\"2025/02/19 13:58:17\"},\"headers\":[],\"readingTime\":{\"minutes\":3.56,\"words\":1068},\"git\":{},\"filePathRelative\":\"docs/demo/markdown.md\",\"categoryList\":[{\"id\":\"e3e2a9\",\"sort\":10002,\"name\":\"docs\"},{\"id\":\"35d2e1\",\"sort\":10004,\"name\":\"demo\"}],\"bulletin\":true}")
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
