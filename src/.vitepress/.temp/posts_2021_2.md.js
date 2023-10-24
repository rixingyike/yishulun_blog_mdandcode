import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"插入广告的正确姿势","description":"","frontmatter":{"sidebar":false,"date":"2021-03-31T12:34:49.000Z"},"headers":[],"relativePath":"posts/2021/2.md","filePath":"posts/2021/2.md"}');
const _sfc_main = { name: "posts/2021/2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="插入广告的正确姿势" tabindex="-1">插入广告的正确姿势 <a class="header-anchor" href="#插入广告的正确姿势" aria-label="Permalink to &quot;插入广告的正确姿势&quot;">​</a></h1><p>突然发现，原来在某乎这样插入广告就可以。某乎的这个广告过滤机制，应该是机器操纵的，它知道人一般会怎么样去插入广告。最好的公众号的插入方式，都可以统一都改成这样的方式，单独放一个链接，在上面放上引语。不要直接写「关注公众号」这样的字词。</p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/20210331123513image-20210331123507005.png" alt="image-20210331123507005" style="${ssrRenderStyle({ "zoom": "33%" })}"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2 as default
};
