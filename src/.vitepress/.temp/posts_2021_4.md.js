import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"关于录制视频直人更多出镜的想法","description":"","frontmatter":{"sidebar":false,"date":"2021-03-31T12:40:50.000Z"},"headers":[],"relativePath":"posts/2021/4.md","filePath":"posts/2021/4.md"}');
const _sfc_main = { name: "posts/2021/4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于录制视频直人更多出镜的想法" tabindex="-1">关于录制视频直人更多出镜的想法 <a class="header-anchor" href="#关于录制视频直人更多出镜的想法" aria-label="Permalink to &quot;关于录制视频直人更多出镜的想法&quot;">​</a></h1><p>视频录制应该真人出镜，并且应该争取在大多数情况下都是真人正面全景出镜。个别的时间点，我们需要展示具体的文字或图片的时候，可以在视频剪辑的时候插入画中画。</p><p>必须的时候，可能需要购买一个高清摄像头，放在电视机上面，并且把它作为主要的视频录制设备。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4 as default
};
