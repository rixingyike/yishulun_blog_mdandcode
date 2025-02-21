import comp from "C:/Users/Admin/work/yishulun_blog/src/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客\",\"index\":true,\"sidebar\":true},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"git\":{\"updatedTime\":1740126700000,\"changelog\":[{\"hash\":\"c178bdf56fc2561b8edb869f99e09ad4eea026b8\",\"date\":1740126700000,\"email\":\"9830131@qq.com\",\"author\":\"李艺\",\"message\":\"2025-02-21: Automatic commit\",\"commitUrl\":\"https://github.com/rixingyike/yishulun_blog_mdandcode/commit/c178bdf56fc2561b8edb869f99e09ad4eea026b8\"},{\"hash\":\"a8648d3f60a085e95ef100f6b0dcbbfc5694a781\",\"date\":1739842293000,\"email\":\"9830131@qq.com\",\"author\":\"LIYI\",\"message\":\"2025-02-18: Automatic commit\",\"commitUrl\":\"https://github.com/rixingyike/yishulun_blog_mdandcode/commit/a8648d3f60a085e95ef100f6b0dcbbfc5694a781\"}]},\"filePathRelative\":\"posts/README.md\",\"categoryList\":[{\"id\":\"18958e\",\"sort\":10001,\"name\":\"posts\"}]}")
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
