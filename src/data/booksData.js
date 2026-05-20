/* src/data/booksData.js */

export const booksData = [
  {
    id: "giraffe-bath",
    title: "Giraffe in the Bath",
    difficulty: "L1",
    ageGroup: "4-6 years",
    coverEmoji: "🦒🛁🧼",
    coverColor: "var(--color-blue)",
    audioUrl: "book sound/giraffe_in_the_bath_american.mp3",
    summary: "Giraffe worked hard in her garden today. Now she is tired and muddy and wants to take a hot bath, but there are so many funny interruptions! What will happen to her bathtub?",
    words: {
      garden: { translation: "花园", phonetic: "[ˈɡɑːdn]", emoji: "🏡", example: "Giraffe is in her garden." },
      muddy: { translation: "泥泞的", phonetic: "[ˈmʌdi]", emoji: "💩", example: "Now I'm grubby and muddy." },
      bath: { translation: "洗澡", phonetic: "[bɑːθ]", emoji: "🛁", example: "I need a hot bath." },
      phone: { translation: "电话", phonetic: "[fəʊn]", emoji: "📞", example: "The phone goes ring, ring." },
      package: { translation: "包裹", phonetic: "[ˈpækɪdʒ]", emoji: "📦", example: "A package for Jackal!" },
      truck: { translation: "卡车", phonetic: "[trʌk]", emoji: "🚚", example: "Baboon backs his big truck." },
      slope: { translation: "斜坡", phonetic: "[sləʊp]", emoji: "📉", example: "She slides down a steep slope." },
      race: { translation: "比赛", phonetic: "[reɪs]", emoji: "🏆", example: "She won the big bathtub race!" }
    },
    sentences: [
      {
        id: "s1",
        text: "Giraffe is in her garden.",
        translation: "长颈鹿在她的花园里。",
        audioStart: 0.0,
        audioEnd: 2.5,
        grammarNote: "Giraffe 是名词作主语；is in 在...里面；her garden 是她的花园。",
        words: ["garden"]
      },
      {
        id: "s2",
        text: "She tugs up thick weeds, then digs a big border and plants leafy trees.",
        translation: "她拔掉粗壮的杂草，然后挖了一个大花坛，并种上了叶子茂密的树木。",
        audioStart: 3.6,
        audioEnd: 5.5,
        grammarNote: "tugs up 费力拔起；digs a big border 挖大花坛；plants 种植。这三个动词是并列关系，因为主语是 She，所以动词都加了 s。",
        words: ["garden"]
      },
      {
        id: "s3",
        text: "Giraffe is tired out.",
        translation: "长颈鹿累坏了。",
        audioStart: 7.0,
        audioEnd: 8.3,
        grammarNote: "tired out 是一个固定短语，表示精疲力竭、非常累。",
        words: []
      },
      {
        id: "s4",
        text: "She trots up the path.",
        translation: "她小跑着走上小路。",
        audioStart: 9.5,
        audioEnd: 11.7,
        grammarNote: "trots up 小跑着往上走；path 表示小径、小路。",
        words: []
      },
      {
        id: "s5",
        text: "Now I'm grubby and muddy; I need a hot bath.",
        translation: "现在我又脏又泥，我需要洗个热水澡。",
        audioStart: 11.7,
        audioEnd: 12.9,
        grammarNote: "grubby 表示脏兮兮的；muddy 表示满是泥巴的；need 需要；hot bath 热水澡。",
        words: ["muddy", "bath"]
      },
      {
        id: "s6",
        text: "She jumps in the tub with a splish and a splash.",
        translation: "她扑通一声跳进了浴缸里。",
        audioStart: 12.9,
        audioEnd: 14.0,
        grammarNote: "jumps in 跳入；tub 浴缸；splish and splash 拟声词，水花溅起的声音（水花四溅）。",
        words: ["bath"]
      },
      {
        id: "s7",
        text: "The bubbles float upwards.",
        translation: "泡泡向上漂浮起来。",
        audioStart: 14.0,
        audioEnd: 16.2,
        grammarNote: "bubbles 泡泡；float 漂浮；upwards 向上。",
        words: []
      },
      {
        id: "s8",
        text: "She gets set to wash.",
        translation: "她准备好开始洗澡了。",
        audioStart: 16.2,
        audioEnd: 18.8,
        grammarNote: "gets set to 准备好做某事，相当于 gets ready to，后面接动词原形。",
        words: []
      },
      {
        id: "s9",
        text: "The phone goes ring, ring.",
        translation: "电话响起铃铃的声音。",
        audioStart: 18.8,
        audioEnd: 20.4,
        grammarNote: "goes ring ring 电话发出铃铃的叫声，goes 在这里用作表示“发出某种声音”。",
        words: ["phone"]
      },
      {
        id: "s10",
        text: "She runs to reply.",
        translation: "她跑过去接听。",
        audioStart: 22.0,
        audioEnd: 23.9,
        grammarNote: "runs to 跑去；reply 在这里作不及物动词，代表接电话、回答。",
        words: ["phone"]
      },
      {
        id: "s11",
        text: "'So sorry, wrong number,' Giraffe gives a sigh.",
        translation: "“非常抱歉，打错了，”长颈鹿叹了一口气。",
        audioStart: 23.9,
        audioEnd: 26.1,
        grammarNote: "wrong number 打错电话；gives a sigh 叹了口气。",
        words: ["phone"]
      },
      {
        id: "s12",
        text: "Then three minutes later, knock, knock at the door.",
        translation: "三分钟后，门外响起了咚咚的敲门声。",
        audioStart: 26.6,
        audioEnd: 29.0,
        grammarNote: "three minutes later 三分钟后；knock knock 拟声词，咚咚的敲门声。",
        words: []
      },
      {
        id: "s13",
        text: "'A package for Jackal! Please sign on line four.'",
        translation: "“这是给胡狼的包裹！请在第四行签字。”",
        audioStart: 29.0,
        audioEnd: 31.1,
        grammarNote: "package 包裹；for 给...的；please sign 请签字；on line four 在第四行。",
        words: ["package"]
      },
      {
        id: "s14",
        text: "But wait! Here comes Baboon driving a big truck.",
        translation: "但是等等！狒狒开着一辆大卡车过来了。",
        audioStart: 34.2,
        audioEnd: 36.1,
        grammarNote: "Here comes... 倒装句，表示“……来了”。driving a big truck 是现在分词作后置定语，修饰 Baboon。",
        words: ["truck"]
      },
      {
        id: "s15",
        text: "Baboon backs his truck through the side of her hut!",
        translation: "狒狒把卡车倒车撞进了她的木屋一侧！",
        audioStart: 36.1,
        audioEnd: 38.4,
        grammarNote: "backs his truck 倒车；through 穿过/撞穿；side 一侧；hut 小木屋。",
        words: ["truck"]
      },
      {
        id: "s16",
        text: "Oh no! The tub slides out of the door!",
        translation: "噢不！浴缸滑出了门口！",
        audioStart: 39.0,
        audioEnd: 41.0,
        grammarNote: "slides out of 滑出；door 门。",
        words: ["slope"]
      },
      {
        id: "s17",
        text: "It slides down a steep slope!",
        translation: "它顺着一个陡峭的斜坡滑了下去！",
        audioStart: 41.0,
        audioEnd: 43.2,
        grammarNote: "down 顺着向下；steep 陡峭的；slope 斜坡。",
        words: ["slope"]
      },
      {
        id: "s18",
        text: "'Look out!' she shouts.",
        translation: "“小心！”她大喊道。",
        audioStart: 43.8,
        audioEnd: 45.4,
        grammarNote: "Look out 相当于 Be careful，小心、注意；shouts 大声喊。",
        words: []
      },
      {
        id: "s19",
        text: "She slides past some zebras.",
        translation: "她滑过了几只斑马的身边。",
        audioStart: 46.5,
        audioEnd: 49.2,
        grammarNote: "slides past 滑过...身旁；zebras 斑马。",
        words: []
      },
      {
        id: "s20",
        text: "She glides into the river.",
        translation: "她滑进了河流里。",
        audioStart: 49.2,
        audioEnd: 51.1,
        grammarNote: "glides into 平滑地滑入；river 河流。",
        words: []
      },
      {
        id: "s21",
        text: "She lands near a raft and floats past some other odd craft.",
        translation: "她落在了一只木筏附近，并漂浮着经过了其他一些奇形怪状的船只。",
        audioStart: 51.1,
        audioEnd: 54.0,
        grammarNote: "lands near 落在...附近；raft 木筏；floats past 漂过；odd 奇怪的；craft 船只（这里复数单写）。",
        words: ["race"]
      },
      {
        id: "s22",
        text: "She crosses the finish line. Giraffe has won the big bathtub race! First prize!",
        translation: "她冲过了终点线。长颈鹿赢得了这场盛大的浴缸赛跑！第一名！",
        audioStart: 54.0,
        audioEnd: 56.5,
        grammarNote: "crosses 跨越；finish line 终点线；has won 赢得了（现在完成时）；race 比赛；first prize 一等奖。",
        words: ["race"]
      }
    ],
    quizzes: [
      {
        id: "q1",
        question: "Why did Giraffe need a hot bath?",
        options: [
          { text: "Because she wanted to play with bubbles 🧼", isCorrect: false },
          { text: "Because she was grubby and muddy from gardening 💩", isCorrect: true },
          { text: "Because she was cold ❄️", isCorrect: false }
        ]
      },
      {
        id: "q2",
        question: "Who backed the truck into Giraffe's hut?",
        options: [
          { text: "A cute puppy 🐶", isCorrect: false },
          { text: "A busy Jackal 📦", isCorrect: false },
          { text: "A clumsy Baboon 🚚", isCorrect: true }
        ]
      },
      {
        id: "q3",
        question: "What race did Giraffe win at the end?",
        options: [
          { text: "The big bathtub race! 🛁🏆", isCorrect: true },
          { text: "A running race 🏃‍♂️", isCorrect: false },
          { text: "A swimming race 🏊‍♀️", isCorrect: false }
        ]
      }
    ]
  }
];
