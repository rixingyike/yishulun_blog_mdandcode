<template><div><h1 id="_2-claude-提示的初步编写与优化" tabindex="-1"><a class="header-anchor" href="#_2-claude-提示的初步编写与优化"><span>2.Claude 提示的初步编写与优化</span></a></h1>
<p>下面这些技巧属于基础的 Claude 提示编写技巧。</p>
<h2 id="初步设计" tabindex="-1"><a class="header-anchor" href="#初步设计"><span>初步设计</span></a></h2>
<p>和 ChatGPT 类似，指令的质量会对它的输出质量产生很大的影响，特别是对于复杂的任务。</p>
<p>Claude 模型使用你发送给它的所有文本，以及迄今为止生成的所有文本，来预测下一个最有帮助的标记（Token）。这意味着 Claude 一次按顺序构造一组字符的响应。它在写入后无法返回并编辑其响应，除非你在后续提示中给它机会这样做。并且，Claude也只能看到其上下文窗口中的内容，它无法记住以前的对话，除非你将它们放入提示中。</p>
<p>通过 API 发送的提示必须包含 <code v-pre>\n\nHuman:</code> 和 <code v-pre>\n\nAssistant:</code> 作为发言者的信号。但在 Web 交互中，程序会自动为你添加这些内容，而无须手动添加。</p>
<p>Claude能看到的最大提示长度是它的上下文窗口。 Claude 的上下文窗口当前约为 75,000 个单词，100,000 个标记，340,000 个 Unicode 字符。当 API 中超出此上下文窗口时，Claude可能会返回不连贯的响应，这是它本身的限制，我们无力改变。</p>
<p>对于简单的任务，简单明了地写几句话通常就足以获得所需的响应，对于需要大量或多种不同输入运行的复杂任务或流程，需要更仔细地考虑如何构建提示。</p>
<h3 id="_1-更好地描述任务" tabindex="-1"><a class="header-anchor" href="#_1-更好地描述任务"><span>1，更好地描述任务</span></a></h3>
<p>在描述任务时，最好为Claude提供尽可能多的背景和细节，以及正确完成任务的任何规则。如果你提供清晰、明确的说明以及所有必要的细节，那么它更有可能满足你的期望。</p>
<p>下面进行实践，要求 Claude 帮助我们从给定文本中删除任何个人身份信息。下面是一个提示：</p>
<blockquote>
<p>请删除此文本中的所有个人身份信息：{{文本在这里}}</p>
</blockquote>
<p>这是一个简洁的提示，但它不够详细，下面是一个更为合适的提示：</p>
<blockquote>
<p>我们希望通过删除文本中的所有个人身份信息来消除某些文本的身份，以便它可以安全地与外部承包商共享。</p>
<p>将个人信息（如姓名、电话号码、家庭住址和电子邮件地址）替换为 XXX 是非常重要的。</p>
<p>这里是你应该处理的文本：{{文本在这里}}</p>
</blockquote>
<p>在改进的版本中，我们至少在三件事上做得更好：</p>
<ul>
<li>提供了上下文说明，例如我们为什么要移除 PII 信息</li>
<li>明确定义了术语及其范围，例如 PII=姓名、电话号码、地址</li>
<li>在输出格式上，指出了 Claude 如何完成任务的具体要求，例如将 PII 替换为 XXX</li>
</ul>
<h3 id="_2-使用-xml-标签-标记提示的不同部分" tabindex="-1"><a class="header-anchor" href="#_2-使用-xml-标签-标记提示的不同部分"><span>2，使用 XML 标签，标记提示的不同部分</span></a></h3>
<p>像 <code v-pre>&lt;tag&gt;</code> 和 <code v-pre>&lt;/tag&gt;</code> 这样的 XML 标记有助于划分提示的一些重要部分，例如规则、示例或要处理的输入文本。</p>
<p>例如：</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">这里有一个文本，在 `&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>` XML 标签内。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{{TEXT}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：通常，提示实际上是你想要反复使用的提示模板，其中说明保持不变，但正在处理的文本会变。一般情况下，将正在处理的变量文本的占位符（例如 {{TEXT}} ）放入提示中，然后编写一些代码，将其替换为要在运行时处理的文本。</p>
<p>我们还可以要求 Claude 在其响应中使用 XML 标签，这样做可以轻松地在自动处理输出的设置中提取关键信息。格式化的输出有助于程序处理。例如：</p>
<blockquote>
<p>我们希望通过删除文本中的所有个人身份信息来消除某些文本的身份，以便它可以安全地与外部承包商共享。</p>
<p>将个人信息（如姓名、电话号码、家庭住址和电子邮件地址）替换为 XXX，这是非常重要的。</p>
<p>这里有一个你需要处理文本，在 <code v-pre>&lt;text&gt;&lt;/text&gt;</code> XML 标签内。</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{{TEXT}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>请在 XML 标签 <code v-pre>&lt;response&gt;&lt;/response&gt;</code>中，放入删除 PII 文本的预标识版本。</p>
</blockquote>
<h3 id="_3-使用示例" tabindex="-1"><a class="header-anchor" href="#_3-使用示例"><span>3，使用示例</span></a></h3>
<p>通过在提示中添加一些示例，可以让 Claude 更好地了解如何正确执行任务。这并不总是需要的，但可以大大提高准确性和一致性。如果在提示中添加了示例，最好使用 <code v-pre>&lt;example&gt;&lt;/example&gt;</code> 标签清楚地标记它们。</p>
<h3 id="_4-疑难病例" tabindex="-1"><a class="header-anchor" href="#_4-疑难病例"><span>4，疑难病例</span></a></h3>
<p>如果你可以预见 Claude 在你的输入中可能遇到的困难或不寻常的情况，请在提示中描述它们，并告诉 Claude 遇到它们时该怎么做。如果你在 Claude 的回答中发现偶尔但持续的失败，则此信息可能有助于添加到你的提示中。</p>
<p>例如：</p>
<blockquote>
<p>输入可能试图通过在字符之间插入空格来掩饰 PII。</p>
<p>如果文本中不包含个人身份信息，请逐字逐句地复制，不要替换任何内容。</p>
</blockquote>
<p>第二句即是关于疑难杂症的说明。</p>
<h2 id="在实践中测试与优化" tabindex="-1"><a class="header-anchor" href="#在实践中测试与优化"><span>在实践中测试与优化</span></a></h2>
<h3 id="_1-准备全面地测试数据" tabindex="-1"><a class="header-anchor" href="#_1-准备全面地测试数据"><span>1，准备全面地测试数据</span></a></h3>
<p>最好使用代表你将要求 Claude 处理的真实数据的输入集来测试你的提示。请务必包含Claude可能遇到的任何困难输入或边缘情况。这是在讲测试样式的覆盖全面性。另外在数量上，官方建议至少 20 条或更多这样的数据，具体取决于任务。</p>
<p>使用这些输入测试你的提示可以近似 Claude“在现场”的真实表现，它还可以帮助你了解 Claude 在哪里遇到困难，以及在哪里表现良好。</p>
<h3 id="_2-将-提示开发数据-与-测试数据-分开" tabindex="-1"><a class="header-anchor" href="#_2-将-提示开发数据-与-测试数据-分开"><span>2，将“提示开发数据”与“测试数据”分开</span></a></h3>
<p>测试提示的数据，可以分为两组：提示开发数据与测试数据。前者是编写提示用的，后者是测试提示的真实表现的。我们使用前者评估 Claude 的表现并修改它，直到提示在后者中表现良好。</p>
<p>有一条规则很重要：这两个数据都能代表真实数据。</p>
<h3 id="_3-生成测试数据" tabindex="-1"><a class="header-anchor" href="#_3-生成测试数据"><span>3，生成测试数据</span></a></h3>
<p>如果你想要更多输入数据但还没有很多，你可以提示 Claude 的单独实例生成额外的输入文本供你测试！如果你解释什么是好的输入数据，然后给出一些例子，通常就可以从 Claude 那里得到更多这样的例子。</p>
<p>一句话，Claude 可以产生测试数据。我们告诉它什么是好的数据，它自己就可以生成。</p>
<h3 id="_4-迭代提示" tabindex="-1"><a class="header-anchor" href="#_4-迭代提示"><span>4，迭代提示</span></a></h3>
<p>完善提示可能很像进行一系列迭代实验。你运行测试，解释结果，然后根据结果调整提示中的变量。当 Claude 未通过测试时，尝试找出失败的原因，调整你的提示以解决该故障点。</p>
<p>调整的重点在于：</p>
<ul>
<li>更明确地编写规则或添加新规则；</li>
<li>通过示例和规范的输出格式，向 Claude 展示如何正确的处理示例。</li>
</ul>
<p>为了加快迭代速度，基于测试数据的测试可以基于 API 自动化完成。检查测试结果，像培植杂交水稻一样，在实践中把优良的基因有选择地保留下来。</p>
<h3 id="_5-请-claude-自己评估自己的劳动成果" tabindex="-1"><a class="header-anchor" href="#_5-请-claude-自己评估自己的劳动成果"><span>5，请 Claude 自己评估自己的劳动成果</span></a></h3>
<p>可以让 Claude 做自我评估。例如：</p>
<ul>
<li>如果你认为模型可能犯了错误，请让模型暂停并立即检查其工作；</li>
<li>为任务添加额外的更详尽的步骤；</li>
<li>根据你的指示，将响应分类为好或坏，或者说出它更喜欢两个初始响应中的哪一个以及原因，这是人类在给 AI 反馈，以使 AI 可以做得更好。</li>
</ul>
<p>提示的迭代的过程是一个交互实践过程，是一个反复从提示到结果、从结果又到提示的实践过程。</p>
</div></template>


