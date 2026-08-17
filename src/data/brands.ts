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
    id: 'yuntu',
    name: '云图',
    avatar: '云',
    tagline: '金融级专线 · ChatGPT/Netflix 全解锁 · 24H 保证稳定',
    desc: '云图机场采用金融级专线传输，无脑下单即可使用，24 小时保证稳定。全面解锁 ChatGPT、Netflix、TikTok 等主流流媒体，支持原生 IP 解锁冷门国家，全节点 1 倍率无高倍率扣费陷阱，工单 24 小时内快速回复。',
    tags: ['主推', '金融级专线', '¥25/月起', 'ChatGPT 解锁', 'Netflix 解锁', '原生 IP'],
    rank: 1,
    rankLabel: '主推',
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
    ],
  },
  {
    id: 'shunyun',
    name: '瞬云',
    avatar: '瞬',
    tagline: 'ANYCAST 高速节点 · 不限速 · 主流国家全覆盖',
    desc: '瞬云机场以 ANYCAST 高速节点为核心，不限速，主流国家全覆盖，流量每月重置，仅限个人使用，特殊商品不支持退换。价格亲民，适合有一定使用量的个人用户。',
    tags: ['次推', 'ANYCAST 高速', '¥20/月起', '不限速', '月重置流量'],
    rank: 2,
    rankLabel: '次推',
    priceFrom: '¥20/月',
    protocol: 'ANYCAST',
    nodeCount: '主流国家',
    streamUnlock: true,
    aiUnlock: false,
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


  {
    id: 'starway',
    name: '星途云',
    avatar: '星',
    tagline: '六年老牌 · 企业内网专线',
    desc: '运营六年的老牌机场，企业级内网专线稳定性强，套餐种类丰富，支持不限时流量包，适合重度商务用户。',
    tags: ['推荐', '老牌稳定', '¥8/月起', '不限时'],
    rank: 4,
    rankLabel: '推荐',
    priceFrom: '¥8/月',
    protocol: 'Hysteria2',
    nodeCount: '100+',
    streamUnlock: true,
    aiUnlock: true,
    trialDays: 1,
    score: 8.6,
    url: '#',
    slug: 'starway',
  },
  {
    id: 'nextvpn',
    name: '极速通',
    avatar: '极',
    tagline: '三网优化 · 60+ 节点覆盖',
    desc: 'VLESS 协议配合三网优化，60+ 节点智能负载均衡，适合对节点数量和地区覆盖有较高要求的进阶用户。',
    tags: ['推荐', '节点 60+', '¥14.9/月起', '三网优化'],
    rank: 5,
    rankLabel: '推荐',
    priceFrom: '¥14.9/月',
    protocol: 'VLESS',
    nodeCount: '60+',
    streamUnlock: true,
    aiUnlock: false,
    trialDays: 0,
    score: 8.3,
    url: '#',
    slug: 'nextvpn',
  },
  {
    id: 'cloudfly',
    name: '云飞机场',
    avatar: '飞',
    tagline: '性价比之选 · 入门友好',
    desc: '月付套餐价格实惠，协议防封表现稳健，对新手和轻度用户非常友好，适合首次购买机场的用户体验。',
    tags: ['性价比', '¥6/月起', '新手友好', '月付'],
    rank: 6,
    rankLabel: '可选',
    priceFrom: '¥6/月',
    protocol: 'Shadowsocks',
    nodeCount: '30+',
    streamUnlock: false,
    aiUnlock: false,
    trialDays: 0,
    score: 7.9,
    url: '#',
    slug: 'cloudfly',
  },
  {
    id: 'toplink',
    name: '顶联专线',
    avatar: '顶',
    tagline: '商务专线 · 企业级 SLA',
    desc: '面向商务用户的高端专线服务，提供企业级 SLA 保障，带宽独享，技术支持响应及时，支持团队账号管理。',
    tags: ['高端', 'IPLC 专线', '¥29/月起', '企业级'],
    rank: 7,
    rankLabel: '可选',
    priceFrom: '¥29/月',
    protocol: 'IPLC',
    nodeCount: '50+',
    streamUnlock: true,
    aiUnlock: true,
    trialDays: 7,
    score: 8.5,
    url: '#',
    slug: 'toplink',
  },
  {
    id: 'fastbird',
    name: '快鸟云',
    avatar: '鸟',
    tagline: '轻量高速 · 按需付费',
    desc: '按流量计费模式，无月费压力，适合偶尔使用的轻量用户。节点覆盖亚太主要地区，速度表现稳定。',
    tags: ['按量计费', '¥5 起', '轻量', '亚太节点'],
    rank: 8,
    rankLabel: '可选',
    priceFrom: '¥5 起',
    protocol: 'Trojan',
    nodeCount: '20+',
    streamUnlock: false,
    aiUnlock: false,
    trialDays: 0,
    score: 7.6,
    url: '#',
    slug: 'fastbird',
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug);
}

export function getTopBrands(n = 3): Brand[] {
  return brands.slice(0, n);
}
