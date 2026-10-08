import { getCollection, type CollectionEntry } from 'astro:content';
import { formatYear } from './format';

export type Post = CollectionEntry<'blog'>;

/** 已发布文章，按发布时间从新到旧。 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * 标签在 URL 里使用的键。空格与斜杠会被折叠成连字符，
 * 中文标签保持原文，由 Astro 负责 URL 编码。
 */
export function tagKey(tag: string): string {
  return tag.trim().toLowerCase().replace(/[\s/]+/g, '-');
}

export type TagCount = { tag: string; count: number };

/** 按文章数量从多到少排列的标签，用于分类导航。 */
export async function getTags(): Promise<TagCount[]> {
  const counts = new Map<string, TagCount>();

  for (const post of await getPosts()) {
    for (const tag of post.data.tags) {
      const key = tagKey(tag);
      const existing = counts.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(key, { tag, count: 1 });
      }
    }
  }

  return [...counts.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'zh-CN'));
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const key = tagKey(tag);
  return (await getPosts()).filter((post) => post.data.tags.some((t) => tagKey(t) === key));
}

export type YearGroup = { year: string; posts: Post[] };

/** 按发布年份分组，保持传入顺序（即从新到旧）。 */
export function groupByYear(posts: Post[]): YearGroup[] {
  const groups: YearGroup[] = [];

  for (const post of posts) {
    const year = formatYear(post.data.pubDate);
    const current = groups.at(-1);
    if (current?.year === year) {
      current.posts.push(post);
    } else {
      groups.push({ year, posts: [post] });
    }
  }

  return groups;
}
