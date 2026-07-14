/* src/components/Library.jsx */
import React from 'react';
import { BookOpen, Settings, Star, Award, Sparkles } from 'lucide-react';
import { booksData } from '../data/booksData';

export default function Library({ onSelectBook, onOpenParentDashboard, starsCount, books = booksData }) {
  const getBookCoverSrc = (bookId, format = 'png') => {
    const rawPath = `covers/${bookId}.${format}`;
    const pathname = window.location.pathname;
    const pathSegments = pathname.split('/').filter(Boolean);
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (!isLocalhost && pathSegments.length > 0) {
      const repoName = pathSegments[0];
      if (!repoName.includes('.')) {
        return `${window.location.origin}/${repoName}/${rawPath}`;
      }
    }
    return rawPath;
  };

  return (
    <div className="library-container">
      <div className="library-hero bubble-card" style={{ background: 'linear-gradient(135deg, #fffcf0 0%, #fff6d6 100%)', bordercolor: 'var(--color-yellow)' }}>
        <div className="library-hero-content">
          <h1>长颈鹿英文绘本乐园 🦒</h1>
          <p className="subtitle">通过“音频切片 + 渐进式互动精读”，轻松快乐地跟着原版音频开口说英文吧！</p>
          <div className="library-stats">
            <div className="stat-badge gold">
              <Star className="icon fill-current" size={20} style={{ fill: '#ffc107', stroke: '#e0a100' }} />
              <span>我的星星: {starsCount}</span>
            </div>
            <div className="stat-badge" style={{ color: 'var(--color-pink)', borderColor: 'var(--color-pink)' }}>
              <Award className="icon" size={20} />
              <span>已读完绘本: {starsCount >= 3 ? 1 : 0} 本</span>
            </div>
          </div>
        </div>
        <div className="library-hero-action">
          <button className="btn-bubble btn-yellow" onClick={onOpenParentDashboard}>
            <Settings size={20} />
            家长控制与音频打点工具
          </button>
        </div>
      </div>

      <h2 className="section-title">📚 绘本小书架</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card bubble-card" style={{ '--card-color': book.coverColor }}>
            <div className="book-badge" style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}>
              难度 {book.difficulty}
            </div>
            <div className="book-age">{book.ageGroup}</div>
            
            <div className="book-cover-container">
              <picture>
                <source srcSet={getBookCoverSrc(book.id, 'webp')} type="image/webp" />
                <img 
                  src={getBookCoverSrc(book.id, 'png')} 
                  alt={book.title} 
                  className="book-cover-img" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </picture>
              <div className="book-cover-badge-emoji">{book.coverEmoji}</div>
            </div>

            <h3 className="book-title">{book.title}</h3>
            <p className="book-desc">{book.summary}</p>
            
            <div className="book-meta">
              <span className="sentence-count">🔢 共 {book.sentences.length} 句话</span>
              <span className="quiz-count">❓ {book.quizzes.length} 道读后趣味题</span>
            </div>

            <button className="btn-bubble btn-pink w-full" onClick={() => onSelectBook(book)}>
              <BookOpen size={20} />
              开始学习之旅
            </button>
          </div>
        ))}

        {/* Placeholder cards to make the library look like a rich premium system */}
        <div className="book-card bubble-card placeholder-card">
          <div className="book-badge" style={{ backgroundColor: 'var(--color-lilac)', color: '#fff' }}>
            即将推出
          </div>
          <div className="book-cover-emoji" style={{ opacity: 0.5 }}>🦁🌲📖</div>
          <h3 className="book-title" style={{ opacity: 0.6 }}>The Lion's Treehouse</h3>
          <p className="book-desc" style={{ opacity: 0.6 }}>小狮子列奥要在百亩森林里建造一个世界上最酷的树屋，他会遇到哪些奇妙的森林小动物呢？</p>
          <button className="btn-bubble btn-secondary w-full" disabled style={{ cursor: 'not-allowed', opacity: 0.7 }}>
            敬请期待
          </button>
        </div>

        <div className="book-card bubble-card placeholder-card">
          <div className="book-badge" style={{ backgroundColor: 'var(--color-orange)', color: '#fff' }}>
            即将推出
          </div>
          <div className="book-cover-emoji" style={{ opacity: 0.5 }}>🦊🌈🎒</div>
          <h3 className="book-title" style={{ opacity: 0.6 }}>Felix and the Rainbow Backpack</h3>
          <p className="book-desc" style={{ opacity: 0.6 }}>小狐狸菲力克斯得到了一个神奇的彩虹背包，装进背包的物品都会变成有趣的彩虹颜色！</p>
          <button className="btn-bubble btn-secondary w-full" disabled style={{ cursor: 'not-allowed', opacity: 0.7 }}>
            敬请期待
          </button>
        </div>
      </div>
      
      <style>{`
        .library-container {
          padding: 10px 0;
        }
        .library-hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 36px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 24px;
        }
        .library-hero-content h1 {
          font-size: 38px;
          color: var(--text-dark);
          margin: 0 0 10px 0;
          text-align: left;
        }
        .library-hero-content .subtitle {
          font-size: 16px;
          color: var(--text-medium);
          margin-bottom: 20px;
          text-align: left;
          max-width: 700px;
        }
        .library-stats {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .section-title {
          font-size: 26px;
          margin-bottom: 24px;
          text-align: left;
          color: var(--text-dark);
        }
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
          margin-bottom: 40px;
        }
        .book-card {
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 420px;
          text-align: left;
          background: #fff;
          border: 3px solid var(--border-color);
        }
        .book-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 6px 12px;
          border-radius: var(--border-radius-badge);
          font-weight: 700;
          font-size: 14px;
        }
        .book-age {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 14px;
          color: var(--text-light);
          font-weight: 700;
        }
        .book-cover-emoji {
          font-size: 64px;
          text-align: center;
          margin: 40px 0 20px 0;
          user-select: none;
          transition: var(--transition-bounce);
        }
        .book-card:hover .book-cover-emoji {
          transform: scale(1.15) rotate(-5deg);
        }
        .book-cover-container {
          height: 180px;
          margin-top: 40px;
          margin-bottom: 20px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, #ebf6ff 0%, #d8e8f7 100%);
          border: 2px solid var(--border-color);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }
        .book-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-bounce);
        }
        .book-card:hover .book-cover-img {
          transform: scale(1.06);
        }
        .book-cover-badge-emoji {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: white;
          border: 2px solid var(--border-color);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 0 var(--border-color);
          user-select: none;
          transition: var(--transition-bounce);
        }
        .book-card:hover .book-cover-badge-emoji {
          transform: scale(1.15) rotate(-10deg);
        }
        .book-title {
          font-size: 22px;
          color: var(--text-dark);
          margin-bottom: 12px;
          font-weight: 700;
        }
        .book-desc {
          font-size: 14px;
          color: var(--text-medium);
          line-height: 1.5;
          flex-grow: 1;
          margin-bottom: 20px;
        }
        .book-meta {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: 20px;
          font-weight: 600;
          border-top: 2px dashed var(--border-color);
          padding-top: 14px;
        }
        .placeholder-card {
          background: rgba(255, 255, 255, 0.5);
          border-style: dashed;
        }
        .w-full {
          width: 100%;
        }
        @media (max-width: 768px) {
          .library-hero {
            flex-direction: column;
            align-items: stretch;
            padding: 24px;
          }
          .library-hero-content h1 {
            font-size: 28px;
          }
          .library-hero-action {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}
