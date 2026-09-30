#!/bin/bash
# compress-videos.sh
# Compress semua .mp4 di public/assets menggunakan ffmpeg H.264 CRF 26
# Output lebih kecil 50-80% dengan kualitas visual yang tetap tajam
#
# Usage: bash scripts/compress-videos.sh
# Requires: ffmpeg (sudo apt-get install ffmpeg)

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$PROJECT_ROOT/public"

if ! command -v ffmpeg &>/dev/null; then
  echo "ERROR: ffmpeg tidak ditemukan. Install dengan: sudo apt-get install ffmpeg"
  exit 1
fi

echo "=== Compress MP4 Videos (CRF 26, H.264, faststart) ==="
BEFORE=$(du -sb "$PUBLIC_DIR/assets" | awk '{print $1}')

find "$PUBLIC_DIR/assets" -name "*.mp4" | while read -r input; do
  original_size=$(stat -c%s "$input")
  tmp="${input%.mp4}_tmp_compressed.mp4"

  echo "→ $(basename "$input") ($(numfmt --to=iec "$original_size"))"

  ffmpeg -i "$input" \
    -c:v libx264 -crf 26 -preset slow \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    -y "$tmp" 2>&1 | grep -E "size=|time=|speed=" | tail -1

  new_size=$(stat -c%s "$tmp")

  if [ "$new_size" -lt "$original_size" ]; then
    saved=$(( (original_size - new_size) * 100 / original_size ))
    echo "  ✓ $(numfmt --to=iec "$original_size") → $(numfmt --to=iec "$new_size") (-${saved}%)"
    mv "$tmp" "$input"
  else
    echo "  ✗ Already optimized, keeping original"
    rm "$tmp"
  fi
  echo ""
done

AFTER=$(du -sb "$PUBLIC_DIR/assets" | awk '{print $1}')
SAVED_MB=$(( (BEFORE - AFTER) / 1024 / 1024 ))
echo "=== Done === Saved: ~${SAVED_MB} MB total"
