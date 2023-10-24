import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Claude小白教程","description":"","frontmatter":{},"headers":[],"relativePath":"docs/claude/index.md","filePath":"docs/claude/index.md"}');
const _sfc_main = { name: "docs/claude/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="claude小白教程" tabindex="-1">Claude小白教程 <a class="header-anchor" href="#claude小白教程" aria-label="Permalink to &quot;Claude小白教程&quot;">​</a></h1><ul><li><a href="/docs/claude/1.Claude简介.html">1.Claude简介【2023-07-28 07:24:30】</a></li><li><a href="/docs/claude/2.Claude提示的初步编写与优化.html">2.Claude提示的初步编写与优化【2023-07-28 07:24:44】</a></li><li><a href="/docs/claude/3.Claude提示实用编写技巧.html">3.Claude提示实用编写技巧【2023-07-28 07:24:58】</a></li><li><a href="/docs/claude/4.Claude的具体提示实例.html">4.Claude的具体提示实例【2023-07-28 07:25:10】</a></li><li><a href="/docs/claude/5.Claude提示故障排查.html">5.Claude提示故障排查【2023-07-28 07:25:16】</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/claude/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
