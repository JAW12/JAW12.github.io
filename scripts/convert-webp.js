#!/usr/bin/env node
/**
 * convert-webp.js
 * Konversi semua image PNG/JPG di public/assets ke WebP menggunakan sharp.
 * File asli tetap ada (tidak dihapus), referensi di source code diupdate otomatis.
 *
 * Usage: node scripts/convert-webp.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const ASSETS_DIR = path.join(PUBLIC_DIR, "assets");

// Kualitas WebP per kategori
const QUALITY_MAP = {
  certificates: 82, // dokumen harus tetap terbaca jelas
  avatar: 88,       // foto profil harus tajam
  default: 80,      // default semua gambar lainnya
};

// File yang SKIP konversi (gif animasi biarkan, atau file khusus)
const SKIP_EXTENSIONS = [".gif", ".svg", ".webp"];
const SKIP_FILES = []; // tambahkan nama file kalau ada yang perlu skip

let converted = 0;
let skipped = 0;
let errors = 0;
let totalSavedBytes = 0;

function getQuality(filePath) {
  if (filePath.includes("/certificates/")) return QUALITY_MAP.certificates;
  if (filePath.includes("/avatar/")) return QUALITY_MAP.avatar;
  return QUALITY_MAP.default;
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath);

  if (SKIP_EXTENSIONS.includes(ext)) return "skip_ext";
  if (SKIP_FILES.includes(basename)) return "skip_file";
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return "skip_ext";

  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  // Skip kalau webp sudah ada
  if (fs.existsSync(outputPath)) return "skip_exists";

  try {
    const inputStat = fs.statSync(inputPath);
    const quality = getQuality(inputPath);

    await sharp(inputPath)
      .webp({ quality, effort: 4 })
      .toFile(outputPath);

    const outputStat = fs.statSync(outputPath);
    const saved = inputStat.size - outputStat.size;
    totalSavedBytes += saved;

    const relPath = path.relative(PUBLIC_DIR, inputPath);
    const savedPct = Math.round((saved / inputStat.size) * 100);
    const savedLabel = saved > 0
      ? `saved ${(saved / 1024).toFixed(0)}KB (${savedPct}%)`
      : `grew ${Math.abs(saved / 1024).toFixed(0)}KB`;
    console.log(`  [OK] ${relPath} → .webp  ${savedLabel}`);
    return "converted";
  } catch (err) {
    console.error(`  [ERR] ${inputPath}: ${err.message}`);
    return "error";
  }
}

async function main() {
  console.log("=== WebP Conversion Script ===\n");

  if (!fs.existsSync(ASSETS_DIR)) {
    console.error("ERROR: assets dir not found:", ASSETS_DIR);
    process.exit(1);
  }

  const allFiles = walkDir(ASSETS_DIR);
  const imageFiles = allFiles.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return [".jpg", ".jpeg", ".png"].includes(ext);
  });

  console.log(`Found ${imageFiles.length} image files to process...\n`);

  for (const file of imageFiles) {
    const result = await convertToWebP(file);
    if (result === "converted") converted++;
    else if (result === "error") errors++;
    else skipped++;
  }

  const savedMB = (totalSavedBytes / 1024 / 1024).toFixed(1);
  console.log("\n=== Conversion Complete ===");
  console.log(`  Converted : ${converted}`);
  console.log(`  Skipped   : ${skipped}`);
  console.log(`  Errors    : ${errors}`);
  console.log(`  Total saved: ${savedMB} MB`);
  console.log("\nNext step: run 'node scripts/update-refs-to-webp.js' untuk update referensi di source code.");
}

main().catch(console.error);
