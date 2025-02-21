import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/docs/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/demo/\",\"title\":\"博客如何使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客如何使用\",\"index\":false,\"sidebar\":false,\"category\":[\"使用指南\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"git\":{\"updatedTime\":1739842293000,\"changelog\":[{\"hash\":\"a8648d3f60a085e95ef100f6b0dcbbfc5694a781\",\"date\":1739842293000,\"email\":\"9830131@qq.com\",\"author\":\"LIYI\",\"message\":\"2025-02-18: Automatic commit\",\"commitUrl\":\"https://github.com/rixingyike/yishulun_blog_mdandcode/commit/a8648d3f60a085e95ef100f6b0dcbbfc5694a781\"}]},\"filePathRelative\":\"docs/demo/README.md\",\"categoryList\":[{\"id\":\"e3e2a9\",\"sort\":10008,\"name\":\"docs\"},{\"id\":\"35d2e1\",\"sort\":10011,\"name\":\"demo\"}]}")
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
