/* ==========================================================================
   data.js —— 页面所有内容数据
   后续维护只需修改本文件：新增项目时往 PROJECTS 数组里追加一个对象即可。
   ========================================================================== */

const PROFILE = {
  name: '小和',
  role: '软件工程 · AI 辅助开发',
  avatar: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20photo%20of%20a%20young%20chinese%20male%20software%20developer%2C%20casual%20dark%20shirt%2C%20neutral%20dark%20studio%20background%2C%20soft%20rim%20light%2C%20friendly%20confident%20expression%2C%20high%20detail&image_size=square_hd',
  bio: '软件工程专业学生，目前主要关注 AI 辅助开发与大语言模型技术。平时主要使用 Python、Java 和 TypeScript 进行项目开发，也在持续学习前后端开发、数据可视化和 AI 应用构建。',
  status: '广州软件学院 · 在读',
  email: 'xiaohe@example.com',
  // 技能方向，按分组展示在左侧区域
  skills: [
    { name: '技术栈', items: ['Python', 'Java', 'TypeScript', 'HTML / CSS'] }
  ]
};

/* 项目作品：按 profile.md 中的顺序排列
   字段说明：
   - title    项目名称
   - summary  项目简介
   - points   项目亮点（可为空数组）
   - stack    技术栈标签
   - date     完成时间
   - category 项目类别
   - image    项目封面图
   - link     项目链接（留空则不显示链接入口） */
const PROJECTS = [
  {
    title: '轻记账',
    summary: '面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。项目支持语音快捷记账、月度收支统计和预算提醒，并使用微信云开发完成数据存储与后端能力。',
    points: [],
    stack: ['TypeScript', '微信小程序', '微信云开发', 'ECharts'],
    date: '2025.04',
    category: '微信小程序',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smartphone%20mockup%20showing%20a%20minimalist%20expense%20tracking%20mobile%20app%20interface%2C%20light%20clean%20ui%2C%20monthly%20charts%20and%20list%2C%20held%20over%20a%20wooden%20desk%2C%20soft%20daylight%2C%20product%20photography&image_size=landscape_4_3',
    link: ''
  },
  {
    title: '拾光集市',
    summary: '面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。',
    points: [],
    stack: ['Java', 'Spring Boot', 'MySQL', 'TypeScript', 'Vue'],
    date: '2025.09',
    category: 'Web 应用',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=laptop%20on%20a%20desk%20showing%20a%20campus%20second%20hand%20marketplace%20website%20interface%2C%20product%20listings%2C%20clean%20modern%20ui%2C%20warm%20orange%20accents%2C%20natural%20light%2C%20product%20photography&image_size=landscape_4_3',
    link: ''
  },
  {
    title: '城市脉搏',
    summary: '城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。项目通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。',
    points: [],
    stack: ['TypeScript', 'HTML / CSS', 'Canvas', 'SVG', 'ECharts'],
    date: '2026.03',
    category: '数据可视化',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=large%20monitor%20displaying%20a%20real%20time%20city%20traffic%20and%20weather%20data%20visualization%20dashboard%2C%20dark%20theme%20interface%20with%20maps%20and%20charts%2C%20dim%20studio%20lighting%2C%20professional%20workstation&image_size=landscape_4_3',
    link: ''
  },
  {
    title: '课语通',
    summary: '基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。',
    points: [],
    stack: ['Python', 'FastAPI', 'RAG', '向量检索', '大语言模型 API', 'Streamlit'],
    date: '2026.07',
    category: 'AI 应用',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=laptop%20screen%20showing%20an%20AI%20chat%20assistant%20interface%20for%20course%20materials%2C%20document%20upload%20panel%20with%20citations%2C%20clean%20modern%20ui%2C%20dark%20studio%20desk%2C%20professional%20photo&image_size=landscape_4_3',
    link: ''
  }
];

/* 联系方式：无 href 的条目会渲染为不可点击的文本 */
const CONTACTS = [
  { label: '邮箱', value: 'xiaohe@example.com', href: 'mailto:xiaohe@example.com' },
  { label: '微信', value: 'xiaohezi', href: '' },
  { label: 'GitHub', value: 'https://github.com/xiaohe-dev', href: 'https://github.com/xiaohe-dev' },
  { label: '所在地', value: '中国 · 广州', href: '' },
  { label: '个人主页', value: 'https://xiaohe.dev', href: 'https://xiaohe.dev' }
];
