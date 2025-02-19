import comp from "C:/Users/98301/work/yishulun_blog_mdandcode/src/.vuepress/.temp/pages/posts/2023/Github Pages博客如何绑定根域名.html.vue"
const data = JSON.parse("{\"path\":\"/posts/2023/Github%20Pages%E5%8D%9A%E5%AE%A2%E5%A6%82%E4%BD%95%E7%BB%91%E5%AE%9A%E6%A0%B9%E5%9F%9F%E5%90%8D.html\",\"title\":\"Github Pages 博客如何绑定根域名？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-06-13T09:44:46.000Z\",\"gitInclude\":[],\"description\":\"Github Pages 博客如何绑定根域名？ Godaddy 的域名不需要域名备案，这是它方便的地方，但它不充许在根域名上直接添加 CNAME 记录，换句话说，原来在国内域名商下的域名，转移到 Godaddy 后，在 Github Pages 上绑定的根域名不再有效了。 以我的博客为例说明一下。原来我可以直接将根域名 yishulun.com 绑定到...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/posts/2023/Github%20Pages%E5%8D%9A%E5%AE%A2%E5%A6%82%E4%BD%95%E7%BB%91%E5%AE%9A%E6%A0%B9%E5%9F%9F%E5%90%8D.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Github Pages 博客如何绑定根域名？\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Github Pages 博客如何绑定根域名？ Godaddy 的域名不需要域名备案，这是它方便的地方，但它不充许在根域名上直接添加 CNAME 记录，换句话说，原来在国内域名商下的域名，转移到 Godaddy 后，在 Github Pages 上绑定的根域名不再有效了。 以我的博客为例说明一下。原来我可以直接将根域名 yishulun.com 绑定到...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-06-13T09:44:46.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Github Pages 博客如何绑定根域名？\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-06-13T09:44:46.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":2.77,\"words\":831},\"filePathRelative\":\"posts/2023/Github Pages博客如何绑定根域名.md\",\"localizedDate\":\"2023年6月13日\",\"excerpt\":\"\\n<p>Godaddy 的域名不需要域名备案，这是它方便的地方，但它不充许在根域名上直接添加 CNAME 记录，换句话说，原来在国内域名商下的域名，转移到 Godaddy 后，在 Github Pages 上绑定的根域名不再有效了。</p>\\n<p>以我的博客为例说明一下。原来我可以直接将根域名 <a href=\\\"http://yishulun.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">yishulun.com</a> 绑定到 <a href=\\\"http://rixingyike.github.io\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">rixingyike.github.io</a>，www 域名通过 CNAME 绑定到根域名，这样无论读者访问根域名还是 www 域名，都可以跳转到根域名。国内早期网站网址的写法一般都会在前面带上 www，其实 www 只是一个子域名，与其它 blog、news 等子域名是等同的，为了照顾国内读者的使用习惯，我将 www 域名跳转到根域名（<a href=\\\"http://yishulun.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">yishulun.com</a>）。但是，在我的域名转移到 Godaddy 之后，这一招不好使了，Godaddy 的 DNS 解析不充许将根域名以 CNAME 的方式绑定到另一个二级域名上。</p>\",\"autoDesc\":true}")
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
