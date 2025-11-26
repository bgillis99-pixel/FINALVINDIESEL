import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const svgBuffer = readFileSync('logo.svg');

// Ensure public directory exists
try {
  mkdirSync('public', { recursive: true });
} catch (e) {}

const icons = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'logo-192.png', size: 192 },
  { name: 'logo-512.png', size: 512 }
];

async function generateIcons() {
  console.log('Generating icons from SVG...\n');

  for (const icon of icons) {
    await sharp(svgBuffer)
      .resize(icon.size, icon.size)
      .png()
      .toFile(join('public', icon.name));
    console.log(`✓ Generated ${icon.name} (${icon.size}x${icon.size})`);
  }

  // Generate Open Graph image (1200x630)
  await sharp(svgBuffer)
    .resize(1200, 1200)
    .extract({ left: 0, top: 285, width: 1200, height: 630 })
    .png()
    .toFile(join('public', 'og-image.png'));
  console.log(`✓ Generated og-image.png (1200x630)`);

  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
