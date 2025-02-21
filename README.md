# 艺述论博客md源码及程序代码

网站使用 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 构建生成。

## 如何进行个性化配置&写作

在src目录下，posts与docs是旧目录，是为了兼容旧随笔而存在的。notes是随笔/专栏，完成的专栏要发布，需要在global_config.js的notes中加一个公开配置；blog是日常随笔，仍以年分组。

使用图标，包括在文章中使用，从这里查找：https://icon-sets.iconify.design/。

notes的侧边栏目录是如何保证生成的？让每个子note专栏的链接从/notes/开始，侧边栏自然就有了。可以在本地撰写一个note专栏，待完成后，再修改global_config.js中的notes配置，对外发布。

如果撰写文章？在blog目录下，按年撰写即可，文件名是数字，从1开始递增。关闭了所有的permalink链接生成，自动生成的permalink会破坏目录结构的清晰性，所以弃用了。


## Install

```sh
pnpm i
```

## Usage

```sh
# 启动开发服务
pnpm docs:dev
# 构建生产包
pnpm docs:build
# 本地预览生产服务
pnpm docs:preview
# 更新 vuepress 和主题
pnpm vp-update
```

## 部署到 GitHub Pages

主题已创建 github actions: `.github/workflows/docs-deploy.yml`，你还需要在 github 仓库中进行以下设置：

- [ ] `settings > Actions > General`，拉到页面底部，在 `Workflow permissions` 下，勾选 `Read and write permissions`，并点击保存按钮

- [ ] `settings > Pages`, 在 `Build and deployment` 中，`Source` 选择 `Deploy from a branch`, `Branch` 选择 `gh-pages`，并点击保存按钮
  (首次创建可能没有 `gh-pages`分支，你可以先完成上面的设置后，推送一次代码到主分支，等待 `github actions` 完成后再进行设置)

- [ ] 修改 `docs/.vuepress/config.ts` 中的 `base` 选项：
  - 如果你准备发布到 `https://<USERNAME>.github.io/` ，你可以省略这一步，因为 `base` 默认就是 `"/"` 。
  - 如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `"/<REPO>/"`。

如需要自定义域名，请查看 [Github Pages 文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 文档

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
