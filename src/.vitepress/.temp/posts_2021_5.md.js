import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"生活如何艺术化与视频录制","description":"","frontmatter":{"sidebar":false,"date":"2021-03-31T13:12:22.000Z"},"headers":[],"relativePath":"posts/2021/5.md","filePath":"posts/2021/5.md"}');
const _sfc_main = { name: "posts/2021/5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="生活如何艺术化与视频录制" tabindex="-1">生活如何艺术化与视频录制 <a class="header-anchor" href="#生活如何艺术化与视频录制" aria-label="Permalink to &quot;生活如何艺术化与视频录制&quot;">​</a></h1><p>在视频号上看到这个视频，突然有了想法，主要是两点：</p><ol><li>个人视频要露脸、露人，展示自己，在这个视频中，即使是展示编曲过程，小作者也是出镜的</li><li>关于艺术生活化，其实艺术可以渗透到生活中的每个角落，并不一定非要以目前的演唱会、博物馆这样的形式存在</li></ol><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/20210331131239image-20210331131237755.png" alt="image-20210331131237755" style="${ssrRenderStyle({ "zoom": "33%" })}"><p>视频号无法提供二维码，也没有链接，感兴趣可以搜索一下。b站也有。这种艺术形式，可以形成高低差，有很大的传播效应。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _5 as default
};
