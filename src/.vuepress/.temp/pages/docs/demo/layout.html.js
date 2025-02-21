import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/docs/demo/layout.html.vue"
const data = JSON.parse("{\"path\":\"/docs/demo/layout.html\",\"title\":\"layout\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"category\":[\"指南\"],\"tag\":[\"布局\"],\"title\":\"layout\",\"createTime\":\"2025/02/19 13:58:17\"},\"headers\":[],\"readingTime\":{\"minutes\":0.55,\"words\":164},\"git\":{},\"filePathRelative\":\"docs/demo/layout.md\",\"categoryList\":[{\"id\":\"e3e2a9\",\"sort\":10002,\"name\":\"docs\"},{\"id\":\"35d2e1\",\"sort\":10004,\"name\":\"demo\"}],\"bulletin\":true}")
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
