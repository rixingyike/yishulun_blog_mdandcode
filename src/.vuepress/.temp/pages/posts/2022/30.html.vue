<template><div><h1 id="解决gibhub-git-push超时、无法提交的问题" tabindex="-1"><a class="header-anchor" href="#解决gibhub-git-push超时、无法提交的问题"><span>解决Gibhub git push超时、无法提交的问题</span></a></h1>
<p>最近<code v-pre>git push</code>指令又不能工作了，马上测了一下IP，发现github.global.ssl.fastly.net这个域名，除了台湾宝岛那里，基本都不能访问。（注：测试地址https://ping.chinaz.com/github.global.ssl.fastly.net）</p>
<p><img src="@source/posts/2022/assets/image-20221222105336458.png" alt="image-20221222105336458"></p>
<p>这个测试仅是一家云商服务器的结果，可能换一家云商，结果就不一样了，数据仅供参考。</p>
<p>那么解决Github仓库不能送拉的问题呢？</p>
<p>使用这个网址工具（https://ping.chinaz.com）依次测试下面三个域名的可用IP：</p>
<ul>
<li>github.com</li>
<li>github.global.ssl.fastly.net</li>
<li>assets-cdn.github.com</li>
</ul>
<p>得用可用IP后，修改hosts文件（例如macOS的<code v-pre>/etc/hosts</code>），强制相关域名使用指定IP：</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">39.102.194.95</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">github.com</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">151.101.1.194</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">github.global.ssl.fastly.net</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">185.199.108.153</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assets-cdn.github.com</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成修改后，需要重启本机网络，指令重启方法因系统因异：</p>
<ul>
<li>macOS系统：<code v-pre>sudo ifconfig en0 down &amp;&amp; sudo ifconfig en0 up</code></li>
<li>Windows系统：<code v-pre>ipconfig /flushdns</code></li>
<li>Linux系统：<code v-pre>/etc/init.d/networking restart</code></li>
</ul>
<p>如果不使用指令，用鼠标点击Wifi或本地网络，手动关闭、重连也可以达到同样的效果。重启后，git指令基本就可以工作了。</p>
<p>但是问题到这里还没有结束。</p>
<h2 id="指令执行时都访问了哪些域名" tabindex="-1"><a class="header-anchor" href="#指令执行时都访问了哪些域名"><span>指令执行时都访问了哪些域名？</span></a></h2>
<p><code v-pre>git push</code>指令执行时，都在背后访问了哪些域名？我们怎么知道一个指令的成功执行，到底需要能够访问哪些域名地址呢？</p>
<p>这与具体指令要做的事情有关，在进行git操作时，github.com域名是必连的，github.global.ssl.fastly.net域名是为了处理ssl安全连接的，而assets-cdn.github.com域名是cdn加速域名，在github提交中暂时用不到。</p>
<p>除了分析指令本身的功能或源码之外，还可以在本地使用网络监测工具。例如netstat指令：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>$</span><span class="space"> </span><span>netstat</span><span class="space"> </span><span>-a</span><span class="space"> </span><span>|</span><span class="space"> </span><span>grep</span><span class="space"> </span><span>"github"</span></span>
<span class="line"><span>tcp4</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span>0</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span>0</span><span class="space"> </span><span class="space"> </span><span>192.168.31.224.50744</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span>github.com.ssh</span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span>SYN_SENT</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有没有防墙提交工具" tabindex="-1"><a class="header-anchor" href="#有没有防墙提交工具"><span>有没有防墙提交工具？</span></a></h2>
<p>有没有一个自动防墙提交的工具呢？这个工具最好可以封装成一个指令，例如github_safe_push。github自有的CLI工具指令gh并不能担负这个职责。</p>
<p>在网络上搜索了一下，暂时没有找到具有这样功能的工具。从理念上讲，这样的工具应该是可以实现的，使用Python代码先查询可用域名，继而进行网络设置，最后调用原生的git push指令提交代码。</p>
<h2 id="使用国内csdn的缓存服务" tabindex="-1"><a class="header-anchor" href="#使用国内csdn的缓存服务"><span>使用国内CSDN的缓存服务</span></a></h2>
<p>2022-12-24更新：</p>
<p>CSDN为国内程序员提供了一项Github缓存、加速服务，它是 CSDN 为开发者提供的一项代码仓库加速服务。感兴趣可以从这里了解：https://gitcode.net/gitcode/help-docs/-/wikis/docs/user/project/repo/repo-mirror。</p>
</div></template>


