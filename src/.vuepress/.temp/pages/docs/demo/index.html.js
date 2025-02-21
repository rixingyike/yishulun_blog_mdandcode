import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/docs/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/demo/\",\"title\":\"博客如何使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客如何使用\",\"index\":false,\"sidebar\":false,\"category\":[\"使用指南\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"git\":{},\"filePathRelative\":\"docs/demo/README.md\",\"categoryList\":[{\"id\":\"e3e2a9\",\"sort\":10002,\"name\":\"docs\"},{\"id\":\"35d2e1\",\"sort\":10004,\"name\":\"demo\"}],\"bulletin\":true}")
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
