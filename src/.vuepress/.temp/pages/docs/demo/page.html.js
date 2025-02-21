import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/docs/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/docs/demo/page.html\",\"title\":\"如何编写页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"cover\":\"/assets/images/cover1.jpg\",\"order\":3,\"createTime\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"sticky\":false,\"star\":false},\"headers\":[],\"readingTime\":{\"minutes\":2.08,\"words\":625},\"git\":{\"updatedTime\":1740126700000,\"changelog\":[{\"hash\":\"c178bdf56fc2561b8edb869f99e09ad4eea026b8\",\"date\":1740126700000,\"email\":\"9830131@qq.com\",\"author\":\"李艺\",\"message\":\"2025-02-21: Automatic commit\",\"commitUrl\":\"https://github.com/rixingyike/yishulun_blog_mdandcode/commit/c178bdf56fc2561b8edb869f99e09ad4eea026b8\"},{\"hash\":\"a8648d3f60a085e95ef100f6b0dcbbfc5694a781\",\"date\":1739842293000,\"email\":\"9830131@qq.com\",\"author\":\"LIYI\",\"message\":\"2025-02-18: Automatic commit\",\"commitUrl\":\"https://github.com/rixingyike/yishulun_blog_mdandcode/commit/a8648d3f60a085e95ef100f6b0dcbbfc5694a781\"}]},\"filePathRelative\":\"docs/demo/page.md\",\"categoryList\":[{\"id\":\"e3e2a9\",\"sort\":10008,\"name\":\"docs\"},{\"id\":\"35d2e1\",\"sort\":10011,\"name\":\"demo\"}]}")
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
