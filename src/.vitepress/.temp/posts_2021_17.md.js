import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Go更了解程序员","description":"","frontmatter":{"sidebar":false,"date":"2021-04-18T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/17.md","filePath":"posts/2021/17.md"}');
const _sfc_main = { name: "posts/2021/17.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="go更了解程序员" tabindex="-1">Go更了解程序员 <a class="header-anchor" href="#go更了解程序员" aria-label="Permalink to &quot;Go更了解程序员&quot;">​</a></h1><p>程序员喜欢Go语言，是因为Go简单、易于上手、高效吗？不，是因为Go更了解程序员，它知道程序员喜欢什么，不喜欢什么。程序员口中的简单、易于上手，高效，那是对它的赞美。实际上如果你不是程序员，从零入门Go编程仍然是不太容易的。</p><p>而且更有可能出现的一种情况是，因为Go语言的极致简洁，反而让初学者觉得这太难了；而真正对编程感兴趣的人，会一下子喜欢上它，觉得太棒了。Go是一门语言，也是一面镜子，你适不适合做程序员，学习一下Go就知道了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/17.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _17 as default
};
