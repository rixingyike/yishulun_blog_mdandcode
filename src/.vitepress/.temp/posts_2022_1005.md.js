import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"PBL网文小说与技术实战图书写作流程模板","description":"","frontmatter":{"sidebar":false,"date":"2022-10-05T00:00:00.000Z","category":["文学"],"tags":["小说"]},"headers":[],"relativePath":"posts/2022/1005.md","filePath":"posts/2022/1005.md"}');
const _sfc_main = { name: "posts/2022/1005.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pbl网文小说与技术实战图书写作流程模板" tabindex="-1">PBL网文小说与技术实战图书写作流程模板 <a class="header-anchor" href="#pbl网文小说与技术实战图书写作流程模板" aria-label="Permalink to &quot;PBL网文小说与技术实战图书写作流程模板&quot;">​</a></h1><p>PBL 网文小说：</p><ul><li>0，要有一个主题（例如成长环境对人性格的影响「射雕英雄传」，爱情「神雕侠侣」）</li><li>1，依据主题，确立一个故事大纲（例如「神雕侠侣」中的各种恋爱类型：养父养女恋、师徒恋、同门恋、姐妹恋、大叔小妹恋等）</li><li>2，根据大纲，调查与收集多个故事示例</li><li>3，将多个故事示例整合到一起。情节不通的，想办法编撰情节串起来</li><li>4，反推，做减法，到第一节</li><li>5，从第一节开始撰写（在这里就可以连载了）</li><li>6，最后是修订润色，相当于再版修订</li></ul><p>同样的 PBL 实战课程是这样的：</p><ul><li>0，要有一个主题（例如小程序优化）</li><li>1，先确定一个知识点大纲</li><li>2，依据大纲，依次构建所有示例</li><li>3，将所有示例整合到一个项目中</li><li>4，将 PBL 项目反推剥离，到第一节</li><li>5，从第一节开始撰写（这个时候就可以连载了）</li><li>6，最后是润色修改</li></ul><p>这套模板目前仅在实战课程中有实际运用，在网文小说写作中还未曾应用，因相信该模板而在小说创作中遭遇扑街由私淑者自己负责。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2022/1005.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1005 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1005 as default
};
