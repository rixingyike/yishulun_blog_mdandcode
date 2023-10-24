import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"为什么程序员对 Python 有这么多仇恨？","description":"","frontmatter":{"sidebar":false,"date":"2022-09-26T00:00:00.000Z","category":["编程"]},"headers":[],"relativePath":"posts/2022/0926.md","filePath":"posts/2022/0926.md"}');
const _sfc_main = { name: "posts/2022/0926.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="为什么程序员对-python-有这么多仇恨" tabindex="-1">为什么程序员对 Python 有这么多仇恨？ <a class="header-anchor" href="#为什么程序员对-python-有这么多仇恨" aria-label="Permalink to &quot;为什么程序员对 Python 有这么多仇恨？&quot;">​</a></h1><p>并不是所有有经验的程序员都讨厌 Python，促使人们产生这种厌恶情绪的原因可能有三个：</p><p>1，Py 不能很好地进行 OO 编程。这是由于 Py 诞生太早而决定的，在 Py 诞生的时候，OO 编程思想还没有成熟，经典的设计模式图书 GoF 还没有出版。关于对 OO 编程的支持，Py 3 中已经有所改进，但因为又要向前做一些兼容，还不可避免地戴了「历史的脚镣」。</p><p>2，Py 被指是一种「石头汤」，像一个众人贡献的大杂烩，没有计划，没有规划，像是野蛮生长而成的。这是由它的生存哲学所决定的，Py 没有「我执」，开发者需要什么，它就添加什么；社区贡献什么优良的类库，它就吸纳什么。正是这种「海纳百川，不舍涓流」的精神，让 Py 存在了这么多年，为这么多人所使用。</p><p>3，Py 没有严格的静态类型。但这是它的缺点，同时也是它的优点。是灵活？还是严谨？对于脚本语言，取灵活就好了，否则还不失去了脚本语言的本色？至于严谨，是后端编译类语言应该考虑的事情。</p><p>结论：Py 是一门非常值得学习的脚本编程语言。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2022/0926.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _0926 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _0926 as default
};
