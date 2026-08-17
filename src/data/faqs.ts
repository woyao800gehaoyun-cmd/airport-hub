// src/data/faqs.ts

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 'what-is-jichang',
    question: '机场是什么？和 VPN 有什么区别？',
    answer: '「机场」是国内对代理订阅服务的俗称，因早期常用飞机图标而得名。与传统 VPN 相比，机场通常使用 Shadowsocks、VLESS、Hysteria2 等新型协议，防检测能力更强，且节点按订阅方式分发，方便随时更新。VPN 多为全球统一客户端，机场则需配合 Clash、Shadowrocket 等第三方客户端使用。',
    category: '基础概念',
  },
  {
    id: 'how-to-choose',
    question: '我是新手，应该选哪家机场？',
    answer: '新手建议优先考虑：① 月付套餐（试错成本低）② 有免费试用期 ③ 支持一键导入订阅的自研客户端或提供详细教程 ④ 价格在 ¥10-20/月区间。具体推荐可查看首页「机场排行榜」，主推机场均经过编辑实测验证，开通流程简单，适合新手直接上手。',
    category: '选购建议',
  },
  {
    id: 'wanbgaofeng-slow',
    question: '晚高峰网速变慢是正常的吗？怎么解决？',
    answer: '晚高峰（20:00–23:00）是网络流量高峰期，普通中转机场速度下降较明显。解决方法：① 选择使用 IPLC/IEPL 专线的机场，专线不经过公网，晚高峰影响极小 ② 在客户端切换延迟更低的节点 ③ 降低下载/视频清晰度减少带宽压力。',
    category: '速度问题',
  },
  {
    id: 'what-is-iplc',
    question: 'IPLC 和 IEPL 专线是什么？值得付费吗？',
    answer: 'IPLC（国际私人租用专线）和 IEPL（国际以太网专用线路）均为走运营商独立物理信道的专线，不受公网拥堵影响，延迟低、抖动小，晚高峰稳定性远优于普通中转。价格通常高于普通机场 30%–100%，适合对速度稳定性有较高要求、经常视频会议或使用 AI 工具的用户。',
    category: '专线知识',
  },
  {
    id: 'chatgpt-how',
    question: '使用机场能访问 ChatGPT / Claude 吗？',
    answer: '可以，但需要注意：① ChatGPT 要求原生 IP（非数据中心 IP），部分普通机场 IP 会被识别为机房 IP 而无法注册/使用 ② Claude 对 IP 质量要求更严格，建议选标注「AI 解锁」或「原生 IP」的专线机场 ③ 使用时建议固定节点，频繁切换 IP 可能触发封号机制。',
    category: 'AI 工具',
  },
  {
    id: 'netflix-unlock',
    question: '机场能解锁 Netflix 吗？如何判断？',
    answer: 'Netflix 解锁分两种情况：① 自制剧（Netflix Originals）：绝大多数机场节点均可观看 ② 各区域授权剧（如美区独播）：需要真实的美国/日本等地区原生 IP，并非所有节点都支持。在选购前可查看品牌页的「流媒体解锁」标注，或在节点连接后访问 Netflix 进行测试。',
    category: '流媒体',
  },
  {
    id: 'paolu-risk',
    question: '机场跑路了怎么办？如何提前识别风险？',
    answer: '跑路预警信号：① 突然大幅降价或赠送大量流量 ② 客服长时间不回复 ③ 工单系统/论坛突然关闭 ④ 节点大面积故障超过 24 小时未修复。规避建议：① 尽量月付，不要一次性购买年付 ② 分散使用 2–3 家机场 ③ 关注机场测评站的跑路预警栏目 ④ 定期备份订阅链接和配置文件。',
    category: '风险防范',
  },
  {
    id: 'clash-vs-shadowrocket',
    question: 'Clash 和小火箭（Shadowrocket）怎么选？',
    answer: 'Clash（各平台版本）：免费，支持 Windows/macOS/Android，功能强大，规则配置灵活，适合有一定动手能力的用户。Shadowrocket（小火箭）：iOS 专属，售价约 ¥18，一次购买终身使用，界面简洁，订阅导入方便，适合 iPhone/iPad 用户。iOS 用户推荐小火箭，其他平台推荐 Clash 系客户端。',
    category: '客户端选择',
  },
];

export const faqCategories = ['全部', '基础概念', '选购建议', '速度问题', '专线知识', 'AI 工具', '流媒体', '风险防范', '客户端选择'];

export function getFeaturedFaqs(n = 6): FAQ[] {
  return faqs.slice(0, n);
}
