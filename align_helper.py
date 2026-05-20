# align_helper.py
import sys
import os
import json
import time
import re
from playwright.sync_api import sync_playwright

def main():
    print("Starting automated audio alignment using Playwright...")
    with sync_playwright() as p:
        # Launch browser headlessly. Chromium supports MP3 decoding natively.
        try:
            browser = p.chromium.launch(headless=True)
        except Exception as e:
            print(f"Chromium not found: {e}")
            print("Installing Playwright Chromium browser...")
            os.system("playwright install chromium")
            browser = p.chromium.launch(headless=True)
            
        page = browser.new_page()
        
        url = "http://localhost:5173/"
        print(f"Navigating to {url}...")
        try:
            page.goto(url)
        except Exception as e:
            print(f"Failed to navigate to {url}. Is the Vite server running? {e}")
            sys.exit(1)
        
        # Click the "家长控制与音频打点工具" button
        print("Clicking Parent Control panel button...")
        page.click("text=家长控制与音频打点工具")
        
        # Click the "开始智能分析音频打点" button
        print("Clicking '开始智能分析音频打点' button...")
        page.click("text=开始智能分析音频打点")
        
        # Wait for the analysis to finish (until window.__ALIGNED_SENTENCES__ is defined and not null)
        print("Waiting for Web Audio API silence detection to complete...")
        for _ in range(60): # timeout 30s
            aligned = page.evaluate("window.__ALIGNED_SENTENCES__")
            if aligned is not None:
                print(f"Success! Aligned sentences found: {len(aligned)}")
                break
            time.sleep(0.5)
        else:
            print("Error: Silence detection timed out!")
            browser.close()
            sys.exit(1)
            
        aligned_sentences = page.evaluate("window.__ALIGNED_SENTENCES__")
        browser.close()
        
        # Now update src/data/booksData.js
        db_path = "src/data/booksData.js"
        if not os.path.exists(db_path):
            print(f"Error: {db_path} not found!")
            sys.exit(1)
            
        print("Reading booksData.js...")
        with open(db_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Generate formatted JS sentence array
        formatted_list = []
        for s in aligned_sentences:
            words_js = "[" + ", ".join([f'"{w}"' for w in s['words']]) + "]"
            s_js = f"""      {{
        id: "{s['id']}",
        text: "{s['text'].replace('"', '\\"')}",
        translation: "{s['translation']}",
        audioStart: {s['audioStart']:.1f},
        audioEnd: {s['audioEnd']:.1f},
        grammarNote: "{s['grammarNote'].replace('"', '\\"')}",
        words: {words_js}
      }}"""
            formatted_list.append(s_js)
            
        sentences_js_block = "sentences: [\n" + ",\n".join(formatted_list) + "\n    ]"
        
        # Match pattern sentences: [ ... ], quizzes:
        pattern = r"sentences:\s*\[([\s\S]*?)\n\s*\]\s*,\s*\n\s*quizzes:"
        
        if re.search(pattern, content):
            new_content = re.sub(pattern, sentences_js_block + ",\n    quizzes:", content)
            with open(db_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print("Successfully updated booksData.js with new high-precision aligned timestamps!")
        else:
            print("Error: Could not locate sentences block in booksData.js via regex!")
            sys.exit(1)

if __name__ == "__main__":
    main()
