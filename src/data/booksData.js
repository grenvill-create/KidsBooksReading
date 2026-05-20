/* src/data/booksData.js */

export const booksData = [
  {
    id: "giraffe-bath",
    title: "Giraffe in the Bath",
    difficulty: "L1",
    ageGroup: "4-6 years",
    coverEmoji: "🦒🛁🧼",
    coverColor: "var(--color-blue)",
    audioUrl: "book_sound/giraffe_in_the_bath_american.mp3",
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
        audioStart: 9,
        audioEnd: 11.5,
        grammarNote: "Giraffe 是名词作主语；is in 在...里面；her garden 是她的花园。",
        words: ["garden"]
      },
      {
        id: "s2",
        text: "She tugs up thick weeds, then digs a big border and plants leafy trees.",
        translation: "她拔掉粗壮的杂草，然后挖了一个大花坛，并种上了叶子茂密的树木。",
        audioStart: 12,
        audioEnd: 19,
        grammarNote: "tugs up 费力拔起；digs a big border 挖大花坛；plants 种植。这三个动词是并列关系，因为主语是 She，所以动词都加了 s。",
        words: ["garden"]
      },
      {
        id: "s3",
        text: "Giraffe is tired out.",
        translation: "长颈鹿累坏了。",
        audioStart: 21,
        audioEnd: 23.7,
        grammarNote: "tired out 是一个固定短语，表示精疲力竭、非常累。",
        words: []
      },
      {
        id: "s4",
        text: "She trots up the path.",
        translation: "她小跑着走上小路。",
        audioStart: 24,
        audioEnd: 26,
        grammarNote: "trots up 小跑着往上走；path 表示小径、小路。",
        words: []
      },
      {
        id: "s5",
        text: "Now I'm grubby and muddy; I need a hot bath.",
        translation: "现在我又脏又泥，我需要洗个热水澡。",
        audioStart: 27.1,
        audioEnd: 31,
        grammarNote: "grubby 表示脏兮兮的；muddy 表示满是泥巴的；need 需要；hot bath 热水澡。",
        words: ["muddy", "bath"]
      },
      {
        id: "s6",
        text: "She jumps in the tub with a splish and a splash.",
        translation: "她扑通一声跳进了浴缸里。",
        audioStart: 34,
        audioEnd: 38.9,
        grammarNote: "jumps in 跳入；tub 浴缸；splish and splash 拟声词，水花溅起的声音（水花四溅）。",
        words: ["bath"]
      },
      {
        id: "s7",
        text: "The bubbles float upwards.",
        translation: "泡泡向上漂浮起来。",
        audioStart: 38.8,
        audioEnd: 40.8,
        grammarNote: "bubbles 泡泡；float 漂浮；upwards 向上。",
        words: []
      },
      {
        id: "s8",
        text: "She gets set to wash.",
        translation: "她准备好开始洗澡了。",
        audioStart: 41,
        audioEnd: 43.5,
        grammarNote: "gets set to 准备好做某事，相当于 gets ready to，后面接动词原形。",
        words: []
      },
      {
        id: "s9",
        text: "The phone goes ring, ring.",
        translation: "电话响起铃铃的声音。",
        audioStart: 46,
        audioEnd: 49,
        grammarNote: "goes ring ring 电话发出铃铃的叫声，goes 在这里用作表示“发出某种声音”。",
        words: ["phone"]
      },
      {
        id: "s10",
        text: "She runs to reply.",
        translation: "她跑过去接听。",
        audioStart: 48.9,
        audioEnd: 51.5,
        grammarNote: "runs to 跑去；reply 在这里作不及物动词，代表接电话、回答。",
        words: ["phone"]
      },
      {
        id: "s11",
        text: "'So sorry, wrong number,' Giraffe gives a sigh.",
        translation: "“非常抱歉，打错了，”长颈鹿叹了一口气。",
        audioStart: 51,
        audioEnd: 56.4,
        grammarNote: "wrong number 打错电话；gives a sigh 叹了口气。",
        words: ["phone"]
      },
      {
        id: "s12",
        text: "Then three minutes later, knock, knock at the door.",
        translation: "三分钟后，门外响起了咚咚的敲门声。",
        audioStart: 60,
        audioEnd: 65,
        grammarNote: "three minutes later 三分钟后；knock knock 拟声词，咚咚的敲门声。",
        words: []
      },
      {
        id: "s13",
        text: "'A package for Jackal! Please sign on line four.'",
        translation: "“这是给胡狼的包裹！请在第四行签字。”",
        audioStart: 65.2,
        audioEnd: 71.8,
        grammarNote: "package 包裹；for 给...的；please sign 请签字；on line four 在第四行。",
        words: ["package"]
      },
      {
        id: "s14",
        text: "Giraffe tries to relax with her eyes tightly shut.",
        translation: "长颈鹿紧闭双眼，试图放松一下。",
        audioStart: 73.7,
        audioEnd: 77,
        grammarNote: "relax 放松；with her eyes tightly shut 伴随状语，表示“紧闭双眼”；tightly 紧紧地；shut 闭上。",
        words: []
      },
      {
        id: "s15",
        text: "Baboon backs his truck... whoops! Through the side of her hut!",
        translation: "狒狒倒着他的卡车……哎呀！撞穿了她的木屋！",
        audioStart: 78.8,
        audioEnd: 83.6,
        grammarNote: "backs his truck 倒卡车；whoops 哎呀（表示惊讶或糟糕）；through 穿过/撞穿；side 一侧；hut 小木屋。",
        words: ["truck"]
      },
      {
        id: "s16",
        text: "The bathtub goes sliding on a river of soap,",
        translation: "浴缸在肥皂河上滑行，",
        audioStart: 86.8,
        audioEnd: 89.7,
        grammarNote: "goes sliding 滑动；river of soap 肥皂组成的河流（夸张的说法）；soap 肥皂。",
        words: []
      },
      {
        id: "s17",
        text: "it glides out of the door, down a really steep slope.",
        translation: "它滑出门外，滑下一个非常陡峭的斜坡。",
        audioStart: 92,
        audioEnd: 97,
        grammarNote: "glides 滑行；down 顺着向下；steep 陡峭的；slope 斜坡。",
        words: ["slope"]
      },
      {
        id: "s18",
        text: "'Look out!' she shouts.",
        translation: "“小心！”她大喊道。",
        audioStart: 100.6,
        audioEnd: 102.6,
        grammarNote: "Look out 相当于 Be careful，小心、注意；shouts 大声喊。",
        words: []
      },
      {
        id: "s19",
        text: "Ten zebras take cover as she heads to the river.",
        translation: "当她冲向河边时，十只斑马赶紧躲避。",
        audioStart: 104,
        audioEnd: 108,
        grammarNote: "take cover 寻找掩护、躲藏；as 当...的时候；heads to 冲向、前往；river 河流。",
        words: []
      },
      {
        id: "s20",
        text: "With a crash and a splash, Giraffe lands by a raft.",
        translation: "伴随着哗啦一声巨响，长颈鹿落在一只木筏旁。",
        audioStart: 110.2,
        audioEnd: 114.9,
        grammarNote: "crash 撞击声；splash 扑通的水花声；lands 降落、落在；by a raft 在木筏旁边。",
        words: []
      },
      {
        id: "s21",
        text: "Soon her bathtub is bobbing past lots of odd craft.",
        translation: "很快，她的浴缸在许多奇形怪状的船只旁上下浮动。",
        audioStart: 115.9,
        audioEnd: 120.1,
        grammarNote: "bobbing 随波上下跳动；past 经过；lots of 许多；odd 奇怪的；craft 船只（这里复数单写）。",
        words: []
      },
      {
        id: "s22",
        text: "Over the line in the big bathtub race, 'What a win!' cries the judge. 'Here's your prize for first place!'",
        translation: "冲过了盛大浴缸赛的终点线，“赢得漂亮！”裁判大喊，“这是你第一名的奖品！”",
        audioStart: 124.2,
        audioEnd: 133.5,
        grammarNote: "Over the line 越过终点线；race 比赛；What a win! 赢得真漂亮（感叹句）；cries 大喊；judge 裁判；prize 奖品；first place 第一名。",
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
