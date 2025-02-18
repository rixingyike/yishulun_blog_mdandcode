import comp from "C:/Users/98301/work/yishulun_com_blog/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"博客功能演示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客功能演示\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客功能演示\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"博客功能演示\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":19},\"filePathRelative\":\"demo/README.md\",\"excerpt\":\"<!-- <Catalog /> -->\\n\"}")
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
