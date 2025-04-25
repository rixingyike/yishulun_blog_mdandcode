// global_config.js
// 所有的个人配置项，个性化信息都放在这里，方便管理。
import { defineNoteConfig, defineNotesConfig, defineNavbarConfig } from 'vuepress-theme-plume'

const currentYear = new Date().getFullYear();
const author = "李艺";
const blog_url = "https://yishulu.com"

// 公告写在这里，为空则不显示
const bulletin_content = ""

//   导航栏
export let navbar = defineNavbarConfig([
    { text: '首页', link: '/' },
    { text: '电子书', link: '/notes/' },
    { text: '博客', 
        items: [
            { text: '最新', link: '/blog/' },
            { text: '分类', link: '/categories.html' },
            { text: '标签', link: '/tags.html' },
            { text: '归档', link: '/archives.html' },
            { text: '友链', link: '/friends.html' },
        ]
    },
    { text: '联系作者', link: '/about.html' },
])

// 专栏
// 子专栏一定要以/notes开头，否则sidebar无法正常显示
export let notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [],
    // notes: [
    //     {
    //         dir: 'typescript',
    //         link: '/notes/typescript',
    //         sidebar: "auto",
    //     }, {
    //         dir: 'demo',
    //         link: '/notes/demo',
    //         sidebar: "auto",
    //     }, {
    //         dir: 'rust',
    //         link: '/notes/rust',
    //         sidebar: "auto",
    //     }],
})

export default {
    author, // 合并 profileName 和 author
    hostname: blog_url,
    avatar: '/avatar.png', // 更名为 avatar
    title: '艺述论',
    description: '一枚热爱艺术的技术菌，分享技术，论述艺术感悟。', // 合并 profileDescription 和 description
    location: '北京',
    organization: '',

    // git
    repoUrl: 'https://github.com/rixingyike/yishulun_blog_mdandcode', // 合并 docsRepo 和 repoUrl
    repoBranch: 'main',

    // site
    article: '/blog/',//它决定了自动生成的文章链接的前缀
    devServer: process.env.NODE_ENV === 'development', // 有些配置例如feed和sitemap需要在devServer下才能生效
    devHostname: 'http://localhost:8080',
    site_favicon: '/favicon.ico',
    site_logo: '/logo.png', // 更名为 site_logo
    appearance: 'dark', // 添加 appearance 信息
    footerMessage: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>', // 添加 footerMessage 信息
    footerCopyright: `&copy 2002-${currentYear} ${author}`, // 动态获取年份和作者名称
    googleAnalyticsId: 'G-8N64Q25EK9', // 添加 Google Analytics ID
    googleAdsClient: 'ca-pub-2139303336591479', // 添加 Google Ads Client ID

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    bulletin: (bulletin_content ? {
        layout: 'top-right',
        contentType: 'markdown',
        lifetime: "once",
        title: '公告',
        content: bulletin_content,
    } : false),

    // social links
    social: [
        { icon: 'github', link: 'https://github.com/rixingyike' },
        // {
        //     icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z"/></svg>', name: 'feed' },
        //     link: `${blog_url}/feed.xml`
        // },
        { icon: 'x', link: 'https://x.com/coderliyi' },
        { icon: 'youtube', link: 'https://www.youtube.com/@yishulun' },
        {
            icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>', name: 'email' },
            link: 'mailto:9830131@qq.com'
        },
        { icon: 'zhihu', link: 'https://www.zhihu.com/people/liyi2005' },
    ], // 添加 social 信息

    // comment
    comment: true,
    commentRepo: 'rixingyike/yishulun.com_discus',
    commentRepoId: 'R_kgDOKRUETQ',
    commentCategory: 'General',
    commentCategoryId: 'DIC_kwDOKRUETc4CZMWK',
}
