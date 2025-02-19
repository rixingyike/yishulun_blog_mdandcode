<template><div><h1 id="在rustlings示例中n天学习rust" tabindex="-1"><a class="header-anchor" href="#在rustlings示例中n天学习rust"><span>在Rustlings示例中N天学习Rust</span></a></h1>
<p>Rustlings 是一个辅助学习者学习Rust语言的学习程序。每写对一个练习，在终端里便会看到这样一条提示：</p>
<p>🎉 🎉  The code is compiling! 🎉 🎉</p>
<h2 id="第1天-准备学习环境" tabindex="-1"><a class="header-anchor" href="#第1天-准备学习环境"><span>第1天 准备学习环境</span></a></h2>
<h3 id="安装rust运行环境" tabindex="-1"><a class="header-anchor" href="#安装rust运行环境"><span>安装Rust运行环境</span></a></h3>
<p>在安装rustings学习程序之前，需要先安装Rust语言运行环境，前往<a href="https://www.rust-lang.org/tools/install%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%EF%BC%8C%E6%8C%89%E6%8F%90%E7%A4%BA%E5%AE%89%E8%A3%85%E5%8D%B3%E5%8F%AF%E3%80%82" target="_blank" rel="noopener noreferrer">https://www.rust-lang.org/tools/install下载安装程序，按提示安装即可。</a></p>
<p>在Windows 10系统上因为依赖Windows 11 SDK，可能会预预先下载与安装额外的程序，这是正常的，依然按提示安装即可。安装速度取决于个人设备性能及下载网速。</p>
<h3 id="学习程序的安装、说明与启动" tabindex="-1"><a class="header-anchor" href="#学习程序的安装、说明与启动"><span>学习程序的安装、说明与启动</span></a></h3>
<p>手动安装脚本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -b</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5.5.1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --depth</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/rust-lang/rustlings</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rustlings</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cargo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --force</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --path</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.5.1 是目前的最新版本，如果有更新的版本，可以更改这里的数字，或者将-b 参数去掉。将内容进行版本管理，可以持续迭代，这不失一个好办法。</p>
<p>Rustlings 是一个学习程序，它会监控目录下的文件，它是有程序代码需要运行的，所以最后一行执行了 cargo install。cargo 是 Rust 语言的包管理工具，这里执行了安装，因为当前 rustlings 目录其实是一个 Rust 语言项目。</p>
<p>如果执行指令时遇到错误，可以执行：</p>
<p><code v-pre>rustup update</code></p>
<p>安装以后，就可以运行这个学习程序了：</p>
<p><code v-pre>rustlings watch</code></p>
<p>这是以管控模式在监控子目录 exercises 下的内容变动，当我们学习者在学习过程中改动内容后，学习程序会帮助我们评判改动的正确与否，给出错误提示和正常操作的建议提示，并指出下一步练习的文件路径。</p>
<p>运行监控指令以后，在终端里会看到：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Remove the I AM NOT DONE comment in the exercises/intro/intro1.rs file to move on to the next exercise.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>它的意思是，将文件 <a href="http://intro1.rs" target="_blank" rel="noopener noreferrer">intro1.rs</a> 里的注释“I AM NOT DONE”移除，练习将移向下一个文件。这是这个学习程序的基本逻辑，靠学习者移除文件注释中的特定文本，控制学习进度向下推进。</p>
<p>除了第一个文件 <a href="http://intro1.rs" target="_blank" rel="noopener noreferrer">intro1.rs</a> 外，每一个练习文件都有一个甚至更多的错误，让学习者练习指定的知识点。如果对解决当前异常没有头绪，可以在终端中——在当前 watch 模式启动的状态下，敲入以下指令获得指示：</p>
<p><code v-pre>hint</code></p>
<p>注意：默认官方的学习程序是英文的，包括终端里显示的错误文本和提示文本也是英文的，如果你在寻找该学习程序的中文版本，可以看这里：<a href="https://github.com/rust-lang-cn/rustlings-cn%E3%80%82" target="_blank" rel="noopener noreferrer">https://github.com/rust-lang-cn/rustlings-cn。</a></p>
<p>当学习者从文件 <a href="http://intro1.rs" target="_blank" rel="noopener noreferrer">intro1.rs</a> 里移除“I AM NOT DONE”后，学习征程就开始了。当一个练习完成后，下一个练习的文件路径会自动出现在终端的反馈中。</p>
<h3 id="格式化字符串有一个位置需要一个实参" tabindex="-1"><a class="header-anchor" href="#格式化字符串有一个位置需要一个实参"><span>格式化字符串有一个位置需要一个实参</span></a></h3>
<p><strong>exercises/intro/intro2.rs</strong>：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello {}!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 positional argument in format string, but no arguments were given。格式字符串中有 1 个位置参数，但实际没有给出任何参数。</p>
<p>修改后：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello {}!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ly"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第2天-变量" tabindex="-1"><a class="header-anchor" href="#第2天-变量"><span>第2天 变量</span></a></h2>
<h3 id="不能使用未声明的变量" tabindex="-1"><a class="header-anchor" href="#不能使用未声明的变量"><span>不能使用未声明的变量</span></a></h3>
<p>exercises/variables/variables1.rs：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x has the value {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0425]: cannot find value <code v-pre>x</code> in this scope。不能在当前作用域范围内找到值“x”。</p>
<p>修改后：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x has the value {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rust 的变量必须先声明后使用。这一点与 js 不同，js 中的变量充许未声明而直接使用，js 的这个语言特性是编程语言弱类型的特征之一，而 Rust 是一门强类型语言。</p>
<h3 id="变量需要类型注释" tabindex="-1"><a class="header-anchor" href="#变量需要类型注释"><span>变量需要类型注释</span></a></h3>
<p>exercises/variables/variables2.rs：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x is ten!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x is not ten!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0282]: type annotations needed。变量声明需要类型注释。</p>
<p>第 2 行，变量 x 在使用前必须初始化，且声明类型，这是编程语言强类型的语言特征之一。</p>
<p>修改后：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">i32</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x is ten!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x is not ten!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 2 行，i32 是 32 位的有符号整数，它是 Rust 语言的一个有效类型。Rust有符号整数类型有i8, i16, i32, i64, i128，无符号整数类型有u8 、 u16 、 u32 、 u64 、 u128，浮点数类型有f32 、 f64。此外还有char类型，它是Unicode字符类型，值包括'a'、'∞'这些。还有编程语言中常见的bool类型，只有true和fase两个值。还有Rust语言特有的单元类型，它有两个小括号标识，它代表一组数据，默认是空元组。以上这些都是Rust语言的基本类型。</p>
<p>因为 Rust 有自动的类型推断，当给变量提供值以后，Rust 编译器可以根据值自动推断出合适的类型。所以下面的简单修改也是正确的：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x is ten!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"x is not ten!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 2 行，变量 x 已经没有了类型注释，它由编译器自动推断了。</p>
<h3 id="变量需要显式初始化" tabindex="-1"><a class="header-anchor" href="#变量需要显式初始化"><span>变量需要显式初始化</span></a></h3>
<p>exercises/variables/variables3.rs：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">i32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0381]: used binding <code v-pre>x</code> isn't initialized。使用的变量<code v-pre>x</code>未初始化。</p>
<p>Rust变量不仅需要类型注释，还需要初始化。第2行，变量x需要一个初始值。这一点与Go语言不同，Go语言也是强类型语言，但Go语言在变量被安排类型注释以后，变量会有一个默认的零值，对于整数类型，一般零值是0，例如：</p>
<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int32</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在Go语言中，变量a在声明时没有初始化，它却有一个默认值——也就是零值，即0。在Rust语言中，情况与Go语言不同，Rust变量在有了类型标注以后，并不会自动拥有一个默认值。在Rust语言中，Default trait是管理所有类型的trait（特征），int32类型也实现了Default trait，并且返回了0，但这个默认值并不会在变量需要初始化的自动冒出来。在Rust语言中，如果我们要使用Default trait定义的默认值，也必须显式调用，例如：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">i32</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> i32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在<a href="https://juejin.cn/post/7222294792893153317" target="_blank" rel="noopener noreferrer">这里</a>（<a href="https://juejin.cn/post/7222294792893153317%EF%BC%89%E6%9C%89%E4%B8%80%E6%AE%B5%E5%85%B3%E4%BA%8ERust%E9%BB%98%E8%AE%A4%E5%80%BC%E7%9A%84%E6%8F%8F%E8%BF%B0%EF%BC%9A" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7222294792893153317）有一段关于Rust默认值的描述：</a></p>
<blockquote>
<p>在 Rust 中，每个类型都有一个默认值，这个默认值可以通过 Default trait 来获取。Rust 的默认值是零值，也就是说，如果一个类型没有定义它的默认值，那么它的默认值就是 0 或者 null。</p>
</blockquote>
<p>这一段描述极容易引起歧义，看到了，略过即可。</p>
<p>对该示例最简单的方法是显式给变量一个初始值，修改后：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">i32</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量默认不能修改-使用mut修饰后可修改" tabindex="-1"><a class="header-anchor" href="#变量默认不能修改-使用mut修饰后可修改"><span>变量默认不能修改，使用mut修饰后可修改</span></a></h3>
<p>exercises/variables/variables4.rs：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// don't change this line</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0384]: cannot assign twice to immutable variable <code v-pre>x</code>。不能给不可变变量' x '第二次赋值。</p>
<p>Rust变量默认是不可修改的，第2行变量x初始化以后，在第4行，再尝试将其修改为5便会引发异常。这在其它编程语言中是不可想象的，从来没有哪个高级编程语言默认让变量不可修改，Rust是第一个。</p>
<p>修改后：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> mut</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// don't change this line</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第2行，mut是一个修饰符，用它修饰，代表变量可被修改的开关被打开了。</p>
<h3 id="变量不可以改变类型-但变量可以通过let重新声明-遮蔽" tabindex="-1"><a class="header-anchor" href="#变量不可以改变类型-但变量可以通过let重新声明-遮蔽"><span>变量不可以改变类型，但变量可以通过let重新声明（遮蔽）</span></a></h3>
<p>exercises/variables/variables5.rs：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "T-H-R-E-E"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// don't change this line</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Spell a Number : {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// don't rename this variable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number plus two is : {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0308]: mismatched types。变量的类型必须匹配。</p>
<p>error[E0369]: cannot add <code v-pre>{integer}</code> to <code v-pre>&amp;str</code>。第4行，将整型值赋值给字符串变量是非法的。</p>
<p>修改后：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "T-H-R-E-E"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// don't change this line</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Spell a Number : {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// don't rename this variable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number plus two is : {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Rust语言中，变量默认是不可修改的，但却是可以重复声明的，这一特征被称为“遮蔽”。Rust似乎不关心历史，对于已经执行过的代码，它不关心，它只关心现在和将来。在Go语言中，像下面这样在同一个作用域下，重命名一个已经存在的变量是非法的：</p>
<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "fmt"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "T-H-R-E-E"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello, 世界,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第7行会报出一个“number redeclared in this block”的异常。</p>
<h3 id="常量在声明时必须有明确的类型" tabindex="-1"><a class="header-anchor" href="#常量在声明时必须有明确的类型"><span>常量在声明时必须有明确的类型</span></a></h3>
<p>exercises/variables/variables6.rs：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> NUMBER</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">NUMBER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: missing type for <code v-pre>const</code> item</p>
<p>错误:缺少“const”常量类型。</p>
<p>常量声明时，给它一个类型即可：</p>
<div class="language-rust line-numbers-mode" data-highlighter="shiki" data-ext="rust" data-title="rust" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> NUMBER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">i32</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    println!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Number {}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">NUMBER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3天-函数" tabindex="-1"><a class="header-anchor" href="#第3天-函数"><span>第3天 函数</span></a></h2>
<h3 id="不能调用当前作用域看不见或未定义的函数" tabindex="-1"><a class="header-anchor" href="#不能调用当前作用域看不见或未定义的函数"><span>不能调用当前作用域看不见或未定义的函数</span></a></h3>
<p>functions/functions1.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    call_me();</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0425]: cannot find function <code v-pre>call_me</code> in this scope。</p>
<p>在当前范围内找不到函数'call_me'。</p>
<p>Rust函数必须先声明或引入，才可以调用。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    call_me();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn call_me() {</span></span>
<span class="line"><span>  	println!("hi");</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候看不见，和不存在在调用者的视角看是等同的。如同外星人存不存在，于地球人是否可见，在地球人来看也是赞同的。</p>
<h3 id="函数参数同样需要类型注释" tabindex="-1"><a class="header-anchor" href="#函数参数同样需要类型注释"><span>函数参数同样需要类型注释</span></a></h3>
<p>functions/functions2.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    call_me(3);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn call_me(num:) {</span></span>
<span class="line"><span>    for i in 0..num {</span></span>
<span class="line"><span>        println!("Ring! Call number {}", i + 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0425]: cannot find value <code v-pre>num</code> in this scope。</p>
<p>当前作用域下找不到变量num。</p>
<p>变量与函数一样，只有先声明或引入才可以使用。</p>
<p>但在这个示例里，还不是完全的变量不存在，而是变量声明得不正确、不合法。num作为函数参数，缺少必要的类型注释，所以被编译器判定为不存在。函数参数声明不正确，等于不存在。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn call_me(num: i32) {</span></span>
<span class="line"><span>    for i in 0..num {</span></span>
<span class="line"><span>        println!("Ring! Call number {}", i + 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数参数需要类型注释，与变量声明的格式一样，变量名在前，中间是冒号，后面是类型。</p>
<h3 id="函数形参定义几个-调用时便需要传递几个实参" tabindex="-1"><a class="header-anchor" href="#函数形参定义几个-调用时便需要传递几个实参"><span>函数形参定义几个，调用时便需要传递几个实参</span></a></h3>
<p>functions/functions3.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    call_me();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn call_me(num: u32) {</span></span>
<span class="line"><span>    for i in 0..num {</span></span>
<span class="line"><span>        println!("Ring! Call number {}", i + 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0061]: this function takes 1 argument but 0 arguments were supplied。</p>
<p>函数需要一个参数，但在调用时只提供了0个。</p>
<p>函数参数定义的个数，与调用时实际提供的个数（包括类型），需要匹配。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    call_me(3);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn call_me(num: u32) {</span></span>
<span class="line"><span>    for i in 0..num {</span></span>
<span class="line"><span>        println!("Ring! Call number {}", i + 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数需要一个返回值类型-如果它有一个返回箭头" tabindex="-1"><a class="header-anchor" href="#函数需要一个返回值类型-如果它有一个返回箭头"><span>函数需要一个返回值类型，如果它有一个返回箭头</span></a></h3>
<p>functions/functions4.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let original_price = 51;</span></span>
<span class="line"><span>    println!("Your sale price is {}", sale_price(original_price));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn sale_price(price: i32) -> {</span></span>
<span class="line"><span>    if is_even(price) {</span></span>
<span class="line"><span>        price - 10</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        price - 3</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn is_even(num: i32) -> bool {</span></span>
<span class="line"><span>    num % 2 == 0</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected type, found *。</p>
<p>函数需要合适的返回值类型，找到的类型与预期不匹配。</p>
<p>函数sale_price的类型根据函数体代码，需要修改为i32。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn sale_price(price: i32) -> i32{</span></span>
<span class="line"><span>    if is_even(price) {</span></span>
<span class="line"><span>        price - 10</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        price - 3</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rust没有return，函数体的最后一个表达式即是函数准备返回的结果。在这个函数中，price - 10与price - 3即是准备的结果，判断的依据是它们的行尾都没有分号。</p>
<h3 id="函数有返回值时-返回值表达式行尾不加分号" tabindex="-1"><a class="header-anchor" href="#函数有返回值时-返回值表达式行尾不加分号"><span>函数有返回值时，返回值表达式行尾不加分号</span></a></h3>
<p>functions/functions5.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let answer = square(3);</span></span>
<span class="line"><span>    println!("The square of 3 is {}", answer);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn square(num: i32) -> i32 {</span></span>
<span class="line"><span>    num * num;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0308]: mismatched types，expected <code v-pre>i32</code>, found <code v-pre>()</code>。</p>
<p>类型不匹配，需要i32，却找到了()。注意，在Rust中，()也是一个类型，可以类比为JS中的void类型。</p>
<p>在Rust函数中，返回一个值不需要使用return关键字，但返回的值或表达式，基行尾不能加分号。有分号是寻常语句，没有分号才是返回语句。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn square(num: i32) -> i32 {</span></span>
<span class="line"><span>    num * num</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第4天-逻辑控制语句" tabindex="-1"><a class="header-anchor" href="#第4天-逻辑控制语句"><span>第4天 逻辑控制语句</span></a></h2>
<h3 id="if语句使用c派写法-但条件语句不需要小括号" tabindex="-1"><a class="header-anchor" href="#if语句使用c派写法-但条件语句不需要小括号"><span>if语句使用C派写法，但条件语句不需要小括号</span></a></h3>
<p>if/if1.rs:6:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pub fn bigger(a: i32, b: i32) -> i32 {</span></span>
<span class="line"><span>    // Complete this function to return the bigger number!</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Don't mind this for now :)</span></span>
<span class="line"><span>#[cfg(test)]</span></span>
<span class="line"><span>mod tests {</span></span>
<span class="line"><span>    use super::*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #[test]</span></span>
<span class="line"><span>    fn ten_is_bigger_than_eight() {</span></span>
<span class="line"><span>        assert_eq!(10, bigger(10, 8));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #[test]</span></span>
<span class="line"><span>    fn fortytwo_is_bigger_than_thirtytwo() {</span></span>
<span class="line"><span>        assert_eq!(42, bigger(32, 42));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0308]: mismatched types，expected <code v-pre>i32</code>, found <code v-pre>()</code>。</p>
<p>类型描述与上一个练习相同，但导致错误的原因不一定相同。排查代码错误需要仔细阅读编译器给出的错误反馈信息，并在此基础上作出进一步的正确的推断。</p>
<p>在这个练习中，<code v-pre>assert_eq!</code> 宏可以用于判断两个表达式返回的值是否相等，在Rust中宏在调用时尾部都有一个感叹号，看到叹号就知道是宏调用无疑了。函数bigger需要一个类型为i32的返回值，但是函数体没有什么返回，所以报错了。</p>
<p>解决方法只需要加上返回值即可：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pub fn bigger(a: i32, b: i32) -> i32 {</span></span>
<span class="line"><span>    if a >= b {</span></span>
<span class="line"><span>      a </span></span>
<span class="line"><span>    } else { </span></span>
<span class="line"><span>      b</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里用到了if条件控制语句。在Rust中，if条件语句是逻辑控制语句——分支控制的一种，和Go语言一样，条件不需要使用小括号括住，代码块用花括号即可，花括号与if之间的部分，及花括号之间的部分自然就是条件语句。</p>
<p>为了加深印象，我们可以同时看一下C/C++语言的if语句写法：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a 小于 20</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a 大于 20</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区别在于条件语句周围有小括号，而Rust语言不需要。</p>
<h3 id="一个函数只有一个返回值类型-不能同时返回两个类型-if-else语句使用else-if添加分支" tabindex="-1"><a class="header-anchor" href="#一个函数只有一个返回值类型-不能同时返回两个类型-if-else语句使用else-if添加分支"><span>一个函数只有一个返回值类型，不能同时返回两个类型；if else语句使用else if添加分支</span></a></h3>
<p>if/if2.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pub fn foo_if_fizz(fizzish: &#x26;str) -> &#x26;str {</span></span>
<span class="line"><span>    if fizzish == "fizz" {</span></span>
<span class="line"><span>        "foo"</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// No test changes needed!</span></span>
<span class="line"><span>#[cfg(test)]</span></span>
<span class="line"><span>mod tests {</span></span>
<span class="line"><span>    use super::*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #[test]</span></span>
<span class="line"><span>    fn foo_for_fizz() {</span></span>
<span class="line"><span>        assert_eq!(foo_if_fizz("fizz"), "foo")</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #[test]</span></span>
<span class="line"><span>    fn bar_for_fuzz() {</span></span>
<span class="line"><span>        assert_eq!(foo_if_fizz("fuzz"), "bar")</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #[test]</span></span>
<span class="line"><span>    fn default_to_baz() {</span></span>
<span class="line"><span>        assert_eq!(foo_if_fizz("literally anything"), "baz")</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0308]: mismatched types，expected <code v-pre>&amp;str</code>, found integer。</p>
<p>类型不匹配，需要字符串，却找到了整型。</p>
<p>这是一次真正的类型不匹配，函数的返回类型是&amp;str，但在if语句的一个分支中却返回了数字。修改方法很简单，统一类型即可：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if fizzish == "fizz" {</span></span>
<span class="line"><span>    "foo"</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>    "1"</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的返回值类型一定要统一，如果if语句在分支中承担了函数值的返回，则每个分支返回的类型必须相同。</p>
<p>这样的简单修改从语法上没有问题，但对于这个练习仍然通过不了，原因在于这个示例包含自动化测试代码，简单地返回“1”不能使测试通过。完整的修改如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pub fn foo_if_fizz(fizzish: &#x26;str) -> &#x26;str {</span></span>
<span class="line"><span>    if fizzish == "fizz" {</span></span>
<span class="line"><span>        "foo"</span></span>
<span class="line"><span>    } else if fizzish == "fuzz" {</span></span>
<span class="line"><span>        "bar"</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        "baz"</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们不仅统一了函数foo_if_fizz的返回值类型，还在if控制语句中使用else if添加了一个分支条件。这是C派的写法，加一个分支，加一个else if即可。在Python语言名，在if语句中添加分支的关键字是elif，它是else if的缩写，这是反人类的过度设计，这与Python追求极简易用的风格有关。</p>
<h3 id="阶段性测试一" tabindex="-1"><a class="header-anchor" href="#阶段性测试一"><span>阶段性测试一</span></a></h3>
<p>exercises/quiz1.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// Put your function here!</span></span>
<span class="line"><span>// fn calculate_price_of_apples {</span></span>
<span class="line"><span>// Don't modify this function!</span></span>
<span class="line"><span>#[test]</span></span>
<span class="line"><span>fn verify_test() {</span></span>
<span class="line"><span>    let price1 = calculate_price_of_apples(35);</span></span>
<span class="line"><span>    let price2 = calculate_price_of_apples(40);</span></span>
<span class="line"><span>    let price3 = calculate_price_of_apples(41);</span></span>
<span class="line"><span>    let price4 = calculate_price_of_apples(65);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    assert_eq!(70, price1);</span></span>
<span class="line"><span>    assert_eq!(80, price2);</span></span>
<span class="line"><span>    assert_eq!(41, price3);</span></span>
<span class="line"><span>    assert_eq!(65, price4);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error[E0425]: cannot find function <code v-pre>calculate_price_of_apples</code> in this scope。</p>
<p>在当前作用域下找不到函数calculate_price_of_apples。</p>
<p>在练习时，将程序代码修改到可以正常运行，不止一种方法，但最好按照练习中注释的指引，使用出题者预望的方式。对于该练习，出题者不希望我们修改测试代码，我们就不要修改；出题者希望我们完善calculate_price_of_apples方法，我们完善该方法即可。修改后：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn calculate_price_of_apples(num: i32) -> i32 {</span></span>
<span class="line"><span>  if num &#x3C;= 40 {</span></span>
<span class="line"><span>    num * 2</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    num</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5天-基本类型" tabindex="-1"><a class="header-anchor" href="#第5天-基本类型"><span>第5天 基本类型</span></a></h2>
<h3 id="最简单的布尔类型-只有true和false两个值" tabindex="-1"><a class="header-anchor" href="#最简单的布尔类型-只有true和false两个值"><span>最简单的布尔类型，只有true和false两个值</span></a></h3>
<p>primitive_types/primitive_types1.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // Booleans (`bool`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let is_morning = true;</span></span>
<span class="line"><span>    if is_morning {</span></span>
<span class="line"><span>        println!("Good morning!");</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let // Finish the rest of this line like the example! Or make it be false!</span></span>
<span class="line"><span>    if is_evening {</span></span>
<span class="line"><span>        println!("Good evening!");</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected identifier, found keyword <code v-pre>if</code>。</p>
<p>期望一个标识符，但是找到了if关键字。这个错误指向第9行，说的是let关键字后面期望一个标识符。</p>
<p>编译器给出的异常反馈有时候与我们要解决的实际问题关联性并不大，编译器只是按照语法规则，把不合规的地方暴露出来，具体如何甄别与分析，还是要按程序员自己。</p>
<p>改正这个练习，需要在第9行添加一个布尔变量：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let is_evening = true;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>变量is_evening是布尔类型，在这里值是true或false都可以。</p>
<h3 id="单个的字符类型使用单引号作为边界符-变量与方法命名使用下划线间隔法" tabindex="-1"><a class="header-anchor" href="#单个的字符类型使用单引号作为边界符-变量与方法命名使用下划线间隔法"><span>单个的字符类型使用单引号作为边界符；变量与方法命名使用下划线间隔法</span></a></h3>
<p>primitive_types/primitive_types2.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // Characters (`char`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Note the _single_ quotes, these are different from the double quotes</span></span>
<span class="line"><span>    // you've been seeing around.</span></span>
<span class="line"><span>    let my_first_initial = 'C';</span></span>
<span class="line"><span>    if my_first_initial.is_alphabetic() {</span></span>
<span class="line"><span>        println!("Alphabetical!");</span></span>
<span class="line"><span>    } else if my_first_initial.is_numeric() {</span></span>
<span class="line"><span>        println!("Numerical!");</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        println!("Neither alphabetic nor numeric!");</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let // Finish this line like the example! What's your favorite character?</span></span>
<span class="line"><span>    // Try a letter, try a number, try a special character, try a character</span></span>
<span class="line"><span>    // from a different language than your own, try an emoji!</span></span>
<span class="line"><span>    if your_character.is_alphabetic() {</span></span>
<span class="line"><span>        println!("Alphabetical!");</span></span>
<span class="line"><span>    } else if your_character.is_numeric() {</span></span>
<span class="line"><span>        println!("Numerical!");</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        println!("Neither alphabetic nor numeric!");</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected identifier, found keyword <code v-pre>if</code>。</p>
<p>期待一个标识符，却遇到了关键字if。错误指向第15行。该提示与上一个练习的错误提示一样，这样的提示一般对于解决Bug没有直接的帮助。</p>
<p>第15行可以修改为：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let your_character = 'A';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>变量your_character是字符类型，它可以是一个'A'，也可以是一个'1'，程序运行时会走入不同的if分支。is_alphabetic与is_numeric是Rust内建的方法，前者用于判断是否为字母，后者判断是否为数字。</p>
<p>Rust的字符类型使用单引号括住，可以容纳一个字符。同于使用了unicode编码，字符字面量并不局限于我们常用的26个字母及10个阿拉伯数字，imojj表情符号也是可以的（例如 🎉）。</p>
<p>这里有一个关于变量命名规范的问题需要注意一下，当变量名称或方法名称涉及两个单词时，单词之间如何间隔呢？常用的命名规范是小驼峰命名法，例如yourCharacter。在Rust中，无论是练习代码，还是官方内建的方法，在命名上使用的都是下划线间隔法，例如your_character、is_alphabetic。</p>
<h3 id="用两个表达式-一个初始值-一个长度-快速初始化数组" tabindex="-1"><a class="header-anchor" href="#用两个表达式-一个初始值-一个长度-快速初始化数组"><span>用两个表达式（一个初始值，一个长度）快速初始化数组</span></a></h3>
<p>primitive_types/primitive_types3.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a = ???</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if a.len() >= 100 {</span></span>
<span class="line"><span>        println!("Wow, that's a big array!");</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        println!("Meh, I eat arrays like that for breakfast.");</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected expression, found <code v-pre>?</code>。期望看到表达式，看到了问号。</p>
<p>第4行，len方法一般用于返回集合对象的元素长度，若要使代码工作正常，可以将a初始化为一个数组。但是若要手写一个具有100个元素的数组，也是挺费事的，还好Rust里有一个数组默认值初始化的方法：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let a = ["Are we there yet?"; 100];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>方括号内有一个分号，我们知道，一个分号代表一个语句一个独立的表达式，这里相当于用两个表达式——一个默认值、一个元素长度初始化了数组。</p>
<p>另一种相似的快速初始化方式是使用类型，而不是使用默认值：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let xs: [i32; 5] = [1, 2, 3, 4, 5];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在这里i32是元素类型。但Rust有类型推导，一旦指定了元素的默认值以后，也就相当于指定了元素类型，所以这种方式并不比上一种方式更加灵活。</p>
<p>注意，数组的类型注释并非单指元素类型，数组是不可变类型，元素长度也是类型的一部分，对于数组xs，<code v-pre>i32; 5</code>是它的类型注释。如果有另一个数组xs1，类型是<code v-pre>i32; 6</code>，它们的元素类型虽然相同，但数组类型并不相同。</p>
<h3 id="用两个点-右排除区间运算符-从数组中生成切片" tabindex="-1"><a class="header-anchor" href="#用两个点-右排除区间运算符-从数组中生成切片"><span>用两个点（右排除区间运算符）从数组中生成切片</span></a></h3>
<p>primitive_types/primitive_types4.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#[test]</span></span>
<span class="line"><span>fn slice_out_of_array() {</span></span>
<span class="line"><span>    let a = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let nice_slice = ???</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    assert_eq!([2, 3, 4], nice_slice)</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected expression, found <code v-pre>?</code>。</p>
<p>这个错误反馈并不能产生实质帮助。</p>
<p>从题意猜测，第7行的断言assert_eq如果想要成功，nice_slice必须等于[2, 3, 4]。第5行可以这样修改：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let nice_slice = &#x26;a[1..4];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>1..4</code>是左开右闭区间，从零开始计数，取数组a中第1个至第3个元素。在数组a的标识符前面必须加上&amp;符号，代表取地址，因为结果是一个切片。切片是一个类似于指针的引用对象，它自身有两个数组——指向数组中首元素的指针地址与数组元素的跨度，它本身并不持有数据。</p>
<p>两个点在Rust中是一个运算符，有人叫右排除区间运算符，两边各接一个数字，代表一个左开右闭区间。</p>
<h3 id="小括号括住的是元组-使用模型匹配可以取用元组中的元素" tabindex="-1"><a class="header-anchor" href="#小括号括住的是元组-使用模型匹配可以取用元组中的元素"><span>小括号括住的是元组，使用模型匹配可以取用元组中的元素</span></a></h3>
<p>primitive_types/primitive_types5.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let cat = ("Furry McFurson", 3.5);</span></span>
<span class="line"><span>    let /* your pattern here */ = cat;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!("{} is {} years old.", name, age);</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected pattern, found <code v-pre>=</code>。</p>
<p>期望一个匹配的模式，却找到了等号。</p>
<p>按题意猜测，第5行打印了变量name与age，第3行应该从cat中析构出这两个变量。第3行修改后如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let (name, age) = cat;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>cat本身是一个元组。在Rust中，元组是一种使用小括号括起来的数据结构，元素个数有几个都可以，元素相互之间也不要求类型一致。</p>
<p>元组中的元素本身没有名称，但为了取用方便，有时候便会使用析构语法，按顺序从元组中取出数据赋上新名称，例如name与age，析造后便可以像使用变量一样使用。注意，析构时在变量两边也需要有小括号，在Rust中这叫模型，这种析构取值的方式也叫模型匹配，代表从一个目标中匹配出我们需要的数据。</p>
<h3 id="元组中的元素可以使用零始下标访问" tabindex="-1"><a class="header-anchor" href="#元组中的元素可以使用零始下标访问"><span>元组中的元素可以使用零始下标访问</span></a></h3>
<p>primitive_types/primitive_types6.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#[test]</span></span>
<span class="line"><span>fn indexing_tuple() {</span></span>
<span class="line"><span>    let numbers = (1, 2, 3);</span></span>
<span class="line"><span>    // Replace below ??? with the tuple indexing syntax.</span></span>
<span class="line"><span>    let second = ???;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    assert_eq!(2, second,</span></span>
<span class="line"><span>        "This is not the 2nd number in the tuple!")</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected expression, found <code v-pre>?</code>。</p>
<p>期待表达式，找到了问号。</p>
<p>从第7行可以看出，题意蕴含对second等于2的期待，在5行当完成这个赋值。第5行修改后如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let second = numbers.1;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在Rust中，元组不仅可以用析构命名的方式取用元素，还可以使用更简单的方式，直接在元组变量后面，使用点运算符+下标访问元素。下标从零开始，第一个位置的元素是0，第二个是1，依此类推。</p>
<p>vecs/vecs1.rs:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn array_and_vec() -> ([i32; 4], Vec&#x3C;i32>) {</span></span>
<span class="line"><span>    let a = [10, 20, 30, 40]; // a plain array</span></span>
<span class="line"><span>    let v = // TODO: declare your vector here with the macro for vectors</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    (a, v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[cfg(test)]</span></span>
<span class="line"><span>mod tests {</span></span>
<span class="line"><span>    use super::*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #[test]</span></span>
<span class="line"><span>    fn test_array_and_vec_similarity() {</span></span>
<span class="line"><span>        let (a, v) = array_and_vec();</span></span>
<span class="line"><span>        assert_eq!(a, v[..]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: expected <code v-pre>;</code>, found <code v-pre>}</code>。期待分号，返回了花括号。真正的错误并不在运算符上。</p>
<p>第5行需要返回一个元素，第一个元素jo</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<ul>
<li>《The Rust Programming Language》：<a href="https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html" target="_blank" rel="noopener noreferrer">https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html</a></li>
<li><a href="https://www.rust-lang.org/zh-CN/learn" target="_blank" rel="noopener noreferrer">https://www.rust-lang.org/zh-CN/learn</a></li>
</ul>
</div></template>


