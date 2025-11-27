const fs = require('fs');

// Simple PNG creation using data URI
// We'll create a minimal PNG with the brand colors

// 192x192 PNG - Navy blue background with green truck icon
const icon192 = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpUlEQVR4nO3dS27jMBBF0eLMy1n+1jKXvwa8mEEDQQBbsiRSfM8CCjBim1TxVVGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8K/9+PsDsK7v+/v+/v4mSfr+/v7x/Pz8vLy8vNz/+bNt2/b29vby8vLy8PDw8PDw8PDw4+Pj8fHx8fHx8fHx8fHx8fj4+Pz8/Pz8/Pz8/Pz8/Pz8fHx8fHx8fHx8fHx8fHx8fHx+fn5+fn5+fn5+fn5+fn5+Pj4+Pj4+Pj4+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8fHx8fHx8fHx8fHx8fH5+fn5+fn5+fn5+fn5+fj4+Pj4+Pj4+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8fHx8fHx8fHx8fHx8fH5+fn5+fn5+fn5+fn5+fj4+Pj4+Pj4+Pj4+Pj4/Pz8/AADgJ/0AfgD/AT+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwA/gB/AB+AD+AH8AP4AfwAwAA+G2/AQJj1D5vN5jWAAAAAElFTkSuQmCC',
  'base64'
);

// For now, let's create a simple colored square as placeholder
// In production, you'd use a proper canvas library

// Create a simple SVG that we'll save as files for now
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

// Write SVG files (browsers will convert these to PNG when needed)
fs.writeFileSync('public/icon-192.svg', createSVGIcon(192));
fs.writeFileSync('public/icon-512.svg', createSVGIcon(512));

console.log('✅ Icon files created in public/');
console.log('📝 Note: These are SVG files. For true PNG support, use an online converter or image editing tool.');
