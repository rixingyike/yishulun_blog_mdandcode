<template><div><h1 id="艺术论博客源码" tabindex="-1"><a class="header-anchor" href="#艺术论博客源码"><span>艺术论博客源码</span></a></h1>
<h2 id="编译指令" tabindex="-1"><a class="header-anchor" href="#编译指令"><span>编译指令</span></a></h2>
<p>pnpm docs:dev 启动开发服务器<br>
pnpm docs:build 构建项目并输出<br>
pnpm docs:clean-dev 清除缓存并启动开发服务器</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>theme的源码在node_modules/vuepress-theme-hope目录下。全局配置在这里：.vuepress/global_config.js。</p>
<p>可用的图标：<a href="https://icon-sets.iconify.design/fa6-solid/%EF%BC%8C%E6%89%80%E6%9C%89%E7%9A%84%E5%9B%BE%E6%A0%87%E4%BB%8E%E8%BF%99%E9%87%8C%E6%9F%A5%E6%89%BE%E5%8F%AF%E7%94%A8%E5%90%8D%E7%A7%B0%E3%80%82%E5%9C%A8%E7%AB%99%E9%87%8C%E9%9D%A2%EF%BC%8C%E4%BC%9A%E8%87%AA%E5%8A%A8%E5%8A%A0%E4%B8%8Afa6-solid%E5%89%8D%E7%BC%80%EF%BC%8C%E8%BF%99%E4%B8%AA%E9%85%8D%E7%BD%AE%E5%9C%A8theme.config%E9%87%8C%E9%9D%A2%E3%80%82" target="_blank" rel="noopener noreferrer">https://icon-sets.iconify.design/fa6-solid/，所有的图标从这里查找可用名称。在站里面，会自动加上fa6-solid前缀，这个配置在theme.config里面。</a></p>
<p>所有静态资源文件在.vuepress/public目录下。</p>
<p>发布时，使用了Git Actions在线自动编译，然后将编译后的<code v-pre>.vuepress/dist</code>目录推到了线上rixingyike.github.com仓库。</p>
<p>robot.txt会自动生成，在public下面不需要手写放置。</p>
<p>.viepress目录是程序所在目录，从这里执行，是从启动命令指定的，例如vuepress-vite build .指定了项目根目录，该目录下的.vuepress就是程序目录。</p>
<p>这样的写法：<code v-pre>{{文本在这里}}</code>，一定要加上单引号，不然程序会当作vue组件处理了。</p>
</div></template>


