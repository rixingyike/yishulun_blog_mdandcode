import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"代码模板与武侠小说的情节套路","description":"","frontmatter":{"sidebar":false,"date":"2022-10-04T00:00:00.000Z","category":["文学"],"tags":["小说"]},"headers":[],"relativePath":"posts/2022/1004.md","filePath":"posts/2022/1004.md"}');
const _sfc_main = { name: "posts/2022/1004.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="代码模板与武侠小说的情节套路" tabindex="-1">代码模板与武侠小说的情节套路 <a class="header-anchor" href="#代码模板与武侠小说的情节套路" aria-label="Permalink to &quot;代码模板与武侠小说的情节套路&quot;">​</a></h1><p>代码模板是一种可以填空或在其基础上改写的代码范式，可以在一定程度上帮助程序员加快写代码的速度，减少重复枯燥的键盘操作。在小说中也有类似的情节套路与之对应。</p><p>金庸先生自称在写每一部小说时，都要力求有些变化，要故意写得不一样，但这并不是说金庸的小说没有重复。相反，金庸先生这样想反方向用力，恰恰说明是存在重复的，且这种重复很容易发生的。</p><p>下面列两个例子。在「神雕侠侣」中，郭襄将要过生日，突然有百草仙等陌生人向她送很多珍贵的贺礼，这些礼物让郭靖和黄蓉都感到吃惊，以他们二人都未必有这么大的面子；对比在「笑傲江湖」中，令狐冲受伤，随师门同行，不断有陌生人主动上前送很多珍贵的药材和礼物，连岳不群夫妇都觉得没有这样大的面子。在「射雕英雄传」中，黄蓉初识洪七公，想甩下七公，却不料每一次反而让七公跑到了她的前面；在「神雕侠侣」中，郭襄想甩下金轮法王逃走，每次都发现金轮法王早已经跑到了她的前面。相信类似的套路还有很多。</p><p>类似的武侠小说中这样的情节套路，是可以像代码模板那样复用的。代码模板在使用时，关键信息是有修改的，不是全部代码都一样；情节套路在复用时，也是与角色、当下故事情节契合的，也不是完全照搬，所以读者也不会感到明显的重复。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2022/1004.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1004 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1004 as default
};
