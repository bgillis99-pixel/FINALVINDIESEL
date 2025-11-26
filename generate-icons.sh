#!/bin/bash

# Generate PNG icons from SVG or provided image
# This script requires imagemagick (convert command)

echo "Checking for imagemagick..."
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not installed. Please install it:"
    echo "   Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "   macOS: brew install imagemagick"
    exit 1
fi

# Check if user provided a custom icon
if [ -f "public/logo.png" ] || [ -f "public/logo.jpg" ]; then
    echo "📸 Using custom logo from public/logo.*"
    SOURCE=$(ls public/logo.png public/logo.jpg 2>/dev/null | head -1)
elif [ -f "public/icon.svg" ]; then
    echo "📐 Using SVG icon"
    SOURCE="public/icon.svg"
else
    echo "❌ No icon source found!"
    echo "Please add one of these files:"
    echo "  - public/logo.png (your custom logo)"
    echo "  - public/logo.jpg (your custom logo)"
    exit 1
fi

echo "🎨 Generating PWA icons..."

# Generate 192x192 icon
convert "$SOURCE" -resize 192x192 -background transparent -gravity center -extent 192x192 public/icon-192.png
echo "✅ Created icon-192.png"

# Generate 512x512 icon
convert "$SOURCE" -resize 512x512 -background transparent -gravity center -extent 512x512 public/icon-512.png
echo "✅ Created icon-512.png"

# Generate favicon
convert "$SOURCE" -resize 32x32 -background transparent -gravity center -extent 32x32 public/favicon.ico
echo "✅ Created favicon.ico"

# Generate apple-touch-icon
convert "$SOURCE" -resize 180x180 -background transparent -gravity center -extent 180x180 public/apple-touch-icon.png
echo "✅ Created apple-touch-icon.png"

echo ""
echo "🎉 All icons generated successfully!"
echo "📱 Your PWA will now show custom icons when:"
echo "   - Added to home screen (iOS/Android)"
echo "   - Shared on social media"
echo "   - Displayed in browser tabs"
