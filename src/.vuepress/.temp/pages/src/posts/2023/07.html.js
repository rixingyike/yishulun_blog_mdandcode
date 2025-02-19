import comp from "C:/Users/98301/work/yishulun_blog_mdandcode/.vuepress/.temp/pages/src/posts/2023/07.html.vue"
const data = JSON.parse("{\"path\":\"/src/posts/2023/07.html\",\"title\":\"bun 介绍三：dotenv 与 nodemon 都不再需要了\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-09-24T08:41:32.000Z\",\"tags\":[\"bun\"],\"gitInclude\":[],\"description\":\"bun 介绍三：dotenv 与 nodemon 都不再需要了 主要介绍了 bun 的启动模式及如何使用 jsx 语法。我在上一篇的朋友圈评论区说过，bun 与 Node.js 之争，最终可能就是内存与 CPU 之争；bun 能否推广起来，就看单用户成本中的 CPU 成本与内存成本哪个更贵。 这个是可以测算的，对于使用云主机的团队，很容易就能计算出来哪...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/src/posts/2023/07.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"bun 介绍三：dotenv 与 nodemon 都不再需要了\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"bun 介绍三：dotenv 与 nodemon 都不再需要了 主要介绍了 bun 的启动模式及如何使用 jsx 语法。我在上一篇的朋友圈评论区说过，bun 与 Node.js 之争，最终可能就是内存与 CPU 之争；bun 能否推广起来，就看单用户成本中的 CPU 成本与内存成本哪个更贵。 这个是可以测算的，对于使用云主机的团队，很容易就能计算出来哪...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"bun\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-09-24T08:41:32.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"bun 介绍三：dotenv 与 nodemon 都不再需要了\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-09-24T08:41:32.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1、对 text、json、toml 文件的直接支持\",\"slug\":\"_1、对-text、json、toml-文件的直接支持\",\"link\":\"#_1、对-text、json、toml-文件的直接支持\",\"children\":[]},{\"level\":2,\"title\":\"2、对 wasm 的支持\",\"slug\":\"_2、对-wasm-的支持\",\"link\":\"#_2、对-wasm-的支持\",\"children\":[]},{\"level\":2,\"title\":\"3、读取环境变量\",\"slug\":\"_3、读取环境变量\",\"link\":\"#_3、读取环境变量\",\"children\":[]},{\"level\":2,\"title\":\"4、热加载\",\"slug\":\"_4、热加载\",\"link\":\"#_4、热加载\",\"children\":[]}],\"readingTime\":{\"minutes\":5.16,\"words\":1548},\"filePathRelative\":\"src/posts/2023/07.md\",\"localizedDate\":\"2023年9月24日\",\"excerpt\":\"\\n<p><a href=\\\"/posts/2023/06.html\\\" target=\\\"_blank\\\">上一篇</a>主要介绍了 bun 的启动模式及如何使用 jsx 语法。我在上一篇的朋友圈评论区说过，bun 与 Node.js 之争，最终可能就是内存与 CPU 之争；bun 能否推广起来，就看单用户成本中的 CPU 成本与内存成本哪个更贵。</p>\\n<p>这个是可以测算的，对于使用云主机的团队，很容易就能计算出来哪个单位用户的成本更高。在开始测算的时候，可以采用 A/B 版本策略，A 版本使用 Node.js，B 版本使用 bun。在部署的时候，安装 bun 的机器可以把内存分配得高一些，依据昨天我的初步测试数据，B 版本的大内存主机，它的内存至少要比以往 Node.js 版本的主机大 4 倍以上。</p>\",\"autoDesc\":true}")
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
