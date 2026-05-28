/* src/App.jsx */
import React, { useState, useEffect } from 'react';
import { Star, Library as LibraryIcon, Award, Heart, HelpCircle } from 'lucide-react';
import Library from './components/Library';
import Reader from './components/Reader';
import ParentDashboard from './components/ParentDashboard';
import { booksData } from './data/booksData';

function App() {
  const [currentScreen, setCurrentScreen] = useState('library'); // 'library' | 'reader' | 'parent-tools'
  const [selectedBook, setSelectedBook] = useState(null);
  const [starsCount, setStarsCount] = useState(() => {
    const saved = localStorage.getItem('kids_english_stars');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [booksList, setBooksList] = useState(() => {
    return booksData.map(book => {
      const savedData = localStorage.getItem(`kids_books_custom_${book.id}`);
      if (savedData) {
        try {
          const customSentences = JSON.parse(savedData);
          if (Array.isArray(customSentences) && customSentences.length > 0) {
            return {
              ...book,
              sentences: customSentences
            };
          }
        } catch (e) {
          console.error("Error parsing custom sentences for " + book.id, e);
        }
      }
      return book;
    });
  });

  useEffect(() => {
    localStorage.setItem('kids_english_stars', starsCount.toString());
  }, [starsCount]);

  const handleEarnStars = (amount) => {
    setStarsCount(prev => prev + amount);
  };

  const handleSelectBook = (book) => {
    const latestBook = booksList.find(b => b.id === book.id) || book;
    setSelectedBook(latestBook);
    setCurrentScreen('reader');
  };

  const handleOpenParentDashboard = () => {
    const latestBook = booksList.find(b => b.id === booksData[0].id) || booksData[0];
    setSelectedBook(latestBook);
    setCurrentScreen('parent-tools');
  };

  const handleBackToLibrary = () => {
    setCurrentScreen('library');
    setSelectedBook(null);
  };

  return (
    <div className="app-container">
      {/* Ambient Floating Shapes for Micro-Animations (Option 2) */}
      <div className="ambient-shape shape-1">⭐</div>
      <div className="ambient-shape shape-2">☁️</div>
      <div className="ambient-shape shape-3">🌙</div>
      <div className="ambient-shape shape-4">✨</div>

      {/* Playful App Header */}
      <header className="app-header">
        <div className="logo" onClick={handleBackToLibrary}>
          <span className="logo-emoji">🦒</span>
          <span className="logo-text">KidsEnglish</span>
        </div>

        <div className="header-actions">
          {currentScreen !== 'library' && (
            <button className="btn-bubble btn-secondary btn-sm" onClick={handleBackToLibrary}>
              <LibraryIcon size={16} /> 绘本馆首页
            </button>
          )}

          <div className="stat-badge gold animate-stars">
            <Star className="star-icon" size={18} style={{ fill: '#ffe483', stroke: '#dbba3f' }} />
            <span>{starsCount} 颗星</span>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="main-content">
        {currentScreen === 'library' && (
          <Library 
            onSelectBook={handleSelectBook} 
            onOpenParentDashboard={handleOpenParentDashboard}
            starsCount={starsCount}
            books={booksList}
          />
        )}

        {currentScreen === 'reader' && selectedBook && (
          <Reader 
            book={selectedBook}
            onBackToLibrary={handleBackToLibrary}
            onEarnStars={handleEarnStars}
          />
        )}

        {currentScreen === 'parent-tools' && selectedBook && (
          <ParentDashboard 
            book={selectedBook}
            onBackToLibrary={handleBackToLibrary}
            onUpdateBookSentences={(bookId, updatedSentences) => {
              // Save to LocalStorage
              localStorage.setItem(`kids_books_custom_${bookId}`, JSON.stringify(updatedSentences));
              // Update booksList state in App
              setBooksList(prev => prev.map(b => b.id === bookId ? { ...b, sentences: updatedSentences } : b));
              // Update selectedBook state
              setSelectedBook(prev => prev && prev.id === bookId ? { ...prev, sentences: updatedSentences } : prev);
            }}
            onResetBookSentences={(bookId) => {
              // Remove from LocalStorage
              localStorage.removeItem(`kids_books_custom_${bookId}`);
              // Restore default from static booksData
              const originalBook = booksData.find(b => b.id === bookId);
              if (originalBook) {
                setBooksList(prev => prev.map(b => b.id === bookId ? { ...originalBook } : b));
                setSelectedBook(originalBook);
              }
            }}
          />
        )}
      </main>

      {/* Cute Footer */}
      <footer className="app-footer">
        <p>Made with <Heart className="heart-icon" size={14} /> for curious little minds.</p>
        <p className="copyright">© 2026 KidsEnglish 绘本精读乐园 - Q弹马卡龙极速自适应马卡龙 3D 泡泡设计系统</p>
      </footer>

      <style>{`
        .app-footer {
          margin-top: 50px;
          padding: 24px 0 10px 0;
          text-align: center;
          border-top: 2px dashed var(--border-color);
          font-size: 13px;
          color: var(--text-light);
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-weight: 700;
        }
        .heart-icon {
          display: inline-block;
          fill: var(--color-pink);
          color: var(--color-pink);
          animation: beat 1.2s infinite;
        }
        .copyright {
          font-size: 11px;
          opacity: 0.8;
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-stars {
          animation: star-glow 2s infinite alternate;
        }
        @keyframes star-glow {
          0% { box-shadow: 0 4px 0 var(--color-yellow-shadow); }
          100% { box-shadow: 0 4px 15px rgba(255, 228, 131, 0.4), 0 4px 0 var(--color-yellow-shadow); }
        }
        .logo-emoji {
          font-size: 26px;
        }
        .logo-text {
          font-family: var(--font-kids);
          font-weight: 800;
          background: linear-gradient(135deg, var(--color-pink) 0%, var(--color-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default App;
