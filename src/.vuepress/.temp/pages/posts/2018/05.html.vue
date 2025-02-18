<template><div><h1 id="小程序从0到1-mxml基础语法与错误信息" tabindex="-1"><a class="header-anchor" href="#小程序从0到1-mxml基础语法与错误信息"><span>小程序从0到1：MXML基础语法与错误信息</span></a></h1>
<h2 id="_1、理解标签与属性" tabindex="-1"><a class="header-anchor" href="#_1、理解标签与属性"><span>1、理解标签与属性</span></a></h2>
<p>在MXML标签中，尖括号都是成对出现的。像这样：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;..>...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>尖括号中间是标签名，例如swiper、swiper-item、image等，这些都是标签名。</p>
<p>每个标签默认都有一些属性，属性名与属性值以符号“=”连接，属性值用双引号引住。如下所示：</p>
<p>​    <img src="@source/posts/2018/assets/22027.png" alt="0" loading="lazy"></p>
<p>还有，属性与属性之间，要有空格。属性值开始处不需要空格。</p>
<p>​    <img src="@source/posts/2018/assets/22001.png" alt="0" loading="lazy"></p>
<p>如上所示，属性名“wx:key”、“style”之前缺少空格。属性&quot;style&quot;的值，开始处并不需要空格。</p>
<h2 id="_2、仔细阅读错误信息" tabindex="-1"><a class="header-anchor" href="#_2、仔细阅读错误信息"><span>2、仔细阅读错误信息</span></a></h2>
<p>如果MXML有错误，微信开发者工具会弹出错误信息，要仔细阅读错误发生在第几行、第几个字符、错误信息是什么。例如：</p>
<p>​    <img src="@source/posts/2018/assets/21993.jpeg" alt="0" loading="lazy"></p>
<p>该错误信息讲，第3行第9个字符，出现了一个不应该出现的“&lt;”字符。</p>
<p>依照错误信息，去代码检查错误，才能做到按图索骥，事半功倍。</p>
<h2 id="_3、注意单词拼写" tabindex="-1"><a class="header-anchor" href="#_3、注意单词拼写"><span>3、注意单词拼写</span></a></h2>
<p>如下所示，只因“swiper-item”错拼为“swiper-itrm”，程序编不过。</p>
<p>​    <img src="@source/posts/2018/assets/22009.png" alt="0" loading="lazy"></p>
<p>拼写单词一定要细心，错一个字符都编译不过。英语基础不好的读者，尤其要注意这点。在小程序中，用作标签名的单词，都是真实的有意义的单词，如果不认识，不妨查一下词典，将拼写识断清楚。</p>
<h2 id="_4-基础库版本需要更改吗" tabindex="-1"><a class="header-anchor" href="#_4-基础库版本需要更改吗"><span>4，基础库版本需要更改吗？</span></a></h2>
<p>有读者问这样的问题，编写书上的demo，需要指定基础库的版本吗？</p>
<p>​    <img src="@source/posts/2018/assets/22020.jpeg" alt="0" loading="lazy"></p>
<p>答案是不需要。</p>
</div></template>


