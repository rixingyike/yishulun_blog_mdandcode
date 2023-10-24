import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"夜晚跳广场舞归来有感","description":"","frontmatter":{"sidebar":false,"date":"2021-04-09T12:50:03.000Z"},"headers":[],"relativePath":"posts/2021/15.md","filePath":"posts/2021/15.md"}');
const _sfc_main = { name: "posts/2021/15.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="夜晚跳广场舞归来有感" tabindex="-1">夜晚跳广场舞归来有感 <a class="header-anchor" href="#夜晚跳广场舞归来有感" aria-label="Permalink to &quot;夜晚跳广场舞归来有感&quot;">​</a></h1><blockquote><p>狗来人避让，车走路通行。 广场舞喧天，孑然背手归。</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021041415413920210414154139.png" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/15.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _15 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _15 as default
};
