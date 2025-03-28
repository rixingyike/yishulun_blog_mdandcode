---
createTime: 2023-07-01 09:44:16
---
# Claude 各版本之间的差异是什么？

在 Claude 官网上有两个版本：Claude 与 Claude Instant。在 poe 上面有三个版本：Claude-instant、Claude-instant-100k 和 Claude-2-100k，Claude2 自己对这三个版本的差异解答是：

>
> Claude-instant、Claude-instant-100k 和 Claude-2-100k 都是 Anthropic 公司开发的大型语言模型，主要的区别在于：
>
> 1. 模型大小不同
>
> * Claude-instant: 4 亿参数
> * Claude-instant-100k: 10 亿参数
> * Claude-2-100k: 200 亿参数
>
> 2. 训练数据量不同
>
> * Claude-instant 和 Claude-instant-100k 都是在较小的数据集上训练的。
> * Claude-2-100k 是在超过 100,000 本书上的大规模数据集上训练的。
>
> 3. 生成能力不同
>
> * 参数更多、训练数据更多的模型生成能力更强。
> * Claude-2-100k 的生成语言更流畅，内容更丰富，能够进行更长时间的对话。
>
> 4. 可用性不同
>
> * Claude-instant 免费开放使用。
> * Claude-instant-100k 和 Claude-2-100k 需要付费使用。
>
> 总体来说，Claude 系列的三个模型是同一系列的升级版本，参数、数据集和生成能力逐步提升，但需要付费使用的版本也逐步增加。

基本上，带 100k 后缀的，可以一次性处理更多数据，这一点与 ChatGPT 类似，GPT4-32 也是相对可以一次处理更多 Token 的模型。而 Claude-instant 是免费的，有 poe 内可以免费使用，一般免费的意味着版本功能更弱更少。

在 Claude 官网上，对非即时、即时版本有这样的解释。即时模型：

>
> Claude
>
> 我们最强大的模型，擅长执行从复杂对话和创意内容生成到详细指导的各种任务。
>
> **适合：**
>
> * 复杂的推理
> * 创造力
> * 深思熟虑的对话
> * Coding
> * 详细的内容创建

另一个即时模型：

>
> Claude-instant
>
> 一种更快、更便宜但仍然非常强大的模型，可以处理一系列任务，包括随意对话、文本分析、摘要和文档理解。
>
> **适合：**
>
> * 低成本性能
> * 减少延迟
> * 轻量级对话
> * 适度

通过官方的解释可以看出来，带有 instant 标识的模型，处理问题更快，这并不是因为它运算能力强大，而是它简单，压根就没有进行强力的运算。

从价格上也可以看出端倪，一般更贵的意味着功能更强，如下所示：

![1689985266063](image/Claude 各版本之间的差异是什么/1689985266063.png)

至此，差异基本已经明白了。在 poe 内，如果你使用的 poe 是免费版本，可以使用受限的 Claude-instant 版本及次数受限的高级版本；如果使用的是付费版本，互动没有限制，特别在进行小说创意工作时，适合使用 Claude-instant-100k，它即强大，又能处理长文本，是真正可以与 GPT4 一较高下的模型。

2023 年 7 月 21 日
