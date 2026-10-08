/** 日期均按 UTC 解释，避免 frontmatter 里的日期被本地时区挪动一天。 */
const fullDate = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'UTC',
});

export function formatDate(date: Date): string {
  return fullDate.format(date);
}

export function formatYear(date: Date): string {
  return String(date.getUTCFullYear());
}
