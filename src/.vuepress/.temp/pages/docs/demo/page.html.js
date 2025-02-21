import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/docs/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/docs/demo/page.html\",\"title\":\"如何编写页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"cover\":\"/assets/images/cover1.jpg\",\"order\":3,\"createTime\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":false,\"star\":false},\"headers\":[],\"readingTime\":{\"minutes\":2.08,\"words\":625},\"git\":{},\"filePathRelative\":\"docs/demo/page.md\",\"categoryList\":[{\"id\":\"e3e2a9\",\"sort\":10002,\"name\":\"docs\"},{\"id\":\"35d2e1\",\"sort\":10004,\"name\":\"demo\"}],\"bulletin\":true}")
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
