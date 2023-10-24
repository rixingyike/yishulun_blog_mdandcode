import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/image-20220908174157388.5a31d3f6.png";
const __pageData = JSON.parse('{"title":"03《坠落》观后感","description":"","frontmatter":{"sidebar":false,"date":"2022-09-08T17:23:49.000Z","category":["电影"]},"headers":[],"relativePath":"posts/2022/0908-2.md","filePath":"posts/2022/0908-2.md"}');
const _sfc_main = { name: "posts/2022/0908-2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_center = resolveComponent("center");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_03《坠落》观后感" tabindex="-1">03《坠落》观后感 <a class="header-anchor" href="#_03《坠落》观后感" aria-label="Permalink to &quot;03《坠落》观后感&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_center, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "zoom": "50%" })}"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            style: { "zoom": "50%" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>我的天，恐高勿看！（注意：影评都含有一定的剧透，介意请马上关上！）</p><ul><li><p>铁塔太高了，没有信号，用鞋子搭载手机扔到塔下求救，失败了。</p></li><li><p>遇到烧烤露营的人，发信号弹求救，结果人家不但不救她们，还把她们的车偷走了。</p></li><li><p>然后就是使用无人机尝试向旅店送信，结果无人机过马路没有看红绿灯，被卡车撞碎了。</p></li><li><p>最后，最后，还是靠把手机扔下塔（借助闺蜜），发出求救信号得救的。</p></li></ul><p>主角本来是在闺蜜的建议下，通过极限运动克服之前一个极限运动留下的情感阴影。现在好了，阴影更深啦。不过，失恋的阴影应该已经走出来啦。</p><p>影片从闺蜜下塔拿包，剧情就开始高度紧张。闺蜜的死亡反转，是全局一大亮点，相信这一点会促使你倒回去再看二遍。</p><p>从创作技法上讲，代入感很强。骨肉亲情、生死之交、侵夺背叛，容易产生代入感的三个方面都涉及到了，代入感想不强都很难。</p><p>如果再能设计一点集体荣誉、弱势群体因素进去就更强了：</p><ul><li><p>例如，在集体荣誉方面，可以让闺蜜参加一个极限主播大赛，主角和闺蜜为了获胜拿奖，必须参与这次挑战。</p></li><li><p>还有，在弱势群体方面，可以把主角和闺蜜设定为非法移民群体，甚至肤色都可以变成黑色，也可以让旅馆的人发现碎在马路上的直升机，看到了纸条，但没有人愿意选择来救她们，因为她们处在社会的最底层，命不值钱。如果这样设定，露营的人不救她们还偷车，就更容易站住脚了。还有，往宏大了讲，社会教育意义还附加上了。（该死的教育意义）</p></li></ul><p>最后说一下，有人质疑为什么不用无人机把手机送下塔，还有两人的运动装备根本不专业，背包没有上双险，保命绳也不长，还有一个最大槽点：苹果手机能用三天？好吧，如果导演没有从水果商那里拿到一份广告费的话，确实应该换一个手机品牌。</p><p>等等吧，确实有一些不严谨的地方，但电影或小说，主要是帮助观众释放情绪的，情绪占第一位，逻辑什么的其实不太重要。</p><blockquote><p>最后附一个在线试看链接：<a href="https://www.olevod.com/index.php/vod/play/id/38429/sid/1/nid/1.html%EF%BC%8C%E8%AF%B7%E6%94%AF%E6%8C%81%E6%AD%A3%E7%89%88%E3%80%82" target="_blank" rel="noreferrer">https://www.olevod.com/index.php/vod/play/id/38429/sid/1/nid/1.html，请支持正版。</a></p></blockquote><p>2022年9月8日</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2022/0908-2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _09082 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _09082 as default
};
