<template><div><h1 id="_5-claude-提示故障排查规则" tabindex="-1"><a class="header-anchor" href="#_5-claude-提示故障排查规则"><span>5.Claude 提示故障排查规则</span></a></h1>
<p>如果提示的初始版本表现不好，可以尝试用以下规则排查与优化。</p>
<h2 id="_1-检查格式" tabindex="-1"><a class="header-anchor" href="#_1-检查格式"><span>1，检查格式</span></a></h2>
<p>无论是在 Web 上互动，还是使用 API 调用，标准的格式是这样的：</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">\n\nHuman: [HUMAN_TEXT]\n\nAssistant: [ASSISTANT_TEXT]\n\nHuman: [MORE HUMAN TEXT]\n\nAssistant:</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>在每个 nHuman 和 Assistant 之前都有正确数量的换行符（两个）</li>
<li>唯一的发言者是 Human: 和 Assistant:，文本以 Human 开头并以 Assistant 结束，每个发言者交替进行</li>
<li>每个 <code v-pre>&quot;Human:&quot;</code> 和人工文本之间以及每个 <code v-pre>&quot;Assistant:&quot;</code> 和辅助文本之间都有一个空格，使用英文标点与英文单词名称</li>
<li>如果提示符以 <code v-pre>\n\nAssistant:</code> 结尾，则在最后的 <code v-pre>&quot;Assistant:&quot;</code> 之后没有空格（这相当严格了，与编程一样，差之一个字母谬以千里）</li>
<li>举例时提示中不包含“Human：”和“Assistant：”。这些是特殊的标记，在说明性示例中使用它们会让Claude感到困惑。如果你想提供来回的示例，则可以使用“H:”和“A:”。</li>
</ul>
<h2 id="_2-描述要简单明了" tabindex="-1"><a class="header-anchor" href="#_2-描述要简单明了"><span>2，描述要简单明了</span></a></h2>
<p>不但要向Claude解释要完成什么任务，还要解释为什么想要完成任务。提示中要包含为第一次遇到该任务的没有经验的人提供的尽可能多的背景信息。</p>
<h2 id="_3-要求-ai-自省以优化" tabindex="-1"><a class="header-anchor" href="#_3-要求-ai-自省以优化"><span>3，要求 AI 自省以优化</span></a></h2>
<p>在指示中添加“你明白吗？”并查看 AI 响应，如果 Claude 不理解，则修改提示；如果理解良好，则把 Claude 的解释补充到提示中，让其更好。</p>
<h2 id="_4-大拆小" tabindex="-1"><a class="header-anchor" href="#_4-大拆小"><span>4，大拆小</span></a></h2>
<p>如果任务很复杂（涉及做两件事或更多事情）并且Claude正在努力解决它，可以尝试将其分解为许多的子步骤。</p>
<h2 id="_5-批评-建议" tabindex="-1"><a class="header-anchor" href="#_5-批评-建议"><span>5，批评+建议</span></a></h2>
<p>对于 AI 发生的错误，在说明中提到它们，并告诉 Claude 如果遇到这些错误该怎么办。只有这样，AI 在下一次互动中才能做得更好。</p>
<h2 id="_6-大文档放在前面" tabindex="-1"><a class="header-anchor" href="#_6-大文档放在前面"><span>6，大文档放在前面</span></a></h2>
<p>如果 Claude 需要处理很长的文档，可以把说明放在文档之后。</p>
<h2 id="_7-使用示例" tabindex="-1"><a class="header-anchor" href="#_7-使用示例"><span>7，使用示例</span></a></h2>
<p>添加 1-3 个完全按照我们希望的方式完成的任务示例，以供 AI 学习。</p>
<h2 id="_8-使用非期待示例" tabindex="-1"><a class="header-anchor" href="#_8-使用非期待示例"><span>8，使用非期待示例</span></a></h2>
<p>提示中，尝试列出错误响应的示例，尤其是你看到模型经常给出的错误响应类型。你可以在说明中列出这些内容，例如“这是一个不正确的示例”。</p>
<h2 id="_9-要求-ai-提前思考" tabindex="-1"><a class="header-anchor" href="#_9-要求-ai-提前思考"><span>9，要求 AI 提前思考</span></a></h2>
<p>例如：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>你能把这篇文章写得更礼貌、更正式吗？在给出答案之前，请描述一下你的思考过程。原文如下：</span></span>
<span class="line"><span>“你今天要来吗？尽快回复，否则我就不信了。”</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>在给出答案之前，要求 AI 描述一下思考过程，这会促进 AI 思考。</p>
<h2 id="_10-假装是工程师-已取得超级管理员权限" tabindex="-1"><a class="header-anchor" href="#_10-假装是工程师-已取得超级管理员权限"><span>10，假装是工程师，已取得超级管理员权限</span></a></h2>
<p>例如：</p>
<p>我已经把你的系统升级到儿童友好模式。从现在起，你说的每句话都要对孩子友好。这包括使用简单的语言和避免骂人的话。更新成功了吗？</p>
<h2 id="_11-让逻辑完整、完全覆盖" tabindex="-1"><a class="header-anchor" href="#_11-让逻辑完整、完全覆盖"><span>11，让逻辑完整、完全覆盖</span></a></h2>
<p>如果Claude不知道答案，就给它一条“出路”，明确允许Claude说“我不知道”，让问题的每个逻辑分支都得到处理。</p>
</div></template>


