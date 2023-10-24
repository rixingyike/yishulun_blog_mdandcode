import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Claude 为什么片断式输出？","description":"","frontmatter":{"date":"2023-07-10T09:44:31.000Z"},"headers":[],"relativePath":"posts/2023/Claude为什么片断式输出.md","filePath":"posts/2023/Claude为什么片断式输出.md"}');
const _sfc_main = { name: "posts/2023/Claude为什么片断式输出.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="claude-为什么片断式输出" tabindex="-1">Claude 为什么片断式输出？ <a class="header-anchor" href="#claude-为什么片断式输出" aria-label="Permalink to &quot;Claude 为什么片断式输出？&quot;">​</a></h1><p>它一次性可以输出很长的内容，但事实上他每次仅输出一点。为什么会这样？下面是 Claude 自己的回答：</p><ol><li>逐步输出可以获得您的实时反馈。创作是一个迭代的过程，如果我一次性全部输出，可能会出现较大的偏差或错误。分段输出可以让我及时得到您的指导，对下一段的创作有很好的启发和帮助。</li><li>分段输出可以更好地模拟真实创作。现实中的创作也不是一次性完成，往往需要在灵感、梳理和修改之间反复迭代。我逐步输出是为了让过程更贴近真实创作，锻炼我的创作能力。</li><li>考虑到交互体验。如果我一次性大量输出，阅读体验可能不太友好。分批输出可以让对话更顺畅、生动。</li><li>可以控制输出长度。我会根据您的要求和反馈，控制每次输出的长度，避免一次过多内容带来的阅读压力。</li></ol><p>由人类主导，由 Claude 辅助的创作过程是一个互动创作的过程。可以阶段性创作结果之后，要求 AI 做一个汇总：</p><blockquote><p>将前面创作的 6 章内容合在一起发给我，并起一个有吸引力的标题。</p></blockquote><p>如何使用 Claude 进行创作，这也是一项智力劳动，并不是完全由 AI 代劳、人类什么也不管的事。</p><h2 id="下一步的思考" tabindex="-1">下一步的思考： <a class="header-anchor" href="#下一步的思考" aria-label="Permalink to &quot;下一步的思考：&quot;">​</a></h2><ul><li>一些类似于芥子园画谱的写作套路集是不是有必要？对于一些特定情节、场景的描写提供套路，这些套路 AI 可以用，人类也可以用。</li><li>创作更多是——也应该是一项体验，而非一项工作或劳动。从这个角度讲，主动输入一些内容，然后加工再输出，这本身是一个很好的生命体验活动，作者在其中应该享受，而非享受到痛苦。</li></ul><p>7 月 22 日</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2023/Claude为什么片断式输出.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Claude________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Claude________ as default
};
