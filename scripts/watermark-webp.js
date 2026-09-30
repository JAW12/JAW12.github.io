const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT_DIR = path.join(__dirname, "..", "public", "assets");

// Recursively get all .webp files (excluding avatar)
function getAllWebpFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory() && item.name === "avatar") {
      continue; // Never watermark personal profile avatar
    }
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getAllWebpFiles(fullPath, fileList);
    } else if (item.name.toLowerCase().endsWith(".webp")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// Generate SVG watermark pattern tailored to image dimensions
function createWatermarkSvg(width, height) {
  // Dynamically scale font size relative to image resolution
  const minDim = Math.min(width, height);
  const fontSize = Math.max(14, Math.min(28, Math.round(minDim / 24)));
  const patternW = Math.round(fontSize * 13);
  const patternH = Math.round(fontSize * 4.5);

  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="wm" width="${patternW}" height="${patternH}" patternTransform="rotate(-28)" patternUnits="userSpaceOnUse">
          <text 
            x="${Math.round(patternW * 0.1)}" 
            y="${Math.round(patternH * 0.65)}" 
            fill="rgba(255, 255, 255, 0.22)" 
            stroke="rgba(0, 0, 0, 0.22)" 
            stroke-width="0.75" 
            font-size="${fontSize}px" 
            font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-weight="600" 
            letter-spacing="1.5px">
            Jem Angkasa Wijaya
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wm)" />
    </svg>
  `;
}

async function applyWatermark(filePath) {
  const metadata = await sharp(filePath).metadata();
  const width = metadata.width || 800;
  const height = metadata.height || 600;

  const svgString = createWatermarkSvg(width, height);
  const tempPath = `${filePath}.tmp.webp`;

  await sharp(filePath)
    .composite([
      {
        input: Buffer.from(svgString),
        top: 0,
        left: 0,
      },
    ])
    .webp({ quality: 82, effort: 4 })
    .toFile(tempPath);

  fs.renameSync(tempPath, filePath);
}

async function main() {
  console.log("=== Starting Watermark Application ===");
  const files = getAllWebpFiles(ROOT_DIR);
  console.log(`Found ${files.length} .webp files in ${ROOT_DIR}\n`);

  let successCount = 0;
  let failCount = 0;

  // Process in batches of 15
  const BATCH_SIZE = 15;
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (file) => {
        try {
          await applyWatermark(file);
          successCount++;
          const relPath = path.relative(ROOT_DIR, file);
          console.log(`[${successCount}/${files.length}] Watermarked: ${relPath}`);
        } catch (err) {
          failCount++;
          console.error(`[ERROR] Failed to watermark ${file}:`, err.message);
        }
      })
    );
  }

  console.log("\n=== Watermarking Completed ===");
  console.log(`Success: ${successCount}`);
  console.log(`Failed : ${failCount}`);
}

main().catch(console.error);
