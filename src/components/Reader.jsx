/* src/components/Reader.jsx */
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, HelpCircle, Star, Award, CheckCircle, ArrowRight, Volume2 } from 'lucide-react';

export default function Reader({ book, onBackToLibrary, onEarnStars }) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentStage, setCurrentStage] = useState('listen'); // 'listen' | 'analyze' | 'vocab' | 'confirm'
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null); // Selected word for bubble popup
  const [completedSentences, setCompletedSentences] = useState(new Set());
  
  // Quiz State
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({}); // { quizId: index }
  const [quizFeedback, setQuizFeedback] = useState(null); // 'correct' | 'incorrect' | null
  const [quizFinished, setQuizFinished] = useState(false);

  // Confetti particles state
  const [confetti, setConfetti] = useState([]);

  const audioRef = useRef(null);
  const timeUpdateInterval = useRef(null);

  const currentSentence = book.sentences[currentSentenceIndex];

  // Helper to trigger voice pronunciation of individual words using Web Speech API
  const speakWord = (wordText) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(wordText);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // slightly slower for kids
      window.speechSynthesis.speak(utterance);
    }
  };

  // Manage custom confetti burst
  const triggerConfetti = () => {
    const particles = [];
    const colors = ['#ff8fb1', '#7dc4ff', '#8ce7bb', '#ffe483', '#d3b3ff', '#ffb77d'];
    for (let i = 0; i < 60; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100,
        size: Math.random() * 12 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        duration: Math.random() * 1.5 + 1
      });
    }
    setConfetti(particles);
    // Clear after animation
    setTimeout(() => setConfetti([]), 2500);
  };

  // Play audio segment
  const playSegment = () => {
    if (!audioRef.current) return;
    
    // Position to start of sentence
    audioRef.current.currentTime = currentSentence.audioStart;
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(err => {
        console.log("Audio play blocked/failed:", err);
      });
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || !isPlaying) return;
    const current = audioRef.current.currentTime;
    
    // Check if we hit the end of the current sentence segment
    if (current >= currentSentence.audioEnd) {
      pauseAudio();
      // Auto move to Stage 2: Analyze
      setCurrentStage('analyze');
      // Mark current sentence as completed
      setCompletedSentences(prev => {
        const next = new Set(prev);
        next.add(currentSentenceIndex);
        return next;
      });
    }
  };

  // Keep monitoring audio time accurately
  useEffect(() => {
    if (isPlaying) {
      timeUpdateInterval.current = setInterval(handleTimeUpdate, 50);
    } else {
      if (timeUpdateInterval.current) {
        clearInterval(timeUpdateInterval.current);
      }
    }
    return () => {
      if (timeUpdateInterval.current) {
        clearInterval(timeUpdateInterval.current);
      }
    };
  }, [isPlaying, currentSentenceIndex]);

  // When changing sentence, reset stages
  const goToSentence = (index) => {
    pauseAudio();
    setCurrentSentenceIndex(index);
    setCurrentStage('listen');
    setSelectedWord(null);
    setIsPlaying(false);
  };

  // Handle Stage Transiting
  const nextStage = () => {
    if (currentStage === 'listen') {
      setCurrentStage('analyze');
    } else if (currentStage === 'analyze') {
      setCurrentStage('vocab');
    } else if (currentStage === 'vocab') {
      setCurrentStage('confirm');
    } else if (currentStage === 'confirm') {
      // Move to next sentence or enter quiz
      if (currentSentenceIndex < book.sentences.length - 1) {
        goToSentence(currentSentenceIndex + 1);
      } else {
        // Book finished, enter quiz playground!
        setShowQuiz(true);
        triggerConfetti();
      }
    }
  };

  const prevSentence = () => {
    if (currentSentenceIndex > 0) {
      goToSentence(currentSentenceIndex - 1);
    }
  };

  const nextSentence = () => {
    if (currentSentenceIndex < book.sentences.length - 1) {
      goToSentence(currentSentenceIndex + 1);
    } else {
      setShowQuiz(true);
    }
  };

  // Handles Quiz option clicked
  const handleQuizAnswer = (quiz, option, optionIndex) => {
    if (quizFeedback !== null) return; // Wait for feedback to reset
    
    const isCorrect = option.isCorrect;
    setQuizAnswers(prev => ({ ...prev, [quiz.id]: optionIndex }));
    
    if (isCorrect) {
      setQuizFeedback('correct');
      triggerConfetti();
      // Earn a star
      onEarnStars(1);
      setTimeout(() => {
        setQuizFeedback(null);
        if (currentQuizIndex < book.quizzes.length - 1) {
          setCurrentQuizIndex(prev => prev + 1);
        } else {
          setQuizFinished(true);
          triggerConfetti();
          onEarnStars(5); // bonus stars for finishing
        }
      }, 1800);
    } else {
      setQuizFeedback('incorrect');
      // Shake animation effect, then reset feedback
      setTimeout(() => {
        setQuizFeedback(null);
      }, 1500);
    }
  };

  // Renders clickable words from sentence
  const renderInteractiveSentenceText = (text) => {
    // Clean punctuation but keep words
    const wordsArray = text.split(' ');
    return wordsArray.map((rawWord, idx) => {
      const cleanWord = rawWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g, "").toLowerCase();
      // Check if word is key vocabulary defined in booksData
      const isKeyVocab = book.words[cleanWord] !== undefined;
      const isActive = selectedWord && selectedWord.name === cleanWord;
      
      return (
        <span
          key={idx}
          className={`word-clickable ${isKeyVocab ? 'key-vocab-highlight' : ''} ${isActive ? 'word-reading-active' : ''}`}
          onClick={() => {
            speakWord(cleanWord);
            if (isKeyVocab) {
              setSelectedWord({
                name: cleanWord,
                ...book.words[cleanWord]
              });
              // Jump to vocab stage automatically if not already there
              if (currentStage === 'listen' || currentStage === 'analyze') {
                setCurrentStage('vocab');
              }
            } else {
              setSelectedWord({
                name: cleanWord,
                translation: "普通单词，跟着音频一起读吧！",
                phonetic: "",
                emoji: "✏️",
                example: rawWord
              });
            }
          }}
        >
          {rawWord}{' '}
        </span>
      );
    });
  };

  return (
    <div className="reader-container">
      {/* Invisible HTML5 Audio Tag */}
      <audio 
        ref={audioRef} 
        src={import.meta.env.BASE_URL + book.audioUrl} 
        preload="auto"
      />

      {/* Confetti canvas simulator */}
      {confetti.map(p => (
        <div 
          key={p.id} 
          className="sparkle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.size % 2 === 0 ? '50%' : '20%',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}

      {/* Header bar */}
      <div className="reader-header">
        <button className="btn-bubble btn-secondary btn-sm" onClick={onBackToLibrary}>
          <ChevronLeft size={16} /> 📚 绘本馆
        </button>
        <div className="reader-title-area">
          <span className="emoji-badge">{book.coverEmoji}</span>
          <span className="book-title-text">{book.title}</span>
        </div>
        <div className="progress-pills">
          {book.sentences.map((_, index) => (
            <div 
              key={index} 
              className={`progress-pill ${index === currentSentenceIndex ? 'active' : ''} ${completedSentences.has(index) ? 'completed' : ''}`}
              onClick={() => goToSentence(index)}
              title={`第 ${index + 1} 句`}
            />
          ))}
        </div>
      </div>

      {!showQuiz ? (
        <div className="reader-layout">
          {/* Left panel: Book Illustration & Sentence Container */}
          <div className="book-main-panel bubble-card">
            <div className="illustration-placeholder">
              <span className="illustration-emoji">
                {currentSentence.words && currentSentence.words.length > 0 && book.words[currentSentence.words[0]]
                  ? book.words[currentSentence.words[0]].emoji
                  : book.coverEmoji
                }
              </span>
              <div className="illustration-caption">🦒 Giraffe's Bathtub World 🛁</div>
            </div>

            <div className="sentence-display-box">
              <p className="sentence-en">
                {renderInteractiveSentenceText(currentSentence.text)}
              </p>
              
              {/* Show translation depending on stage */}
              {(currentStage !== 'listen') && (
                <p className="sentence-zh animate-slide-up">
                  {currentSentence.translation}
                </p>
              )}
            </div>

            {/* Micro Audio Progress Bar for this sentence */}
            <div className="sentence-audio-progress-bar">
              <div 
                className="sentence-audio-progress-fill" 
                style={{ 
                  width: `${audioRef.current && isPlaying 
                    ? Math.min(100, Math.max(0, ((audioRef.current.currentTime - currentSentence.audioStart) / (currentSentence.audioEnd - currentSentence.audioStart)) * 100))
                    : 0}%` 
                }}
              />
            </div>

            {/* Quick Action Navigation bar */}
            <div className="sentence-nav-bar">
              <button 
                className="btn-bubble btn-secondary btn-round" 
                onClick={prevSentence}
                disabled={currentSentenceIndex === 0}
                style={{ opacity: currentSentenceIndex === 0 ? 0.5 : 1 }}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="audio-control-pills">
                <button 
                  className={`btn-bubble ${isPlaying ? 'btn-yellow' : 'btn-pink'} btn-round-lg`}
                  onClick={isPlaying ? pauseAudio : playSegment}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: 3 }} />}
                </button>
                <button className="btn-bubble btn-blue btn-round" onClick={playSegment}>
                  <RotateCcw size={18} />
                </button>
              </div>

              <button 
                className="btn-bubble btn-secondary btn-round" 
                onClick={nextSentence}
                disabled={currentSentenceIndex === book.sentences.length - 1}
                style={{ opacity: currentSentenceIndex === book.sentences.length - 1 ? 0.5 : 1 }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right panel: 4-Stage Guided Reading Widget */}
          <div className="guided-panel bubble-card">
            <h3 className="panel-title">⭐ 宝贝精读向导</h3>
            
            <div className="stages-indicator">
              <div className={`stage-step ${currentStage === 'listen' ? 'active' : ''} ${completedSentences.has(currentSentenceIndex) ? 'done' : ''}`}>听</div>
              <div className="stage-arrow">➔</div>
              <div className={`stage-step ${currentStage === 'analyze' ? 'active' : ''}`}>析</div>
              <div className="stage-arrow">➔</div>
              <div className={`stage-step ${currentStage === 'vocab' ? 'active' : ''}`}>词</div>
              <div className="stage-arrow">➔</div>
              <div className={`stage-step ${currentStage === 'confirm' ? 'active' : ''}`}>确</div>
            </div>

            <div className="stage-content-area">
              {currentStage === 'listen' && (
                <div className="stage-instruction animate-fade-in">
                  <div className="stage-emoji">🎧</div>
                  <h4>第一步：静心倾听句子发音</h4>
                  <p>点击中间粉色的 <b>“播放按钮”</b> 开始听原版配音，可以用手指指着单词，跟着声调小声哼读哦！</p>
                  <button className="btn-bubble btn-pink btn-sm mt-16" onClick={playSegment}>
                    <Play size={16} /> 播放这段音频
                  </button>
                </div>
              )}

              {currentStage === 'analyze' && (
                <div className="stage-instruction animate-fade-in">
                  <div className="stage-emoji">💡</div>
                  <h4>第二步：句子结构拆解分析</h4>
                  <p className="grammar-tip-title">💡 语法句式小点拨：</p>
                  <div className="grammar-note-box">
                    {currentSentence.grammarNote || "这是一个简单好玩的日常口语表达，跟着长颈鹿一起学起来吧！"}
                  </div>
                  <button className="btn-bubble btn-blue btn-sm mt-16" onClick={nextStage}>
                    分析完毕，学词汇 ➔
                  </button>
                </div>
              )}

              {currentStage === 'vocab' && (
                <div className="stage-instruction animate-fade-in">
                  <div className="stage-emoji">🎒</div>
                  <h4>第三步：点击核心单词查释义</h4>
                  <p className="instruction-small">点击下方气泡单词或句子中的发亮单词，听听看它的正确读音：</p>
                  
                  {/* Quick word lists */}
                  <div className="key-words-bubble-container">
                    {currentSentence.words && currentSentence.words.length > 0 ? (
                      currentSentence.words.map(wName => {
                        const wData = book.words[wName];
                        if (!wData) return null;
                        return (
                          <button 
                            key={wName} 
                            className={`vocab-bubble-btn ${selectedWord && selectedWord.name === wName ? 'active' : ''}`}
                            onClick={() => {
                              speakWord(wName);
                              setSelectedWord({ name: wName, ...wData });
                            }}
                          >
                            <span>{wData.emoji} {wName}</span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="no-vocab-notice">本句没有核心词汇，可以点击任意单词探索发音！</div>
                    )}
                  </div>

                  {/* Word Details Pop Up inside panel */}
                  {selectedWord && (
                    <div className="selected-vocab-detail bubble-card animate-slide-up" style={{ borderLeft: '6px solid var(--color-pink)' }}>
                      <div className="vocab-detail-header">
                        <span className="vocab-emoji">{selectedWord.emoji}</span>
                        <div className="vocab-text-group">
                          <span className="vocab-title">{selectedWord.name}</span>
                          <span className="vocab-phonetic">{selectedWord.phonetic}</span>
                        </div>
                        <button className="vocab-audio-btn btn-round" onClick={() => speakWord(selectedWord.name)}>
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <p className="vocab-translation">📚 释义：<b>{selectedWord.translation}</b></p>
                      <p className="vocab-example">✏️ 例句：{selectedWord.example}</p>
                    </div>
                  )}

                  <button className="btn-bubble btn-mint btn-sm mt-16" onClick={nextStage}>
                    掌握了，去确认 ➔
                  </button>
                </div>
              )}

              {currentStage === 'confirm' && (
                <div className="stage-instruction animate-fade-in">
                  <div className="stage-emoji">✅</div>
                  <h4>第四步：宝贝确认与打卡</h4>
                  <p>太棒了！这句英语我们已经完成了“听、析、词”的精读，你是不是已经完全掌握啦？大声读一遍，然后打卡进入下一步吧！</p>
                  
                  <button className="btn-bubble btn-pink btn-bounce-effect mt-24" onClick={nextStage}>
                    <CheckCircle size={22} /> 我学会啦！下一句 ➔
                  </button>
                </div>
              )}
            </div>
            
            <div className="stage-bottom-nav">
              <span className="text-light-sm">已掌握 {completedSentences.size} / {book.sentences.length} 句</span>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Playground Panel */
        <div className="quiz-playground bubble-card animate-scale-up">
          {!quizFinished ? (
            <div className="quiz-card-content">
              <div className="quiz-header">
                <span className="quiz-stars-earned"><Star size={20} className="fill-current text-yellow" style={{ fill: '#ffe483', stroke: '#dbba3f' }} /> 闯关中...</span>
                <h3>🎉 绘本趣味大作战 (第 {currentQuizIndex + 1} / {book.quizzes.length} 题)</h3>
              </div>

              <div className="quiz-question-box">
                <HelpCircle size={32} className="text-blue" style={{ color: 'var(--color-blue)' }} />
                <p className="question-text">{book.quizzes[currentQuizIndex].question}</p>
              </div>

              <div className="quiz-options-container">
                {book.quizzes[currentQuizIndex].options.map((option, idx) => {
                  const hasAnswered = quizAnswers[book.quizzes[currentQuizIndex].id] !== undefined;
                  const isSelected = quizAnswers[book.quizzes[currentQuizIndex].id] === idx;
                  let btnClass = 'btn-secondary';
                  if (isSelected) {
                    btnClass = option.isCorrect ? 'btn-mint' : 'btn-pink';
                  }

                  return (
                    <button 
                      key={idx}
                      className={`btn-bubble quiz-option-btn ${btnClass} ${quizFeedback === 'incorrect' && isSelected ? 'shake-element' : ''}`}
                      onClick={() => handleQuizAnswer(book.quizzes[currentQuizIndex], option, idx)}
                      disabled={hasAnswered && !isSelected}
                    >
                      {option.text}
                    </button>
                  );
                })}
              </div>

              {quizFeedback === 'correct' && (
                <div className="quiz-feedback-banner correct animate-fade-in">
                  🎉 答对啦！太聪明了！获得一颗小星星！ ⭐ +1
                </div>
              )}

              {quizFeedback === 'incorrect' && (
                <div className="quiz-feedback-banner incorrect animate-fade-in">
                  ❌ 哎呀，选错啦！没关系，再仔细想想哦！ 🦒
                </div>
              )}
            </div>
          ) : (
            /* Quiz finished / Book Completed Screen */
            <div className="book-completed-card animate-fade-in">
              <div className="completion-trophy">🏆</div>
              <h2>恭喜你，小勇士！</h2>
              <p>你完成了绘本<b>《{book.title}》</b>的全程精读和趣味答题！</p>
              
              <div className="reward-summary bubble-card" style={{ background: '#fff9eb', margin: '30px auto', maxWidth: '400px' }}>
                <h3>🎁 学习大丰收</h3>
                <div className="reward-item">
                  <Star size={24} style={{ fill: '#ffe483', stroke: '#dbba3f' }} />
                  <span>获得星星: +8 颗</span>
                </div>
                <div className="reward-item">
                  <Award size={24} style={{ color: 'var(--color-pink)' }} />
                  <span>解锁荣誉: 长颈鹿浴缸赛跑冠军 🦒🛁</span>
                </div>
              </div>

              <div className="completed-actions">
                <button className="btn-bubble btn-pink" onClick={onBackToLibrary}>
                  返回绘本馆书架
                </button>
                <button className="btn-bubble btn-secondary ml-16" onClick={() => {
                  setShowQuiz(false);
                  setCurrentQuizIndex(0);
                  setQuizFinished(false);
                  setQuizAnswers({});
                  goToSentence(0);
                }}>
                  重新精读一遍
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        .reader-container {
          padding: 10px 0;
          position: relative;
        }
        .reader-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-radius: var(--border-radius-bubble);
          border: 2px solid var(--border-color);
        }
        .btn-sm {
          padding: 8px 16px;
          font-size: 14px;
        }
        .reader-title-area {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .emoji-badge {
          font-size: 24px;
        }
        .book-title-text {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-dark);
        }
        .progress-pills {
          display: flex;
          gap: 4px;
          max-width: 320px;
          flex-wrap: wrap;
        }
        .progress-pill {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #e2e8f0;
          cursor: pointer;
          transition: var(--transition-bounce);
        }
        .progress-pill.active {
          background: var(--color-blue);
          transform: scale(1.3);
          box-shadow: 0 0 8px rgba(125, 196, 255, 0.6);
        }
        .progress-pill.completed {
          background: var(--color-mint);
        }
        .reader-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
        }
        .book-main-panel {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          background: #ffffff;
          padding: 24px;
          position: relative;
        }
        .illustration-placeholder {
          height: 260px;
          background: linear-gradient(135deg, #ebf6ff 0%, #d8e8f7 100%);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;
          border: 2px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }
        .illustration-emoji {
          font-size: 100px;
          animation: float-around 5s ease-in-out infinite alternate;
        }
        .illustration-caption {
          position: absolute;
          bottom: 12px;
          background: rgba(255, 255, 255, 0.8);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-medium);
        }
        .sentence-display-box {
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 10px;
          text-align: center;
        }
        .sentence-en {
          font-size: 24px;
          line-height: 1.6;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 12px;
        }
        .sentence-zh {
          font-size: 18px;
          font-weight: 600;
          color: var(--color-blue-shadow);
        }
        .key-vocab-highlight {
          color: var(--color-pink-hover);
          font-weight: 800;
          border-bottom: 2px dashed var(--color-pink);
        }
        .sentence-audio-progress-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          margin: 16px 0;
          overflow: hidden;
          position: relative;
        }
        .sentence-audio-progress-fill {
          height: 100%;
          background: var(--color-blue);
          border-radius: 4px;
          transition: width 0.05s linear;
        }
        .sentence-nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        .audio-control-pills {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-round {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-round-lg {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .guided-panel {
          background: #ffffff;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 520px;
        }
        .panel-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-dark);
          text-align: left;
          margin-bottom: 16px;
        }
        .stages-indicator {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f7fafc;
          padding: 10px 14px;
          border-radius: 16px;
          margin-bottom: 24px;
          border: 1px solid var(--border-color);
        }
        .stage-step {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          background: #e2e8f0;
          color: var(--text-medium);
          transition: var(--transition-bounce);
        }
        .stage-step.active {
          background: var(--color-pink);
          color: white;
          transform: scale(1.15);
          box-shadow: 0 4px 8px rgba(255, 143, 177, 0.4);
        }
        .stage-step.done {
          background: var(--color-mint);
          color: white;
        }
        .stage-arrow {
          font-size: 12px;
          color: var(--text-light);
          font-weight: 800;
        }
        .stage-content-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stage-instruction {
          width: 100%;
          text-align: center;
        }
        .stage-emoji {
          font-size: 48px;
          margin-bottom: 12px;
        }
        .stage-instruction h4 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 10px;
          color: var(--text-dark);
        }
        .stage-instruction p {
          font-size: 14px;
          color: var(--text-medium);
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .grammar-tip-title {
          font-weight: 700;
          color: var(--color-blue-shadow);
          text-align: left !important;
          margin-top: 14px;
        }
        .grammar-note-box {
          background: #f7fafc;
          border-radius: 16px;
          padding: 14px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-medium);
          text-align: left;
          border-left: 4px solid var(--color-blue);
        }
        .key-words-bubble-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin: 16px 0;
        }
        .vocab-bubble-btn {
          background: #fff;
          border: 2px solid var(--border-color);
          border-radius: 20px;
          padding: 8px 16px;
          font-family: var(--font-kids);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition-bounce);
          box-shadow: 0 4px 0 var(--border-color);
        }
        .vocab-bubble-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 0 var(--border-color);
          background-color: var(--bg-hover);
        }
        .vocab-bubble-btn.active {
          background: var(--color-pink);
          border-color: #ffeef2;
          color: #fff;
          box-shadow: 0 4px 0 var(--color-pink-shadow);
        }
        .selected-vocab-detail {
          background: #fffdf9;
          padding: 14px 18px;
          text-align: left;
          margin-top: 16px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
          border: 2px solid var(--border-color);
        }
        .vocab-detail-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .vocab-emoji {
          font-size: 26px;
        }
        .vocab-text-group {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .vocab-title {
          font-size: 18px;
          font-weight: 800;
          color: var(--text-dark);
        }
        .vocab-phonetic {
          font-size: 12px;
          color: var(--text-light);
          font-weight: 700;
        }
        .vocab-audio-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vocab-translation {
          font-size: 13.5px;
          color: var(--text-medium);
          margin-bottom: 6px;
        }
        .vocab-example {
          font-size: 12.5px;
          color: var(--text-light);
          font-style: italic;
        }
        .stage-bottom-nav {
          border-top: 1px dashed var(--border-color);
          padding-top: 12px;
          margin-top: 16px;
          text-align: center;
        }
        .text-light-sm {
          font-size: 12.5px;
          color: var(--text-light);
          font-weight: 700;
        }
        .quiz-playground {
          padding: 40px;
          background: #ffffff;
          max-width: 700px;
          margin: 30px auto;
        }
        .quiz-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .quiz-stars-earned {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          color: var(--color-orange-hover);
        }
        .quiz-question-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #f7fafc;
          padding: 24px;
          border-radius: 20px;
          border-left: 6px solid var(--color-blue);
          margin-bottom: 30px;
          text-align: left;
        }
        .question-text {
          font-size: 18px;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.5;
        }
        .quiz-options-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .quiz-option-btn {
          width: 100%;
          text-align: left;
          padding: 16px 24px;
          font-size: 16px;
        }
        .quiz-feedback-banner {
          margin-top: 24px;
          padding: 14px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 15px;
        }
        .quiz-feedback-banner.correct {
          background: #f0fdf4;
          color: var(--color-mint-hover);
          border: 2px solid var(--color-mint);
        }
        .quiz-feedback-banner.incorrect {
          background: #fff5f5;
          color: var(--color-pink-hover);
          border: 2px solid var(--color-pink);
        }
        .book-completed-card {
          text-align: center;
          padding: 20px 0;
        }
        .completion-trophy {
          font-size: 72px;
          animation: float-around 3s ease-in-out infinite alternate;
        }
        .reward-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 12px 0;
        }
        .ml-16 {
          margin-left: 16px;
        }
        .mt-16 {
          margin-top: 16px;
        }
        .mt-24 {
          margin-top: 24px;
        }
        
        /* Animations */
        @keyframes float-around {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pop-sparkle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .shake-element {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .btn-bounce-effect {
          animation: idle-bounce 2s infinite;
        }
        @keyframes idle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        @media (max-width: 992px) {
          .reader-layout {
            grid-template-columns: 1fr;
          }
          .guided-panel {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
