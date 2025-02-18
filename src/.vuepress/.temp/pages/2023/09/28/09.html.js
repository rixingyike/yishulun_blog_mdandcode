import comp from "C:/Users/98301/work/yishulun_com_blog/src/.vuepress/.temp/pages/2023/09/28/09.html.vue"
const data = JSON.parse("{\"path\":\"/2023/09/28/09.html\",\"title\":\"bun 介绍四：自动安装依赖项，bun 立志要做一个零配置的快速框架\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-09-28T08:53:46.000Z\",\"tags\":[\"bun\"],\"gitInclude\":[],\"description\":\"bun 介绍四：自动安装依赖项，bun 立志要做一个零配置的快速框架 在 webpack 工程中，无论是使用 pnpm，还是 yarn，在运行项目之前都需要执行 pnpm i 或 yarn，这是在安装依赖项，将项目代码中引用的类库放在当前项目的 node_modules 目录下。 一般情况下，对于复杂的项目这个过程耗时会比较久，这是 Node.js 作...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/2023/09/28/09.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"bun 介绍四：自动安装依赖项，bun 立志要做一个零配置的快速框架\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"bun 介绍四：自动安装依赖项，bun 立志要做一个零配置的快速框架 在 webpack 工程中，无论是使用 pnpm，还是 yarn，在运行项目之前都需要执行 pnpm i 或 yarn，这是在安装依赖项，将项目代码中引用的类库放在当前项目的 node_modules 目录下。 一般情况下，对于复杂的项目这个过程耗时会比较久，这是 Node.js 作...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"bun\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-09-28T08:53:46.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"bun 介绍四：自动安装依赖项，bun 立志要做一个零配置的快速框架\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-09-28T08:53:46.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1、什么情况下启动自动安装\",\"slug\":\"_1、什么情况下启动自动安装\",\"link\":\"#_1、什么情况下启动自动安装\",\"children\":[]},{\"level\":2,\"title\":\"2、如何确定类库版本\",\"slug\":\"_2、如何确定类库版本\",\"link\":\"#_2、如何确定类库版本\",\"children\":[]},{\"level\":2,\"title\":\"3、如何下载与缓存\",\"slug\":\"_3、如何下载与缓存\",\"link\":\"#_3、如何下载与缓存\",\"children\":[]},{\"level\":2,\"title\":\"4、最佳实践\",\"slug\":\"_4、最佳实践\",\"link\":\"#_4、最佳实践\",\"children\":[]}],\"readingTime\":{\"minutes\":7.56,\"words\":2269},\"filePathRelative\":\"posts/2023/09.md\",\"localizedDate\":\"2023年9月28日\",\"excerpt\":\"\\n<p>在 webpack 工程中，无论是使用 pnpm，还是 yarn，在运行项目之前都需要执行 pnpm i 或 yarn，这是在安装依赖项，将项目代码中引用的类库放在当前项目的 node_modules 目录下。</p>\\n<p>一般情况下，对于复杂的项目这个过程耗时会比较久，这是 Node.js 作为基础构架的痛点，也是 bun 着力解决与优化的亮点。在<a href=\\\"https://yishulun.com/posts/2023/05.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">第一篇</a>中，我们就已经详细介绍过了，bun 在这方面将其它包管理工具甩开了一个数量级。</p>\",\"autoDesc\":true}")
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
