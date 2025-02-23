<template><div><h1 id="《微信小游戏开发》勘误" tabindex="-1"><a class="header-anchor" href="#《微信小游戏开发》勘误"><span>《微信小游戏开发》勘误</span></a></h1>
<p>由于水平有限，时间仓促，书中难免有遗漏、错愕之处，恳求读者朋友斧正。如有发现，可以给我发邮件9830131@qq.com，或加我的微信（9830131）告诉我。</p>
<p>下面是2023年2月&amp;3月版本1已经发现的勘误列表。</p>
<h2 id="前端篇" tabindex="-1"><a class="header-anchor" href="#前端篇"><span>前端篇</span></a></h2>
<h3 id="p17" tabindex="-1"><a class="header-anchor" href="#p17"><span>P17</span></a></h3>
<p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images@master/202320230711225054-2023-07-11-22-50-56.png" alt="20230711225054-2023-07-11-22-50-56"></p>
<p>有读者找不到对应内容，在箭头处、句号前面可以添加一句：第16课拓展部分。</p>
<h3 id="p55" tabindex="-1"><a class="header-anchor" href="#p55"><span>P55</span></a></h3>
<p>如下所示，<code v-pre>0+&quot;10&quot;</code>结果是<code v-pre>&quot;010&quot;</code>，并不是数值10；如果想将数字字符串转化为数字，直接在前面加符号“+”，不需要数字 0。截图红框内应改为：</p>
<blockquote>
<p>使用加号与一个数字拼接：+ &quot;10&quot;，这种方式最简单直接，其实本质上也是隐式转换。</p>
</blockquote>
<p><img src="@source/posts/2023/assets/image-20230411070305528.png" alt="image-20230411070305528"></p>
<p>该处由@<strong>MuninnC</strong>指出，感谢勘误。</p>
<h3 id="p156-增补" tabindex="-1"><a class="header-anchor" href="#p156-增补"><span>P156(增补)</span></a></h3>
<img src="@source/posts/2023/assets/image-20230520193735778.png" alt="image-20230520193735778" style="zoom: 67%;" />
<p>在箭头所示的地方（..进行改写。）、句号后面，添加这样一句话：</p>
<blockquote>
<p>注意这里的3处事件，指代码清单4-2中的click、mousemove、click三个事件，分别将以touchEnd、touchMove和touchEnd事件改写。</p>
</blockquote>
<h3 id="p262" tabindex="-1"><a class="header-anchor" href="#p262"><span>P262</span></a></h3>
<p>第一处，第4行、第5行，两行注释应改为：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>4.let d = {num: 100} // 变量d存在于栈中，{mum: 100}作为对象存在于堆内存中</span></span>
<span class="line"><span>5.let e = [100, 200] // 变量e存在于栈中，[100, 200]作为对象存在于堆内存中</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二处，划线部分应改为：</p>
<p>其中c、b、a位于栈内存，我们是直接操作的；而e、d保存的是引用地址......</p>
<p><img src="@source/posts/2023/assets/image-20240110103310614.png" alt="image-20240110103310614"></p>
<h3 id="p281" tabindex="-1"><a class="header-anchor" href="#p281"><span>P281</span></a></h3>
<p><img src="@source/posts/2023/assets/image-20230611150634840.png" alt="image-20230611150634840"></p>
<p>因为有读者对这里理解有疑问，在“第7行...”这一句的后面，需要加一段解释内容。内容如下：</p>
<p>第9行，为什么让#pos指向defaultPos也没用？因为第一次执行reset时，会把引用对象defaultPos赋值给#pos，之后小球在运动过程中更新的都是#pos。也就是说，默认值对象defaultPos被“污染”了，从第二次调用reset开始，它不能再作为默认值对象被使用了，因为它里面的x、y值不是默认值了。</p>
<h3 id="p480" tabindex="-1"><a class="header-anchor" href="#p480"><span>P480</span></a></h3>
<p>红色划线部分应改为：...渲染上下文对象属于哪个画布，就对哪个画布生效。</p>
<p><img src="@source/posts/2023/assets/image-20240110104010105.png" alt="image-20240110104010105"></p>
<h2 id="后端篇" tabindex="-1"><a class="header-anchor" href="#后端篇"><span>后端篇</span></a></h2>
<h3 id="p22-3课1小节-使用wx-getfuzzylocation代替" tabindex="-1"><a class="header-anchor" href="#p22-3课1小节-使用wx-getfuzzylocation代替"><span>P22，3课1小节 使用wx.getFuzzyLocation代替</span></a></h3>
<p>也在3.1小节，与上面的问题是相关的。由于微信官方对地理位置权限的加强管理，这里有较多变化，具体见：<a href="https://yishulun.com/posts/2023/52.html" target="_blank" rel="noopener noreferrer">如何在微信小游戏/小游戏中获取地理位置信息？</a></p>
<p>这里有代码清单1-12、1-14、1-15都涉及修改。</p>
<h3 id="p27-关于lbs域名白名单的设置" tabindex="-1"><a class="header-anchor" href="#p27-关于lbs域名白名单的设置"><span>P27，关于LBS域名白名单的设置</span></a></h3>
<p>在书上27页，如下图1-10这个位置：</p>
<p><img src="@source/posts/2023/assets/image-20231223211956865.png" alt="image-20231223211956865"></p>
<p>书上提到的一个位于这里（https://lbs.qq.com/service/webService/webServiceGuide/webServiceGcoder）的在线测试工具，现在有了修改，不再可以直接填写key，所以原书上的测试方法需要修改一下。</p>
<p>目前在测试开发阶段最简便的设置白名单的方式，是将白名单列表留空：</p>
<p><img src="@source/posts/2023/assets/image-20231223212137478.png" alt="image-20231223212137478"></p>
<p>留空代表不限制调用来源。</p>
<p>留空以后，可以使用下面两个方法测试API Key的可用性：</p>
<ul>
<li>
<p>1，直接在浏览器中访问：https://apis.map.qq.com/ws/geocoder/v1?location=28.7033487,115.8660847&amp;key=L5YBZ-BTZHX-FPU42-Z3PUL-VHHG2-AFF4Q&amp;get_poi=1</p>
</li>
<li>
<p>2，在终端中访问：curl &quot;https://apis.map.qq.com/ws/geocoder/v1?location=28.7033487,115.8660847&amp;key=L5YBZ-BTZHX-FPU42-Z3PUL-VHHG2-AFF4Q&amp;get_poi=1&quot;</p>
</li>
</ul>
<p>注意将key替换成自己的key。</p>
<p>如果不这样设置，或按原方法设置，可能会遇到这样的一个错误：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>"message": "请求来源未被授权，解决方法见：https://lbs.qq.com/faq/serverFaq/webServiceKey。此次请求无来源信息"</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个错误可能出现在Web请求或curl请求中，没有来源信息也属于来源未被授权的情况之一。</p>
<p>由于腾讯LBS官方SDK及文档在以后可能存在变化，在设置白名单时，最好当时查看在开发者工具网络面板中出现的域名，并将其设置在腾讯LBS管理后台的白名单中。被设置的域名可能继续是servicewechat.com，也可能是其它域名。</p>
<h3 id="p32、p33-4课1小节-在线资源地址替换" tabindex="-1"><a class="header-anchor" href="#p32、p33-4课1小节-在线资源地址替换"><span>P32、P33，4课1小节 在线资源地址替换</span></a></h3>
<p>由于原在线存储桶可能存在到期，禁止访问等问题，对于下面的在线资源地址：</p>
<blockquote>
<p>https://cloud-1252822131.cos.ap-beijing.myqcloud.com/images/bg.png
https://cloud-1252822131.cos.ap-beijing.myqcloud.com/fonts/webfont.ttf</p>
</blockquote>
<p>可以将前面的cloud-1252822131.cos.ap-beijing.myqcloud.com替换为yishulun.com/wegame_ap，例如第一个地址替换后是：</p>
<blockquote>
<p>https://yishulun.com/wegame_ap/images/bg.png</p>
</blockquote>
<p>如果原地址可用当用，不可用时，可换用替换后的地址。</p>
<h3 id="p44-2-1文件路径标注" tabindex="-1"><a class="header-anchor" href="#p44-2-1文件路径标注"><span>P44 2.1文件路径标注</span></a></h3>
<p>在第 2 章第 4 课中，代码清单中的路径“JS:第2章\4.1\game.js”都应该是“JS:第2章\2.1\game.js”</p>
<p><img src="@source/posts/2023/assets/image-20240111234002702.png" alt="image-20240111234002702"></p>
<h3 id="p57-修改gametoplayer-init" tabindex="-1"><a class="header-anchor" href="#p57-修改gametoplayer-init"><span>P57 修改gameTopLayer.init</span></a></h3>
<p>在代码清单 2-14 中，应该添加对gameTopLayer.init方法调用的改动：</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">init</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	...</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // gameTopLayer.init()</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  gameTopLayer</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">init</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> game</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面P53 页只走到了gameTopLayer.init()，这一节应该是有添加gameTopLayer.init({ game: this })这一发动的，但是 在P57 页的代码清单2-17 中没有体现。</p>
<h3 id="p59-2-2文件路径标注" tabindex="-1"><a class="header-anchor" href="#p59-2-2文件路径标注"><span>P59 2.2文件路径标注</span></a></h3>
<p>同上一条，第2章第5课中，代码清单中的路径“JS:第2章\4.2\game.js”都应该是“JS:第2章\2.2\game.js”</p>
<p><img src="@source/posts/2023/assets/image-20240111234318674.png" alt="image-20240111234318674"></p>
<h3 id="p72-排行榜设置位置" tabindex="-1"><a class="header-anchor" href="#p72-排行榜设置位置"><span>P72（排行榜设置位置）</span></a></h3>
<p>原游戏礼包配置、游戏圈功能、活动运营配置、基础运营素材和排行榜设置已迁移到“游戏运营工具箱”，目前在：功能→游戏运营工具箱→排行榜设置。</p>
<p>图示划线部分应修改为：功能→游戏运营工具箱→排行榜设置。</p>
<p><img src="@source/posts/2023/assets/image-20240121130022050.png" alt="image-20240121130022050"></p>
<p>位置：</p>
<p><img src="@source/posts/2023/assets/image-20240121130309985.png" alt="image-20240121130309985"></p>
<p>京东购买链接：<a href="https://item.jd.com/10070363837259.html" target="_blank" rel="noopener noreferrer">https://item.jd.com/10070363837259.html</a></p>
<h3 id="p75-needupdate修改默认值" tabindex="-1"><a class="header-anchor" href="#p75-needupdate修改默认值"><span>P75（needUpdate修改默认值）</span></a></h3>
<p>如果排行榜没有完成配置，可能会引发一个画布的渲染效果，这是由排行榜拉取不到数据引起的，在排行榜正确设置以后，可以恢复。</p>
<p>另外，为了增加代码的鲁棒性，可以修改 open_data/index.js 文件中的下列划线代码：</p>
<p><img src="@source/posts/2023/assets/image-20240121134030456.png" alt="image-20240121134030456"></p>
<p>原来此函数中，needUpdate默认为 true，现修改为 false，并且只在新分数（newRankValue.wxgame.score）大于旧分数（rankValue.wxgame.score）时，才变成true。</p>
<p>修改后，即使排行榜没有准备好，代码也能避免报错。</p>
<h3 id="p149-处理-npm-i-安装类库的证书错误" tabindex="-1"><a class="header-anchor" href="#p149-处理-npm-i-安装类库的证书错误"><span>P149 处理 npm i 安装类库的证书错误</span></a></h3>
<p><img src="@source/posts/2023/assets/image-20240220194411562.png" alt="image-20240220194411562"></p>
<p>在 P149 页时，执行 npm i 或 npm run dev 时，可能会遇到这样的错误：</p>
<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ERR!</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> CERT_HAS_EXPIRED</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ERR!</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> errno</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> CERT_HAS_EXPIRED</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ERR!</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> request</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://registry.npm.taobao.org/ylru/download/ylru-1.2.1.tgz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> failed,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reason:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> certificate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> has</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> expired</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个错误缘于社区类库更新规则的更改，及淘宝仓库网站证书的过期。</p>
<p><img src="@source/posts/2023/assets/image-20240220194542465.png" alt="image-20240220194542465"></p>
<p>npm不再支持自签名证书，而淘宝仓库网站恰好又使用了自定义证书。当我们使用 npm i 安装某些类库时，例如类库地址为 https://registry.npm.taobao.org/ylru/download/ylru-1.2.1.tgz，此时npm无法验证来源，抛出了 CERT_HAS_EXPIRED 错误。</p>
<p>解决办法：</p>
<p>关闭 SSL 验证</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>npm config set strict-ssl false</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>修改软件源，例如将软件源地址改回官网：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>npm config set registry https://registry.npmjs.org/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个更改的副作用是，更新或安装类库时需要梯子，如果有梯子则无妨。</p>
</div></template>


