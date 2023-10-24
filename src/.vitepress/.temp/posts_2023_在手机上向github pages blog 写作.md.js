import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/6c2a10b3c0ed7bd17e0c7bdfba9d9a54.940c56d9.jpg";
const __pageData = JSON.parse('{"title":"在手机上向github pages blog 写作","description":"","frontmatter":{"date":"2023-08-11T09:40:39.000Z"},"headers":[],"relativePath":"posts/2023/在手机上向github pages blog 写作.md","filePath":"posts/2023/在手机上向github pages blog 写作.md"}');
const _sfc_main = { name: "posts/2023/在手机上向github pages blog 写作.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="在手机上向github-pages-blog-写作" tabindex="-1">在手机上向github pages blog 写作 <a class="header-anchor" href="#在手机上向github-pages-blog-写作" aria-label="Permalink to &quot;在手机上向github pages blog 写作&quot;">​</a></h1><p>发现一个可以用手机写作的 App，叫做 GitJournal。</p><p>试一下贴图功能吧：</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Image"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2023/在手机上向github pages blog 写作.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____github_pages_blog___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _____github_pages_blog___ as default
};
