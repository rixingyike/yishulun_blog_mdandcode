import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"2.GPT 是如何运转的？","description":"","frontmatter":{},"headers":[],"relativePath":"docs/向GPT高效提问/2.GPT是如何运转的.md","filePath":"docs/向GPT高效提问/2.GPT是如何运转的.md"}');
const _sfc_main = { name: "docs/向GPT高效提问/2.GPT是如何运转的.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-gpt-是如何运转的" tabindex="-1">2.GPT 是如何运转的？ <a class="header-anchor" href="#_2-gpt-是如何运转的" aria-label="Permalink to &quot;2.GPT 是如何运转的？&quot;">​</a></h1><p>当我们向 GPT 提问：“光合作用是什么？”</p><p>它返回：</p><p>“光合作用是一个在植物、藻类和某些细菌中发生的生物化学过程，通过这个过程，它们能够利用阳光、二氧化碳和水合成葡萄糖和氧气。光合作用以地球生态系统至关重要，因为它是能量与氧气进入地球生态系统的主要途径，同时还有助于减缓全球气候变暖。”</p><p>我们知道，GPT 是经过海量语料库预训练的大语言模型，它比地球上任何一个自然人阅读的书刊都要多，甚至比所有现世人类阅读的总和还要多。GPT 返回这个结果，并不是从它看过的语料库中进行搜索——将内容索引然后以搜索引擎的方式提供给网民这是谷歌搜索的运作方式，而是基于它在预训练中留在它的模型上的痕迹重新组织语言和生成的结果。</p><p>我们人类是如何学习的？将视听感受传入大脑，影响神经元建立连接；当我们被问及相关内容时，我们从这些已经建立神经元连接的地方尝试组织语言，重新表达出来。我们的学习并不是像电子计算机一样的 1v1 硬盘存储，我们的输出也不是像电子计算机一样的 1v1 播放。</p><p>至于说，为什么 GPT 可以返回看起来十分正确的内容，那是因为它学习的内容与我们人类已经创建的电子文明是同一个文明。</p><p>相关问题：GPT 底层是如何完成学习、接到人类提示时又是如何完成理解和输出的？</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/向GPT高效提问/2.GPT是如何运转的.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2_GPT______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2_GPT______ as default
};
