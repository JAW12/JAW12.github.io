#!/bin/bash
# extract-video-posters.sh
# Extract frame pertama dari setiap file .mp4 di public/assets sebagai poster image WebP
#
# Usage: bash scripts/extract-video-posters.sh
# Requires: ffmpeg

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$PROJECT_ROOT/public"

if ! command -v ffmpeg &>/dev/null; then
  echo "ERROR: ffmpeg tidak ditemukan. Install dengan: sudo apt-get install ffmpeg"
  exit 1
fi

echo "=== Extract Video Posters ==="
count=0

find "$PUBLIC_DIR/assets" -name "*.mp4" -o -name "*.webm" -o -name "*.mov" | while read -r video; do
  poster="${video%.*}-poster.webp"

  if [ -f "$poster" ]; then
    echo "  [SKIP] $(basename "$poster") sudah ada"
    continue
  fi

  echo "  [EXTRACT] $(basename "$video") → $(basename "$poster")"
  # -ss 0.5: ambil frame di detik ke-0.5 (hindari frame hitam di awal)
  # -vframes 1: hanya 1 frame
  # scale=1280:-2: resize ke 1280px lebar, tinggi auto
  ffmpeg -ss 0.5 -i "$video" \
    -vframes 1 \
    -vf "scale=1280:-2" \
    -q:v 80 \
    -y "$poster" 2>/dev/null && echo "    ✓ Done" || echo "    ✗ Failed"
  count=$((count + 1))
done

echo ""
echo "=== Selesai ==="
