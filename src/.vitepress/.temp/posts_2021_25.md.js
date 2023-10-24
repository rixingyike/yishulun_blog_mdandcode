import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"如何使用开源协议？","description":"","frontmatter":{"sidebar":false,"date":"2021-01-17T20:06:35.000Z"},"headers":[],"relativePath":"posts/2021/25.md","filePath":"posts/2021/25.md"}');
const _sfc_main = { name: "posts/2021/25.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="如何使用开源协议" tabindex="-1">如何使用开源协议？ <a class="header-anchor" href="#如何使用开源协议" aria-label="Permalink to &quot;如何使用开源协议？&quot;">​</a></h1><p>今天群内发生了一件事，某大厂工程师使用了一个开源软件，但是并没有遵守开源协议。开源项目的开发者找上门来了，工程师解释说，因为只使用了一部分，系统中还有其它代码，所以没有公开声明。</p><p>我查了一下，在知乎上有人暴露过另外一则类似的事情。也是使用者没有公开声明，开发者找上门来，大厂负责人死不认帐，两人在IM软件上互喷。就是两人扯皮的时候，工程师还在加班修改变量，擦除抄袭证据。因为无法确认真假，就不在这里附链接了，感兴趣可以前往知乎搜索。</p><p>在中国程序员真是悲哀！写个收费软件吧，没有人付钱。写开源软件吧，别人抄袭你。就是大厂该有的雅量和气度有时候也没有，用了开源软件，不仅不公开致谢，还不认账。大概是因为利益出发点不同吧，同是程序员，厂外厂内竟是两种不同态度。</p><h2 id="开源协议" tabindex="-1">开源协议 <a class="header-anchor" href="#开源协议" aria-label="Permalink to &quot;开源协议&quot;">​</a></h2><p>接下来我们看看，当我们使用开源软件时，如何做一名有雅量和气度的人。全世界的开源协议大概有100多种，但常见和常用的并不多。使用哪种协议，看这张图就明白了：</p><p><img src="https://yishulun.com/post-images/1610984500543.jpeg" alt=""></p><p>图：引自 <a href="https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html</a></p><p>说明：</p><ul><li>在上图中，闭源指不再公开源码，变成使用者自己的软件。</li><li>在每一个修改过的文件，旋转版权说明。这指的是Apache协议，它要求“<strong>在延伸的代码中（修改和有源代码衍生的代码中）需要带有原来代码中的协议，商标，专利声明和其他原来作者规定需要包含的说明</strong>”，具体做法一般就是在页面头部注释中包含。</li><li>关于对源码的修改之处，提供说明文档，一般做法是，拿一个专门的文件对源代码修改的时间和方式作统一描述。</li></ul><p>使用别人的开源软件时，我们先看一下它用的是什么协议。如果是MIT协议就好办了。<strong>最宽松的协议就是MIT协议</strong>，这种协议对使用者几乎没有任何限制，使用时只要保留版权声明和许可声明就可以了。</p><p>当开源自己的软件时，我一般选择的就是MIT协议。对于遵守规则的人，他自会遵守；对于不愿意遵守的人，即使是采用Mozilla许可证或GPL许可证，仍然是限制不了他的。</p><h2 id="cc协议" tabindex="-1">CC协议 <a class="header-anchor" href="#cc协议" aria-label="Permalink to &quot;CC协议&quot;">​</a></h2><p>开源协议是针对源码的，如果是文章，需要考虑使用创作共用协议（Creative Commons ），一般也称CC协议。</p><p>CC协议比较简单，主要有四项限制：</p><ul><li>1.署名（BY）：作品上必须附有原作者和出处</li><li>2.非商业性使用（NC）：不能用于商业目的</li><li>3.禁止演绎（ND）：不能修改，或二次创作</li><li>4.相同方式共享（SA）：使用同样的 CC 协议</li></ul><p>例如，本文版权声明：自由转载-非商用-非衍生-保持署名（<a href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh" target="_blank" rel="noreferrer">创意共享3.0许可证</a>），这样就可以了。至于别人遵守不遵守，先抱着别人不遵守的打算去创作。</p><p>2021年1月18日</p><p>图片转自阮一峰的博客，见：<a href="https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/25.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _25 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _25 as default
};
