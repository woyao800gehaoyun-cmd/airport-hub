// src/data/brands.ts — 真实机场数据

export interface Plan {
  name: string;        // 套餐名
  price: number;       // 月付价格（元）
  traffic: string;     // 流量
  devices: number;     // 同时在线设备数
  features: string[];  // 特色功能列表
  highlight?: string;  // 折扣提示
}

export interface Brand {
  id: string;
  name: string;
  avatar: string;
  tagline: string;
  desc: string;
  tags: string[];
  rank: number;
  rankLabel: string;
  priceFrom: string;
  protocol: string;
  nodeCount: string;
  streamUnlock: boolean;
  aiUnlock: boolean;
  trialDays: number;
  score: number;
  url: string;
  slug: string;
  plans?: Plan[];       // 套餐列表（可选）
  features?: string[];  // 核心特色（可选）
}

export const brands: Brand[] = [
  // ─── 真实机场（用户配置）───────────────────────────────────────
  {
    id: 'guangnianti',
    name: '光年梯',
    avatar: '光',
    tagline: '全 IPLC 专线 · 独享私人专线 · 高峰满速 · ChatGPT/Netflix 全解锁',
    desc: '光年梯机场专注提供极致稳定的全 IPLC 物理内网专线传输服务，全节点 1 倍率扣费，晚高峰时段依然保持满速无卡顿。提供独享私人专线与独立专属带宽，100% 完美解锁 ChatGPT、Claude、Netflix 4K、TikTok 与 Disney+。',
    tags: ['主推', '榜首', '全 IPLC 专线', '¥18/月起', '独享专线', '高峰满速', 'ChatGPT 解锁'],
    rank: 1,
    rankLabel: '榜首',
    priceFrom: '¥18/月',
    protocol: 'IPLC 专线',
    nodeCount: '全球多节点',
    streamUnlock: true,
    aiUnlock: true,
    trialDays: 0,
    score: 9.8,
    url: 'https://guangnianti.com',
    slug: 'guangnianti',
    features: [
      '⭐ 全节点全 IPLC 专线传输，高峰满速无卡顿',
      '⭐ 提供独享私人专线套餐，拥有独立专属带宽',
      '✅ 100% 解锁 ChatGPT / Claude / Netflix / TikTok / Disney+',
      '✅ 节点倍率：全节点 1 倍率（无高倍扣费陷阱）',
      '✅ 周期订阅：支持以官网为准的周期订阅（入门版至独享私人专线）',
      '✅ 售后保障：技术团队在线响应与快速处理',
    ],
    plans: [
      {
        name: '入门版',
        price: 18,
        traffic: '110GB/月',
        devices: 5,
        features: ['110GB/月 流量', '轻度/入门使用', '全 IPLC 专线', '全节点 1 倍率 · 高峰满速', 'ChatGPT / Netflix / TikTok 全解锁', '以官网为准周期订阅'],
        highlight: '轻度入门首选，全 IPLC 专线仅需 ¥18/月',
      },
      {
        name: '晋级版',
        price: 34,
        traffic: '220GB/月',
        devices: 5,
        features: ['220GB/月 流量', '进阶日常使用', '全节点 x1 · 高峰满速', 'ChatGPT / Netflix / TikTok 全解锁', '原生 IP 支持', '以官网为准周期订阅'],
        highlight: '进阶人群推荐，220G 流量满足日常高频使用',
      },
      {
        name: '专业版',
        price: 68,
        traffic: '450GB/月',
        devices: 5,
        features: ['450GB/月 流量', '主力使用', '全节点 x1 · 高峰满速', 'ChatGPT / Netflix / TikTok 全解锁', '原生 IP 支持', '以官网为准周期订阅'],
        highlight: '主力使用推荐，450G 大流量追剧办公无忧',
      },
      {
        name: '至尊版',
        price: 130,
        traffic: '900GB/月',
        devices: 5,
        features: ['900GB/月 流量', '重度用户专享', '全节点 x1 · 高峰满速', 'ChatGPT / Netflix / TikTok 全解锁', '原生 IP 支持', '以官网为准周期订阅'],
        highlight: '重度极客首选，900G 海量流量畅快使用',
      },
      {
        name: '独享私人专线',
        price: 680,
        traffic: '500GB/月',
        devices: 5,
        features: ['500GB/月 流量', '企业/极致使用', '独享私人专线', '独立专属带宽', '全节点 x1 · 高峰满速', '以官网为准周期订阅'],
        highlight: '企业/极致定制，独立专属带宽与最高优先响应',
      },
    ],
  },
  {
    id: 'yuntu',
    name: '云图',
    avatar: '云',
    tagline: '金融级专线 · ChatGPT/Netflix 全解锁 · 24H 保证稳定',
    desc: '云图机场采用金融级专线传输，无脑下单即可使用，24 小时保证稳定。全面解锁 ChatGPT、Netflix、TikTok 等主流流媒体，支持原生 IP 解锁冷门国家，全节点 1 倍率无高倍率扣费陷阱，工单 24 小时内快速回复。',
    tags: ['推荐', '金融级专线', '¥25/月起', 'ChatGPT 解锁', 'Netflix 解锁', '原生 IP'],
    rank: 2,
    rankLabel: '推荐',
    priceFrom: '¥25/月',
    protocol: 'VLESS + Reality',
    nodeCount: '全球节点',
    streamUnlock: true,
    aiUnlock: true,
    trialDays: 0,
    score: 9.5,
    url: 'https://vip.ytjcok.org/#/register?code=COsTypDq',
    slug: 'yuntu',
    features: [
      '⭐ 无脑下单即可，24H 保证稳定',
      '⭐ 金融级专线传输，保证 24H 高速流畅',
      '✅ 流媒体解锁：ChatGPT / Netflix / TikTok 等主流媒体',
      '✅ 原生 IP 支持：解锁冷门国家及原生 IP 节点',
      '✅ 节点倍率：全节点 1 倍率（无高倍率扣费陷阱）',
      '✅ 售后保障：工单 24 小时内快速回复',
      '✅ 退款政策：虚拟商品，一经售出无退款服务',
    ],
    plans: [
      {
        name: '岚图',
        price: 25,
        traffic: '150G',
        devices: 5,
        features: ['每月 150G 流量', '同时在线 5 台设备', 'ChatGPT / Netflix / TikTok 解锁', '原生 IP 支持', '全节点 1 倍率', '工单 24H 快速回复'],
        highlight: '三年相对折扣约 25%，为您节省 ¥225.00',
      },
      {
        name: '梦图',
        price: 49,
        traffic: '300G',
        devices: 5,
        features: ['每月 300G 流量', '同时在线 5 台设备', 'ChatGPT / Netflix / TikTok 解锁', '原生 IP 支持', '全节点 1 倍率', '工单 24H 快速回复'],
        highlight: '三年相对折扣约 25%，为您节省 ¥441.00',
      },
      {
        name: '星图',
        price: 99,
        traffic: '600G',
        devices: 5,
        features: ['每月 600G 流量', '同时在线 5 台设备', 'ChatGPT / Netflix / TikTok 解锁', '原生 IP 支持', '全节点 1 倍率', '工单 24H 快速回复'],
        highlight: '三年相对折扣约 25%，为您节省 ¥891.00',
      },
      {
        name: '【限时】50G不限时',
        price: 78,
        traffic: '50G (不限时)',
        devices: 5,
        features: ['一次性 50G 流量（不过期）', '同时在线 5 台设备', 'ChatGPT / Netflix / TikTok 全解锁', '原生 IP 支持', '全节点 1 倍率', '工单 24H 快速回复'],
        highlight: '【限时特惠】一次性买断，流量永久有效',
      },
      {
        name: '【限时】100G不限时',
        price: 119,
        traffic: '100G (不限时)',
        devices: 5,
        features: ['一次性 100G 流量（不过期）', '同时在线 5 台设备', 'ChatGPT / Netflix / TikTok 全解锁', '原生 IP 支持', '全节点 1 倍率', '工单 24H 快速回复'],
        highlight: '【限时特惠】一次性买断，流量永久有效',
      },
    ],
  },
  {
    id: 'shunyun',
    name: '瞬云',
    avatar: '瞬',
    tagline: 'ANYCAST 高速节点 · 不限速 · 主流国家全覆盖',
    desc: '瞬云机场以 ANYCAST 高速节点为核心，不限速，主流国家全覆盖，流量每月重置，仅限个人使用，特殊商品不支持退换。价格亲民，适合有一定使用量的个人用户。',
    tags: ['推荐', 'ANYCAST 高速', '¥20/月起', '不限速', '月重置流量'],
    rank: 3,
    rankLabel: '推荐',
    priceFrom: '¥20/月',
    protocol: 'ANYCAST',
    nodeCount: '主流国家',
    streamUnlock: true,
    aiUnlock: true,
    trialDays: 0,
    score: 8.8,
    url: 'https://aaa.jichang.best/#/register?code=SWAVvMOV',
    slug: 'shunyun',
    features: [
      '✅ 流量：每月重置，不限速',
      '✅ 设备：仅限个人使用',
      '✅ 带宽：不限速',
      '✅ 线路：主流国家 ANYCAST 高速节点',
      '⚠️ 特殊商品不支持退换',
    ],
    plans: [
      {
        name: '行者',
        price: 20,
        traffic: '150G',
        devices: 1,
        features: ['每月 150G 流量，每月重置', '仅限个人使用', '带宽：不限速', '线路：主流国家 ANYCAST 高速节点', '特殊商品不支持退换'],
        highlight: '三年相对折扣约 25%，为您节省 ¥180.00',
      },
      {
        name: '纵横',
        price: 36,
        traffic: '300G',
        devices: 1,
        features: ['每月 300G 流量，每月重置', '仅限个人使用', '带宽：不限速', '线路：主流国家 ANYCAST 高速节点', '特殊商品不支持退换'],
        highlight: '三年相对折扣约 25%，为您节省 ¥324.00',
      },
    ],
  },


];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug);
}

export function getTopBrands(n = 3): Brand[] {
  return brands.slice(0, n);
}
