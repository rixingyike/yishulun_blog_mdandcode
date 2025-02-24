import gc, { navbar, notes } from './global_config' // 引用全局配置

export default {
  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: "CC-BY-NC-4.0",
  hostname: gc.hostname,

  // 自动生成文章的permalinks，只有新创作的article和notes目录下的文章才会生成
  // 生成的文章地址均会以/article/开头，与它在哪个目录下无关
  autoFrontmatter: {
    include: ['article/*.md', 'notes/*.md'],
    exclude: ['posts/**/*.md', 'docs/**/*.md'],
    permalink: false,
    createTime: true,
    title: true,
  },

  git: true,
  changelog: {
    maxCount: 10,
    repoUrl: gc.repoUrl, // 从全局配置中引用
    commitUrlPattern: ':repo/commit/:hash',
    issueUrlPattern: ':repo/issues/:issue',
    tagUrlPattern: ':repo/releases/tag/:tag'
  },

  docsRepo: gc.repoUrl, // 从全局配置中引用
  docsBranch: gc.repoBranch, // 从全局配置中引用
  // 文档仓库目录配置，用于生成 Edit this page 链接
  docsDir: 'src',
  editLink: true,
  lastUpdated: true,
  contributors: false,

  article: gc.article,

  blog: {
    link: gc.article,
    /**
     * 博客文章 & 随笔
     * 通过 glob string 配置包含文件，
     * 默认读取 源目录中的所有 `.md` 文件，但会排除 `notes` 配置中用于笔记的目录。
     */
    // include: ['**/*.md'],
    // 如果希望只将源目录下某个目录下的文章读取为博客文章，比如 `blog` 目录，可以配置为：
    include: ['blog/**/*.md', 'posts/**/*.md', 'docs/**/*.md'],

    /**
     * 通过 glob string 配置排除的文件，相对于 源目录
     */
    exclude: ['.vuepress/', 'assets'],

    // 禁用分页
    // pagination: false,
    // 每页显示的文章数量
    pagination: 15,

    tags: true,
    tagsLink: '/tags.html',
    archives: true,
    archivesLink: '/archives.html',
    categories: true,
    categoriesLink: '/categories.html',

    // 配置 封面图 布局位置
    // postCover: 'left', // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'
    postCover: {
      layout: 'odd-right',
      ratio: '16:9',
      width: 300,
      compact: true
    },
  },

  cache: 'memory',

  // 公告板
  bulletin: gc.bulletin,

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    name: gc.author, // 从全局配置中引用
    description: gc.description, // 从全局配置中引用
    avatar: gc.avatar, // 从全局配置中引用
    location: gc.location, // 从全局配置中引用
    organization: gc.organization, // 从全局配置中引用
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  logo: gc.site_logo, // 从全局配置中引用

  appearance: gc.appearance, // 从全局配置中引用

  social: gc.social, // 从全局配置中引用

  navbarSocialInclude: ['github', 'twitter'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3, 4], // 页内大纲， 默认显示 h2, h3, h4

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

  // 添加 navbar 和 notes 配置
  navbar,
  notes,
}
