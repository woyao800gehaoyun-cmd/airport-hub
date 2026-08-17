// src/data/articles.ts
// 文章数据 — 占位内容，后续用 Markdown 内容集替换

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  publishDate: string;
  updateDate: string;
  readTime: number; // 分钟
}

export const articles: Article[] = [
  {
    slug: 'clash-jiaocheng-2026',
    title: 'Clash 使用教程 2026：订阅导入 + 规则配置完全指南',
    excerpt: '从零开始配置 Clash：订阅链接导入、策略组配置、分流规则自定义，Windows/macOS/Android 全平台覆盖，跟着做 5 分钟完成配置。',
    category: '使用教程',
    categorySlug: 'tutorial',
    tags: ['Clash', '配置教程', '科学上网'],
    publishDate: '2026-08-10',
    updateDate: '2026-08-10',
    readTime: 8,
  },
  {
    slug: 'shadowrocket-jiaocheng',
    title: 'Shadowrocket 小火箭使用教程：iOS 订阅配置完整指南',
    excerpt: 'iOS 小火箭完整教程：美区 Apple ID 下载、订阅链接添加、分流规则配置，以及常见连不上问题的排查思路。',
    category: '使用教程',
    categorySlug: 'tutorial',
    tags: ['Shadowrocket', '小火箭', 'iOS'],
    publishDate: '2026-08-05',
    updateDate: '2026-08-05',
    readTime: 6,
  },
  {
    slug: '2026-jichang-tuijian',
    title: '2026 机场推荐：稳定 / 便宜 / 专线怎么选（实测对比）',
    excerpt: '编辑实测 10+ 家机场：晚高峰速度、流媒体解锁、AI 工具支持、价格与售后，按需求场景给出明确推荐结论。',
    category: '对比选择',
    categorySlug: 'compare',
    tags: ['机场推荐', '2026', '实测'],
    publishDate: '2026-07-28',
    updateDate: '2026-08-12',
    readTime: 12,
  },
  {
    slug: 'iplc-iepl-qubie',
    title: 'IPLC 与 IEPL 专线的区别：选机场前必看',
    excerpt: '彻底搞清 IPLC（国际专线）与 IEPL（内网专线）的架构差异、延迟表现与价格区间，帮你在选购高端机场时做出正确判断。',
    category: '进阶知识',
    categorySlug: 'advanced',
    tags: ['IPLC', 'IEPL', '专线'],
    publishDate: '2026-07-20',
    updateDate: '2026-07-20',
    readTime: 7,
  },
  {
    slug: 'v2rayn-jiaocheng',
    title: 'v2rayN 使用教程：Windows 端订阅配置 + 路由规则',
    excerpt: 'v2rayN 从安装到配置：添加订阅、测试延迟、配置路由规则、开启系统代理，一篇文章搞定 Windows 端全流程。',
    category: '使用教程',
    categorySlug: 'tutorial',
    tags: ['v2rayN', 'Windows', '路由配置'],
    publishDate: '2026-07-15',
    updateDate: '2026-07-15',
    readTime: 9,
  },
  {
    slug: 'jichang-pao-lu-shi-me-yi-si',
    title: '机场跑路是什么意思？如何避开跑路风险？',
    excerpt: '「机场跑路」指代理服务商突然停止服务卷款消失。本文分析跑路信号特征、选购规避策略，以及遭遇跑路后的补救方法。',
    category: '新手入门',
    categorySlug: 'beginner',
    tags: ['跑路', '风险', '新手'],
    publishDate: '2026-07-08',
    updateDate: '2026-07-08',
    readTime: 5,
  },
];

export const categories = [
  { name: '全部', slug: 'all' },
  { name: '新手入门', slug: 'beginner' },
  { name: '使用教程', slug: 'tutorial' },
  { name: '对比选择', slug: 'compare' },
  { name: '进阶知识', slug: 'advanced' },
];

export function getRecentArticles(n = 6): Article[] {
  return articles.slice(0, n);
}
