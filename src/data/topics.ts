// src/data/topics.ts

export interface Topic {
  slug: string;
  title: string;
  emoji: string;
  desc: string;
  articleCount: number;
  tags: string[];
}

export const topics: Topic[] = [
  {
    slug: 'xinshou-rumen',
    title: '新手入门专题',
    emoji: '🚀',
    desc: '从「机场是什么」到买对第一个服务，按推荐顺序阅读，新手 30 分钟快速上手。',
    articleCount: 4,
    tags: ['新手', '入门', '必读'],
  },
  {
    slug: 'kehuduan-jiaocheng',
    title: '客户端教程专题',
    emoji: '🛠️',
    desc: 'Clash / Shadowrocket / v2rayN / sing-box 全平台配置教程，手机电脑一站覆盖。',
    articleCount: 5,
    tags: ['Clash', 'iOS', 'Windows'],
  },
  {
    slug: 'jinjie-xuangou',
    title: '进阶选购专题',
    emoji: '🎯',
    desc: '读懂 IPLC/IEPL 专线差异，为 ChatGPT/Claude 等 AI 工具选对原生 IP 机场。',
    articleCount: 3,
    tags: ['专线', 'AI 解锁', '进阶'],
  },
  {
    slug: 'ceping-heji',
    title: '实测评测合集',
    emoji: '🔬',
    desc: '编辑团队统一维度实测报告合集，晚高峰速度图、解锁结果、价格与结论一览。',
    articleCount: 6,
    tags: ['实测', '测速', '评测'],
  },
  {
    slug: 'liujinzhehui-jiexi',
    title: '流媒体解锁专题',
    emoji: '🎬',
    desc: 'Netflix / Disney+ / YouTube Premium / Hulu 解锁要点与推荐机场，含原生 IP 说明。',
    articleCount: 4,
    tags: ['Netflix', '流媒体', '解锁'],
  },
  {
    slug: 'ai-gongju-jiexi',
    title: 'AI 工具使用专题',
    emoji: '🤖',
    desc: 'ChatGPT、Claude、Gemini 的注册与访问技巧，原生 IP 要求与推荐线路全解析。',
    articleCount: 5,
    tags: ['ChatGPT', 'Claude', 'AI'],
  },
];

export function getFeaturedTopics(n = 3): Topic[] {
  return topics.slice(0, n);
}
