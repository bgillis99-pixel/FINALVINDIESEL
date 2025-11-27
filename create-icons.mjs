import fs from 'fs';

// Create SVG icons with truck design
const createSVGIcon = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#003366" rx="${size * 0.15}"/>

  <!-- Truck body -->
  <rect x="${size * 0.2}" y="${size * 0.4}" width="${size * 0.6}" height="${size * 0.3}" fill="#00C853" rx="${size * 0.03}"/>

  <!-- Truck cab -->
  <rect x="${size * 0.65}" y="${size * 0.25}" width="${size * 0.15}" height="${size * 0.15}" fill="#00C853" rx="${size * 0.02}"/>

  <!-- Check mark -->
  <path d="M ${size * 0.35} ${size * 0.5} L ${size * 0.42} ${size * 0.57} L ${size * 0.55} ${size * 0.4}"
        stroke="#fff" stroke-width="${size * 0.06}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Wheels -->
  <circle cx="${size * 0.3}" cy="${size * 0.75}" r="${size * 0.08}" fill="#fff"/>
  <circle cx="${size * 0.65}" cy="${size * 0.75}" r="${size * 0.08}" fill="#fff"/>

  <!-- Text -->
  <text x="${size * 0.5}" y="${size * 0.9}" font-family="Arial, sans-serif" font-weight="bold"
        font-size="${size * 0.14}" fill="#fff" text-anchor="middle">CARB</text>
</svg>`;

// Write icon files
fs.writeFileSync('public/icon-192.png.svg', createSVGIcon(192));
fs.writeFileSync('public/icon-512.png.svg', createSVGIcon(512));
fs.writeFileSync('public/icon-192.png', createSVGIcon(192)); // Browsers will render SVG as image
fs.writeFileSync('public/icon-512.png', createSVGIcon(512));

console.log('✅ Icon files created successfully!');
