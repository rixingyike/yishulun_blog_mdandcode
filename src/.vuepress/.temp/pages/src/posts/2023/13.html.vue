<template><div><figure><img src="@source/src/posts/2023/assets/pexels-photo-270404.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="使用-queryselector-查询元素时-如何使用正则进行模糊匹配查询" tabindex="-1"><a class="header-anchor" href="#使用-queryselector-查询元素时-如何使用正则进行模糊匹配查询"><span>使用 querySelector 查询元素时，如何使用正则进行模糊匹配查询？</span></a></h1>
<p>这要用到元素属性值正则匹配选择器，它包括下面 3 种：</p>
<ul>
<li>[attr^=&quot;val&quot;] 前匹配</li>
<li>[attr$=&quot;val&quot;] 后匹配</li>
<li>[attr*=&quot;val&quot;] 任意匹配</li>
</ul>
<p>其中，尖角符号^、美元符号$ 以及星号*都是正则表达式中的特殊标识符，分别表示前匹配、后匹配和任意匹配。</p>
<p>由于现代网页源码都是编译过后的产物，发到用户浏览器中的源码经常有这样的元素节点：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"UserInfoBox_textEllipsis_13jj5"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> f_c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"8"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>点击登录&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中，13jj5 并不是固定的，它是一串随机字符，是前端框架在编译时为了避免组件样式混淆而故意添加的。每一次产品重新发布，这个 class 样式便会变化一次。</p>
<p>如果我们在智能化产品中直接这样查询目标元素：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">querySelector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'h2.UserInfoBox_textEllipsis_13jj5'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下次产品重发后，代码便不再有效了。这种情况便适合采用属性值正则匹配选择器：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">querySelector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'h2[class^="UserInfoBox_textEllipsis"]'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用属性值正则匹配选择器，关键记忆点有两个：</p>
<p>1）使用了中括号，直接用在元素选择器后面。在 JS 中，计算属性也是使用中括号，这种写法是一致的、合理的；</p>
<p>2）在中括号内，使用 k=v 形式书写，并且在 k 后面可以跟^、$、*三个正则符号，分别表示前匹配、后匹配和任意匹配。</p>
</div></template>


