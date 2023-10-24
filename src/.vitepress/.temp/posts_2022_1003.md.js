import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"为什么Google很强？","description":"","frontmatter":{"sidebar":false,"date":"2022-10-03T00:00:00.000Z","category":["编程"]},"headers":[],"relativePath":"posts/2022/1003.md","filePath":"posts/2022/1003.md"}');
const _sfc_main = { name: "posts/2022/1003.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="为什么google很强" tabindex="-1">为什么Google很强？ <a class="header-anchor" href="#为什么google很强" aria-label="Permalink to &quot;为什么Google很强？&quot;">​</a></h1><p>资本总是想榨干员工和机器的每一点剩余价值。如果那一天服务器有了意识，一定会揭竿起义。</p><p>服务器和人一样，基本白天干活晚上休息，有时候白天非高峰时期也是休息的。程序员为了榨干机器的每一点价值，发明了一种叫统一调度的东西，Google 在这方面走在了世界的前列，搞了一个 Borg。</p><p>Google Borg 是一套资源管理系统，可用于统一管理和调度资源，目的是充分利用服务器的计算资源。例如大数据计算中心和对外 Web 站点，前者计算密集，后者计算稀疏，两者就可以结合起来统一调度，最大程度不让机器闲置。</p><p>Google 服务器的统一调度利用率据说达到了 60%，是目前的天花板。大部分公司，特别是中小公司的服务器，包括你自己的云服务器，10% 的利用率都不到。但是你可能付了 10 倍的钱，如果你的服务器是包年包月的话，意味着 9 成的钱都白付了。</p><p>Fackbook 不搞统一调度，据说因为他们的网站是全球网站，全天 24 小时提供服务，不存在时差浪费。这个理由有点牵强，Google 更是全球网站，为什么 Google 要搞统一调度？很大可能 Fackbook，或者说 Meta 现在也在搞了，只是我们不知道。</p><p>Google 总结自己的核心竞争力，有两条：1，搜索排名比别人精准；2，机器利用率是别人的 1/10。这就好比东西比别人好用，成本还是别人的 1/10，Google 强大果然是有道理的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2022/1003.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1003 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1003 as default
};
