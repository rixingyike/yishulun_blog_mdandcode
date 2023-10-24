import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"在生产中寻找艺术痛点","description":"","frontmatter":{"sidebar":false,"date":"2021-03-01T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/8.md","filePath":"posts/2021/8.md"}');
const _sfc_main = { name: "posts/2021/8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="在生产中寻找艺术痛点" tabindex="-1">在生产中寻找艺术痛点 <a class="header-anchor" href="#在生产中寻找艺术痛点" aria-label="Permalink to &quot;在生产中寻找艺术痛点&quot;">​</a></h1><p>文艺要从生产中来，而不能凭空捏造。</p><p>这个想法是在听樊登读书时产生的（当时樊登在讲《论语》），但这个想法与其没有关系。我在想，像脱口秀大会、吐槽大会这样的综艺节目，它们的笑点其实都来源于生活。它们有多好笑，就说明这个世界有多荒唐。</p><p>所以，文艺创作，包括技术科普，从哪里寻找传播的点呢，必须从生活中、从生产中。但是这个寻找又不能因为要寻找而失了本心，还必须有一个”本心“的坚持。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _8 as default
};
