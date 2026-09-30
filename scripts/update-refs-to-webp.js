#!/usr/bin/env node
/**
 * update-refs-to-webp.js
 * Update semua referensi .png / .jpg / .jpeg di src/ ke .webp
 * HANYA update jika file .webp yang baru sudah ada.
 *
 * Usage: node scripts/update-refs-to-webp.js
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

// Pola file yang diproses
const SOURCE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".json", ".css"];

// Regex untuk menemukan path asset
const ASSET_PATH_REGEX = /(['"`])(\/?assets\/[^'"`\s]+\.(png|jpg|jpeg))(['"`])/gi;

let totalFilesChanged = 0;
let totalRefsUpdated = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  let refsUpdated = 0;

  const newContent = content.replace(ASSET_PATH_REGEX, (match, q1, assetPath, ext, q2) => {
    // Normalisasi path (tambahkan leading slash jika tidak ada)
    const normalizedPath = assetPath.startsWith("/") ? assetPath : "/" + assetPath;
    const webpPath = normalizedPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    const absoluteWebpPath = path.join(PUBLIC_DIR, webpPath);

    if (fs.existsSync(absoluteWebpPath)) {
      // Pertahankan format path asli (dengan atau tanpa leading slash)
      const newAssetPath = assetPath.startsWith("/") ? webpPath : webpPath.slice(1);
      changed = true;
      refsUpdated++;
      return `${q1}${newAssetPath}${q2}`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, newContent, "utf8");
    const relPath = path.relative(PROJECT_ROOT, filePath);
    console.log(`  [UPDATED] ${relPath} (${refsUpdated} refs)`);
    totalFilesChanged++;
    totalRefsUpdated += refsUpdated;
  }
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (SOURCE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function main() {
  console.log("=== Update Asset References to WebP ===\n");

  const sourceFiles = walkDir(SRC_DIR);
  console.log(`Processing ${sourceFiles.length} source files...\n`);

  for (const file of sourceFiles) {
    try {
      processFile(file);
    } catch (err) {
      console.error(`  [ERR] ${file}: ${err.message}`);
    }
  }

  console.log("\n=== Done ===");
  console.log(`  Files changed : ${totalFilesChanged}`);
  console.log(`  Refs updated  : ${totalRefsUpdated}`);
  if (totalRefsUpdated === 0) {
    console.log("\n  Tidak ada yang diupdate. Pastikan convert-webp.js sudah selesai dijalankan.");
  }
}

main();
