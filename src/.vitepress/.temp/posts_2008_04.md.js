import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"AS3中的一些基本定义，Function与Method的区别","description":"","frontmatter":{"sidebar":false,"date":"2008-05-01T00:00:00.000Z","tags":["AS3 Expert"]},"headers":[],"relativePath":"posts/2008/04.md","filePath":"posts/2008/04.md"}');
const _sfc_main = { name: "posts/2008/04.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="as3中的一些基本定义-function与method的区别" tabindex="-1">AS3中的一些基本定义，Function与Method的区别 <a class="header-anchor" href="#as3中的一些基本定义-function与method的区别" aria-label="Permalink to &quot;AS3中的一些基本定义，Function与Method的区别&quot;">​</a></h1><p>Adobe在官方英文文档中，并未专意对一些基本作区别说明；多数自动翻译或中文翻译，又存在翻译不当之处，古人有云，差之毫厘，缪以千里。且先试问一句，Function与Method有何区别？</p><p>Function与Method翻译成中文，不知如何翻译，使用英文更好。function在AS3中，是定义函数的关键字，但它定义的不一定是Function，也可能是Method。</p><h2 id="_1-method与function的区别" tabindex="-1">1，Method与Function的区别 <a class="header-anchor" href="#_1-method与function的区别" aria-label="Permalink to &quot;1，Method与Function的区别&quot;">​</a></h2><p>使用function关键字在Class内部显式定义的方法，称为Method，而除此之外使用function关键字定义的方法皆称为 Function。Function类似于js中的function方法。如此区分概念，有助于理解AS3的闭包（closure）概念。</p><h2 id="_2-property是什么" tabindex="-1">2，Property是什么 <a class="header-anchor" href="#_2-property是什么" aria-label="Permalink to &quot;2，Property是什么&quot;">​</a></h2><p>在AS3中，Property不应该理解为类的属性，而应该理解为类的元素，包括变量，方法，setter/getter方法。从一个角度讲，在 AS3中，Class没有属性，平常所用的x,y,width,height等不应该称为&quot;属性&quot;，它们是setter/getter方法。这样理解，更 有助于理解trait对象。</p><h2 id="_3-什么是类型注释-type-annotation" tabindex="-1">3，什么是类型注释(Type Annotation)？ <a class="header-anchor" href="#_3-什么是类型注释-type-annotation" aria-label="Permalink to &quot;3，什么是类型注释(Type Annotation)？&quot;">​</a></h2><p>type annotation翻译为类型声明是不恰切的，type annotation仅是给编译器用的，代码量虽然增加了，换来的是性能的提升与代码的易读，这与注释的功能是类似的，翻译为类型注释更贴切。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">var s :String = &quot;sban&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">var s :String = &quot;sban&quot;;</span></span></code></pre></div><p>在上例中，String即是类型注释，或变量类型注释。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">public function getWidth() : uint {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">    //...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">public function getWidth() : uint {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">    //...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><p>在上例中，uint即是类型注释，或返回类型注释。</p><p>2008年5月</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2008/04.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _04 as default
};
