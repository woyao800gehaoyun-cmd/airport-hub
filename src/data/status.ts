// src/data/status.ts — 机场跑路与风险监控数据库 (包含真实跑路通报与风险警示)

export interface WarningItem {
  id: string;
  name: string;
  date: string;
  status: '跑路' | '风险' | '解除';
  reason: string;
  riskLevel: '高危' | '中危' | '提示';
  solution: string;
}

export const warningStatusList: WarningItem[] = [
  {
    id: 'warn-1',
    name: '跑路云 (PaoluCloud)',
    date: '2026-07-12',
    status: '跑路',
    riskLevel: '高危',
    reason: '官网域名无响应，面板数据库清空，TG 官方交流群开启全员禁言，客服工单已停更。',
    solution: '已无法提现，请立即在客户端中停用该订阅，切换至应急备用节点。',
  },
  {
    id: 'warn-2',
    name: '极光云 (Jiguang)',
    date: '2026-06-28',
    status: '跑路',
    riskLevel: '高危',
    reason: '推出 3 折终身大额套餐吸筹后第二天关站，节点大面积 Timeout 且官网已被重定向至赌博页面。',
    solution: '典型资金盘套现案例。切勿购买任何宣称“终身无限流量”的套餐。',
  },
  {
    id: 'warn-3',
    name: '云梯 VPN (YuntiVPN)',
    date: '2026-05-18',
    status: '跑路',
    riskLevel: '高危',
    reason: '公网中转服务器集中被封锁，运营商资金链断裂无法交续费，创始人失联。',
    solution: '建议选择使用物理内网专线的云图机场，彻底远离公网封锁风险。',
  },
  {
    id: 'warn-4',
    name: '风筝加速器 (Fengzheng)',
    date: '2026-04-09',
    status: '跑路',
    riskLevel: '高危',
    reason: '运营团队解散，所有香港/新加坡出口 VPS 全部到期关闭，无任何退款通道。',
    solution: '保留支付凭证，如果使用的是信用卡付款，尝试联系银行办理拒付 (Chargeback)。',
  },
  {
    id: 'warn-5',
    name: '星速云 (Xingsu)',
    date: '2026-08-01',
    status: '风险',
    riskLevel: '中危',
    reason: '连续 5 天 80% 以上节点大面积超时红字，工单长时间无人回应，官方群大量用户维权。',
    solution: '处于高度危险期，暂勿购买或续费大额套餐，观察 14 天以上再做决定。',
  },
  {
    id: 'faq-6',
    name: '飞鸟网络 (Feiniao)',
    date: '2026-07-25',
    status: '风险',
    riskLevel: '中危',
    reason: '突然更改服务协议，强制将原有月付套餐改归为季度清零，且高倍率扣费（某些节点 10x 扣费）。',
    solution: '存在变相收割嫌疑，建议选择全节点 1 倍率扣费透明的服务商。',
  },
  {
    id: 'warn-7',
    name: '雷霆专线 (Leiting)',
    date: '2026-06-05',
    status: '解除',
    riskLevel: '提示',
    reason: '曾因海缆断裂导致广东入口大面积故障被列入警示，目前服务商已修复专线并补偿用户 7 天时长。',
    solution: '服务已恢复正常，降级为正常观察名单。',
  },
  {
    id: 'warn-8',
    name: '速连 VPN (Sulian)',
    date: '2026-03-15',
    status: '跑路',
    riskLevel: '高危',
    reason: '宣称 9.9 元无限流量包年，开站 2 周后带着数万名新手预付款卷款跑路。',
    solution: '坚决远离违背服务器成本逻辑的“低价包年”诱饵。',
  },
  {
    id: 'warn-9',
    name: '幻影机场 (Huanying)',
    date: '2026-02-11',
    status: '跑路',
    riskLevel: '高危',
    reason: '官网后台被注销，域名转卖，支付通道被取消，客服邮箱退信。',
    solution: '已跑路，建议直接查阅 2026 优质机场排行榜更换服务。',
  },
  {
    id: 'warn-10',
    name: '天行专线 (Tianxing)',
    date: '2026-08-10',
    status: '风险',
    riskLevel: '中危',
    reason: '近期入口 IP 大面积遭运营商阻断，商家未补备用节点，节点可用率低于 30%。',
    solution: '建议暂时使用每日免费节点过渡，观望商家修复能力。',
  },
];
