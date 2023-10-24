import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"关于近期微信小程序登陆鉴权机制修改的小说明","description":"","frontmatter":{"sidebar":false,"date":"2021-04-21T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/10.md","filePath":"posts/2021/10.md"}');
const _sfc_main = { name: "posts/2021/10.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于近期微信小程序登陆鉴权机制修改的小说明" tabindex="-1">关于近期微信小程序登陆鉴权机制修改的小说明 <a class="header-anchor" href="#关于近期微信小程序登陆鉴权机制修改的小说明" aria-label="Permalink to &quot;关于近期微信小程序登陆鉴权机制修改的小说明&quot;">​</a></h1><p>最近微信小程序的登录鉴权机制又修改了，这是历史上第三次变动了，这次变动添加了新接口wx.getUserProfile，可以在用户任意单击事件后获取用户信息，并且每次都有弹窗提示。原open-type等于getUserInfo的button单击获取准备废弃了。</p><p><strong>有啥直接影响？</strong></p><p>1，如果你的代码原来是仅靠getUserInfo获取用户信息的，没有通过后端解密，对不起，代码不能正常工作了 2，如果是通过后端解密的，没有关系，通过getUserInfo button先拉取加密信息，再到后端解密这种方式仍然有效</p><p>为了解释这个问题，我专门录制了一个不专业的视频。</p><p>此外，由于小程序项目工程的复杂性，这种复杂性有时候让我自己看以前的源码都会产生迷惑，为了避免读者产生这种困扰，我在下面视频中，还讲了如何使用充电平台的课程源码，及需要注意的事项。</p><p>由于视频是临时录制，就不上传视频号或其它网站了，感兴趣可以直接下载：</p><blockquote><p>关于微信登陆机制修改与源码使用的说明.mp4 链接：<a href="https://pan.baidu.com/s/1vkYMM-GK6Fh1_DkCAhD_6Q" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1vkYMM-GK6Fh1_DkCAhD_6Q</a> 提取码：liyi 复制这段内容后打开百度网盘手机App，操作更方便哦</p></blockquote><p>2021年4月21日</p><ul><li>视频中提到的相关课程及错误信息截图：</li></ul><p>课程链接：<a href="https://time.geekbang.org/course/detail/100052401-289862" target="_blank" rel="noreferrer">https://time.geekbang.org/course/detail/100052401-289862</a></p><p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021042121003420210421202300image-20210421202258167.png" alt="image-20210421202258167"></p><ul><li><p>登录接口调整官方说明：<a href="https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=login" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=login</a></p></li><li><p>新接口getUserProfile地址：<a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html</a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/10.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _10 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _10 as default
};
