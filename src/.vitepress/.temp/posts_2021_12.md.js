import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"你的顾客需要一个好故事","description":"","frontmatter":{"sidebar":false,"date":"2021-04-13T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/12.md","filePath":"posts/2021/12.md"}');
const _sfc_main = { name: "posts/2021/12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="你的顾客需要一个好故事" tabindex="-1">你的顾客需要一个好故事 <a class="header-anchor" href="#你的顾客需要一个好故事" aria-label="Permalink to &quot;你的顾客需要一个好故事&quot;">​</a></h1><p>事实上并非只有商家的顾客才需要这样一个好故事，包括我自己，手艺人，发电员的读者，也需要一个好故事。这个故事不是常规意义上的故事，事实上它是一个让读者成为主角，充满艺术之美的故事。</p><p>如何创造这样的一个好故事呢？有七个关键因素，书中作者称之为SB-7，这是一个很特别，但在中文环境确实又很容易记住的简称。</p><p>SB-7:</p><ol><li>一个主角</li><li>遇到一个麻烦</li><li>出现一个向导</li><li>向导手里有一个方案</li><li>召唤主角，开始行动吧</li><li>避免主角失败</li><li>麻烦得到解决，获得成功</li></ol><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/20210413131937314ab4b3a16a82aec6946252689a85f.jpg" style="${ssrRenderStyle({ "zoom": "50%" })}"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12 as default
};
