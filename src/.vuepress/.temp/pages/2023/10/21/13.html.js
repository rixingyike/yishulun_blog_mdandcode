import comp from "C:/Users/98301/work/yishulun_com_blog/src/.vuepress/.temp/pages/2023/10/21/13.html.vue"
const data = JSON.parse("{\"path\":\"/2023/10/21/13.html\",\"title\":\"使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-10-21T20:07:50.000Z\",\"gitInclude\":[],\"description\":\"使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？ 这要用到元素属性值正则匹配选择器，它包括下面 3 种： [attr^=\\\"val\\\"] 前匹配 [attr$=\\\"val\\\"] 后匹配 [attr*=\\\"val\\\"] 任意匹配 其中，尖角符号^、美元符号$ 以及星号*都是正则表达式中的特殊标识符，分别表示前匹配、后匹配和任意匹配。 由于...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/2023/10/21/13.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？ 这要用到元素属性值正则匹配选择器，它包括下面 3 种： [attr^=\\\"val\\\"] 前匹配 [attr$=\\\"val\\\"] 后匹配 [attr*=\\\"val\\\"] 任意匹配 其中，尖角符号^、美元符号$ 以及星号*都是正则表达式中的特殊标识符，分别表示前匹配、后匹配和任意匹配。 由于...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-10-21T20:07:50.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-10-21T20:07:50.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.32,\"words\":395},\"filePathRelative\":\"posts/2023/13.md\",\"localizedDate\":\"2023年10月22日\",\"excerpt\":\"<figure><figcaption></figcaption></figure>\\n<h1>使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？</h1>\\n<p>这要用到元素属性值正则匹配选择器，它包括下面 3 种：</p>\\n<ul>\\n<li>[attr^=\\\"val\\\"] 前匹配</li>\\n<li>[attr$=\\\"val\\\"] 后匹配</li>\\n<li>[attr*=\\\"val\\\"] 任意匹配</li>\\n</ul>\\n<p>其中，尖角符号^、美元符号$ 以及星号*都是正则表达式中的特殊标识符，分别表示前匹配、后匹配和任意匹配。</p>\\n<p>由于现代网页源码都是编译过后的产物，发到用户浏览器中的源码经常有这样的元素节点：</p>\",\"autoDesc\":true}")
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
