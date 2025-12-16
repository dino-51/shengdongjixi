import { Work } from './types';

export const works: Work[] = [
  // --- 曲目列表 ---
  {
    id: 'p1',
    category: 'work',
    title: '基于时间',
    artist: '2023级音乐科技与艺术 曹浩轩',
    description: '《基于时间》是即兴创作的合成器声景作品，灵感来源于时间的流逝与变化。通过合成器的多样音色与效果，营造出一个充满动态变化的声音空间，反映时间的无常与多样性。',
    folderName: 'p1',
    hasVideo: false,
    hasAudio: true,
    hasImage: true
  },
  {
    id: 'm1',
    category: 'work',
    title: '肖斯塔科维奇主题变奏曲',
    artist: '2023级音乐科技与艺术 李润田',
    description: '古典钢琴与现代电声乐队协作的协奏曲。融合了古典、流行、爵士等多中音乐风格。',
    performers: ['钢琴：黄韵桐', '电钢琴：毛泯心', '手风琴：张一涵', '贝斯：李润田', '架子鼓：樊辰帅'],
    folderName: 'm1',
    hasVideo: false,
    hasAudio: false,
    hasImage: false
  },
  {
    id: 'm2',
    category: 'work',
    title: '溯·杳',
    artist: '2023级音乐设计与制作 徐畅',
    description: '作者试图描绘时空的交错并表达出时间似乎不再线性流动，而是被不断打破、重塑的意象。既是对过去的追溯，又是对未来的探索，带有对时间、存在与消逝的哲理性思考，仿佛在揭示那些难以触及的精神领域和内心深处的声音。',
    performers: ['琵琶：朱歆怡', '铙钹：林圣杰', '板鼓：郝开心'],
    folderName: 'm2',
    hasVideo: false,
    hasAudio: true,
    hasImage: false
  },
  {
    id: 'm3',
    category: 'work',
    title: '海妖',
    artist: '2023级2024级音乐设计与制作 周嘉尔',
    description: '《海妖》是使用萨克斯大量技法演奏的幻听类作品。',
    performers: ['萨克斯：周嘉尔'],
    folderName: 'm3',
    hasVideo: false,
    hasAudio: false,
    hasImage: false
  },
  {
    id: 'm4',
    category: 'work',
    title: 'Pull & Play',
    artist: '2022级音乐科技与艺术 龚筱珺',
    description: '《Pull & Play》是一个互动声音装置，灵感源于民间传统游戏“翻花绳”。通过拉扯缠绕于感应柱上的橡皮筋，在触觉与听觉的交织中体验游戏的记忆与创作的乐趣。',
    performers: ['龚筱珺'],
    folderName: 'm4',
    hasVideo: false, // Description says interactive installation, but classified in 'Works' list.
    hasAudio: false,
    hasImage: true,
    gallery: [
    "/assets/picture/gxj.jpg",
  ]
  },
  {
    id: 'm5',
    category: 'work',
    title: '阿佩罗橙光',
    artist: '2023级音乐设计与制作 程一诺',
    description: '《阿佩罗橙光》是一首Fusion风格电子流行乐队作品，乐队融合电子合成器打造出一场如同开胃酒一样活力轻盈的听觉盛宴。',
    performers: ['钢琴：程一诺', '架子鼓：缪雨恬', '贝斯：李润田'],
    folderName: 'm5',
    hasVideo: false,
    hasAudio: false,
    hasImage: false
  },
  {
    id: 'p4',
    category: 'work',
    title: '扔手机',
    artist: '2023级音乐科技与艺术 邓翔宇',
    description: '《扔手机》是一个探讨“连接”的作品，以手机作为交互媒介，多媒体和声音为载体，表现创作者对于“连接”概念的理解。',
    folderName: 'p4',
    hasVideo: false,
    hasAudio: false,
    hasImage: false
  },
  {
    id: 'm7',
    category: 'work',
    title: '破碎的朝霞',
    artist: '2023级音乐设计与制作 钟晨',
    description: '在大众认知中，朝霞是柔和、宁静的，天色从深蓝到橘红的过渡给人以温暖的感觉。而在本作品中，创作者试图打破这种固有印象：以马林巴为主奏乐器并结合电子音乐，将朝霞描绘得支离破碎，诡异而危险。',
    performers: ['马林巴：郑依洋'],
    folderName: 'm7',
    hasVideo: false,
    hasAudio: true,
    hasImage: false
  },
  {
    id: 'm6',
    category: 'work',
    title: '我想成为"Do"',
    artist: '2024级视唱练耳 杜俊也丨2023级音乐科技与艺术 汤思齐',
    description: '《我想成为“Do”》是上海音乐学院变声期研究项目组推出的首支为变声期男生创作的歌曲。研究团队经过长达一年多的访谈调研与嗓音数据采集，依据真实的录音数据集，将歌曲音域巧妙设定在一个八度内。歌词灵感直接来源于对变声期少年的深度访谈，以不同音符喻指成长中的自我，真切道出他们的期望与困惑；音乐上则巧妙运用转调离调与长乐句，在适配嗓音的同时提供了丰富的审美与训练可能。这首歌不仅是少年渴望成为更好自己的心声，更是一份鼓励：愿他们在变声期勇敢歌唱，拥抱成长，自信走向人生的新阶段。',
    performers: ['演唱：马田睿哲（14岁）', '助演：杨靓', '钢伴：程宇轩', '电子：汤思齐'],
    extraNote: '*项目资助：上海音乐学院大学生创新创业孵化基地孵化项目；国家“双一流”高校建设项目、上海高水平地方高校建设扶持项目。',
    folderName: 'm6',
    hasVideo: false,
    hasAudio: false,
    hasImage: true
  },
  {
    id: 'm8',
    category: 'work',
    title: '萨韵梆风',
    artist: '2024级电子音乐设计 李心怡',
    description: '《萨韵梆风》基于萨满韵律+东北梆子腔，用萨克斯与电子音乐融合，配合可听性人声段落，呈现东北神调文化戏谑及神秘诙谐的气质。细腻与豪迈并存，展现黑土地情怀、方言魅力，表达对于中国东北地区文化的致敬。',
    performers: ['马林巴：郑依洋'],
    folderName: 'm8',
    hasVideo: false,
    hasAudio: true,
    hasImage: true
  },
  {
    id: 'm9',
    category: 'work',
    title: '书狂',
    artist: '2024级音乐设计与制作 刘忱希',
    description: '是一个以古琴，箫与电子音乐共同构写的楷书，行书和狂草三种书法形态。',
    performers: ['箫：陈善治', '古琴：董贝尔'],
    folderName: 'm9',
    hasVideo: false,
    hasAudio: false,
    hasImage: false
  },

  // --- 装置列表 ---
  {
    id: 'p2',
    category: 'installation',
    title: '哈哈哈基米',
    artist: '2023级音乐科技与艺术 汤思齐',
    description: '《哈哈哈基米》是一个用游戏手柄控制哈基米音乐互动装置，旨在构建一种实时性的哈基米音乐创作形式。\n视频号：@累了困了喝汤达人',
    folderName: 'p2',
    hasVideo: true,
    hasAudio: false,
    hasImage: true
  },
  {
    id: 'p3',
    category: 'installation',
    title: '欧律',
    artist: '2023级音乐科技与艺术 冷韵',
    description: '《欧律》是一个使用欧几里得算法生成世界各地的节奏，支持多轨叠加，一边听律动，一边看环形可视化和手算离散数学步骤；灵感来自Toussaint 2005年的经典论文。',
    folderName: 'p3',
    hasVideo: true,
    hasAudio: false,
    hasImage: true
  },
  {
    id: 'p5',
    category: 'installation',
    title: '声渊',
    artist: '2022级音乐科技与艺术 姚睿颖',
    description: '《声渊》是一个探索时间、空间与语言的交互式声音装置。通过人工智能技术，实现基于观众输入主题、音色及语种的个性化诗歌生成与有声化输出。',
    folderName: 'p5',
    hasVideo: true,
    hasAudio: false,
    hasImage: true
  },
  {
    id: 'p6',
    category: 'installation',
    title: '视觉律动:费登奎斯式音景冥想',
    artist: '2025级音乐科技与艺术 赵玲儿',
    description: '《视觉律动：费登奎斯式音景冥想》是将费登奎斯理念，即“觉察”、“探索”、“减少费力”的核心哲学，与眼球转动生成音乐相结合，转化为交互设计的逻辑和音乐生成的灵魂。这是一个“通过觉察性眼球运动进行自我探索”的艺术与身心体验装置。',
    folderName: 'p6',
    hasVideo: true,
    hasAudio: false,
    hasImage: false
  },
  {
    id: 'p7',
    category: 'installation',
    title: '脑电波生成音乐',
    artist: '2025级音乐科技与艺术 杨家媛',
    description: '《脑电波生成音乐》装置通过脑电波手机头带收集体验者的各频带脑波数据，并实时生成不同的音乐。',
    folderName: 'p7',
    hasVideo: false,
    hasAudio: true,
    hasImage: true
  }
];