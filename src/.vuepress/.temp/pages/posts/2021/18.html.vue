<template><div><h1 id="typora软件也是可以定制的" tabindex="-1"><a class="header-anchor" href="#typora软件也是可以定制的"><span>typora软件也是可以定制的</span></a></h1>
<p>最近一年的写作我基本都在使用typora软件，这个软件搞平台，干净、高效，我非常喜欢它。如果说缺点，它唯一的缺点就是不支持定制。</p>
<p>但是今天发现了一个扩展：</p>
<p>https://github.com/hahaha28/typora-extensions</p>
<p>以及使用npm安装的asar工具，及使用它的指令：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>安装asar</span></span>
<span class="line"><span>cnpm install -g asar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用 asar pack 打包</span></span>
<span class="line"><span>asar pack your-app app.asar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用 asar extract 反编译/解压</span></span>
<span class="line"><span>asar extract app.asar ./myapp</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新世界仿佛被打开了，原来typora也是一个基于electron开发的软件，在使用它的时候完全感受不出来。我使用typora的时候，一直觉得它是原生软件。但是的样式支持定制，并且样式包也是前端html &amp; css文件，从这点我也应该想到，甚至这个有可能也是基于electron开发的，至少它是混合开发的。</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>那么typora是开源软件吗？</span></span>
<span class="line"><span>很遗憾，虽然typora软件在github上有主页，但是它本身并不是一个开源软件。</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然typora不开源，但是通过上面的方面，我们可以扩展它的UI，还可以插入代码，通过这种方式基本也可以达到扩展的目的。</p>
<blockquote>
<p>20221221更新：软件不身不开源，通用hack的方式尝试修改它，这个体验并不好。</p>
</blockquote>
</div></template>


