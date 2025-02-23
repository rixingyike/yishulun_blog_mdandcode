<template><div><h1 id="as3中的一些基本定义-function与method的区别" tabindex="-1"><a class="header-anchor" href="#as3中的一些基本定义-function与method的区别"><span>AS3中的一些基本定义，Function与Method的区别</span></a></h1>
<p>Adobe在官方英文文档中，并未专意对一些基本作区别说明；多数自动翻译或中文翻译，又存在翻译不当之处，古人有云，差之毫厘，缪以千里。且先试问一句，Function与Method有何区别？</p>
<p>Function与Method翻译成中文，不知如何翻译，使用英文更好。function在AS3中，是定义函数的关键字，但它定义的不一定是Function，也可能是Method。</p>
<h2 id="_1-method与function的区别" tabindex="-1"><a class="header-anchor" href="#_1-method与function的区别"><span>1，Method与Function的区别</span></a></h2>
<p>使用function关键字在Class内部显式定义的方法，称为Method，而除此之外使用function关键字定义的方法皆称为 Function。Function类似于js中的function方法。如此区分概念，有助于理解AS3的闭包（closure）概念。</p>
<h2 id="_2-property是什么" tabindex="-1"><a class="header-anchor" href="#_2-property是什么"><span>2，Property是什么</span></a></h2>
<p>在AS3中，Property不应该理解为类的属性，而应该理解为类的元素，包括变量，方法，setter/getter方法。从一个角度讲，在 AS3中，Class没有属性，平常所用的x,y,width,height等不应该称为&quot;属性&quot;，它们是setter/getter方法。这样理解，更 有助于理解trait对象。</p>
<h2 id="_3-什么是类型注释-type-annotation" tabindex="-1"><a class="header-anchor" href="#_3-什么是类型注释-type-annotation"><span>3，什么是类型注释(Type Annotation)？</span></a></h2>
<p>type annotation翻译为类型声明是不恰切的，type annotation仅是给编译器用的，代码量虽然增加了，换来的是性能的提升与代码的易读，这与注释的功能是类似的，翻译为类型注释更贴切。</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>var s :String = "sban";</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在上例中，String即是类型注释，或变量类型注释。</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>public function getWidth() : uint {</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上例中，uint即是类型注释，或返回类型注释。</p>
<p>2008年5月</p>
</div></template>


