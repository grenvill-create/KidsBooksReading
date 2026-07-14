# KidsBooksReading (儿童英文原版绘本交互精读乐园) 🦒🛁🧼

欢迎来到 **KidsBooksReading** 项目！这是一个专门为 3-10 岁幼童打造的 **网页版原版英文绘本交互式精读应用**。

本项目目前已收录三本经典英文绘本，深度融合了**“音频分割切片技术”**与**“渐进式交互伴读引导机制”**，并融入了极具童趣的**“极速自适应马卡龙 3D 泡泡设计系统”**。

---

## 🎨 特色核心：“极速自适应马卡龙 3D 泡泡设计系统”

本项目的前端界面均构建在这一套专门为小朋友定制的视觉系统上：
1. **治愈系马卡龙配色（Macaron Palette）**：
   - 采用柔和的糖果马卡龙色：天空蓝（Sky Blue）、泡泡粉（Playful Pink）、薄荷绿（Mint Green）、晨曦黄（Sunshine Yellow）、丁香紫（Lilac Purple）和蜜桔橙（Soft Orange），并配以温暖的奶油白色（Oatmeal Milk）背景，极力呵护孩子视力。
2. **微立体 squishy 3D 触觉卡片与气泡按钮（Tactile 3D Bubble System）**：
   - 所有按钮、单词气泡和信息卡片都被赋予了圆润的圆角（`border-radius: 20px~28px`）和加粗边框，并配备了偏移物理阴影。
   - 当悬停或点击时，会模拟物理气泡被按扁的Q弹阻尼质感。
3. **高弹性阻尼阻抗缓动曲线（Elastic Bounce Curve）**：
   - 翻页、弹出单词卡片、礼花迸发时，均使用 `cubic-bezier(0.175, 0.885, 0.32, 1.275)` 弹性曲线，产生微妙且精致的“Q弹回跳”微动画。
4. **极速自适应适配（Super-fast Responsive Adaptation）**：
   - 纯粹基于原生 Vanilla CSS 与 Flexbox/Grid 布局，适配手机、iPad 平板或电脑多端，无多余第三方样式框架。

---

## 📚 已上线绘本与配图状态

目前项目内置了 3 本绘本，每本书都配备了**文字高亮**、**中英双语**、**词汇库**和**音频打点**：

| 绘本ID | 绘本书名 | 句子总数 | 核心词汇 | 配图生成状态 |
| :--- | :--- | :--- | :--- | :--- |
| **`giraffe-bath`** | *Giraffe in the Bath* | 22 句 | garden, muddy, bath... | **部分生成**（仅 s1, s5 拥有插图，其余句子采用 Emoji 降级 fallback 渲染） |
| **`spider-glider`** | *Spider in a Glider* | 24 句 | spider, glider... | **完全生成**（s1 至 s24 全套精美插图 PNG/WebP 已齐备） |
| **`hyena-ballerina`** | *Hyena Ballerina* | 18 句 | success, ballerina... | **完全生成**（s1 至 s18 全套精美插图 PNG/WebP 已齐备） |

> [!NOTE]
> 为优化网页加载速度，项目启用了 **WebP 预加载与自适应解析**。对于拥有完整 WebP 插图的书籍（如 `spider-glider` 和 `hyena-ballerina`），阅读器（`Reader.jsx`）会优先请求 WebP 格式图片，大幅节省手机端加载流量。

---

## ⚙️ 核心功能实现

### 1. 渐进式精读互动教学状态机（4-Stage Interactive Guided Reading）
针对绘本中的每一句话，应用在音频自动暂停时，带领小朋友流转过四个定制的学习阶段，构成一个完美的闭环精读学习：
- **【听】Listen 🎧**：高亮当前句子，引导孩子静心聆听原版配音，可点击重复播放。
- **【析】Analyze 💡**：自动向下滑入中文翻译，展示**“语法句式小点拨”**。
- **【词】Vocabulary 🎒**：句子中的所有核心词汇变为闪闪发亮的可点击单词，浮出“单词泡泡卡”（含 Emoji、音标、释义、例句），并支持 **Web Speech API 纯正美音发音**。
- **【确】Confirm ✅**：展示彩色大泡泡按钮，孩子大声朗读一遍后确认，即可流转到下一句。

### 2. 智能 Web Audio 音频停顿对齐工具（Parents Dashboard Aligner）
在**家长控制面板**中集成了一个全网独创的 **Web Audio API 纯前端静音扫描断句打点工具**：
- **波形实时扫描**：无需后端服务器，直接提取 PCM 通道数据。
- **智能静音停顿识别（Silence Detection）**：通过可调节的`静音音量阈值`和`最短停顿秒数`，算法能够毫秒级扫描音频中的空隙，自动算出每句话在音频中的 `audioStart` 和 `audioEnd` 时间戳。
- **手动双滑块精调**：提供细致到 `0.1s` 的滑块和输入框，家长可以一边点击试听，一边手动校准每句话的起止秒数。
- **一键导出 JS**：微调完成后，点击一键复制，即可得到整本书符合 React 格式的 JSON 句子数据段，极速添加新绘本！

### 3. 读后趣味游戏大作战（Quiz Playground）
在绘本句子全部精读打卡结束后，自动解锁游乐场环节：
- 包含三道专门根据绘本内容定制的多媒体选择题，考察阅读理解和细节捕获能力。
- 答对时触发炫彩礼花雨（Confetti）并伴随星星音效，极大地建立小朋友的成就感。

### 4. 优化：PWA 离线运行与懒加载缓存（Lazy Caching）
- 项目使用 `Vite PWA` 插件，支持手机/平板端一键**「添加至主屏幕 / 安装应用」**。
- 为了应对大容量音频和高清图片，缓存策略优化为**运行时懒缓存（Runtime Caching）**，只在用户翻阅新书时下载对应资源，解决手机端首次加载缓慢的性能瓶颈。

---

## 🛠 开发与部署指南

### 本地运行
1. **安装依赖**：
   ```bash
   npm install
   ```
2. **启动本地开发服务器**：
   ```bash
   npm run dev
   ```
3. 打开浏览器访问 `http://localhost:5173/` 即可。

### 打包与 GitHub Pages 发布
运行项目内置的一键部署发布脚本：
```bash
npm run deploy
```
> [!TIP]
> 如果在执行 `npm run deploy` 遇到 remote `gh-pages` 分支冲突拒绝推送时，可使用强制推送命令：
> `npx gh-pages -d dist -f`

**✅ 线上访问地址**：
👉 **[https://grenvill-create.github.io/KidsBooksReading/](https://grenvill-create.github.io/KidsBooksReading/)**

---

## 🦒 数据更新与新增绘本工作流

### 如何修改已有绘本数据
1. 所有绘本的音频路径、词汇本、句子打点数据集中管理在：
   [booksData.js](file:///g:/antigravity%20files/KidsBooksReading/src/data/booksData.js)
2. 您可以在本地启动 `npm run dev`，在「家长控制面板」中直接可视化修改时间轴或翻译，点击保存。保存操作会通过本地 `vite-transform` 拦截 API 直接修改本地的 `booksData.js` 文件。

### 如何给绘本添加新配图
1. 准备 PNG 或 WebP 格式的插图，按规则命名：
   `public/illustrations/[书本前缀]_s[句子序号].png` (例如：`hyena_s12.png` 和 `hyena_s12.webp`)
2. 在 [Reader.jsx](file:///g:/antigravity%20files/KidsBooksReading/src/components/Reader.jsx) 的第 60-64 行的 `getIllustrationSrc` 别名映射函数中，添加新书的前缀匹配。
3. 执行 `npm run deploy` 重新构建并推送到线上即可。
