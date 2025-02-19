import comp from "C:/Users/98301/work/yishulun_blog_mdandcode/.vuepress/.temp/pages/src/posts/2023/50.html.vue"
const data = JSON.parse("{\"path\":\"/src/posts/2023/50.html\",\"title\":\"ChatGPT的底层工作原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-12-02T22:28:58.000Z\",\"tags\":[\"ChatGPT\"],\"gitInclude\":[],\"description\":\"ChatGPT的底层工作原理 ChatGPT 能够自动生成一些读起来像人类写的文字的东西，而且常常出乎意料。它是如何做到的？ ChatGPT 从根本上说总是试图对它目前得到的任何文本进行 “合理的延续”，这里的 “合理” 是指 “在看到人们在数十亿个网页上所写的东西之后，人们可能会期望某人写出什么”。严格上讲，它并不是在思考。 基于已有内容延伸，得到一...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/src/posts/2023/50.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ChatGPT的底层工作原理\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"ChatGPT的底层工作原理 ChatGPT 能够自动生成一些读起来像人类写的文字的东西，而且常常出乎意料。它是如何做到的？ ChatGPT 从根本上说总是试图对它目前得到的任何文本进行 “合理的延续”，这里的 “合理” 是指 “在看到人们在数十亿个网页上所写的东西之后，人们可能会期望某人写出什么”。严格上讲，它并不是在思考。 基于已有内容延伸，得到一...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ChatGPT\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-12-02T22:28:58.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"ChatGPT的底层工作原理\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-12-02T22:28:58.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"基于已有内容延伸，得到一个候选列表\",\"slug\":\"基于已有内容延伸-得到一个候选列表\",\"link\":\"#基于已有内容延伸-得到一个候选列表\",\"children\":[]},{\"level\":2,\"title\":\"利用温度选择一个反续\",\"slug\":\"利用温度选择一个反续\",\"link\":\"#利用温度选择一个反续\",\"children\":[]},{\"level\":2,\"title\":\"如何基于概率生成内容？\",\"slug\":\"如何基于概率生成内容\",\"link\":\"#如何基于概率生成内容\",\"children\":[]},{\"level\":2,\"title\":\"什么是模型？\",\"slug\":\"什么是模型\",\"link\":\"#什么是模型\",\"children\":[]},{\"level\":2,\"title\":\"人类的识别模型是如何建立的\",\"slug\":\"人类的识别模型是如何建立的\",\"link\":\"#人类的识别模型是如何建立的\",\"children\":[]},{\"level\":2,\"title\":\"神经网路是如何工作的？\",\"slug\":\"神经网路是如何工作的\",\"link\":\"#神经网路是如何工作的\",\"children\":[]}],\"readingTime\":{\"minutes\":22.52,\"words\":6756},\"filePathRelative\":\"src/posts/2023/50.md\",\"localizedDate\":\"2023年12月3日\",\"excerpt\":\"\\n<p>ChatGPT 能够自动生成一些读起来像人类写的文字的东西，而且常常出乎意料。它是如何做到的？</p>\\n<p>ChatGPT 从根本上说总是试图对它目前得到的任何文本进行 “合理的延续”，这里的 “合理” 是指 “在看到人们在数十亿个网页上所写的东西之后，人们可能会期望某人写出什么”。严格上讲，它并不是在思考。</p>\\n<h2>基于已有内容延伸，得到一个候选列表</h2>\\n<p>因此，假设我们已经得到了 “人工智能最好的是它能去做 ……” 的文本（“The best thing about AI is its ability to”）。想象一下，扫描数十亿页的人类书写的文本（例如在网络上和数字化书籍中），并找到这个文本的所有实例 —— 然后看到什么词在接下来的时间里出现了多少。</p>\",\"autoDesc\":true}")
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
