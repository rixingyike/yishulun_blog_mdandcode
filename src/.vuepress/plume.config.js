import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar, notes, default as gc } from './global_config' // 引用全局配置

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  navbar,
  notes,

  // 公告板
  bulletin: gc.bulletin,

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    name: gc.author, // 从全局配置中引用
    description: gc.description, // 从全局配置中引用
    avatar: gc.avatar, // 从全局配置中引用
    // location: '您的位置',
    // organization: '您的组织',
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  logo: gc.site_logo, // 从全局配置中引用

  appearance: gc.appearance, // 从全局配置中引用

  social: gc.social, // 从全局配置中引用

  navbarSocialInclude: ['github', 'twitter'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3, 4], // 页内大纲， 默认显示 h2, h3, h4
  // permalink: "/article/:slug.html", // 错误的配置，不顶事

  //copyright: true,

  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: gc.footerMessage, // 从全局配置中引用
    copyright: gc.footerCopyright, // 从全局配置中引用
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
