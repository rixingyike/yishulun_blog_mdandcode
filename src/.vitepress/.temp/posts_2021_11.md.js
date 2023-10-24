import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"关于找不到wx-components文件的说明","description":"","frontmatter":{"sidebar":false,"date":"2021-04-06T17:53:11.000Z"},"headers":[],"relativePath":"posts/2021/11.md","filePath":"posts/2021/11.md"}');
const _sfc_main = { name: "posts/2021/11.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于找不到wx-components文件的说明" tabindex="-1">关于找不到wx-components文件的说明 <a class="header-anchor" href="#关于找不到wx-components文件的说明" aria-label="Permalink to &quot;关于找不到wx-components文件的说明&quot;">​</a></h1><p>这是在充电平台上小程序课程下的一个读者问题：</p><blockquote><p>老师，关于在特殊情况下需要修改微信自带组件和weui组件样式，现在课程上的方法无法找到对应得样式了。</p></blockquote><p>这个问题似曾相识啊</p><p>我在我的windows PC上试了一下，通过搜索wx-components文件名称，确实找不到默认的样式文件了。</p><p>可能更新微信开发者工具后，被官方限制了，毕竟这只是一个hack方法。</p><p>文件找不到，样式也被修改了吗？于是旧老办法，修改progress组件的样式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">.progress-box{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  width: 80%;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  margin:50px 20px;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">.wx-progress-inner-bar {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">  border-radius: 5px;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#e1e4e8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">.progress-box{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  width: 80%;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  margin:50px 20px;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">.wx-progress-inner-bar {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">  border-radius: 5px;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292e" })}">}</span></span></code></pre></div><p>运行结果：</p><p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021040617442220210406174421.png" alt=""></p><p>哼，只是文件被藏起来了。毕竟重构样式名称可能涉及范围太大，所以官方并没有这样做。</p><p>本地搜索不到wx-components.css，没关系。网上有：<a href="https://gist.github.com/imoldman/b0f3332cb5713000e8fdef14b97080ab%E3%80%82%E4%BB%8E%E6%B2%A1%E6%9C%89%E6%9B%B4%E6%96%B0%E7%9A%84%E6%97%A7%E6%9C%BA%E5%99%A8%E4%B8%8A%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%89%BE%E5%88%B0%E3%80%82Mac%E6%B2%A1%E6%9C%89%E6%B5%8B%E8%AF%95%EF%BC%8C%E5%8F%AF%E8%83%BD%E6%9B%B4%E6%96%B0%E5%90%8E%E4%B9%9F%E6%89%BE%E4%B8%8D%E5%88%B0%E4%BA%86%E3%80%82" target="_blank" rel="noreferrer">https://gist.github.com/imoldman/b0f3332cb5713000e8fdef14b97080ab。从没有更新的旧机器上也可以找到。Mac没有测试，可能更新后也找不到了。</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/11.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11 as default
};
