import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import gc from './global_config' // 引用全局配置
import path from 'path'
import fs from 'fs'

// 创建一个自定义的 Vite 插件来处理 XML 文件
const xmlPlugin = () => {
  return {
    name: 'vite-plugin-xml-handler',
    // 使用 Vite 6.0 推荐的 configureServer 钩子
    configureServer(server) {
      // 添加中间件来处理 XML 文件请求
      server.middlewares.use((req, res, next) => {
        // 添加日志，调试请求路径
        if (req.url && (req.url.endsWith('.xml') || req.url.endsWith('.xml.html') || req.url.endsWith('.xsl'))) {
          console.log('XML/XSL 请求捕获:', req.url)
        }
        
        // 检查请求是否针对 XML 文件或 XSL 文件
        if (req.url && (req.url.endsWith('.xml') || req.url.endsWith('.xml.html') || req.url.endsWith('.xsl'))) {
          // 处理可能的 .xml.html 重定向
          let filePath = req.url
          if (req.url.endsWith('.xml.html')) {
            filePath = req.url.replace('.html', '')
          }
          const publicFilePath = path.join(process.cwd(), 'src/.vuepress/public', filePath)
          try {
            // 检查文件是否存在
            if (fs.existsSync(publicFilePath)) {
              // 读取文件内容
              const content = fs.readFileSync(publicFilePath, 'utf-8')
              // 设置正确的 Content-Type
              if (req.url.endsWith('.xml') || req.url.endsWith('.xml.html')) {
                res.setHeader('Content-Type', 'application/xml')
              } else if (req.url.endsWith('.xsl')) {
                res.setHeader('Content-Type', 'text/xsl')
              }
              // 发送文件内容
              res.end(content)
              return
            }
            // 如果在 public 目录中找不到，尝试在 .vuepress/dist 目录中查找
            const distFilePath = path.join(process.cwd(), 'src/.vuepress/dist', filePath)
            if (fs.existsSync(distFilePath)) {
              const content = fs.readFileSync(distFilePath, 'utf-8')
              // 设置正确的 Content-Type
              if (req.url.endsWith('.xml') || req.url.endsWith('.xml.html')) {
                res.setHeader('Content-Type', 'application/xml')
              } else if (req.url.endsWith('.xsl')) {
                res.setHeader('Content-Type', 'text/xsl')
              }
              // 发送文件内容
              res.end(content)
              return
            }
          } catch (err) {
            console.error(`Error serving file: ${err}`)
          }
        }
        // 继续处理其他请求
        next()
      })
    },
    // 添加 transform 钩子以处理构建时的 XML 文件
    transform(code, id) {
      if (id.endsWith('.xml') || id.endsWith('.xsl')) {
        // 直接返回 XML/XSL 内容，不进行转换
        return {
          code,
          map: null
        }
      }
      return null
    },
    // 添加 buildEnd 钩子，在构建结束时复制 sitemap 文件到 public 目录
    async buildEnd() {
      try {
        const publicDir = path.join(process.cwd(), 'src/.vuepress/public')
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true })
        }
        const distDir = path.join(process.cwd(), 'src/.vuepress/dist')
        if (fs.existsSync(distDir)) {
          const sitemapXmlPath = path.join(distDir, 'sitemap.xml')
          const sitemapXslPath = path.join(distDir, 'sitemap.xsl')
          const feedXmlPath = path.join(distDir, 'feed.xml')
          if (fs.existsSync(sitemapXmlPath)) {
            fs.copyFileSync(sitemapXmlPath, path.join(publicDir, 'sitemap.xml'))
            console.log('Copied sitemap.xml to public directory (buildEnd)')
          }
          if (fs.existsSync(sitemapXslPath)) {
            fs.copyFileSync(sitemapXslPath, path.join(publicDir, 'sitemap.xsl'))
            console.log('Copied sitemap.xsl to public directory (buildEnd)')
          }
          if (fs.existsSync(feedXmlPath)) {
            fs.copyFileSync(feedXmlPath, path.join(publicDir, 'feed.xml'))
            console.log('Copied feed.xml to public directory (buildEnd)')
          }
        }
      } catch (err) {
        console.error(`Error copying sitemap/feed files at buildEnd: ${err}`)
      }
    }
  }
}

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: gc.title, // 从全局配置中引用
  description: gc.description, // 从全局配置中引用

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: gc.site_favicon }], // 从全局配置中引用
    ['meta', { name: 'og:author', content: gc.author }], // 添加 author 信息
    ['meta', { property: 'og:description', content: gc.description }], // 添加 og:description 信息
    // 添加 Google Analytics
    ['script', { defer: true, crossorigin: 'anonymous', src: `//www.googletagmanager.com/gtag/js?id=${gc.googleAnalyticsId}` }], // 从全局配置中引用
    ['script', {}, `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${gc.googleAnalyticsId}');`], // 从全局配置中引用
    // 添加 Google Ads
    ['script', { defer: true, crossorigin: 'anonymous', src: `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gc.googleAdsClient}` }], // 从全局配置中引用
  ],

  bundler: viteBundler({
    viteOptions: {
      // 将 XML 文件视为静态资源
      assetsInclude: ['**/*.xml', '**/feed.xml'],
      // 使用我们的自定义插件
      plugins: [xmlPlugin()],
      server: {
        fs: {
          allow: ['..']
        },
        middlewareMode: false
      },
      build: {
        // 确保 XML 文件被正确复制到输出目录
        copyPublicDir: true,
        // 自定义 Rollup 输出选项
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              // 保持 XML 文件的原始名称和路径
              if (assetInfo.name && assetInfo.name.endsWith('.xml')) {
                return '[name].[ext]';
              }
              return 'assets/[name].[hash].[ext]';
            }
          }
        }
      }
    }
  }),
  
  // 配置静态资源处理
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  public: '.vuepress/public',
  shouldPrefetch: false,

  theme: plumeTheme({
    plugins: {
      sitemap: {
        hostname: gc.hostname,
        devServer: gc.devServer,
        devHostname: gc.devHostname,
      },
      comment: {
        comment: gc.comment, // 从全局配置中引用
        provider: 'Giscus',
        repo: gc.commentRepo,
        repoId: gc.commentRepoId,
        category: gc.commentCategory,
        categoryId: gc.commentCategoryId,
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
    git: true,

    // 是否启用 feed 订阅功能
    feed: {
      hostname: gc.hostname,
      devServer: gc.devServer, // 从全局配置中引用
      devHostname: gc.devHostname,
      rss: true,
      atom: false,
      json: false,
      // 自定义输出文件名
      rssOutputFilename: 'feed.xml',
      // atomOutputFilename: 'atom.xml',
      // jsonOutputFilename: 'feed.json',
      // 确保生成的文件被正确处理
      customElements: ['rss', 'feed', 'entry', 'content'],
    },
    shiki: {
      languages: ["rust","bash","xml","go","c","js","ruby","json","python","shell","java","py","html","yaml","ts","jsx","javascript"],
      whitespace: true,
      lineNumbers: true,
    },
    search: true,
    readingTime: true,
    markdownPower: {
      pdf: true,
      caniuse: true,
      plot: true,
      bilibili: true,
      youtube: true,
      audioReader: true,
      icons: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      npmTo: true,
      demo: true,
      repl: {
        go: true,
        rust: true,
        kotlin: true,
      },
      imageSize: 'local',
    },
  }),
})
