---
title: '示例文章：正文排版与发布流程'
description: '这是一篇占位示例文章，用来检验 Markdown 渲染和列表页展示，请随时删除或替换成你的真实内容。'
pubDate: 2026-10-08
tags: ['示例', '写作']
---

这是一篇**示例文章**。它不含任何个人经历，只用来验证两件事：frontmatter 字段能否被正确校验，以及正文排版的各个元素是否好看。你可以直接删除这个文件。

## frontmatter 必填字段

每篇文章放在 `src/content/blog/` 下，文件路径去掉扩展名就是文章网址。例如这个文件发布在 `/blog/how-to-write-a-post/`。

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 列表和文章页的标题 |
| `description` | 是 | 列表摘要与 meta description |
| `pubDate` | 是 | 发布日期，决定排序和年份分组 |
| `tags` | 是 | 分类，至少一个，自动生成 `/tags/<分类>/` |
| `updatedDate` | 否 | 有值时标题下多一行「更新于」 |
| `draft` | 否 | 为 `true` 时不出现在任何列表和页面上 |

字段定义在 `src/content.config.ts`，写错会在校验阶段报错，而不是构建出一个空页面。

## 排版元素清单

行内代码写作 `const answer = 42`，代码块则用来展示配置：

```js
export default defineConfig({
  site: 'https://sorangecc.github.io',
  base: '/',
});
```

> 引用块用来放一句需要视觉上停顿的话。它靠左侧的朱色竖线区分，而不是靠底色卡片。

下面是无序列表：

- 一级列表项，行长被限制在约 42rem，中文阅读不至于累。
- 第二项，检查行距与标点悬挂。
  - 嵌套列表项，检查缩进是否清晰。

有序列表：

1. 第一步：新建 Markdown 文件。
2. 第二步：填写 frontmatter。
3. 第三步：本地 `npm run build` 确认没有校验错误，然后提交推送。

---

分隔线以下通常放结语。链接样式在这里：<a href="/about/">关于页</a>、[站内首页](/)、[Astro 文档](https://docs.astro.build/)。

如果这一节的行距、标题间距或代码块宽度在你看来不对，改 `src/styles/global.css` 里 `.prose` 那一段就够了。
