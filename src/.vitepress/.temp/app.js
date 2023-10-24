import { L as Layout, a as VPBadge, u as useData, w as withBase, o as onContentUpdated, i as inBrowser, c as createTitle, m as mergeHead, b as useRoute, p as pathToFile, R as RouterSymbol, d as initData, e as dataSymbol, C as Content, s as siteDataRef, f as createRouter } from "./VPTeamMembers.5ad238de.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext, ref, shallowRef, onMounted, withCtx, createVNode, watchEffect, watch, onUnmounted, h, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import Gitalk from "gitalk";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import "@vueuse/core";
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
function initTags(post) {
  const data = {};
  for (let i = 0; i < post.length; i++) {
    const element = post[i];
    const tags = element.frontMatter.tags;
    if (Array.isArray(tags)) {
      tags.forEach((item) => {
        if (!data[item]) {
          data[item] = [];
        }
        data[item].push(element);
      });
    }
  }
  return data;
}
function useYearSort(post) {
  const data = [];
  let year = "0";
  let num = -1;
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    if (element.frontMatter.date) {
      const y = element.frontMatter.date.split("-")[0];
      if (y === year) {
        data[num].push(element);
      } else {
        num++;
        data[num] = [];
        data[num].push(element);
        year = y;
      }
    }
  }
  return data;
}
function getHeaders(range) {
  const headers = [...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return headers;
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Archives",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const data = computed(() => useYearSort(theme2.value.posts));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-229987b0><!--[-->`);
      ssrRenderList(data.value, (yearList) => {
        _push(`<div class="yearItem" data-v-229987b0><div class="year" data-v-229987b0>${ssrInterpolate(yearList[0].frontMatter.date.split("-")[0])}</div><!--[-->`);
        ssrRenderList(yearList, (article, index) => {
          _push(`<a${ssrRenderAttr("href", unref(withBase)(article.regularPath))} class="article" data-v-229987b0><div class="title" data-v-229987b0><div class="title-o" data-v-229987b0></div> ${ssrInterpolate(article.frontMatter.title)}</div><div class="date" data-v-229987b0>${ssrInterpolate(article.frontMatter.date)}</div></a>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const Archives_vue_vue_type_style_index_0_scoped_229987b0_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Archives.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Archives = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-229987b0"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Tags",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const data = computed(() => initTags(theme2.value.posts));
    let selectTag = ref("");
    const getFontSize = (length) => {
      let size = length * 0.04 + 0.85;
      return { fontSize: `${size}em` };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-79ba70b0><h1 class="tags-header" data-v-79ba70b0>Tags</h1><div class="tags" data-v-79ba70b0><!--[-->`);
      ssrRenderList(data.value, (item, key) => {
        _push(`<span style="${ssrRenderStyle(getFontSize(data.value[key].length))}" class="${ssrRenderClass([{ activetag: unref(selectTag) === key }, "tag"])}" data-v-79ba70b0>${ssrInterpolate(key)} <span class="tag-length" data-v-79ba70b0>${ssrInterpolate(data.value[key].length)}</span></span>`);
      });
      _push(`<!--]--></div><h4 class="header" style="${ssrRenderStyle(unref(selectTag) ? null : { display: "none" })}" data-v-79ba70b0><svg t="1641783753540" class="fas-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1254" style="${ssrRenderStyle({
        width: "20px"
      })}" data-v-79ba70b0><path d="M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z" fill="var(--vp-c-brand)" p-id="1255" data-v-79ba70b0></path></svg><span class="header-text" data-v-79ba70b0>${ssrInterpolate(unref(selectTag))}</span></h4><!--[-->`);
      ssrRenderList(data.value[unref(selectTag)], (article, index) => {
        _push(`<a${ssrRenderAttr("href", unref(withBase)(article.regularPath))} class="article" data-v-79ba70b0><div class="title" data-v-79ba70b0><div class="title-o" data-v-79ba70b0></div> ${ssrInterpolate(article.frontMatter.title)}</div><div class="date" data-v-79ba70b0>${ssrInterpolate(article.frontMatter.date)}</div></a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const Tags_vue_vue_type_style_index_0_scoped_79ba70b0_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Tags.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Tags = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-79ba70b0"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-79f241c2><img${ssrRenderAttr("src", unref(theme2).avator)} width="135" height="135" class="avator" data-v-79f241c2></div>`);
    };
  }
});
const HomeHero_vue_vue_type_style_index_0_scoped_79f241c2_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/HomeHero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-79f241c2"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CopyRright",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const author = theme2.value.author;
    const date = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-65f6b5c1> Powered by <a href="https://vitepress.dev/" rel="nofollow" target="_blank" data-v-65f6b5c1>VitePress</a> &amp; <a href="https://github.com/clark-cui/vitepress-blog-zaun" rel="nofollow" target="_blank" data-v-65f6b5c1>vitepress-blog-zaun</a><br data-v-65f6b5c1>Copyright © 2002-${ssrInterpolate(unref(date))} <a href="/" data-v-65f6b5c1>${ssrInterpolate(unref(author))}</a> | MIT License | <a href="/sitemap.txt" data-v-65f6b5c1>sitemap</a> | <a href="/feed.xml" data-v-65f6b5c1>feed</a></footer>`);
    };
  }
});
const CopyRright_vue_vue_type_style_index_0_scoped_65f6b5c1_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/CopyRright.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CopyRright = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-65f6b5c1"]]);
const gitalk = "";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Comments",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    let hideComment = !!theme2.value.hideComment || !!frontmatter.value.hideComment || false;
    function deleteChild() {
      const element = document.querySelector("#gitalk-container");
      let child = element == null ? void 0 : element.lastElementChild;
      while (child) {
        element == null ? void 0 : element.removeChild(child);
        child = element == null ? void 0 : element.lastElementChild;
      }
    }
    onContentUpdated(() => {
      deleteChild();
      const gitalk2 = new Gitalk({
        clientID: "0cdfd84658051b0f7de6",
        clientSecret: "00abdf1125f10d508972810f86be70917e1ba05f",
        repo: "yishulun.com_discus",
        owner: "rixingyike",
        admin: ["rixingyike"],
        id: encodeURI(location.pathname.substring(0, 50)),
        // Ensure uniqueness and length less than 50
        language: "zh-CN",
        distractionFreeMode: true
        // Facebook-like distraction free mode
      });
      gitalk2.render("gitalk-container");
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(hideComment)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ id: "gitalk-container" }, _attrs))}></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Comments.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AuthorCard_vue_vue_type_style_index_0_scoped_71158d45_lang = "";
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shareCard" }, _attrs))} data-v-71158d45><h1 class="title" data-v-71158d45><span data-v-71158d45>Hi, I&#39;m LIYI 👋</span></h1><p class="description" data-v-71158d45> 一名讲故事的计算机工程师/讲师/图书作者。 </p></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/AuthorCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AuthorCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-71158d45"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    let postsAll = theme2.value.posts || [];
    let postLength = theme2.value.postLength;
    let pageSize = theme2.value.pageSize;
    let pagesNum = postLength % pageSize === 0 ? postLength / pageSize : postLength / pageSize + 1;
    pagesNum = parseInt(pagesNum.toString());
    let pageCurrent = ref(1);
    postsAll = postsAll.filter((item) => {
      return item.regularPath.indexOf("index") < 0;
    });
    let allMap = {};
    for (let i = 0; i < pagesNum; i++) {
      allMap[i] = [];
    }
    let index = 0;
    for (let i = 0; i < postsAll.length; i++) {
      if (allMap[index].length > pageSize - 1) {
        index += 1;
      }
      allMap[index].push(postsAll[i]);
    }
    let posts = ref([]);
    posts.value = allMap[pageCurrent.value - 1];
    const transDate = (date) => {
      const dateArray = date.split("-");
      let year = dateArray[0], month = ``, day = dateArray[2];
      switch (dateArray[1]) {
        case "1":
        case "01":
          month = `Jan`;
          break;
        case "2":
        case "02":
          month = `Feb`;
          break;
        case "3":
        case "03":
          month = `Mar`;
          break;
        case "4":
        case "04":
          month = `Apr`;
          break;
        case "5":
        case "05":
          month = `May`;
          break;
        case "6":
        case "06":
          month = `Jun`;
          break;
        case "7":
        case "07":
          month = `Jul`;
          break;
        case "8":
        case "08":
          month = `Aug`;
          break;
        case "9":
        case "09":
          month = `Sep`;
          break;
        case "10":
          month = `Oct`;
          break;
        case "11":
          month = `Nov`;
          break;
        case "12":
          month = `Dec`;
          break;
        default:
          month = `Month`;
      }
      return `${month} ${day}, ${year}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(AuthorCard, null, null, _parent));
      _push(`<h1 class="blog-title" data-v-cf3b992b>Blogs</h1><div class="blogList" data-v-cf3b992b><!--[-->`);
      ssrRenderList(unref(posts), (item) => {
        _push(`<a class="blog"${ssrRenderAttr("href", unref(withBase)(item.regularPath))} data-v-cf3b992b><div class="title" data-v-cf3b992b>${ssrInterpolate(item.frontMatter.title)}</div><div class="date" data-v-cf3b992b>${ssrInterpolate(transDate(item.frontMatter.date))}</div></a>`);
      });
      _push(`<!--]--></div><div class="pagination" data-v-cf3b992b>`);
      if (unref(pageCurrent) > 1) {
        _push(`<button class="left" data-v-cf3b992b> Previous page </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pagesNum) > 1) {
        _push(`<div data-v-cf3b992b>${ssrInterpolate(`${unref(pageCurrent)}/${unref(pagesNum)}`)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pageCurrent) < unref(pagesNum)) {
        _push(`<button class="right" data-v-cf3b992b> Next page </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const HomePage_vue_vue_type_style_index_0_scoped_cf3b992b_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/HomePage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-cf3b992b"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Category",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    let showCustomCategory = theme2.value.showCustomCategory;
    const headers = shallowRef([]);
    const showIndent = ref(false);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
      showIndent.value = headers.value.some((header) => {
        return header.level === 2;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (headers.value.length > 0 && unref(showCustomCategory)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "category" }, _attrs))} data-v-61acc106><ul class="list" data-v-61acc106><!--[-->`);
        ssrRenderList(headers.value, (item) => {
          _push(`<li class="header" data-v-61acc106>`);
          if (item.level === 2) {
            _push(`<a${ssrRenderAttr("href", item.link)} class="header-h2" data-v-61acc106>${ssrInterpolate(item.title)}</a>`);
          } else {
            _push(`<!---->`);
          }
          if (item.level === 3) {
            _push(`<ul data-v-61acc106><li class="header" data-v-61acc106><a${ssrRenderAttr("href", item.link)} class="${ssrRenderClass(["header-h3", { showIndent: showIndent.value }])}" data-v-61acc106>${ssrInterpolate(item.title)}</a></li></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const Category_vue_vue_type_style_index_0_scoped_61acc106_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Category.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Category = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-61acc106"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  setup(__props) {
    const pageData = useData().page;
    const publishDate = ref("");
    dayjs.extend(relativeTime);
    onContentUpdated(() => {
      const { frontmatter } = pageData.value;
      publishDate.value = dayjs().to(dayjs(frontmatter.date || Date.now()));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="title" data-v-fd64dd10>🔰 ${ssrInterpolate(unref(pageData).title)}</h1><div class="date" data-v-fd64dd10>🕒 Published at: ${ssrInterpolate(publishDate.value)}</div><!--]-->`);
    };
  }
});
const Title_vue_vue_type_style_index_0_scoped_fd64dd10_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Title.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Title = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fd64dd10"]]);
const _imports_0 = "/wegame-book.png";
const _imports_1 = "/geektime-weapp.png";
const _imports_2 = "/weapp-optimize.png";
const Award_vue_vue_type_style_index_0_scoped_fbf72d30_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "authorCard" }, _attrs))} data-v-fbf72d30><h1 class="title" data-v-fbf72d30><span data-v-fbf72d30>Book</span></h1><p class="description" data-v-fbf72d30><a href="https://item.jd.com/13728755.html" target="_blank" data-v-fbf72d30><img style="${ssrRenderStyle({ "max-width": "300px" })}"${ssrRenderAttr("src", _imports_0)} data-v-fbf72d30></a></p><h1 class="title" data-v-fbf72d30><span data-v-fbf72d30>Courses</span></h1><p class="description" data-v-fbf72d30><a href="http://gk.link/a/10AdC" target="_blank" data-v-fbf72d30><img style="${ssrRenderStyle({ "max-width": "430px" })}"${ssrRenderAttr("src", _imports_1)} data-v-fbf72d30></a></p><p class="description" data-v-fbf72d30><a href="http://gk.link/a/10AdC" target="_blank" data-v-fbf72d30><img style="${ssrRenderStyle({ "max-width": "430px" })}"${ssrRenderAttr("src", _imports_2)} data-v-fbf72d30></a></p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Award.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Award = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fbf72d30"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Share",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2, frontmatter } = useData();
    const author = theme2.value.author;
    const siteDesc = site.value.description;
    const date = (/* @__PURE__ */ new Date()).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" });
    let articleLinkText = theme2.value.blogUrl;
    let hideShare = !!theme2.value.hideShare || !!frontmatter.value.hideShare || false;
    onMounted(() => {
      console.log("mounted...");
      articleLinkText = decodeURI(window.location.origin + window.location.pathname);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "social-share" }, _attrs))} data-v-c24fa176><p class="description" data-v-c24fa176><span data-v-c24fa176>Reference</span><br data-v-c24fa176> - ${ssrInterpolate(unref(author))}. ${ssrInterpolate(unref(siteDesc))}, ${ssrInterpolate(unref(date))}. <a${ssrRenderAttr("href", encodeURI(unref(articleLinkText)))} data-v-c24fa176>${ssrInterpolate(unref(articleLinkText))}</a></p><br data-v-c24fa176>`);
      if (!unref(hideShare)) {
        _push(`<!--[--><h1 class="title" data-v-c24fa176><span data-v-c24fa176>Share this article</span></h1><p class="description" data-v-c24fa176><button data-v-c24fa176><svg data-v-c80a5469="" class="svg-inline--fa fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" data-v-c24fa176><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" data-v-c24fa176></path></svg> Twitter </button><button data-v-c24fa176><svg data-v-c80a5469="" class="svg-inline--fa fa-facebook-f" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" data-v-c24fa176><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" data-v-c24fa176></path></svg> Facebook </button><button data-v-c24fa176><svg data-v-c80a5469="" class="svg-inline--fa fa-linkedin-in" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" data-v-c24fa176><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" data-v-c24fa176></path></svg> LinkedIn </button><button data-v-c24fa176><svg data-v-c80a5469="" class="svg-inline--fa fa-whatsapp" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" data-v-c24fa176><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" data-v-c24fa176></path></svg> WhatsApp </button></p><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br data-v-c24fa176></div>`);
    };
  }
});
const Share_vue_vue_type_style_index_0_scoped_c24fa176_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Share.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Share = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c24fa176"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdInArticleFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const adLinks = [{
      title: "明白这些道理，你也能快速学会编程",
      link: "https://mp.weixin.qq.com/s/Pt4UHmh3wO2lXBn3C2gKvA"
    }, {
      title: "爱读书怎么可以没有一枚印章？",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAwODIzMzU3Mw==&action=getalbum&album_id=3158620429020807172&scene=21#wechat_redirect"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "social-share" }, _attrs))} data-v-3dbeb732><p class="description" data-v-3dbeb732><span data-v-3dbeb732>Recommend</span><br data-v-3dbeb732><ul class="list" data-v-3dbeb732><!--[-->`);
      ssrRenderList(adLinks, (item) => {
        _push(`<li class="link-header" data-v-3dbeb732> ✔<a${ssrRenderAttr("href", item.link)} data-v-3dbeb732>${ssrInterpolate(item.title)}</a></li>`);
      });
      _push(`<!--]--></ul></p></div>`);
    };
  }
});
const AdInArticleFooter_vue_vue_type_style_index_0_scoped_3dbeb732_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/AdInArticleFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdInArticleFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3dbeb732"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { Layout: Layout2 } = theme;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Layout2), null, {
        "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Title, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Category, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Title),
              createVNode(Category)
            ];
          }
        }),
        "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AdInArticleFooter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Share, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AdInArticleFooter),
              createVNode(Share),
              createVNode(_sfc_main$8)
            ];
          }
        }),
        "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomeHero, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomeHero)
            ];
          }
        }),
        "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomePage, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Award, null, null, _parent2, _scopeId));
            _push2(`<div class="width-wrapper" data-v-65917e7b${_scopeId}>`);
            _push2(ssrRenderComponent(AdInArticleFooter, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(HomePage),
              createVNode(Award),
              createVNode("div", { class: "width-wrapper" }, [
                createVNode(AdInArticleFooter)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(CopyRright, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const MyLayout_vue_vue_type_style_index_0_scoped_65917e7b_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/MyLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65917e7b"]]);
const custom = "";
const RawTheme = {
  ...theme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
    const { app } = ctx;
    app.component("Archives", Archives);
    app.component("Tags", Tags);
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData, pageData);
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      metaDescriptionElement.setAttribute("content", description);
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      pageModule = import(
        /*@vite-ignore*/
        pageFilePath
      );
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
