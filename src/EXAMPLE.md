---
title: EXAMPLE
createTime: 2025/02/19 18:26:00
# permalink: /EXAMPLE/
---
title	string	默认自动填入文件名	文章标题
createTime	string	当前时间	文章创建时间
tags	string[]	[]	文章标签
sticky	boolean | number	false	是否置顶, 如果为数字，则数字越大，置顶越靠前
draft	boolean	false	是否为草稿，草稿文章不会被展示
cover	string | BlogPostCover	''	文章封面
excerpt	boolean | string	''	文章摘要，默认通过 <!-- more --> 注释生成, 传入字符串表示自定义内容，不再从正文提取

comments: false