import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"在京养犬人文明倡议","description":"","frontmatter":{"date":"2023-10-24T12:55:59.000Z"},"headers":[],"relativePath":"posts/2023/14.md","filePath":"posts/2023/14.md"}');
const _sfc_main = { name: "posts/2023/14.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="在京养犬人文明倡议" tabindex="-1">在京养犬人文明倡议 <a class="header-anchor" href="#在京养犬人文明倡议" aria-label="Permalink to &quot;在京养犬人文明倡议&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2023/14.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14 as default
};
