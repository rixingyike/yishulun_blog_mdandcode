<template><div><h1 id="小程序从0到1-1月9日群问题集锦" tabindex="-1"><a class="header-anchor" href="#小程序从0到1-1月9日群问题集锦"><span>小程序从0到1：1月9日群问题集锦</span></a></h1>
<p>目录</p>
<p>[TOC]</p>
<h2 id="_1-如体在群内提问" tabindex="-1"><a class="header-anchor" href="#_1-如体在群内提问"><span>1，如体在群内提问？</span></a></h2>
<p>可以参考一下在stackoverflow或github上提问的方法，一次把问题讲明白，用文字说明+截图的方式。目前在学习哪一章，遇到了什么问题，把运行截图贴出来。</p>
<h2 id="_2-读者-我用书上的方法为什么没有找到调试域名" tabindex="-1"><a class="header-anchor" href="#_2-读者-我用书上的方法为什么没有找到调试域名"><span>2，读者：“我用书上的方法为什么没有找到调试域名”？</span></a></h2>
<p><img src="@source/posts/2018/assets/22072.jpeg" alt="0"></p>
<p>可能新版本不好使了，毕竟这本是一个非官方的办法。</p>
<h2 id="_3-读者-go-env-之类没问题-但是go-get-sim-go类库回车没反应" tabindex="-1"><a class="header-anchor" href="#_3-读者-go-env-之类没问题-但是go-get-sim-go类库回车没反应"><span>3，读者：“go env 之类没问题，但是go get sim.go类库回车没反应..”</span></a></h2>
<img src="@source/posts/2018/assets/22079.jpeg" alt="0" style="zoom: 50%;" />
<p>这不叫没反应。</p>
<p>这位读者还是没仔细读文档，get是go语言的指令，如果运行出错，它会直接提示。这种情况，可能是网络被墙了，一直在请求中。按照群公告文档1的步骤做，里面有免翻墙安装google官方类库的方法。</p>
<h2 id="_4-能不能加作者微信" tabindex="-1"><a class="header-anchor" href="#_4-能不能加作者微信"><span>4，能不能加作者微信？</span></a></h2>
<p>可以加微信。</p>
<h2 id="_5-读者-retrievedata函数放在哪个页面呢" tabindex="-1"><a class="header-anchor" href="#_5-读者-retrievedata函数放在哪个页面呢"><span>5，读者：“ retrieveData函数放在哪个页面呢”</span></a></h2>
<p>微信开发者工具有全局搜索功能，选择菜单“编辑”-&gt;&quot;全局搜索&quot;</p>
<h2 id="_6-读者-豆豆电影项目最后只能在调试环境下运行-由于审核无法通过而无法真正上线运行-是这样嘛" tabindex="-1"><a class="header-anchor" href="#_6-读者-豆豆电影项目最后只能在调试环境下运行-由于审核无法通过而无法真正上线运行-是这样嘛"><span>6，读者：“豆豆电影项目最后只能在调试环境下运行，由于审核无法通过而无法真正上线运行，是这样嘛”</span></a></h2>
<p>需要有备案过的服务器加域名。（读者@杜创）</p>
<h2 id="_7-请问下-这个电子书有离线版本的吗-能不能下载下来看" tabindex="-1"><a class="header-anchor" href="#_7-请问下-这个电子书有离线版本的吗-能不能下载下来看"><span>7，“请问下，这个电子书有离线版本的吗？能不能下载下来看？”</span></a></h2>
<p>找到了告诉我，我举报盗版。</p>
<h2 id="_8-在界面上绑定的值-如果设置默认值" tabindex="-1"><a class="header-anchor" href="#_8-在界面上绑定的值-如果设置默认值"><span>8，在界面上绑定的值，如果设置默认值？</span></a></h2>
<p>缺少默认值的错误表现</p>
<img src="@source/posts/2018/assets/22120.png" alt="0" style="zoom:50%;" />
<p>例如weather.today.type：</p>
<p><img src="@source/posts/2018/assets/22100.jpeg" alt="0"></p>
<h2 id="_9-读者-这都是些什么基础的人啊-之前还有人模板字符串不知道-本来还以为可以交流的" tabindex="-1"><a class="header-anchor" href="#_9-读者-这都是些什么基础的人啊-之前还有人模板字符串不知道-本来还以为可以交流的"><span>9，读者“这都是些什么基础的人啊，之前还有人模板字符串不知道，本来还以为可以交流的..”</span></a></h2>
<p>术道有专攻，每个人的基础不一样，要尊重每一个人，求同存异。</p>
<h2 id="_10-读者-我完全是按照书上来的啊-检查了几遍了-为什么还有错" tabindex="-1"><a class="header-anchor" href="#_10-读者-我完全是按照书上来的啊-检查了几遍了-为什么还有错"><span>10，读者“我完全是按照书上来的啊，检查了几遍了，为什么还有错？”</span></a></h2>
<img src="@source/posts/2018/assets/22110.jpeg" alt="0" style="zoom: 50%;" />
<p>拼写不认真，80%的错误都是由于拼写不认真。例如，这里面的Style的首字母大写了，再如absolute写成abosolute了。写程序错一个字符都不行。</p>
<h2 id="_11-想让134横排显示怎么弄-设置什么属性" tabindex="-1"><a class="header-anchor" href="#_11-想让134横排显示怎么弄-设置什么属性"><span>11，想让134横排显示怎么弄，设置什么属性？</span></a></h2>
<p><img src="@source/posts/2018/assets/22124.jpeg" alt="0"></p>
<p>查flex布局相关。</p>
<h2 id="_12-图片为何挤到了一起" tabindex="-1"><a class="header-anchor" href="#_12-图片为何挤到了一起"><span>12，图片为何挤到了一起？</span></a></h2>
<img src="@source/posts/2018/assets/22128.jpeg" alt="0" style="zoom:50%;" />
<p>9.2版本的iPhone plus会出现以上问题。升级iOS固件版本，解决。</p>
<h2 id="_13-读者-style中的最后一个分号可加可不加是吗" tabindex="-1"><a class="header-anchor" href="#_13-读者-style中的最后一个分号可加可不加是吗"><span>13，读者“style中的最后一个分号可加可不加是吗？”</span></a></h2>
<img src="@source/posts/2018/assets/22135.jpeg" alt="0" style="zoom:50%;" />
<p>对。</p>
</div></template>


