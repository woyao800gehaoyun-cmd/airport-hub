// src/data/faqs.ts — 机场长尾问题库数据库 (去 AI 腔调 + 干货图文解法)

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  featured?: boolean;
  solutionSteps?: string[];
  recommendLink?: {
    text: string;
    url: string;
  };
}

export const faqCategories = [
  '全部',
  '基础概念',
  '选购建议',
  '速度排障',
  '专线原理',
  'AI 工具',
  '流媒体解锁',
  '风险防范',
  '客户端选择',
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: '机场是什么？和传统 VPN 有什么区别？',
    category: '基础概念',
    featured: true,
    answer: '「机场」是中国大陆对第三方代理订阅服务的俗称，因早期软件常用纸飞机图标而得名。与传统 VPN（全局强制加密且容易被识别封锁）不同，机场采用 Shadowsocks、VLESS (Reality)、Hysteria2、Trojan 等新加密协议，配合第三方客户端（如 Clash、Shadowrocket）实现精细的网络规则分流。',
    solutionSteps: [
      '传统 VPN：固定全局加密，协议特征明显，晚高峰易大面积封锁。',
      '代理机场：按规则分流（国内直连、国外代理），速度快且协议防封强。',
    ],
    recommendLink: {
      text: '查看 2026 机场排行榜 →',
      url: '/brands/',
    },
  },
  {
    id: 'faq-2',
    question: '我是新手，第一次买机场应该选哪家？',
    category: '选购建议',
    featured: true,
    answer: '新手买机场必须遵守两条铁律：1. 坚决只买「月付」；2. 认准全节点「1 倍率」扣费。',
    solutionSteps: [
      '重度办公 / 追求绝对稳定与 ChatGPT 解锁：首选【云图机场】（全节点金融级 IEPL 专线，岚图套餐 ¥25/月）。',
      '追求高性价比 / 4K 追剧与大流量下载：首选【瞬云机场】（ANYCAST 高速节点，行者套餐 ¥20/月）。',
    ],
    recommendLink: {
      text: '查看云图与瞬云横向对比表 →',
      url: '/compare/',
    },
  },
  {
    id: 'faq-3',
    question: '连上节点后所有网页都打不开，显示超时 (Timeout) 怎么排查？',
    category: '速度排障',
    featured: true,
    answer: '90% 的连不上超时报错都是因为「本地系统时间与北京时间不同步」！因为 TLS/VMess/VLESS 加密握手要求时间偏差不能超过 30 秒。',
    solutionSteps: [
      '第 1 步：打开 Windows/Mac 的「时间和语言」设置，点击「立即同步」按钮。',
      '第 2 步：检查右下角模式是否误切成了 Global 全局模式或 Direct 直连模式。',
      '第 3 步：若排查后依然超时，去跑路预警雷达页面确认服务商是否异常。',
    ],
    recommendLink: {
      text: '查看跑路预警实时雷达 →',
      url: '/airport-status/',
    },
  },
  {
    id: 'faq-4',
    question: 'IPLC 专线和 IEPL 专线有什么区别？真的不过墙吗？',
    category: '专线原理',
    featured: true,
    answer: 'IPLC 和 IEPL 都是电信运营商提供的跨国二层物理私用电路。流量在过境时直接走运营商内网私有管道，物理上完全不经过 GFW 公网审查节点，因此能做到晚高峰 0 丢包和不过墙。',
    solutionSteps: [
      'IPLC (传统私用电路)：SDH 架构，延迟极平稳。',
      'IEPL (二层以太网专线)：新一代 OTN 架构，二层开销更小，物理延迟比 IPLC 进一步降低 2-5ms。',
    ],
    recommendLink: {
      text: '阅读 IPLC 与 IEPL 专线深度拆解文章 →',
      url: '/blog/iplc-iepl-qubie/',
    },
  },
  {
    id: 'faq-5',
    question: 'ChatGPT 访问提示 Location Not Supported 或 Access Denied 怎么办？',
    category: 'AI 工具',
    featured: true,
    answer: 'OpenAI 封禁了全球大量数据中心机房 IP。遇到该提示，说明你当前选中的代理节点 IP 被 OpenAI 划入了黑名单。',
    solutionSteps: [
      '解决办法 1：在 Clash 或小火箭中，将 ChatGPT 策略组单独指定为【云图机场】的美国或新加坡原生 IP 专线节点。',
      '解决办法 2：开启浏览器的无痕模式 (Privacy Mode) 并清理 OpenAI Cookie 后重试。',
    ],
    recommendLink: {
      text: '查看 ChatGPT 原生 IP 推荐机场 →',
      url: '/brands/yuntu/',
    },
  },
  {
    id: 'faq-6',
    question: '为什么看完 1G 视频，机场后台却扣了我 10G 流量？',
    category: '选购建议',
    featured: false,
    answer: '这是因为你踩中了部分不良机场的「高倍率陷阱」！某些低价机场宣传 20 元 1000G 流量，但把香港/新加坡节点设为了 5x 或 10x 扣费倍率。选购时请认准云图机场与瞬云机场全节点 1 倍率。',
    solutionSteps: [
      '避坑方法：在客户端节点列表名称后，查看是否有「x1.0」、「x5.0」等倍率标识。',
    ],
  },
  {
    id: 'faq-7',
    question: 'Clash 的 TUN (虚拟网卡) 模式是什么？为什么要开启？',
    category: '客户端选择',
    featured: true,
    answer: '默认的 HTTP 系统代理只能管浏览器流量。开启 TUN 模式，Clash 会在操作系统中建立虚拟网卡，将 CMD 命令行、Git、Steam、Epic、Docker 及全盘游戏流量完全接管分流。',
    solutionSteps: [
      '第 1 步：打开 Clash Verge，在设置中点击安装 Service Mode (服务模式)。',
      '第 2 步：开启 TUN Mode 开关即可接管全盘网络。',
    ],
    recommendLink: {
      text: '查看 Clash Verge 2026 完整教程 →',
      url: '/blog/clash-jiaocheng-2026/',
    },
  },
  {
    id: 'faq-8',
    question: 'iOS 苹果手机怎么下载正版 Shadowrocket 小火箭？',
    category: '客户端选择',
    featured: false,
    answer: '国区 App Store 搜不到小火箭。你需要登录美区 Apple ID，在 App Store 搜索购买 ($2.99 美元)。',
    solutionSteps: [
      '⚠️ 极其重要的安全红线：千万不要把别人的 Apple ID 登录到手机「设置 -> iCloud」里！',
      '正确做法：仅在 App Store 应用里退出并登录美区 ID 进行下载。',
    ],
    recommendLink: {
      text: '查看 iOS 小火箭教程与美区 ID 避坑指南 →',
      url: '/blog/shadowrocket-jiaocheng/',
    },
  },
  {
    id: 'faq-9',
    question: '机场跑路前有什么异常征兆？怎么保护资金安全？',
    category: '风险防范',
    featured: true,
    answer: '机场跑路前 1-2 周通常有 5 大征兆：突然推出夸张的大额折扣促销（如年付 3 折/终身套餐）、官网频繁被打不开、TG 群全员禁言、节点大面积超时超过 48 小时没有修复。',
    solutionSteps: [
      '资金保命法则：坚持月付，切勿一次性购买 2-3 年超长套餐。',
    ],
    recommendLink: {
      text: '查看机场跑路原理与防范避坑文章 →',
      url: '/blog/jichang-pao-lu-shi-me-yi-si/',
    },
  },
  {
    id: 'faq-10',
    question: 'Netflix 提示「您似乎在使用解锁工具或代理」怎么解决？',
    category: '流媒体解锁',
    featured: false,
    answer: 'Netflix 识别出了你当前的代理节点为普通机房 IP，因此限制你只能观看 Netflix 自制剧。',
    solutionSteps: [
      '解决办法：在节点列表中选择带「Unlock」或「原生 IP」标识的节点（如云图机场的香港/新加坡专线节点）。',
    ],
  },
];

export function getFeaturedFaqs(n = 6): FAQ[] {
  return faqs.filter(f => f.featured).slice(0, n);
}
