import comp from "C:/Users/98301/work/yishulun_com_blog/src/.vuepress/.temp/pages/11.html.vue"
const data = JSON.parse("{\"path\":\"/11.html\",\"title\":\"使用 acme.sh & freessl.cn 申请免费 SSL 证书及自动续期\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebar\":true,\"date\":\"2023-10-12T00:20:23.000Z\",\"gitInclude\":[],\"description\":\"使用 acme.sh & freessl.cn 申请免费 SSL 证书及自动续期 域名地址基于 https 协议访问需要 SSL 证书，大多数情况下是一个 cer、一个 key 文件，在服务器端部署 web 站点的时候，在编写 Apache 或 nginx 配置文件时，需要提供这两个文件。 freessl.cn 是一个可以让我们免费申请 SSL 证书的...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/11.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"使用 acme.sh & freessl.cn 申请免费 SSL 证书及自动续期\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"使用 acme.sh & freessl.cn 申请免费 SSL 证书及自动续期 域名地址基于 https 协议访问需要 SSL 证书，大多数情况下是一个 cer、一个 key 文件，在服务器端部署 web 站点的时候，在编写 Apache 或 nginx 配置文件时，需要提供这两个文件。 freessl.cn 是一个可以让我们免费申请 SSL 证书的...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-10-12T00:20:23.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"使用 acme.sh & freessl.cn 申请免费 SSL 证书及自动续期\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-10-12T00:20:23.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"如何使用 acme.sh？\",\"slug\":\"如何使用-acme-sh\",\"link\":\"#如何使用-acme-sh\",\"children\":[]},{\"level\":2,\"title\":\"名词解释\",\"slug\":\"名词解释\",\"link\":\"#名词解释\",\"children\":[]}],\"readingTime\":{\"minutes\":3.4,\"words\":1019},\"filePathRelative\":\"posts/2023/11.md\",\"localizedDate\":\"2023年10月12日\",\"excerpt\":\"\\n<p>域名地址基于 https 协议访问需要 SSL 证书，大多数情况下是一个 cer、一个 key 文件，在服务器端部署 web 站点的时候，在编写 Apache 或 nginx 配置文件时，需要提供这两个文件。</p>\\n<p><a href=\\\"http://freessl.cn\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">freessl.cn</a> 是一个可以让我们免费申请 SSL 证书的地方。但是免费证书都有一定的时效，如果证书过期了而我们忘记了重新申请并重新在服务器上部署 SSL 证书，便会影响网站的正常运行。</p>\\n<p>于是有人开发了一个 <a href=\\\"http://acme.sh\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">acme.sh</a> 工具，这个东西看起来像个域名，其实是一个实现了 ACME 协议的脚本工具。所谓的 ACME 协议，简单理解就是：可以验证域名所有权，在线自动申请一个 SSL 证书并下载到本地。<a href=\\\"http://acme.sh\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">acme.sh</a> 脚本工具在本地创建一个定时任务，定时检查证书是否过期，如果发现要过期了，就自己申请一个，把本地的旧证书替换掉。</p>\",\"autoDesc\":true}")
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
ne-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
