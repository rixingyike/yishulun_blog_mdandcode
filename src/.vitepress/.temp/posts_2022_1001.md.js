import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"写博客对个人找工作有什么帮助？","description":"","frontmatter":{"sidebar":false,"date":"2022-10-01T00:00:00.000Z","category":["编程"]},"headers":[],"relativePath":"posts/2022/1001.md","filePath":"posts/2022/1001.md"}');
const _sfc_main = { name: "posts/2022/1001.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="写博客对个人找工作有什么帮助" tabindex="-1">写博客对个人找工作有什么帮助？ <a class="header-anchor" href="#写博客对个人找工作有什么帮助" aria-label="Permalink to &quot;写博客对个人找工作有什么帮助？&quot;">​</a></h1><p>今天听阿里P10大佬毕玄讲找工作的经历，发现作为一名非计算机专业的生物系学生，写博客数次给他找工作带来了直接帮助。</p><p>在他想换工作时，被满江红站长推荐给淘宝。三面下来，面试官问他这个问题，不会，问那个也不会，让他做题，也没有做出来。但最终，他还是被录用了。为啥？</p><p>大概有两个原因：</p><p>（一）淘宝当时想做的分布式系统，淘宝人自己也不是很明白，还处于探索中。而毕玄通过撰写 OSGi，已经对——至少看起来已经对 OSGi 很了解，淘宝需要这样的人。</p><p>现在其实很有公司招程序员的时候，招的都是带有创新性的职位，面试官问什么可能只是他想问，与职位没有必然关系。作为面试者对于自己不了解的问题，也没有必要强答，自信一点，会就答，不会就说不会。认清自己的核心优势，放平心态，没有通过面试是这个职位与自己不匹配，坚持做自己就好。</p><p>（二）面试者毕玄还是很聪明的，他作为全省重点高中班的学生，智力的光芒不可能完全在面试官前藏得住。</p><p>所以现在 HR 筛选人，最简单粗暴的方法就是卡学历，利用传统的应试教育减少自己的劳动量。除了学历，还可以用智商测试卡，有的公司面试不是做算法题，而是做智商测试卡。这样做的目的，在于为团队找到聪明的人。</p><p><strong>现在写博客还有机会吗？</strong></p><p>现在仍然有很多人在写博客（或者公众号），效果因人而异。</p><p>写博客不能乱写，写别人写过的，甚至抄袭，这都是没有意义的。写博客重在发出自己独一无二的声音，<strong>在于打造自己独特的影响力</strong>。作为程序员写博客，要关注前沿技术，要写那些可以引领他人、甚至可以影响他人前进方向的内容。归纳一下，有两方面的内容值得写：</p><p>（一）翻译国外前沿的技术内容；</p><p>（二）针对社区中的前沿问题，给出自己的独特见解。</p><hr><p>什么是 OSGi？</p><p>是 Open Service Gateway Initiative 的简写，翻译为汉语是开放式服务网关倡议，是 Java 动态化模块化系统的一系列规范，目的是实现不同功能的 Java 模块在复杂系统中的复用。Eclipse 是插件化的，是完全建立在 OSGi 框架之上的。Eclipse 插件之间如何协作，是靠 OSGi 规范进行协作的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2022/1001.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1001 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1001 as default
};
