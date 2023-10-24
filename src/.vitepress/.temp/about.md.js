import { useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { V as VPTeamMembers } from "./VPTeamMembers.5ad238de.js";
import "./plugin-vue_export-helper.cc2b3d55.js";
import "@vueuse/core";
const _imports_0 = "/assets/wexinpaycode.d9e8a92e.jpg";
const _imports_1 = "/assets/zhifubaopaycode.b2716125.jpg";
const __pageData = JSON.parse('{"title":"关于作者","description":"","frontmatter":{"editLink":false,"comment":false,"pageInfo":false,"date":"2002-12-22T10:50:22.000Z","footer":false,"sidebar":false,"aside":false,"hideComment":true,"hideShare":true},"headers":[],"relativePath":"about.md","filePath":"about.md"}');
const __default__ = { name: "about.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const members = [
      {
        avatar: "https://yishulun.com/avatar.png",
        name: "LIYI",
        title: "一名讲故事的计算机工程师/讲师/作者",
        links: [
          { icon: "github", link: "https://github.com/rixingyike" },
          { icon: "twitter", link: "https://twitter.com/coderliyi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于作者" tabindex="-1">关于作者 <a class="header-anchor" href="#关于作者" aria-label="Permalink to &quot;关于作者&quot;">​</a></h1>`);
      _push(ssrRenderComponent(unref(VPTeamMembers), {
        size: "small",
        members
      }, null, _parent));
      _push(`<h2 id="作者简介" tabindex="-1">作者简介 <a class="header-anchor" href="#作者简介" aria-label="Permalink to &quot;作者简介&quot;">​</a></h2><p>Hi，我是80后，一名讲故事的计算机工程师/讲师/作者。我有20年以上的上网经历及互联网软件研发经验，熟悉 Linux/Mac/Windows 系统开关机，精通 Go/JS/Rust/Python/C 等高级编程语言 Hello World 程序编写，了解浏览器/小程序/React/Vue/Tailwind/Webpack/Vite 等底层工作原理的名称书写等，开玩笑。</p><p>我是一名计算机工程师/讲师/作者，2023年2月在机工出版了<a href="https://item.jd.com/10070363837259.html" target="_blank" rel="noreferrer">《微信小游戏开发》</a>。2019年获得了<a href="https://cloud.tencent.com/tvp/124" target="_blank" rel="noreferrer">腾讯云最具价值专家（TVP）</a>称号，2021年获得腾讯课堂年度最具影响力专家称号，2023年获得“ 中移联合智库 ICT 专家级讲师 ”称号。2020年，在极客时间上架<a href="http://gk.link/a/10AdC" target="_blank" rel="noreferrer">《微信小程序全栈开发实战》</a>课程，2022年在微信学堂上架<a href="https://developers.weixin.qq.com/community/business/course/000606628dc2e86dc0ddcbb115940d" target="_blank" rel="noreferrer">《小程序性能优化实践》</a>课程。2020年开始在一汽大众等企业开始做编程内训讲师。</p><p>✊ 我致力于独立产品的智能化构建，如果你是一名独立黑客或想成为一名有智能化加持的独立黑客，我们肯定会有许多共同语言。</p><p>欢迎关注我的公众号/视频号：</p><img src="https://yishulun.com/yslqrcode.jpg" style="${ssrRenderStyle({ "zoom": "50%" })}"><h2 id="联系方式" tabindex="-1">联系方式 <a class="header-anchor" href="#联系方式" aria-label="Permalink to &quot;联系方式&quot;">​</a></h2><ul><li>Email：<code>coderliyi@foxmail.com</code></li></ul><p>我会很高兴收到您的电子邮件————我无法保证回复，但我会尽力而为。如果您是我的读者，我很乐于倾听您在使用计算机、软件或学习编程时遇到的问题，当然，其它善意有趣的邮件我也乐意收到。</p><p>✊ 我在关注独立产品的构建，如果你是一名独立黑客或想成为一名独立黑客，我想我们会有许多共同语言。如果您有一个点子，正在寻找技术合伙人，为什么不给我发一个邮件呢？讲一讲你的想法，或许我们可以合作呢，或者我能帮助你构建MVP产品。</p><p>如果您是网络安全监管人员，在我的网站中发现了敏感信息必须处理，也请发邮件给我并标注重要紧急，我收到后会第一时间处理。</p><h2 id="社区帐号" tabindex="-1">社区帐号 <a class="header-anchor" href="#社区帐号" aria-label="Permalink to &quot;社区帐号&quot;">​</a></h2><ul><li><a href="https://juejin.cn/user/2400989124504286" target="_blank" rel="noreferrer">掘金</a></li><li><a href="https://www.zhihu.com/people/liyi2005" target="_blank" rel="noreferrer">知乎</a></li><li><a href="https://weibo.com/u/2820420060" target="_blank" rel="noreferrer">微博</a></li><li><a href="https://twitter.com/coderliyi" target="_blank" rel="noreferrer">推特</a></li></ul><h2 id="赞赏" tabindex="-1">赞赏 <a class="header-anchor" href="#赞赏" aria-label="Permalink to &quot;赞赏&quot;">​</a></h2><p>欢迎赞赏，以支持本站更新。</p><table><thead><tr><th><img${ssrRenderAttr("src", _imports_0)} alt="微信" style="${ssrRenderStyle({ "zoom": "25%", "max-width": "800px" })}"></th><th><img${ssrRenderAttr("src", _imports_1)} alt="支付宝" style="${ssrRenderStyle({ "zoom": "25%", "max-width": "800px" })}"></th></tr></thead></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
