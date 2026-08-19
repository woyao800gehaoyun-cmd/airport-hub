// src/data/faqs.ts — 40+ 题全网最硬核机场长尾排障与选购数据库 (每个板块至少 5 题，零 AI 腔调)

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
  // ═══ 1. 基础概念 (5 题) ═══
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
    question: '什么是订阅链接？为什么绝对不能泄露给别人？',
    category: '基础概念',
    featured: false,
    answer: '订阅链接是你购买机场服务后分配的专属 URL 地址，里面包含了你账号的所有节点节点密钥与身份凭证。第三方客户端通过拉取该链接自动下载节点。',
    solutionSteps: [
      '泄露风险：如果把订阅链接发给别人，对方就能直接使用你的流量，甚至导致你的账号因多 IP 同时在线被机场系统自动封禁。',
      '安全补救：若不慎泄露，请立即登录机场后台点击「重置订阅链接」。',
    ],
  },
  {
    id: 'faq-3',
    question: '节点名字里的 HK、JP、US、SG、TW 代表什么意思？',
    category: '基础概念',
    featured: false,
    answer: '这些是节点所在国家的 ISO 缩写字母：HK（香港）、JP（日本）、US（美国）、SG（新加坡）、TW（台湾）、UK（英国）、KR（韩国）。',
    solutionSteps: [
      '香港 (HK) / 台湾 (TW)：物理距离最近，Ping 延迟最低 (10-30ms)，适合日常浏览与看 B 站港澳台。',
      '新加坡 (SG) / 日本 (JP)：延迟较低 (40-70ms)，适合打外服游戏与访问国际网站。',
      '美国 (US)：延迟较高 (150-200ms)，但 IP 质量高，是访问 OpenAI (ChatGPT) 和 Claude 的首选。',
    ],
  },
  {
    id: 'faq-4',
    question: '什么是协议？Shadowsocks、VLESS、Hysteria2、Trojan 哪种更好？',
    category: '基础概念',
    featured: false,
    answer: '代理协议是客户端与机场服务器之间沟通加密的语言。不同协议在防封锁性与传输速率上有所侧重。',
    solutionSteps: [
      'Shadowsocks / Trojan：经典稳定，兼容性最好，适合全平台客户端。',
      'VLESS + Reality：新一代零证书伪装协议，抗封锁能力极强。',
      'Hysteria2 / TUIC v5：基于 UDP (QUIC) 开发，在弱网高丢包环境下爆速提速极猛。',
    ],
  },
  {
    id: 'faq-5',
    question: '为什么说机场是按规则分流，而不是全盘翻墙？',
    category: '基础概念',
    featured: false,
    answer: '现代代理客户端（如 Clash、Stash、小火箭）内部都内置了域名和 IP 分流规则库（GeoIP 与 GeoSite）。访问国内网站时不经过机场服务器，直接走本地宽带，保证国内网页秒开且不扣机场流量。',
    solutionSteps: [
      '国内网站（百度、淘宝、微信）：匹配 Direct 规则，本地宽带直连。',
      '国外受限网站（Google、YouTube、Twitter）：匹配 Proxy 规则，走选定的代理节点。',
    ],
  },

  // ═══ 2. 选购建议 (5 题) ═══
  {
    id: 'faq-6',
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
    id: 'faq-7',
    question: '为什么说首次买机场千万不要买「大额年付」？',
    category: '选购建议',
    featured: true,
    answer: '代理机场受政策、网络拥堵与运营成本影响较大。很多新手为了便宜几十块钱直接买了 2 年甚至 3 年套餐，结果用了一个月商家就跑路关站，或者晚高峰卡成狗又不能退款。',
    solutionSteps: [
      '避坑法则：先买一个月（月付）测试晚高峰（20:00-23:00）速度，确认满意后再考虑长期。',
    ],
  },
  {
    id: 'faq-8',
    question: '什么是节点的扣费倍率？为什么会出现看完 1G 扣了 10G？',
    category: '选购建议',
    featured: true,
    answer: '这是因为你踩中了部分低价机场的「高倍率暗扣陷阱」！某些商家宣传“20 元 1000G”，但把热门节点设为 5x 或 10x 扣费倍率。你看 1G 视频实际上被扣了 10G 流量。',
    solutionSteps: [
      '检测方法：看节点名称后缀是否有「x1.0」、「x5.0」或「10x」字样。选购时认准云图机场与瞬云机场全节点 1.0 倍率。',
    ],
  },
  {
    id: 'faq-9',
    question: '便宜机场和高端专线机场差距到底在哪里？',
    category: '选购建议',
    featured: false,
    answer: '核心差距在于「物理线路架构」与「晚高峰保障」。便宜机场多使用公网直连或公网中转，晚上 8 点后丢包率高达 30%；而高端专线机场走内网私有管道，物理不过墙，全天 0 丢包。',
    solutionSteps: [
      '便宜直连机场：月费低于 10 元，晚高峰严重拥堵卡顿，IP 容易被封锁。',
      '高端专线机场：月费 20-30 元，全天速度跑满，完美解锁 AI 和 4K 流媒体。',
    ],
  },
  {
    id: 'faq-10',
    question: '不限时流量包和月付重置套餐哪个更划算？',
    category: '选购建议',
    featured: false,
    answer: '取决于你的使用频率：如果你每天都要看视频或办公，月付重置套餐流量单价更低；如果你只是偶尔查资料或出国旅游用，不限时流量包更划算。',
    solutionSteps: [
      '高频用户：选择【瞬云机场】月付套餐，每月重置 150G-300G。',
      '低频备用：选择包含不限时流量包的服务商，用多少扣多少。',
    ],
  },

  // ═══ 3. 速度排障 (5 题) ═══
  {
    id: 'faq-11',
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
    id: 'faq-12',
    question: '为什么明明节点 Ping 延迟只有 20ms，但打开网页却很慢？',
    category: '速度排障',
    featured: false,
    answer: '因为你在客户端里测的 Ping 延迟通常只是「ICMP 响应延迟」或「入口中转节点延迟」，并不代表从出口访问目标网站的真正 TCP/TLS 握手速度。',
    solutionSteps: [
      '排查 1：在 Clash 中看真正的 UrlTest (HTTP 响应延迟) 节点测速。',
      '排查 2：如果丢包率非常高（比如 40%），即使延迟再低，网页依然会频繁超时卡顿。',
    ],
  },
  {
    id: 'faq-13',
    question: '晚上 20 点到 23 点晚高峰速度暴跌、频频丢包是什么原因？',
    category: '速度排障',
    featured: false,
    answer: '这是因为全国普通互联网公网国际出口带宽在晚高峰期被挤爆，GFW 防火墙为了控流会主动丢包限速。使用普通公网线路的机场必然受影响。',
    solutionSteps: [
      '彻底解法：更换为【云图机场】等走运营商 IEPL/IPLC 内网私有专线的服务商，物理不上公网，晚高峰绝对不降速。',
    ],
    recommendLink: {
      text: '阅读专线过墙原理深度文章 →',
      url: '/blog/iplc-iepl-qubie/',
    },
  },
  {
    id: 'faq-14',
    question: '连上代理后，国内网站（微信、B站、淘宝）打不开或变慢怎么办？',
    category: '速度排障',
    featured: false,
    answer: '说明你误把代理客户端设置成了「Global 全局模式」或者策略组里的「Bilibili / 国内规则」被误指定到了国外节点。',
    solutionSteps: [
      '正确设置：在客户端主界面将模式切换为 **Rule (规则模式)**。这样国内流量强制直连，速度最快。',
    ],
  },
  {
    id: 'faq-15',
    question: '提示 DNS 污染或 DNS Leak (DNS 泄露) 如何彻底解决？',
    category: '速度排障',
    featured: false,
    answer: 'DNS 污染是指运营商把域名解析到了错误的假 IP 上。开启第三方客户端的软件内置 DNS 覆写即可解决。',
    solutionSteps: [
      '解法：在 Clash Verge 设置中，开启「Enable System DNS」或者启用 TUN 模式，客户端会接管 DNS 并自动使用加密 DNS (DoH/DoT) 解析。',
    ],
  },

  // ═══ 4. 专线原理 (5 题) ═══
  {
    id: 'faq-16',
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
    id: 'faq-17',
    question: '为什么专线节点在敏感时期依然能够稳定连通？',
    category: '专线原理',
    featured: false,
    answer: '因为敏感时期封锁拦截的都是公网 IP 和公网协议特征。专线使用的是跨国企业内网私有通道，内部数据不在公网出口巡查范围内，所以免疫敏感时期的封锁。',
  },
  {
    id: 'faq-18',
    question: '什么是公网中转 (Relay)？和直连 (Direct) 相比有什么优势？',
    category: '专线原理',
    featured: false,
    answer: '中转线路是指机场在国内租用入口服务器（如广州移动、上海联通），用户先连接国内入口，再由入口通过高速网络将数据发往境外出口。',
    solutionSteps: [
      '直连：用户设备 ──> 境外 VPS (延迟极高，丢包严重)。',
      '中转：用户设备 ──> 国内优化入口 ──> 境外出口 (大大降低延迟，优化路由)。',
    ],
  },
  {
    id: 'faq-19',
    question: '什么是 BGP 跨境入口？多入口负载均衡有什么作用？',
    category: '专线原理',
    featured: false,
    answer: 'BGP (边界网关协议) 可以根据用户的宽带运营商（电信、联通、移动）自动匹配最佳接入网关。多入口负载均衡能在某一个入口故障时自动无缝秒级切备用入口，保证不掉线。',
  },
  {
    id: 'faq-20',
    question: '为什么说专线机场更适合打外服游戏与进行跨境高频交易？',
    category: '专线原理',
    featured: false,
    answer: '打外服游戏最怕的是「延迟抖动 (Jitter)」和「丢包」。普通线路即使平时 50ms，偶尔跳到 300ms 就会导致游戏掉线；专线的延迟是一条极其平整的直线，标准差小于 0.5ms。',
    solutionSteps: [
      '游戏推荐：选择【云图机场】的 IEPL 低延迟专线节点，并开启 UDP 转发。',
    ],
  },

  // ═══ 5. AI 工具 (5 题) ═══
  {
    id: 'faq-21',
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
    id: 'faq-22',
    question: 'Claude AI 刚注册或刚提问就被封号 (Your account has been disabled) 是什么原因？',
    category: 'AI 工具',
    featured: false,
    answer: 'Anthropic (Claude) 对代理 IP 质量的要求比 OpenAI 还要严苛十倍！如果使用滥用率高的公网万人骑机房 IP 访问，账号会被风控系统瞬间封禁。',
    solutionSteps: [
      '解法：必须使用干净的美国/英国独享原生 IP 节点，且切忌在同一会话中频繁频繁切换不同国家的节点。',
    ],
  },
  {
    id: 'faq-23',
    question: 'Gemini Advanced 和 Midjourney 对代理节点 IP 有什么特殊要求？',
    category: 'AI 工具',
    featured: false,
    answer: 'Google Gemini 规定部分功能仅在特定国家地区（如美国、英国、日本）开放；Midjourney 则基于 Discord，需要稳定的 WebSocket 连接与 UDP 通道支持。',
  },
  {
    id: 'faq-24',
    question: '为什么访问 ChatGPT 频繁弹出 Cloudflare 人机验证 (CF 验证码打勾循环)？',
    category: 'AI 工具',
    featured: false,
    answer: '这是因为你当前使用的代理节点 IP 上有成百上千个其他人在同时请求，或者有爬虫脚本在狂刷该 IP，导致 Cloudflare 将该 IP 标为高风险级别。',
    solutionSteps: [
      '解法：切换到云图或瞬云带有解锁标识的人少原生 IP 节点，或者尝试切换节点地区（如从香港切到美国）。',
    ],
  },
  {
    id: 'faq-25',
    question: '怎么在 Clash 或小火箭里给 OpenAI 分配独立的专线策略组？',
    category: 'AI 工具',
    featured: false,
    answer: '在 Clash 的 Proxies 界面中，找到名为「ChatGPT」或「OpenAI」的策略组，手动将该组的节点指定为你购买的专线原生 IP 节点即可，其他网页依然走自动选择。',
  },

  // ═══ 6. 流媒体解锁 (5 题) ═══
  {
    id: 'faq-26',
    question: 'Netflix 提示「您似乎在使用解锁工具或代理」如何解决？',
    category: '流媒体解锁',
    featured: false,
    answer: 'Netflix 识别出了你当前的代理节点为普通机房 IP，因此限制你只能观看 Netflix 自制剧。',
    solutionSteps: [
      '解决办法：在节点列表中选择带「Unlock」或「原生 IP」标识的节点（如云图机场的香港/新加坡专线节点）。',
    ],
  },
  {
    id: 'faq-27',
    question: 'Disney+ 登录提示 Error Code 83 或 73 是什么意思？',
    category: '流媒体解锁',
    featured: false,
    answer: 'Error Code 73 / 83 是 Disney+ 地区审查失败报错。说明你当前使用的节点不支持 Disney+ 区域解锁，或者 IP 被迪士尼封锁。',
    solutionSteps: [
      '解法：切换到新加坡、日本或美国原生节点，并清理 Disney+ App 后台重新打开。',
    ],
  },
  {
    id: 'faq-28',
    question: 'YouTube 4K 播放拉进度条总是转圈卡顿，如何跑满千兆带宽？',
    category: '流媒体解锁',
    featured: false,
    answer: 'YouTube 4K 播放需要至少 50,000 kbps (50Mbps) 的持续稳定带宽。卡顿往往是因为节点峰值限速或入口拥堵。',
    solutionSteps: [
      '推荐：切换到【瞬云机场】的 ANYCAST 高速节点，物理不限速，YouTube 实测可跑满 200,000+ kbps。',
    ],
    recommendLink: {
      text: '查看瞬云机场大带宽测评 →',
      url: '/brands/shunyun/',
    },
  },
  {
    id: 'faq-29',
    question: 'TikTok 怎么实现免拔卡换区和观看外服短视频？',
    category: '流媒体解锁',
    featured: false,
    answer: 'TikTok 在 App 层面检测了中国 SIM 卡。直接使用手机会提示无网络连接。',
    solutionSteps: [
      '解决办法 1：配合小火箭 (Shadowrocket) 的 MITM 证书解密与 TikTok 换区重写脚本。',
      '解决办法 2：使用网页版 TikTok，或者使用备用拔卡手机进行连接。',
    ],
  },
  {
    id: 'faq-30',
    question: '什么是原生 IP (Residential/Native IP)？解锁流媒体为什么需要它？',
    category: '流媒体解锁',
    featured: false,
    answer: '原生 IP 是由当地运营商直接分配给住宅或宽带用户的真实 IP。流媒体平台（Netflix/HBO）会根据 IP 数据库识别并封禁公网机房 IP，只有原生住宅 IP 才能完全绕过检测。',
  },

  // ═══ 7. 风险防范 (5 题) ═══
  {
    id: 'faq-31',
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
    id: 'faq-32',
    question: '网上流传的“9.9 元无限流量包年”为什么 100% 是资金盘骗局？',
    category: '风险防范',
    featured: false,
    answer: '因为这完全违背了服务器与跨境带宽的成本规律！正规 G 口专线带宽月租数万元，9.9 元包年的资金压根连服务器租金都不够交。商家纯粹靠新用户资金套现，一旦吸引不到新用户就会立刻关站跑路。',
  },
  {
    id: 'faq-33',
    question: '机场主被抓或者服务器被封会导致用户个人信息泄露吗？',
    category: '风险防范',
    featured: false,
    answer: '第三方客户端与机场之间传输的所有 HTTPS 网页流量均为二层端到端加密。即使机场服务器被关闭，对方也只能看到访问的域名，无法破解你的账号密码或聊天记录。',
  },
  {
    id: 'faq-34',
    question: '使用免费公共节点（或电报群免费订阅）有什么重大安全风险？',
    category: '风险防范',
    featured: false,
    answer: '免费节点背后没有任何安全保障。黑客或不良分子可以通过搭建免费节点进行中间人 (MITM) 抓包，篡改你访问的网页甚至注入恶意钓鱼广告。强烈建议使用靠谱的服务商。',
  },
  {
    id: 'faq-35',
    question: '发现机场节点被封大量爆红超时，该如何使用跑路预警雷达备用？',
    category: '风险防范',
    featured: false,
    answer: '收藏本站的「跑路预警雷达」页面。雷达全天候监控主流机场运行状态。如果你的服务商被列入橙色预警，请立刻拉取本站每日更新的免费应急节点作为备用。',
    recommendLink: {
      text: '查看每日免费应急节点 →',
      url: '/free-node/',
    },
  },

  // ═══ 8. 客户端选择 (5 题) ═══
  {
    id: 'faq-36',
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
    id: 'faq-37',
    question: 'iOS 苹果手机怎么下载正版 Shadowrocket 小火箭？美区 ID 如何获取？',
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
    id: 'faq-38',
    question: 'Windows 端 v2rayN 解压运行提示内核报错如何解决？',
    category: '客户端选择',
    featured: false,
    answer: 'v2rayN 最常见的报错就是「解压文件夹路径中包含了中文」！Xray 内核在读取配置文件时无法解析中文路径。',
    solutionSteps: [
      '解法：将 v2rayN 解压到全英文路径的文件夹中（例如 C:\\Tools\\v2rayN\\），双击 v2rayN.exe 重新运行即可。',
    ],
    recommendLink: {
      text: '查看 v2rayN 完全配置教程 →',
      url: '/blog/v2rayn-jiaocheng/',
    },
  },
  {
    id: 'faq-39',
    question: '为什么命令行 CMD、Git、Steam 下载不受常规系统代理控制？',
    category: '客户端选择',
    featured: false,
    answer: '因为 CMD 命令行、Git 和 Steam 游戏客户端默认不读取 Windows 系统的 HTTP 代理设置。',
    solutionSteps: [
      '解决办法 1：在 Clash Verge 中直接开启 TUN (虚拟网卡) 模式。',
      '解决办法 2：在 CMD 中手动输入命令：set http_proxy=http://127.0.0.1:7890 设定代理。',
    ],
  },
  {
    id: 'faq-40',
    question: 'Android 手机用哪款客户端最省电且支持 APP 级别分流？',
    category: '客户端选择',
    featured: false,
    answer: '推荐使用 **Clash Meta for Android (CMFA)** 或 **Flclash**。支持在设置中开启应用分流（仅允许指定的 APP 走代理），后台内存开销极低。',
  },
];

export function getFeaturedFaqs(n = 6): FAQ[] {
  return faqs.filter(f => f.featured).slice(0, n);
}
