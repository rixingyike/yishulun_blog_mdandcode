import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"忽然想起一个第一人称写作技巧","description":"","frontmatter":{"sidebar":false,"date":"2021-03-30T00:00:00.000Z"},"headers":[],"relativePath":"posts/2021/6.md","filePath":"posts/2021/6.md"}');
const _sfc_main = { name: "posts/2021/6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="忽然想起一个第一人称写作技巧" tabindex="-1">忽然想起一个第一人称写作技巧 <a class="header-anchor" href="#忽然想起一个第一人称写作技巧" aria-label="Permalink to &quot;忽然想起一个第一人称写作技巧&quot;">​</a></h1><p>为了说明问题，先引用一段余秋雨《文化苦旅》《阳关雪》中的几段话：</p><blockquote><p>一走出小小的县城，便是沙漠。除了茫茫一片雪白，什么也没有，连一个皱折也找不到。在别地赶路，总要每一段为自己找一个目标，盯着一棵树，赶过去，然后再盯着一块石头，赶过去。在这里，睁疼了眼也看不见一个目标，哪怕是一片枯叶，一个黑点。于是，只好抬起头来看天。从未见过这样完整的天，一点儿也没有被吞食，边沿全是挺展展的，紧扎扎地把大地罩了个严实。有这样的地，天才叫天。有这样的天，地才叫地。在这样的天地中独个儿行走，侏儒也变成了巨人。在这样的天地中独个儿行走，巨人也变成了侏儒。</p><p>天竟晴了，风也停了，阳光很好。没想到沙漠中的雪化得这样快，才片刻，地上已见斑斑沙底，却不见湿痕。</p><p>天边渐渐飘出几缕烟迹，并不动，却在加深，疑惑半晌，才发现，那是刚刚化雪的山脊。</p><p>地上的凹凸已成了一种令人惊骇的铺陈，只可能有一种理解：那全是远年的坟堆。</p></blockquote><p>在技巧上有两点值得说一下，一句是“在这样的天地中独个儿行走，侏儒也变成了巨人。在这样的天地中独个儿行走，巨人也变成了侏儒”，这种对比式排句很有意思。</p><p>但它还不是高级的技巧。下面这句“<strong>天边渐渐飘出几缕烟迹，并不动，却在加深，疑惑半晌，才发现，那是刚刚化雪的山脊</strong>”，这里用了第一人称，直接写了作者的主观感受，“天边渐渐飘出几缕烟迹”，烟迹就是作者的主观观受。作者知道这其实不是烟迹，但作者在用第一人称视角，在向我们再现他当时的感受。</p><p>在写技术类书籍时，有时候实战项目进行到某一阶段的时候，难免会出一些问题。虽然我们知道问题是怎么回事，但是最好当时不要说破，而是像余老师一样，只写当时的感受，让读者感同身受。最后再揭露答案。</p><p>与时俱进，用发展的眼光，用行走的视角写科普文字，写教育文学。感谢余老师，激发我的创作灵感。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2021/6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _6 as default
};
