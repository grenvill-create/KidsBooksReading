// compress_images.mjs
// 批量压缩 public/illustrations/ 下的 PNG 图片
// 转为 WebP 格式，缩小尺寸到 800px 宽，质量 80%
// 运行方式: node compress_images.mjs

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const illustrationsDir = path.join(__dirname, 'public', 'illustrations');

const pngFiles = fs.readdirSync(illustrationsDir).filter(f => f.endsWith('.png'));

console.log(`找到 ${pngFiles.length} 张 PNG 图片，开始压缩转换为 WebP...\n`);

let totalOriginalSize = 0;
let totalNewSize = 0;

for (const file of pngFiles) {
  const inputPath = path.join(illustrationsDir, file);
  const outputFile = file.replace('.png', '.webp');
  const outputPath = path.join(illustrationsDir, outputFile);

  const originalSize = fs.statSync(inputPath).size;
  totalOriginalSize += originalSize;

  await sharp(inputPath)
    .resize({ width: 800, withoutEnlargement: true }) // 限制最大宽度 800px，不放大小图
    .webp({ quality: 80 })                             // WebP 格式，质量 80%
    .toFile(outputPath);

  const newSize = fs.statSync(outputPath).size;
  totalNewSize += newSize;

  const saved = Math.round((1 - newSize / originalSize) * 100);
  console.log(`✅ ${file.padEnd(20)} ${Math.round(originalSize/1024)}KB → ${Math.round(newSize/1024)}KB (缩小了 ${saved}%)`);
}

console.log(`\n🎉 全部完成！`);
console.log(`原始总体积：${Math.round(totalOriginalSize/1024)}KB`);
console.log(`压缩后总体积：${Math.round(totalNewSize/1024)}KB`);
console.log(`节省了：${Math.round((1 - totalNewSize/totalOriginalSize)*100)}% 的空间`);
