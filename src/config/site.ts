/**
 * 站点与个人资料配置。
 * 所有 TODO 标记的内容都需要你替换为真实信息，代码不会自动补全这些字段。
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  /** 浏览器标签页与 Open Graph 使用的站点名。TODO: 替换为你的名字 */
  title: 'TODO · 你的名字',
  /** 用于 meta description、页脚。TODO: 用一句话说明你是谁、做什么 */
  description: 'TODO：用一句话介绍你自己和你的工作。这行文字会出现在搜索结果和分享卡片里。',
  /** 部署地址，必须与 astro.config.mjs 的 site 一致。 */
  url: 'https://sorangecc.github.io',
  lang: 'zh-CN',
  /** 页脚署名。TODO: 替换为你的名字与真实起始年份 */
  author: 'TODO · 你的名字',
  /** 版权年份起点；当前年份晚于它时会自动显示为区间。 */
  copyrightStartYear: 2026,
} as const;

export const nav: NavItem[] = [
  { label: '项目', href: '/projects/' },
  { label: '博客', href: '/blog/' },
  { label: '关于', href: '/about/' },
];

/**
 * 社交与联系入口。
 * GitHub 链接由用户名 SOrangeCC 得出；其余条目为占位，请删除或替换。
 */
export const social: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/SOrangeCC' },
  { label: 'TODO 邮箱', href: 'mailto:todo@example.com' },
];
