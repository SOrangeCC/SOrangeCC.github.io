# 个人网站 · sorangecc.github.io

基于 Astro 构建的静态个人网站，包含首页、项目、博客、关于与 404 页面，通过 GitHub Actions 自动部署到 GitHub Pages。

线上地址：<https://sorangecc.github.io/>
源码仓库：<https://github.com/SOrangeCC/SOrangeCC.github.io>

> **当前仓库内所有个人信息均为 `TODO` 占位**，没有替你编造任何经历。需要替换的位置见文末清单。

## 技术栈

| 项目 | 选择 | 说明 |
| --- | --- | --- |
| 框架 | Astro `^7.3.7` | 构建时输出纯静态 HTML，运行时零 JavaScript |
| 语言 | TypeScript `^6.0.3`（`strict`） | `astro/tsconfigs/strict`；`@astrojs/check` 要求 TS 5 或 6，不要升到 7 |
| 内容 | Content Collections + `@astrojs/mdx` `^8.0.3` | Markdown 与 MDX 均可，frontmatter 有类型校验 |
| 样式 | 原生 CSS，单文件 | 无 UI 框架、无 CSS 预处理器、无外部字体 |
| SEO | `@astrojs/sitemap` `^3.7.4` | 自动生成 sitemap，`robots.txt` 手动维护 |
| 部署 | GitHub Actions + GitHub Pages | 官方 `withastro/action@v6` |

设计取向：排版优先的编辑式（editorial）风格。层级由顶栏实线、1px 分隔线与留白建立，不使用渐变、圆角卡片、毛玻璃与装饰性动画；跟随系统深浅色，并尊重 `prefers-reduced-motion`。

## 目录结构

```
astro.config.mjs          site / base / 集成
.github/workflows/deploy.yml  自动构建与发布
public/                   原样拷贝到站点根目录（favicon、robots.txt）
src/
  components/             页头页脚、列表行、分类导航、标签
  config/site.ts          站点名、简介、导航、社交链接   ← 改这里
  content.config.ts       文章 frontmatter 的字段与校验
  content/blog/           文章（.md / .mdx）             ← 写这里
  data/projects.ts        项目列表数据                   ← 改这里
  layouts/Layout.astro    HTML 骨架与页面元数据
  lib/                    文章查询、日期格式化
  pages/                  路由：index / projects / blog / tags / about / 404
  styles/global.css       设计令牌与全部样式
```

## 本地开发

```bash
npm install       # 安装依赖（Node >= 22.12，当前开发环境为 Node 24）
npm run dev       # http://localhost:4321
npm run check     # 类型与 Astro 检查
npm run build     # 构建到 dist/
npm run preview   # 本地预览构建产物
```

## 部署

推送至 `main` 分支即触发 `.github/workflows/deploy.yml`：安装依赖 → `npm run build` → 上传 `dist/` → 发布到 Pages。

首次部署前需要手动确认一次仓库设置（之后不用再改）：

1. Settings → Pages → **Build and deployment → Source: GitHub Actions**。
2. 仓库为公开仓库（用户主页站点必须公开才能被访问）。

查看部署状态：仓库的 **Actions** 标签页看构建日志；**Settings → Pages** 看当前部署与环境；**Insights → Pages** 或 `https://sorangecc.github.io/` 直接验证结果。

本仓库是 `SOrangeCC.github.io` 形式的用户主页，因此部署在**根路径**：`astro.config.mjs` 中 `base: '/'`。若将来换成了普通项目仓库（例如 `.../blog`），需要同时改 `site` 和把 `base` 设为 `'/仓库名'`，并把 `src/pages` 与组件里的绝对路径改为带前缀。

## 发布新文章

1. 在 `src/content/blog/` 新建文件，例如 `my-first-post.md`（文件名即网址：`/blog/my-first-post/`）。
2. 填写 frontmatter：

```yaml
---
title: '文章标题'
description: '列表摘要与 meta description'
pubDate: 2026-10-08
tags: ['分类一', '分类二']
updatedDate: 2026-10-09   # 可选
draft: false              # true 时不发布
---
```

3. `npm run build` 确认无校验错误，提交推送即可。

`tags` 会自动出现在博客页顶部的分类导航，并生成 `/tags/<分类>/` 分类页。中文分类会形成中文 URL（浏览器会转成百分号编码），这是预期行为。需要嵌入组件或写表达式时把扩展名换成 `.mdx`，此时 HTML 属性要写 `className`。

## 修改个人资料与项目

- **站点名、简介、导航、社交链接**：`src/config/site.ts`
- **首页开场白**：`src/pages/index.astro`
- **关于页正文**：`src/pages/about.astro`
- **项目**：`src/data/projects.ts`。字段为 `name / year / status / summary / tags / links / featured`；`status` 取 `active | building | archived`；`featured: true` 的项目会进入首页（最多 3 个）。
- **配色、字体栈、间距**：`src/styles/global.css` 顶部的 `:root` 与 `@media (prefers-color-scheme: dark)` 两块令牌。
- **图标**：替换 `public/favicon.svg`。

## 待替换的占位内容

| 位置 | 内容 |
| --- | --- |
| `src/config/site.ts` | `title`、`description`、`author`、`social` 里的邮箱 |
| `src/pages/index.astro` | 角色定位、开场白、占位说明段 |
| `src/pages/about.astro` | 事实表与各节正文 |
| `src/pages/projects/index.astro`、`src/pages/blog/index.astro` | 页首 `lede` 说明 |
| `src/data/projects.ts` | 三条示例项目 |
| `src/content/blog/` | 两篇示例文章（`how-to-write-a-post.md`、`mdx-capability-check.mdx`），可直接删除 |
| 各页 `description` | 目前写着 `TODO：…`，替换为真实描述 |

## 说明

- 不加载任何第三方字体或脚本，无分析代码，因此首屏只有一个 HTML 请求加一个约 11 KB 的 CSS。
- `404.astro` 会构建成 `dist/404.html`，GitHub Pages 用它兜底所有未命中的地址，并对该页关闭索引。
- 想加 RSS：安装 `@astrojs/rss`，新建 `src/pages/rss.xml.js` 遍历 `getCollection('blog')` 即可，无需改动现有页面。
