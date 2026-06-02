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
        audioStart: 9.0,
        audioEnd: 11.5,
        grammarNote: "Giraffe 是名词作主语；is in 在...里面；her garden 是她的花园。",
        words: ["garden"]
      },
      {
        id: "s2",
        text: "She tugs up thick weeds, then digs a big border and plants leafy trees.",
        translation: "她拔掉粗壮的杂草，然后挖了一个大花坛，并种上了叶子茂密的树木。",
        audioStart: 12.0,
        audioEnd: 19.0,
        grammarNote: "tugs up 费力拔起；digs a big border 挖大花坛；plants 种植。这三个动词是并列关系，因为主语是 She，所以动词都加了 s。",
        words: ["garden"]
      },
      {
        id: "s3",
        text: "Giraffe is tired out.",
        translation: "长颈鹿累坏了。",
        audioStart: 21.0,
        audioEnd: 23.7,
        grammarNote: "tired out 是一个固定短语，表示精疲力竭、非常累。",
        words: []
      },
      {
        id: "s4",
        text: "She trots up the path.",
        translation: "她小跑着走上小路。",
        audioStart: 24.0,
        audioEnd: 26.0,
        grammarNote: "trots up 小跑着往上走；path 表示小径、小路。",
        words: []
      },
      {
        id: "s5",
        text: "Now I'm grubby and muddy; I need a hot bath.",
        translation: "现在我又脏又泥，我需要洗个热水澡。",
        audioStart: 27.1,
        audioEnd: 31.0,
        grammarNote: "grubby 表示脏兮兮的；muddy 表示满是泥巴的；need 需要；hot bath 热水澡。",
        words: ["muddy", "bath"]
      },
      {
        id: "s6",
        text: "She jumps in the tub with a splish and a splash.",
        translation: "她扑通一声跳进了浴缸里。",
        audioStart: 34.0,
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
        audioStart: 41.0,
        audioEnd: 43.5,
        grammarNote: "gets set to 准备好做某事，相当于 gets ready to，后面接动词原形。",
        words: []
      },
      {
        id: "s9",
        text: "The phone goes ring, ring.",
        translation: "电话响起铃铃的声音。",
        audioStart: 46.0,
        audioEnd: 49.0,
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
        audioStart: 51.0,
        audioEnd: 56.4,
        grammarNote: "wrong number 打错电话；gives a sigh 叹了口气。",
        words: ["phone"]
      },
      {
        id: "s12",
        text: "Then three minutes later, knock, knock at the door.",
        translation: "三分钟后，门外响起了咚咚的敲门声。",
        audioStart: 60.0,
        audioEnd: 65.0,
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
        audioEnd: 77.0,
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
        audioStart: 92.0,
        audioEnd: 97.0,
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
        audioStart: 104.0,
        audioEnd: 108.0,
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
  },
  {
    id: "spider-glider",
    title: "Spider in a Glider",
    difficulty: "L1",
    ageGroup: "4-6 years",
    coverEmoji: "🕷️✈️☁️",
    coverColor: "var(--color-purple)",
    audioUrl: "book_sound/spider_in_a_glider_american.mp3",
    summary: "A spider wishes she could fly, so she decides to build her own glider. Will her invention work?",
    words: {
      spider: { translation: "蜘蛛", phonetic: "[ˈspaɪdər]", emoji: "🕷️", example: "The spider is small." },
      glider: { translation: "滑翔机", phonetic: "[ˈɡlaɪdər]", emoji: "✈️", example: "She built a glider." }
    },
    sentences: [
      {
        id: "s1",
        text: "Spider is spinning her sparkling strings, swaying from branches.",
        translation: "蜘蛛在树枝间摇摆，吐出闪闪发光的蛛丝。",
        audioStart: 10,
        audioEnd: 15.4,
        grammarNote: "spinning 吐丝；sparkling strings 闪闪发光的丝线；swaying 摇摆。",
        words: ["spider"]
      },
      {
        id: "s2",
        text: "She sings as she swings:",
        translation: "她一边荡秋千一边唱：",
        audioStart: 15.6,
        audioEnd: 19,
        grammarNote: "sings as she swings 一边荡一边唱。",
        words: []
      },
      {
        id: "s3",
        text: "\"I wish to fly, so I'm making some wings.\"",
        translation: "“我想飞翔，所以我在做一对翅膀。”",
        audioStart: 19,
        audioEnd: 23,
        grammarNote: "wish to fly 希望飞翔；making some wings 制作翅膀。",
        words: []
      },
      {
        id: "s4",
        text: "She creeps up a rock and then leaps into space.",
        translation: "她爬上一块岩石，然后向半空纵身一跃。",
        audioStart: 26,
        audioEnd: 31,
        grammarNote: "creeps up 爬上；leaps into 跳入；space 半空中。",
        words: []
      },
      {
        id: "s5",
        text: "What a shock! With a splat, she lands flat on her face.",
        translation: "哎呀！啪嗒一声，她脸朝下重重地摔在了地上。",
        audioStart: 31,
        audioEnd: 36.5,
        grammarNote: "What a shock 真令人震惊/哎呀；with a splat 啪嗒一声；lands flat on her face 脸着地。",
        words: []
      },
      {
        id: "s6",
        text: "\"I'll try it again. I will fly!\" declares Spider.",
        translation: "“我再试一次。我一定要飞！”蜘蛛大声说。",
        audioStart: 38.8,
        audioEnd: 45,
        grammarNote: "try it again 再试一次；will fly 一定会飞；declares 宣称/大声说。",
        words: ["spider"]
      },
      {
        id: "s7",
        text: "She falls even harder... but Beetle has spied her.",
        translation: "她摔得更惨了……但甲虫看见了她。",
        audioStart: 45,
        audioEnd: 50,
        grammarNote: "falls even harder 摔得更重；has spied her 发现了她（spy的过去分词）。",
        words: []
      },
      {
        id: "s8",
        text: "\"I can't fly either,\" sighs Beetle beside her.",
        translation: "“我也不会飞，”她身旁的甲虫叹了口气。",
        audioStart: 50,
        audioEnd: 54.5,
        grammarNote: "can't fly either 也不（会飞）；sighs 叹气；beside her 在她旁边。",
        words: []
      },
      {
        id: "s9",
        text: "\"Though I tried and I tried. So I built my own glider.\"",
        translation: "“尽管我试了又试。所以我造了我自己的滑翔机。”",
        audioStart: 54.6,
        audioEnd: 61,
        grammarNote: "Though 尽管；tried and tried 试了又试；built my own glider 建造了我自己的滑翔机。",
        words: ["glider"]
      },
      {
        id: "s10",
        text: "The glider is gleaming and ready to ride.",
        translation: "滑翔机闪闪发光，准备好起飞了。",
        audioStart: 64,
        audioEnd: 67.4,
        grammarNote: "gleaming 闪闪发光；ready to ride 准备好起飞。",
        words: ["glider"]
      },
      {
        id: "s11",
        text: "Beetle and Spider both clamber inside.",
        translation: "甲虫和蜘蛛都爬了进去。",
        audioStart: 67.8,
        audioEnd: 71.2,
        grammarNote: "both clamber inside 都笨拙地爬进去。",
        words: ["spider"]
      },
      {
        id: "s12",
        text: "Dragonfly tows them up high in the sky.",
        translation: "蜻蜓拉着他们飞上了高高的天空。",
        audioStart: 74,
        audioEnd: 78.3,
        grammarNote: "Dragonfly 蜻蜓；tows them 拖着他们；up high in the sky 高空中。",
        words: []
      },
      {
        id: "s13",
        text: "Then Beetle lets go: \"We are flying! Bye bye!\"",
        translation: "然后甲虫松开了绳子：“我们在飞了！再见！”",
        audioStart: 79,
        audioEnd: 84,
        grammarNote: "lets go 松手；flying 飞行。",
        words: []
      },
      {
        id: "s14",
        text: "They glide in wide circles and ride on the breeze.",
        translation: "他们在空中盘旋滑行，乘着微风飞行。",
        audioStart: 86.5,
        audioEnd: 92,
        grammarNote: "glide 滑行；wide circles 盘旋；ride on the breeze 乘风。",
        words: []
      },
      {
        id: "s15",
        text: "The wind blows below them. \"Look, they're like toy trees.\"",
        translation: "风在他们下方吹过。“看，它们就像玩具树一样。”",
        audioStart: 92,
        audioEnd: 97.9,
        grammarNote: "wind blows 风吹过；toy trees 玩具树。",
        words: []
      },
      {
        id: "s16",
        text: "The wind starts to huff and to puff.",
        translation: "风开始呼呼地吹起来。",
        audioStart: 101,
        audioEnd: 103.4,
        grammarNote: "huff and puff 呼哧呼哧地吹气（形容风很大）。",
        words: []
      },
      {
        id: "s17",
        text: "Thunder booms. With a crack and a spark, a bright lightning strike looms.",
        translation: "雷声轰鸣。伴随着爆裂声和火花，一道明亮的闪电赫然出现。",
        audioStart: 103.5,
        audioEnd: 110,
        grammarNote: "Thunder booms 雷声轰鸣；crack and spark 爆裂声和火花；lightning strike 闪电；looms 赫然出现。",
        words: []
      },
      {
        id: "s18",
        text: "The glider is tossed up and down and around.",
        translation: "滑翔机被颠簸得上下翻飞，团团转。",
        audioStart: 113,
        audioEnd: 117,
        grammarNote: "tossed up and down 上下颠簸；around 团团转。",
        words: []
      },
      {
        id: "s19",
        text: "\"All is lost!\" Beetle splutters. \"We'll crash to the ground!\"",
        translation: "“全完了！”甲虫结结巴巴地说。“我们要坠毁到地上了！”",
        audioStart: 117,
        audioEnd: 122.5,
        grammarNote: "All is lost 全完了；splutters 结结巴巴地说；crash 坠毁。",
        words: []
      },
      {
        id: "s20",
        text: "But Spider starts spinning. Her legs are a blur.",
        translation: "但是蜘蛛开始吐丝。她的腿快得成了一团模糊的影子。",
        audioStart: 124.8,
        audioEnd: 129,
        grammarNote: "spinning 吐丝；a blur 模糊不清（形容动作极快）。",
        words: []
      },
      {
        id: "s21",
        text: "\"I'll save us,\" she says, with a whizz and a whir.",
        translation: "“我会救我们的，”她一边发出嗖嗖和嗡嗡声一边说。",
        audioStart: 129,
        audioEnd: 135,
        grammarNote: "save us 救我们；whizz and whir 嗖嗖声和嗡嗡声。",
        words: []
      },
      {
        id: "s22",
        text: "\"All right, hold on tight, Beetle!\"",
        translation: "“好了，抓紧，甲虫！”",
        audioStart: 135,
        audioEnd: 137.8,
        grammarNote: "hold on tight 抓紧",
        words: []
      },
      {
        id: "s23",
        text: "They parachute down.",
        translation: "他们像跳伞一样降落。",
        audioStart: 140,
        audioEnd: 143,
        grammarNote: "parachute 降落伞/跳伞降落。",
        words: []
      },
      {
        id: "s24",
        text: "Now both have decided life's best on the ground.",
        translation: "现在他们俩都决定了：还是脚踏实地最好了。",
        audioStart: 143,
        audioEnd: 147.5,
        grammarNote: "both have decided 两人都决定；life's best on the ground 在地上的生活是最好的。",
        words: []
      }
    ],
    quizzes: [
      {
        id: "q1",
        question: "What did the spider build?",
        options: [
          { text: "A glider ✈️", isCorrect: true },
          { text: "A car 🚗", isCorrect: false },
          { text: "A boat 🚤", isCorrect: false }
        ]
      }
    ]
  }
];
