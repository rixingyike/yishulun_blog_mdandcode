<template><div><h1 id="使用-acme-sh-freessl-cn-申请免费-ssl-证书及自动续期" tabindex="-1"><a class="header-anchor" href="#使用-acme-sh-freessl-cn-申请免费-ssl-证书及自动续期"><span>使用 acme.sh &amp; freessl.cn 申请免费 SSL 证书及自动续期</span></a></h1>
<p>域名地址基于 https 协议访问需要 SSL 证书，大多数情况下是一个 cer、一个 key 文件，在服务器端部署 web 站点的时候，在编写 Apache 或 nginx 配置文件时，需要提供这两个文件。</p>
<p>freessl.cn 是一个可以让我们免费申请 SSL 证书的地方。但是免费证书都有一定的时效，如果证书过期了而我们忘记了重新申请并重新在服务器上部署 SSL 证书，便会影响网站的正常运行。</p>
<p>于是有人开发了一个 acme.sh 工具，这个东西看起来像个域名，其实是一个实现了 ACME 协议的脚本工具。所谓的 ACME 协议，简单理解就是：可以验证域名所有权，在线自动申请一个 SSL 证书并下载到本地。acme.sh 脚本工具在本地创建一个定时任务，定时检查证书是否过期，如果发现要过期了，就自己申请一个，把本地的旧证书替换掉。</p>
<p>这确实是一个自动化的好工具！</p>
<h2 id="如何使用-acme-sh" tabindex="-1"><a class="header-anchor" href="#如何使用-acme-sh"><span>如何使用 acme.sh？</span></a></h2>
<p>怎么使用 acme.sh 呢？在哪里使用它呢？</p>
<p>首先，要明确一点，acme.sh 这个工具是一个 unix shell 环境工具，它是被设计出来在 macOS 或 Linux 上运行的，在 Windows 下并不合用。</p>
<p>在 macOS 上，安装这个工具：</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://get.acme.sh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> email=9830131@qq.com</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装以后，脚本工具会放置在~/.acme.sh 目录下。在终端访问 acme.sh，如果访问不了，而还需要设置一个指令别名：</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">alias</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> acme.sh=~/.acme.sh/acme.sh</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>接着，在 https://freessl.cn/网站上申请自动续期的带有通配符的多域名证书。</p>
<p>填写域名：</p>
<p><img src="@source/posts/2023/assets/image-20231012003243941.png" alt="image-20231012003243941"></p>
<p>域名填写完成后，便是域名所有权验证：</p>
<p><img src="@source/posts/2023/assets/image-20231012003307779.png" alt="image-20231012003307779"></p>
<p>这一步是通过在域名设置面板中添加 CNAME 记录完成验证的。</p>
<p>紧接着，域名验证完成以后，网站会给出两段脚本：</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">acme.sh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --issue</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">*.yishulun.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">*.rxyk.cn</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --dns</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dns_dp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --server</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://acme.freessl.cn/v2/DV90/directory/i33ey2k462</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">****</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --debug</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意这个 server 地址是机密的，acme.sh 每次都是靠它与 freessl.cn 的服务器端进行沟通的。</p>
<p>最后，成功执行上面的执行——如果有问题，就将域名分开执行，或重试，我们会发现在~/.acme.sh 目录下会有对应的证书文件。</p>
<p>当证书过期时，我们只需要手动执行这行脚本，本地证书便会更新。当然我们也可以将这行脚本加入到自动任务的序列中，定时检查与更新证书。</p>
<p>只需要申请一次，就可以覆盖所有二级域名的证书。这些证书文件我们可以上传到服务器指定的目录下，为多个站点共享使用，这确实省去了证书申请、配置的麻烦。加上自动任务在服务器上自动执行，基本 SSL 证书的事情只需要设置一次就不需要再操心了。</p>
<h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释"><span>名词解释</span></a></h2>
<p>什么是 acme.sh？</p>
<p>acme.sh 是一个用于申请和自动续期 Let's Encrypt 免费 SSL 证书的自动化脚本工具 [5]。您可以通过执行一系列命令来注册 acme.sh，然后配置它以自动续期证书 [2]。该工具使证书管理更加便捷，无需手动干预即可确保您的 SSL 证书始终有效。</p>
<p>什么是 Let's Encrypt？</p>
<p>Let's Encrypt 是一个提供免费 SSL/TLS 证书的机构，使网站可以实现 HTTPS 加密连接 [8]。通过 acme.sh 工具，您可以从 Let's Encrypt 获取免费的证书，并且这些证书支持自动续期 [8]。这为网站所有者提供了方便和经济的方式来确保其网站的安全性和可信度。</p>
<p>总的来说，acme.sh 是一个有用的工具，可帮助您轻松申请和管理 Let's Encrypt 免费 SSL 证书，同时自动续期保持证书的有效性。</p>
</div></template>


