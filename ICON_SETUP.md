# 🎨 App Icon Setup Guide

## Current Status
✅ Icon structure configured
⚠️  **Need custom logo/icon image**

## Quick Setup

### Option 1: Use Your Custom PNG (Recommended)

1. **Add your logo file** to the `public/` directory:
   ```bash
   # Copy your PNG/JPG to public/logo.png
   cp /path/to/your/logo.png public/logo.png
   ```

2. **Generate all icon sizes**:
   ```bash
   # Requires ImageMagick (install: brew install imagemagick)
   ./generate-icons.sh
   ```

3. **Verify** icons were created:
   ```bash
   ls public/icon*.png public/apple-touch-icon.png public/favicon.ico
   ```

### Option 2: Use Temporary SVG Icon

A temporary truck+checkmark SVG icon has been created at `public/icon.svg`. This will work but a custom PNG is better for branding.

## What Gets Generated

The script creates these files from your logo:

| File | Size | Used For |
|------|------|----------|
| `icon-192.png` | 192x192 | Android home screen, PWA |
| `icon-512.png` | 512x512 | Splash screens, high-res displays |
| `apple-touch-icon.png` | 180x180 | iOS home screen icon |
| `favicon.ico` | 32x32 | Browser tab icon |

## Logo Requirements

### Recommended:
- **Format**: PNG with transparent background
- **Size**: 512x512 or larger (square)
- **Design**: Simple, recognizable at small sizes
- **Colors**: Use brand colors (#003366 navy, #00C853 green)
- **Content**: Should work at 32x32 (favicon size)

### Examples of Good Logos:
- ✅ Truck icon with checkmark
- ✅ CARB text with diesel symbol
- ✅ California outline with truck
- ✅ Badge/shield design

### Avoid:
- ❌ Detailed photos (don't scale well)
- ❌ Thin lines (invisible at small sizes)
- ❌ Too much text (unreadable when small)
- ❌ Light colors on light background

## Where Icons Appear

### Mobile (Add to Home Screen)
- **iOS**: Uses `apple-touch-icon.png` (180x180)
- **Android**: Uses `icon-192.png` or `icon-512.png`

### Desktop
- **Browser Tab**: Uses `favicon.ico` (32x32)
- **Bookmarks**: Uses `icon-192.png`

### Sharing
- **Facebook/Twitter**: Uses `icon-512.png` and Open Graph tags
- **Link previews**: Uses largest available icon

## Testing Your Icon

### After deploying to Vercel:

1. **iOS Test**:
   - Open: https://app.carbcleantruckcheck.app
   - Tap Share → "Add to Home Screen"
   - Your icon should appear (not gray globe)

2. **Android Test**:
   - Open: https://app.carbcleantruckcheck.app
   - Tap menu → "Install App"
   - Your icon should appear on home screen

3. **Desktop Test**:
   - Open: https://app.carbcleantruckcheck.app
   - Check browser tab for your favicon

## Current Files

```
public/
├── icon.svg                 ✅ Created (temp truck icon)
├── icon-192.png            ⚠️  Need to generate
├── icon-512.png            ⚠️  Need to generate
├── apple-touch-icon.png    ⚠️  Need to generate
├── favicon.ico             ⚠️  Need to generate
├── manifest.json           ✅ Already configured
└── robots.txt              ✅ Already configured
```

## Next Steps

1. **Provide your logo PNG**
   - Where is the PNG you uploaded?
   - Or create/upload a new one to `public/logo.png`

2. **Run the generator**
   ```bash
   ./generate-icons.sh
   ```

3. **Commit and push**
   ```bash
   git add public/
   git commit -m "Add custom PWA icons and favicons"
   git push
   ```

4. **Deploy to Vercel**
   - Icons will automatically be included in build
   - Test on mobile devices

## Need Help?

**Can't find ImageMagick?**
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows
# Download from: https://imagemagick.org/script/download.php
```

**Online PNG Generators (Alternative)**
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/
- Upload your logo, download all sizes

**Questions?**
- 📞 Call: 844-685-8922
- 📧 Email: info@carbcleantruckcheck.app

---

**Where is your logo PNG?** Let me know the file path and I'll generate all the icons for you!
