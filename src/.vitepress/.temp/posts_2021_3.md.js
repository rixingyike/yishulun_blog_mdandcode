import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"关于价值的判定","description":"","frontmatter":{"sidebar":false,"date":"2021-03-28T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/3.md","filePath":"posts/2021/3.md"}');
const _sfc_main = { name: "posts/2021/3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于价值的判定" tabindex="-1">关于价值的判定 <a class="header-anchor" href="#关于价值的判定" aria-label="Permalink to &quot;关于价值的判定&quot;">​</a></h1><p>我们是如何判定一件事的价值的呢？靠知识与逻辑经验？靠经验？还是靠直觉？如果没有经验，又不具备相关的知识，一般我们是很难判定一件事的价值的。所以一般人很难突破自己，主要是因为不具备价值界定与判断的能力。试想一下，如果将时光倒回10年，你会做什么事？ 有人说，我会在北京回龙观买房。但是当时，你可能也知道这个房源信息，当时没有行动，主要原因在于你当时无法界定这件事的价值。 有的人靠直觉，即使他没有相关经验，也无法从知识与逻辑上证明某件事能成，但是就坚定不移地做了。有时候这种直觉又被称为商业嗅觉。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3 as default
};
