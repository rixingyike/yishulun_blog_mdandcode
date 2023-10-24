import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"巴黎是如何成为时尚之都的","description":"","frontmatter":{"sidebar":false,"date":"2021-03-29T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/1.md","filePath":"posts/2021/1.md"}');
const _sfc_main = { name: "posts/2021/1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="巴黎是如何成为时尚之都的" tabindex="-1">巴黎是如何成为时尚之都的 <a class="header-anchor" href="#巴黎是如何成为时尚之都的" aria-label="Permalink to &quot;巴黎是如何成为时尚之都的&quot;">​</a></h1><p>巴黎，用100年的时间，由一个街上满是泥泞，没人愿意走路，一个夜间有野狼出没的城市，变成了今天的世界时尚之都。</p><p>时髦，这个词的含义在法国的字典里就是外国人来到巴黎学习怎么穿衣服。这个定义太过分了。</p><p>这个巨变是怎么产生的呢？每年很多人去巴黎旅游的，如果只是在百货商场打个卡，在博物馆打个卡，而不了解巴黎这座城市成长历史的话，根本就不会知道林荫大道、孚日广场、塞纳河老桥？圣路易岛，还有五苏老马车的魅力。</p><p>这个转变，在我看来在于两个字：连接。打造公共场所，让人与人之间的连接更加频繁；推倒城市的城墙，和人际之间看不见的城墙，让人与人之间的链接没有阻碍。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1 as default
};
