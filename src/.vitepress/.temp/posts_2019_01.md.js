import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"清平乐·贺TVP周年","description":"","frontmatter":{"sidebar":false,"date":"2019-12-22T00:00:00.000Z"},"headers":[],"relativePath":"posts/2019/01.md","filePath":"posts/2019/01.md"}');
const _sfc_main = { name: "posts/2019/01.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="清平乐·贺tvp周年" tabindex="-1">清平乐·贺TVP周年 <a class="header-anchor" href="#清平乐·贺tvp周年" aria-label="Permalink to &quot;清平乐·贺TVP周年&quot;">​</a></h1><blockquote><p>这是在腾讯云TVP一周年时填写的一首词。</p></blockquote><p><strong>清平乐·贺TVP周年</strong></p><p>腾讯云加，聚八方好汉。如战神般自由勇敢，不畏险阻艰难。</p><p>勇攀科技巅峰，谱写战绩云风。今日长剑在手，何惧四海青龙？</p><p><code>注：剑者，腾讯云也。青龙，上古四大神兽之首。</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2019/01.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01 as default
};
