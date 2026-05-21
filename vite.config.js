import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/KidsBooksReading/',
  plugins: [
    react(),
    {
      name: 'save-books-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/save-books' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                const { bookId, sentences } = data;
                
                const dbPath = path.resolve(process.cwd(), 'src/data/booksData.js');
                let content = fs.readFileSync(dbPath, 'utf-8');
                
                // Generate formatted JS sentence array
                const formattedList = sentences.map(s => {
                  const words_js = "[" + s.words.map(w => `"${w}"`).join(', ') + "]";
                  return `      {
        id: "${s.id}",
        text: "${s.text.replace(/"/g, '\\"')}",
        translation: "${s.translation}",
        audioStart: ${s.audioStart},
        audioEnd: ${s.audioEnd},
        grammarNote: "${s.grammarNote.replace(/"/g, '\\"')}",
        words: ${words_js}
      }`;
                });
                
                const sentences_js_block = "sentences: [\n" + formattedList.join(',\n') + "\n    ]";
                
                // Replace within the specific book's block
                const bookStartIdx = content.indexOf(`id: "${bookId}"`);
                if (bookStartIdx !== -1) {
                  const quizzesIdx = content.indexOf('quizzes:', bookStartIdx);
                  if (quizzesIdx !== -1) {
                    const bookBlock = content.substring(bookStartIdx, quizzesIdx);
                    const sentencesPattern = /sentences:\s*\[[\s\S]*?\n\s*\]\s*,/;
                    const newBookBlock = bookBlock.replace(sentencesPattern, sentences_js_block + ",");
                    content = content.substring(0, bookStartIdx) + newBookBlock + content.substring(quizzesIdx);
                  }
                } else {
                  // Fallback
                  const fallbackPattern = /sentences:\s*\[[\s\S]*?\n\s*\]\s*,\s*\n\s*quizzes:/;
                  content = content.replace(fallbackPattern, sentences_js_block + ",\n    quizzes:");
                }
                
                fs.writeFileSync(dbPath, content, 'utf-8');
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Saved successfully!' }));
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
})

