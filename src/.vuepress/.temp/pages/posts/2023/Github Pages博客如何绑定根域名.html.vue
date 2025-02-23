<template><div><h1 id="github-pages-博客如何绑定根域名" tabindex="-1"><a class="header-anchor" href="#github-pages-博客如何绑定根域名"><span>Github Pages 博客如何绑定根域名？</span></a></h1>
<p>Godaddy 的域名不需要域名备案，这是它方便的地方，但它不充许在根域名上直接添加 CNAME 记录，换句话说，原来在国内域名商下的域名，转移到 Godaddy 后，在 Github Pages 上绑定的根域名不再有效了。</p>
<p>以我的博客为例说明一下。原来我可以直接将根域名 yishulun.com 绑定到 rixingyike.github.io，www 域名通过 CNAME 绑定到根域名，这样无论读者访问根域名还是 www 域名，都可以跳转到根域名。国内早期网站网址的写法一般都会在前面带上 www，其实 www 只是一个子域名，与其它 blog、news 等子域名是等同的，为了照顾国内读者的使用习惯，我将 www 域名跳转到根域名（yishulun.com）。但是，在我的域名转移到 Godaddy 之后，这一招不好使了，Godaddy 的 DNS 解析不充许将根域名以 CNAME 的方式绑定到另一个二级域名上。</p>
<p>在国外，普遍认为根域名是一个域名的主要域名，www 只是一个从属的子域名。并且在 Godaddy 上，根域名只允许绑定 A 记录，不允许直接绑定 CNAME 记录，据说这是为了 CNAME 记录污染 DNS 缓存，造成在根域名上使用的邮件服务投递错乱。</p>
<p>那么这个问题怎么解决呢？怎么兼容老读者的使用习惯，使他们打开 yishulun.com 时看到页面不是网页荒漠呢？</p>
<p>有人说，可以在网站根目录下添加。htaccess 文件：</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">RewriteEngine</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> on</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">RewriteCond</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> %{http_host}^yishulun.com</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [NC]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">RewriteRule</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ^</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">$https</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">://www.yishulun.com/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">$1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [L,R=301]</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.htaccess 是给 Apache 服务器使用的网站配置文件，如果服务器不是 Apache，这个文件是起不到任何作用的。事实上我的 Github Pages 博客是由 Node.js 驱动的，因此这一招并不好使。</p>
<p>有人说，在页面上使用脚本实现 301 跳转，页面访问不到，JS 脚本怎么可能执行？或者在 Godaddy DCC 配置面板上，添加 Fowarding 记录，我试了这招，等待了一晚上并不好用——因为那个博主说，Godaddy 配置生效时间长，所以等了这么久。</p>
<p>最后说一下我是怎么配置成功的，现在读者无论访问 yishulun.com，还是访问 www.yishulun.com，最终都会跳转到 https://yishulun.com。</p>
<p>第一步：在 Godaddy DCC 配置面板上，添加 A 记录分别到 185.199.108.153、185.199.109.153、185.199.110.153 和 185.199.111.153。完成这一步以后，稍后用 dig 指令检查域名配置，看到如下类似结果，说明配置成功了。</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dig</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yishulun.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">>></span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> DiG</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 9.10.6</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">>></span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> yishulun.com</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;; global options: +cmd</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;; Got answer:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;; ->>HEADER&#x3C;&#x3C;- opcode: QUERY, status: NOERROR, id: 37755</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;; QUESTION SECTION:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;yishulun.com.			IN	A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">;; ANSWER SECTION:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">yishulun.com.		600	IN	A	185.199.109.153</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">yishulun.com.		600	IN	A	185.199.111.153</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">yishulun.com.		600	IN	A	185.199.110.153</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">yishulun.com.		600	IN	A	185.199.108.153</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，添加 CNAME 记录到 rixingyike.github.io。</p>
<p>第三步，在 Github Pages 配置处，填写 Custom domain 为 yishulun.com，注意这里是根域名。并选择 Enforce HTTPS 选项。</p>
<p>第四步，在网站根目录下，放置一个 CNAME 文件，内容为 yishulun.com。如果你使用的静态博客程度也是 vitepress，将这个文件放在。vitepress/public 目录下即可。</p>
<p>完成以上步骤，配置就算完成了。</p>
</div></template>


