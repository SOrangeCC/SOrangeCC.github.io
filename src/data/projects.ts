/**
 * 项目数据。以下条目全部是结构示例，内容均为占位：
 * 请用你真实做过的项目替换，并删除多余条目。不要保留编造的内容。
 */

export type ProjectStatus = 'active' | 'building' | 'archived';

export const statusLabels: Record<ProjectStatus, string> = {
  active: '维护中',
  building: '开发中',
  archived: '已归档',
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  /** 四位年份，显示在列表左列。 */
  year: string;
  status: ProjectStatus;
  /** 一到两句话：解决什么问题、你的角色、技术要点。 */
  summary: string;
  tags: string[];
  links: ProjectLink[];
  /** 为 true 时出现在首页「精选项目」。 */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'TODO：项目名称',
    year: '2026',
    status: 'building',
    summary:
      'TODO：一到两句话说明这个项目解决什么问题、你负责哪部分、用了什么技术。这里不放真实经历，等你替换。',
    tags: ['TODO 技术栈', 'TODO 领域'],
    links: [{ label: '仓库', href: 'https://github.com/SOrangeCC' }],
    featured: true,
  },
  {
    name: 'TODO：项目名称',
    year: '2025',
    status: 'active',
    summary: 'TODO：同上。未标 featured 的项目只出现在项目页，不会占据首页。',
    tags: ['TODO 技术栈'],
    links: [],
  },
  {
    name: 'TODO：项目名称',
    year: '2025',
    status: 'archived',
    summary: 'TODO：同上。列表按数组顺序展示，需要改顺序直接调整数组。',
    tags: ['TODO 技术栈', 'TODO 方向'],
    links: [{ label: '仓库', href: 'https://github.com/SOrangeCC' }],
    featured: true,
  },
];

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}
