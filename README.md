# 艺术论博客源码

## 编译指令

pnpm docs:dev 启动开发服务器
pnpm docs:build 构建项目并输出
pnpm docs:clean-dev 清除缓存并启动开发服务器

## 配置

theme的源码在node_modules/vuepress-theme-hope目录下。全局配置在这里：src\.vuepress\global_config.js。

可用的图标：https://icon-sets.iconify.design/fa6-solid/，所有的图标从这里查找可用名称。在站里面，会自动加上fa6-solid前缀，这个配置在theme.config里面。

所有静态资源文件在.vuepress/public目录下。

发布时，使用了Git Actions在线自动编译，然后将编译后的`src/.vuepress/dist`目录推到了线上rixingyike.github.com仓库。

