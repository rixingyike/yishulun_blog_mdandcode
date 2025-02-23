<template><div><h1 id="关于找不到wx-components文件的说明" tabindex="-1"><a class="header-anchor" href="#关于找不到wx-components文件的说明"><span>关于找不到wx-components文件的说明</span></a></h1>
<p>这是在充电平台上小程序课程下的一个读者问题：</p>
<blockquote>
<p>老师，关于在特殊情况下需要修改微信自带组件和weui组件样式，现在课程上的方法无法找到对应得样式了。</p>
</blockquote>
<p>这个问题似曾相识啊</p>
<p>我在我的windows PC上试了一下，通过搜索wx-components文件名称，确实找不到默认的样式文件了。</p>
<p>可能更新微信开发者工具后，被官方限制了，毕竟这只是一个hack方法。</p>
<p>文件找不到，样式也被修改了吗？于是旧老办法，修改progress组件的样式：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>.progress-box{</span></span>
<span class="line"><span>  width: 80%;</span></span>
<span class="line"><span>  margin:50px 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.wx-progress-inner-bar {</span></span>
<span class="line"><span>  border-radius: 5px;</span></span>
<span class="line"><span>}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<p><img src="https://cdn.jsdelivr.net/gh/rixingyike/images/2021/2021040617442220210406174421.png" alt=""></p>
<p>哼，只是文件被藏起来了。毕竟重构样式名称可能涉及范围太大，所以官方并没有这样做。</p>
<p>本地搜索不到wx-components.css，没关系。网上有：https://gist.github.com/imoldman/b0f3332cb5713000e8fdef14b97080ab。从没有更新的旧机器上也可以找到。Mac没有测试，可能更新后也找不到了。</p>
</div></template>


