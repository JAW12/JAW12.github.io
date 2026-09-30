#!/usr/bin/env node
/**
 * delete-original-images.js
 * Setelah convert-webp.js & update-refs-to-webp.js selesai,
 * hapus file .png/.jpg asli yang sudah ada versi .webp-nya.
 *
 * Usage: node scripts/delete-original-images.js
 * Usage (dry run): node scripts/delete-original-images.js --dry-run
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const ASSETS_DIR = path.join(PROJECT_ROOT, "public", "assets");

const DRY_RUN = process.argv.includes("--dry-run");

if (DRY_RUN) {
  console.log("=== DRY RUN — tidak ada yang dihapus ===\n");
} else {
  console.log("=== Menghapus original images yang sudah ada .webp-nya ===\n");
}

// File yang JANGAN dihapus meski ada webp (misalnya yang masih perlu format asli)
const KEEP_ORIGINALS = [];

let deleted = 0;
let kept = 0;
let totalSavedBytes = 0;

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

function main() {
  const allFiles = walkDir(ASSETS_DIR);

  for (const filePath of allFiles) {
    const ext = path.extname(filePath).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const basename = path.basename(filePath);

    if (!fs.existsSync(webpPath)) {
      kept++;
      continue;
    }

    if (KEEP_ORIGINALS.includes(basename)) {
      console.log(`  [KEEP] ${path.relative(ASSETS_DIR, filePath)} (in KEEP_ORIGINALS)`);
      kept++;
      continue;
    }

    const size = fs.statSync(filePath).size;
    const relPath = path.relative(ASSETS_DIR, filePath);

    if (DRY_RUN) {
      console.log(`  [WOULD DELETE] ${relPath} (${(size / 1024).toFixed(0)}KB)`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`  [DEL] ${relPath} (${(size / 1024).toFixed(0)}KB)`);
    }

    totalSavedBytes += size;
    deleted++;
  }

  const savedMB = (totalSavedBytes / 1024 / 1024).toFixed(1);
  console.log("\n=== Done ===");
  console.log(`  ${DRY_RUN ? "Would delete" : "Deleted"} : ${deleted} files`);
  console.log(`  Kept        : ${kept} files (no .webp equivalent)`);
  console.log(`  Space freed : ${savedMB} MB`);
}

main();
