<template><div><h1 id="如何编写页面" tabindex="-1"><a class="header-anchor" href="#如何编写页面"><span>如何编写页面</span></a></h1>
<p><code v-pre>more</code> 注释之前的内容被视为文章摘要。</p>
<!-- more -->
<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2>
<p>The first H1 title in Markdown will be regarded as page title.</p>
<p>Markdown 中的第一个 H1 标题会被视为页面标题。</p>
<p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p>
<div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">页面标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2>
<p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p>
<ul>
<li>作者设置为 LIYI（每篇都可以单独设置）。</li>
<li>写作日期为 2020 年 1 月 1 日</li>
<li>分类为 “使用指南”</li>
<li>标签为 “页面配置” 和 “使用指南”</li>
</ul>
<h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2>
<p>你可以自由在这里书写你的 Markdown。</p>
<div class="hint-container tip">
<p class="hint-container-title">图片引入</p>
<ul>
<li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li>
<li>对于 <code v-pre>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code v-pre>/</code> 进行引用。</li>
</ul>
</div>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2>
<p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p>
<p>{{ 1 + 1 }}</p>
<p>代码：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>{{ 1 + 1 }}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><!-- markdownlint-disable MD033 -->
<ul>
  <li v-for="i in 3">{{ i }}</li>
</ul>
<p>Code:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>&#x3C;ul></span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span>&#x3C;li</span><span class="space"> </span><span>v-for="i</span><span class="space"> </span><span>in</span><span class="space"> </span><span>3">{{ i }}&#x3C;/li></span></span>
<span class="line"><span>&#x3C;/ul></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- markdownlint-enable MD033 -->
<p>你也可以创建并引入你自己的组件。下面是一个更为复杂的组件和使用示例。</p>
<MyComponent /><p>代码：</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">MyComponent</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">/></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">import</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">defineComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ref</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">from</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">'vue';</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">const</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">MyComponent</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">=</span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">defineComponent(</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">input</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">world!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">const</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">onInput</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=></span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">input</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">return</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=></span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">p</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">span</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">输入:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">input</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">input</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">onInput</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">}),</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">]),</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">p</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">span</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">输出:</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span><span class="space"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">input</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]),</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666">},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>主题包含一些有用的组件。这里是一些例子:</p>
<ul>
<li>文字结尾应该有深蓝色的 徽章文字 徽章（Badge）</li>
</ul>
<Badge text="徽章文字" color="#bb2378" /><ul>
<li>一个卡片（VPCard）：</li>
</ul>
<div class="language-component line-numbers-mode" data-ext="component" data-title="component"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>title:</span><span class="space"> </span><span>艺述论</span></span>
<span class="line"><span>desc:</span><span class="space"> </span><span>分享技术，论述艺术</span></span>
<span class="line"><span>logo:</span><span class="space"> </span><span>https://yishulun.com/avatar.png</span></span>
<span class="line"><span>link:</span><span class="space"> </span><span>https://yishulun.com</span></span>
<span class="line"><span>background:</span><span class="space"> </span><span>rgba(7,</span><span class="space"> </span><span>248,</span><span class="space"> </span><span>236,</span><span class="space"> </span><span>0.15)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


<script setup>
import { defineComponent, h, ref } from 'vue';

const MyComponent = defineComponent({
  setup() {
    const input = ref('Hello world!');
    const onInput = (e) => {
      input.value = e.target.value;
    };

    return () => [
      h('p', [
        h('span','输入: '),
        h('input', {
          value: input.value,
          onInput,
        }),
      ]),
      h('p', [h('span','输出: '), input.value]),
    ];
  },
});
</script>