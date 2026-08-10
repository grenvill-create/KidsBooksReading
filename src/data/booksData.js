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
        audioEnd: 15.5,
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
  },
  {
    id: "hyena-ballerina",
    title: "Hyena Ballerina",
    difficulty: "L3",
    ageGroup: "4-6 years",
    coverEmoji: "🐆🩰🎭",
    coverColor: "var(--color-pink)",
    audioUrl: "book_sound/hyena_ballerina_american.mp3",
    summary: "Hyena longs to become a ballerina, but will her dreams come true? Follow her story of determination and dance!",
    words: {
      ballerina: { translation: "芭蕾舞女演员", phonetic: "[ˌbæləˈriːnə]", emoji: "🩰", example: "Hyena longs to become a ballerina." },
      tutu: { translation: "芭蕾舞裙", phonetic: "[ˈtuːtuː]", emoji: "👗", example: "In my frilly silk tutu." },
      audition: { translation: "试镜/选拔", phonetic: "[ɔːˈdɪʃn]", emoji: "🎭", example: "10 students are wanted." },
      success: { translation: "成功", phonetic: "[səkˈses]", emoji: "🏆", example: "You're bound to succeed." },
      exciting: { translation: "令人兴奋的", phonetic: "[ɪkˈsaɪtɪŋ]", emoji: "🤩", example: "My part is exciting!" }
    },
            sentences: [
      {
        id: "s1",
        text: "10 students are wanted at Swan's ballet school.",
        translation: "天鹅芭蕾舞学校正在招收10名学生。",
        audioStart: 9.8,
        audioEnd: 13,
        grammarNote: "students 表示学生（复数）；wanted 被需要/招收（被动语态）；Swan's ballet school 是天鹅芭蕾舞学校。",
        words: ["audition"]
      },
      {
        id: "s2",
        text: "'What a chance!' cries Hyena. 'To dance will be cool!'",
        translation: "“好机会！”鬣狗喊道，“能跳舞太酷了！”",
        audioStart: 14.1,
        audioEnd: 18.2,
        grammarNote: "What a chance! 是感叹句，意为“多么好的机会啊！”；cries 喊道；to dance 动词不定式作主语，表示“跳舞这件事”；cool 表示酷、极棒的。",
        words: []
      },
      {
        id: "s3",
        text: "I think that I'm ready to prove I can move in my frilly silk tutu and pink satin shoes.",
        translation: "我觉得我已经准备好去证明，穿着我的皱褶丝绸芭蕾裙和粉色缎面鞋也能优美舞动。",
        audioStart: 21.8,
        audioEnd: 29.8,
        grammarNote: "think that 觉得/认为（引导宾语从句）；ready to 准备好做某事；prove 证明；frilly 褶边的；silk tutu 丝绸芭蕾舞裙；satin shoes 缎面鞋。",
        words: ["tutu", "ballerina"]
      },
      {
        id: "s4",
        text: "Swan brings them together. 'Let's see what you've got.'",
        translation: "天鹅老师把他们召集在一起。“让我们看看你们的本领。”",
        audioStart: 33.6,
        audioEnd: 37.2,
        grammarNote: "brings them together 把他们召集在一起；Let's see 让我们看看；what you've got 你们所拥有的（本事/才华）。",
        words: []
      },
      {
        id: "s5",
        text: "Hyena springs forward and spins on the spot.",
        translation: "鬣狗向前跃起并在原地旋转。",
        audioStart: 38.2,
        audioEnd: 41.4,
        grammarNote: "springs forward 向前跳跃；spins 旋转；on the spot 在原地。",
        words: []
      },
      {
        id: "s6",
        text: "She stands high on tiptoe, leans back on a chair.",
        translation: "她高高地脚尖站立，身子向后靠在椅子上。",
        audioStart: 44,
        audioEnd: 50.3,
        grammarNote: "stands high on tiptoe 高高地用脚尖站立；leans back 向后靠；on a chair 在椅子上。",
        words: []
      },
      {
        id: "s7",
        text: "Twirls lightly in circles and floats through the air.",
        translation: "轻快地打转，仿佛漂浮在半空中。",
        audioStart: 51,
        audioEnd: 55.4,
        grammarNote: "twirls 旋转/打转；lightly 轻盈地；in circles 绕着圈；floats 漂浮；through the air 穿过空气。",
        words: []
      },
      {
        id: "s8",
        text: "I can prance like a princess, or glide like a fairy.",
        translation: "我可以像公主一样昂首阔步，或像仙女一样轻盈滑行。",
        audioStart: 59.1,
        audioEnd: 63.2,
        grammarNote: "prance 昂首阔步/欢跃；like a princess 像公主一样；glide 滑行；like a fairy 像仙女一样。",
        words: []
      },
      {
        id: "s9",
        text: "Swan soon loses interest: 'Too spotty and hairy!'",
        translation: "天鹅老师很快失去了兴趣：“身上斑点太多，而且毛茸茸的！”",
        audioStart: 64.8,
        audioEnd: 69.3,
        grammarNote: "loses interest 失去兴趣；too 太...（表示否定意愿）；spotty 有斑点的；hairy 多毛的。",
        words: []
      },
      {
        id: "s10",
        text: "Hyena feels weepy, she sticks out her chin.",
        translation: "鬣狗觉得很想哭，但她扬起下巴（表示不服气或坚持）。",
        audioStart: 72.9,
        audioEnd: 79,
        grammarNote: "feels weepy 觉得想哭；sticks out her chin 扬起下巴（常用来表示决心或坚强面对困难）。",
        words: []
      },
      {
        id: "s11",
        text: "'I can't give up dancing, I'll try one more spin.'",
        translation: "“我不能放弃跳舞，我要再试着转一圈。”",
        audioStart: 78,
        audioEnd: 82.2,
        grammarNote: "give up 放弃；try 尝试；one more spin 再多旋转一次。",
        words: []
      },
      {
        id: "s12",
        text: "'What luck!' shouts out Duck. 'You're just what I need!'",
        translation: "“真走运！”鸭子大喊道，“你正是我需要的人！”",
        audioStart: 86,
        audioEnd: 90.1,
        grammarNote: "What luck! 真走运/运气真好（感叹句）；shouts out 大声喊；just what I need 正是我所需要的（what 引导名词性从句作宾语）。",
        words: []
      },
      {
        id: "s13",
        text: "'You must join my stage show, you're bound to succeed.'",
        translation: "“你必须加入我的舞台秀，你一定会成功的。”",
        audioStart: 91.1,
        audioEnd: 95.1,
        grammarNote: "must 必须（情态动词）；join 加入；stage show 舞台演出；be bound to 一定/注定会...；succeed 成功（动词）。",
        words: ["success"]
      },
      {
        id: "s14",
        text: "My acts can jump hurdles or balance a ball, but ballet like that will attract one and all.",
        translation: "“我的表演可以跳越障碍或平衡球，但像那样的芭蕾舞会吸引所有人。”",
        audioStart: 99.1,
        audioEnd: 106.4,
        grammarNote: "acts 表演项目/节目；jump hurdles 跳越栏杆/障碍；balance a ball 平衡球；attract 吸引；one and all 所有人。",
        words: []
      },
      {
        id: "s15",
        text: "'I'm spotted and furry, you're sure you don't mind?'",
        translation: "“我身上有斑点而且毛茸茸的，你确定不介意吗？”",
        audioStart: 109,
        audioEnd: 114,
        grammarNote: "furry 毛茸茸的（类似于 hairy）；sure 确信；don't mind 不介意。",
        words: []
      },
      {
        id: "s16",
        text: "'Not a bit, don't you worry, you'll fit in just fine!'",
        translation: "“一点也不介意，不用担心，你会融入得很完美的！”",
        audioStart: 114,
        audioEnd: 118.9,
        grammarNote: "not a bit 一点也不；don't you worry 别担心；fit in 融入/合得来；just fine 很好/很完美。",
        words: []
      },
      {
        id: "s17",
        text: "As soon as they see her, the crowds howl 'Bravo!'",
        translation: "大家一看到她，观众们就大声欢呼：“太棒了！”",
        audioStart: 123,
        audioEnd: 127,
        grammarNote: "As soon as 一...就...（引导时间状语从句）；crowds 观众们/人群；howl 欢呼/大喊；Bravo 喝彩声（好啊/太棒了）。",
        words: []
      },
      {
        id: "s18",
        text: "Hyena Ballerina is the star of the show!",
        translation: "鬣狗芭蕾舞演员成了全场演出的明星！",
        audioStart: 127,
        audioEnd: 131.5,
        grammarNote: "star of the show 演出的明星（最引人注目的人）。",
        words: ["ballerina"]
      }
    ],
    quizzes: [
      {
        id: "q1",
        question: "What does Hyena dream of becoming?",
        options: [
          { text: "A ballerina 🩰", isCorrect: true },
          { text: "A doctor 🩺", isCorrect: false },
          { text: "A pilot 🧑‍✈️", isCorrect: false }
        ]
      },
      {
        id: "q2",
        question: "Why did Swan reject Hyena at first?",
        options: [
          { text: "Because she was too spotty and hairy 🐆", isCorrect: true },
          { text: "Because she couldn't jump 🦘", isCorrect: false },
          { text: "Because she was too loud 🔊", isCorrect: false }
        ]
      },
      {
        id: "q3",
        question: "Who invited Hyena to join the stage show?",
        options: [
          { text: "Swan 🦢", isCorrect: false },
          { text: "Duck 🦆", isCorrect: true },
          { text: "Beetle 🪲", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: "kangaroo-at-the-zoo",
    title: "Kangaroo at the Zoo",
    difficulty: "L1",
    ageGroup: "4-6 years",
    coverEmoji: "🦘🐒🌳",
    coverColor: "var(--color-orange)",
    audioUrl: "book_sound/kangaroo_at_the_zoo_american.mp3",
    summary: "What a hullabaloo! Someone new at the zoo! Follow Kangaroo as she bounces around and tries to help a baby monkey stuck in a tree.",
    words: {
      kangaroo: { translation: "袋鼠", phonetic: "[ˌkæŋɡəˈruː]", emoji: "🦘", example: "I'm a Kangaroo!" },
      zoo: { translation: "动物园", phonetic: "[zuː]", emoji: "🦁", example: "Someone new at the zoo!" },
      monkey: { translation: "猴子", phonetic: "[ˈmʌŋki]", emoji: "🐒", example: "A scared little monkey leaps up a tree." },
      pouch: { translation: "育儿袋", phonetic: "[paʊtʃ]", emoji: "👜", example: "Monkey lands in Kanga's pouch!" },
      bounce: { translation: "弹跳", phonetic: "[baʊns]", emoji: "🦘", example: "She bounces and springs." }
    },
    sentences: [
      {
        id: "s1",
        text: "What a hullabaloo! Someone new at the zoo!",
        translation: "动物园里真热闹！来了一位新朋友！",
        audioStart: 9.5,
        audioEnd: 14,
        grammarNote: "What a hullabaloo! 多么喧闹啊！（感叹句）；Someone new 有新朋友（复合不定代词后置定语）。",
        words: ["zoo"]
      },
      {
        id: "s2",
        text: "\"who\"\"who\" \"Let me see too\"",
        translation: "“是谁？是谁？”“也让我看看！”",
        audioStart: 14,
        audioEnd: 20,
        grammarNote: "Let me see 让我看看（祈使句）；Me, too 我也是。",
        words: []
      },
      {
        id: "s3",
        text: "The crate opens POP! And out with a hop jumps a...I don't know what! Wait Did it moo? Is it a gnu?",
        translation: "木箱“啪”地打开了！伴随着一蹦一跳，跳出来一只...我也不知道是什么！等等，它是发出哞哞叫吗？是一只角马吗？",
        audioStart: 23.7,
        audioEnd: 35.8,
        grammarNote: "POP! 拟声词，啪的一声；with a hop 伴随着一跳；jumps a... 倒装句，强调跳出来的动作。",
        words: []
      },
      {
        id: "s4",
        text: "\"How do you do? I'm Kangaroo!\"",
        translation: "“你好呀！我是袋鼠！”",
        audioStart: 38.5,
        audioEnd: 44,
        grammarNote: "How do you do? 传统的初次见面问候语，你好。",
        words: ["kangaroo"]
      },
      {
        id: "s5",
        text: "And she bounces and springs all over the zoo!",
        translation: "她欢快地在整个动物园里蹦蹦跳跳！",
        audioStart: 44,
        audioEnd: 49,
        grammarNote: "bounces 弹跳；springs 跳跃；all over 到处、遍及。",
        words: ["bounce", "zoo"]
      },
      {
        id: "s6",
        text: "\"Oops\" \"Whoops\" \"Take care! Not there!\"",
        translation: "“哎呀！”“哎哟！”“小心！别往那儿蹦！”",
        audioStart: 51,
        audioEnd: 59,
        grammarNote: "Take care 小心、当心；Not there 不要在那里。",
        words: []
      },
      {
        id: "s7",
        text: "A scared little monkey leaps up a tree, and cries, \"I'm too high! Please, please help me!\"",
        translation: "一只受惊的小猴子跳到了树上，哭着喊：“我太高了！请救救我！”",
        audioStart: 58.4,
        audioEnd: 67.3,
        grammarNote: "scared 害怕的；leaps up 跳上；cries 哭喊；too high 太高了。",
        words: ["monkey"]
      },
      {
        id: "s8",
        text: "His mother sighs. She starts to frown. Elephant tries to lift him down.",
        translation: "猴妈妈叹了口气，皱起了眉头。大象试着把它举下来。",
        audioStart: 70,
        audioEnd: 77,
        grammarNote: "sighs 叹气；frown 皱眉；tries to 试图做某事；lift him down 把他举/降下来。",
        words: []
      },
      {
        id: "s9",
        text: "\"Can you do it?\" \"Nothing to it!\" \"No\" \"Oh\"",
        translation: "“你能做到吗？”“简单得很！”“不行啊...”“哎呀...”",
        audioStart: 77,
        audioEnd: 83.8,
        grammarNote: "Nothing to it 没什么难的、小事一桩。",
        words: []
      },
      {
        id: "s10",
        text: "\"I'll have him free in just a sec.\" Giraffe holds up her long, long neck.",
        translation: "“我马上就能救它下来。”长颈鹿伸长了她长长的脖子。",
        audioStart: 87,
        audioEnd: 93,
        grammarNote: "have him free 让他自由/解救他；in just a sec 只要一秒钟（sec 是 second 的简写）；holds up 举起、伸长。",
        words: []
      },
      {
        id: "s11",
        text: "\"Can you do it?\" \"Nothing to it!\" \"No\" \"Oh\"",
        translation: "“你能做到吗？”“小事一桩！”“不行啊...”“哎呀...”",
        audioStart: 93.6,
        audioEnd: 101,
        grammarNote: "重复的句型，增强故事的节奏感。",
        words: []
      },
      {
        id: "s12",
        text: "But nothing works... \"Then let me try!\"",
        translation: "但是都没成功...“那让我来试试吧！”",
        audioStart: 103.6,
        audioEnd: 108,
        grammarNote: "nothing works 都不起作用/都没成功；let me try 让我试试。",
        words: []
      },
      {
        id: "s13",
        text: "Kanga bounces to the sky... Oh!",
        translation: "袋鼠跃上了天空... 噢！",
        audioStart: 109,
        audioEnd: 113,
        grammarNote: "to the sky 向着天空；Wheee 表示兴奋或快速运动时的拟声词。",
        words: ["bounce"]
      },
      {
        id: "s14",
        text: "Again she jumps and bumps the tree.",
        translation: "她再次起跳，撞到了大树。",
        audioStart: 116.5,
        audioEnd: 120,
        grammarNote: "Again 再次；jumps 跳跃；bumps 撞击。",
        words: []
      },
      {
        id: "s15",
        text: "The baby monkey falls down... Wheee!",
        translation: "小猴子掉了下来... 哇——！",
        audioStart: 120.5,
        audioEnd: 125,
        grammarNote: "falls down 掉下来。",
        words: ["monkey"]
      },
      {
        id: "s16",
        text: "Three frightened bats and meerkats cry: \"Baby monkeys cannot fly! He's going to crash! I can't look!\" \"Ouch\"",
        translation: "三只受惊的蝙蝠和狐獴尖叫道：“小猴子不会飞啊！他要摔地上了！我不敢看了！”“哎哟！”",
        audioStart: 126.9,
        audioEnd: 138,
        grammarNote: "frightened 害怕的、受惊的；cannot fly 不会飞；going to crash 将要坠毁/摔碎；can't look now 现在不敢看。",
        words: []
      },
      {
        id: "s17",
        text: "But Monkey lands in Kanga's pouch!  Hooray!",
        translation: "结果小猴子落进了袋鼠的育儿袋里！好耶！",
        audioStart: 141.2,
        audioEnd: 149,
        grammarNote: "lands in 降落在...里；Kanga's 袋鼠的；pouch 育儿袋；Ouch 哎呦（表示疼）；Hooray 欢呼声（万岁/太棒了）。",
        words: ["monkey", "pouch"]
      }
    ],
    quizzes: [
      {
        id: "q1",
        question: "Who got stuck in the tree?",
        options: [
          { text: "A baby monkey 🐒", isCorrect: true },
          { text: "A bat 🦇", isCorrect: false },
          { text: "A meerkat 🦦", isCorrect: false }
        ]
      },
      {
        id: "q2",
        question: "How did Kangaroo save the baby monkey?",
        options: [
          { text: "She caught him in her pouch 🦘👜", isCorrect: true },
          { text: "She used a ladder 🪜", isCorrect: false },
          { text: "She lifted him down with her trunk 🐘", isCorrect: false }
        ]
      },
      {
        id: "q3",
        question: "Which word means a loud noise or commotion?",
        options: [
          { text: "Hullabaloo 🗣️", isCorrect: true },
          { text: "Pouch 👜", isCorrect: false },
          { text: "Crate 📦", isCorrect: false }
        ]
      }
    ]
  }
];
