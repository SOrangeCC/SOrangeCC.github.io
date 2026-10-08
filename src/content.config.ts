import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 博客文章：src/content/blog 下的 .md / .mdx 文件。
 * 文件路径去掉扩展名后即为文章 id，也是 URL 中的 slug。
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** 分类标签，用于 /blog/ 筛选与 /tags/<tag>/ 分类页。 */
    tags: z.array(z.string()).nonempty(),
    /** 草稿：为 true 时不出现在任何列表中，也不会被渲染成页面。 */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
