import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"typora软件也是可以定制的","description":"","frontmatter":{"sidebar":false,"date":"2021-04-16T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/18.md","filePath":"posts/2021/18.md"}');
const _sfc_main = { name: "posts/2021/18.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typora软件也是可以定制的" tabindex="-1">typora软件也是可以定制的 <a class="header-anchor" href="#typora软件也是可以定制的" aria-label="Permalink to &quot;typora软件也是可以定制的&quot;">​</a></h1><p>最近一年的写作我基本都在使用typora软件，这个软件搞平台，干净、高效，我非常喜欢它。如果说缺点，它唯一的缺点就是不支持定制。</p><p>但是今天发现了一个扩展：</p><p><a href="https://github.com/hahaha28/typora-extensions" target="_blank" rel="noreferrer">https://github.com/hahaha28/typora-extensions</a></p><p>以及使用npm安装的asar工具，及使用它的指令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">安装asar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">cnpm install -g asar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">用 asar pack 打包</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">asar pack your-app app.asar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">用 asar extract 反编译/解压</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">asar extract app.asar ./myapp</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">安装asar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">cnpm install -g asar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">用 asar pack 打包</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">asar pack your-app app.asar</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}"></span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">用 asar extract 反编译/解压</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">asar extract app.asar ./myapp</span></span></code></pre></div><p>新世界仿佛被打开了，原来typora也是一个基于electron开发的软件，在使用它的时候完全感受不出来。我使用typora的时候，一直觉得它是原生软件。但是的样式支持定制，并且样式包也是前端html &amp; css文件，从这点我也应该想到，甚至这个有可能也是基于electron开发的，至少它是混合开发的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">那么typora是开源软件吗？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">很遗憾，虽然typora软件在github上有主页，但是它本身并不是一个开源软件。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">那么typora是开源软件吗？</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">很遗憾，虽然typora软件在github上有主页，但是它本身并不是一个开源软件。</span></span></code></pre></div><p>虽然typora不开源，但是通过上面的方面，我们可以扩展它的UI，还可以插入代码，通过这种方式基本也可以达到扩展的目的。</p><blockquote><p>20221221更新：软件不身不开源，通用hack的方式尝试修改它，这个体验并不好。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/18.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _18 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _18 as default
};
