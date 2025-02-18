import comp from "C:/Users/98301/work/yishulun_com_blog/src/.vuepress/.temp/pages/post/2021/04/21/10.html.vue"
const data = JSON.parse("{\"path\":\"/post/2021/04/21/10.html\",\"title\":\"关于近期微信小程序登陆鉴权机制修改的小说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebar\":false,\"date\":\"2021-04-21T00:00:00.000Z\",\"gitInclude\":[],\"description\":\"关于近期微信小程序登陆鉴权机制修改的小说明 最近微信小程序的登录鉴权机制又修改了，这是历史上第三次变动了，这次变动添加了新接口wx.getUserProfile，可以在用户任意单击事件后获取用户信息，并且每次都有弹窗提示。原open-type等于getUserInfo的button单击获取准备废弃了。 有啥直接影响？ 1，如果你的代码原来是仅靠getU...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://yishulun.com/post/2021/04/21/10.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"艺述论\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"关于近期微信小程序登陆鉴权机制修改的小说明\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"关于近期微信小程序登陆鉴权机制修改的小说明 最近微信小程序的登录鉴权机制又修改了，这是历史上第三次变动了，这次变动添加了新接口wx.getUserProfile，可以在用户任意单击事件后获取用户信息，并且每次都有弹窗提示。原open-type等于getUserInfo的button单击获取准备废弃了。 有啥直接影响？ 1，如果你的代码原来是仅靠getU...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021042121003420210421202300image-20210421202258167.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-04-21T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"关于近期微信小程序登陆鉴权机制修改的小说明\\\",\\\"image\\\":[\\\"https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021042121003420210421202300image-20210421202258167.png\\\"],\\\"datePublished\\\":\\\"2021-04-21T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"李艺\\\",\\\"url\\\":\\\"https://yishulun.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.48,\"words\":445},\"filePathRelative\":\"posts/2021/10.md\",\"localizedDate\":\"2021年4月21日\",\"excerpt\":\"\\n<p>最近微信小程序的登录鉴权机制又修改了，这是历史上第三次变动了，这次变动添加了新接口wx.getUserProfile，可以在用户任意单击事件后获取用户信息，并且每次都有弹窗提示。原open-type等于getUserInfo的button单击获取准备废弃了。</p>\\n<p><strong>有啥直接影响？</strong></p>\\n<p>1，如果你的代码原来是仅靠getUserInfo获取用户信息的，没有通过后端解密，对不起，代码不能正常工作了<br>\\n2，如果是通过后端解密的，没有关系，通过getUserInfo button先拉取加密信息，再到后端解密这种方式仍然有效</p>\\n<p>为了解释这个问题，我专门录制了一个不专业的视频。</p>\",\"autoDesc\":true}")
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
