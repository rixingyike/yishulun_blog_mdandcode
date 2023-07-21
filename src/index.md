---
layout: home
title: 主页

hero:
  name: 艺述论博客
  text: 社恐+老码农一枚，20年以上上网经历。
  tagline: 计算机讲师/作家，网文小说作者。
  image:
    src: /avatar.png
  actions:
    - theme: brand
      text: 博客
      link: /posts/

    - theme: alt
      text: 文档
      link: /docs/

features:
  - title: 《小程序从0到1》读者常见问题
    details: 一本书讲解微信小程序全栈开发
    link: /posts/2021/22.html

  - title: 《微信小程序全栈开发实战》常见问题
    details: 小程序全栈开发实战（后端使用Go语言）
    link: /posts/2021/23.html

  - title: 微信学堂《小程序性能优化实践》专题
    details: 免费学习小程序性能优化技巧
    link: https://developers.weixin.qq.com/community/business/course/000606628dc2e86dc0ddcbb115940d

  - title: 《微信小游戏开发》前后端两册
    details: 手把你带你学习JS编程
    link: https://item.jd.com/10070363837259.html
---

<script setup>
import LatestList from '@/components/LatestPostsList.vue'
</script>

<div style="padding: 50px 64px 20px">
<h1>最新博客文章</h1>
<LatestList />
</div>