import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_@vuepress+plugin-feed@2.0.0-rc.3_@vuepress+plugin-slimsearch@_7i2jpk2cr4xdt3y26ugrfwkkw4/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.74_typescript@5.7.3_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_@vuepress+plugin-feed@2.0.0-rc.3_@vuepress+plugin-slimsearch@_7i2jpk2cr4xdt3y26ugrfwkkw4/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_@vuepress+plugin-feed@2.0.0-rc.3_@vuepress+plugin-slimsearch@_7i2jpk2cr4xdt3y26ugrfwkkw4/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_@vuepress+plugin-feed@2.0.0-rc.3_@vuepress+plugin-slimsearch@_7i2jpk2cr4xdt3y26ugrfwkkw4/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_@vuepress+plugin-feed@2.0.0-rc.3_@vuepress+plugin-slimsearch@_7i2jpk2cr4xdt3y26ugrfwkkw4/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_typescript@5.7.3_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_typescript@5.7.3_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_typescript@5.7.3_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "C:/Users/98301/work/yishulun_blog_mdandcode/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.71_@vuepress+plugin-feed@2.0.0-rc.3_@vuepress+plugin-slimsearch@_7i2jpk2cr4xdt3y26ugrfwkkw4/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
