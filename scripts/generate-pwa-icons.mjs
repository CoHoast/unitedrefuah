import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

// Read the SVG logo
const svgPath = join(publicDir, 'UnitedRefuahLogoHands-2.svg');
const svgContent = readFileSync(svgPath, 'utf-8');

// Create a PWA icon with the logo centered on a white/brand background
async function createPWAIcon(size, outputName) {
  // Create the icon with brand color background
  const iconSvg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#135c9f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0d4a7f;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Background -->
      <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#bg)"/>
      <!-- White circle background for logo -->
      <circle cx="${size/2}" cy="${size/2}" r="${size * 0.35}" fill="white"/>
      <!-- Hands symbol (simplified) -->
      <g transform="translate(${size * 0.25}, ${size * 0.3}) scale(${size / 200})">
        <path 
          d="M50 10 C30 10, 10 30, 10 50 C10 70, 25 85, 50 95 C75 85, 90 70, 90 50 C90 30, 70 10, 50 10 Z" 
          fill="#135c9f"
          opacity="0.9"
        />
        <path 
          d="M50 25 C38 25, 25 35, 25 50 C25 62, 35 73, 50 80 C65 73, 75 62, 75 50 C75 35, 62 25, 50 25 Z" 
          fill="white"
        />
        <path 
          d="M50 38 C44 38, 38 43, 38 50 C38 56, 43 61, 50 65 C57 61, 62 56, 62 50 C62 43, 56 38, 50 38 Z" 
          fill="#135c9f"
        />
      </g>
      <!-- United Refuah text at bottom -->
      <text 
        x="${size/2}" 
        y="${size * 0.88}" 
        text-anchor="middle" 
        font-family="Arial, sans-serif" 
        font-size="${size * 0.08}" 
        font-weight="bold" 
        fill="white"
      >UNITED REFUAH</text>
    </svg>
  `;

  await sharp(Buffer.from(iconSvg))
    .png()
    .toFile(join(publicDir, outputName));
  
  console.log(`Created ${outputName} (${size}x${size})`);
}

// Create maskable icon (with extra padding for Android adaptive icons)
async function createMaskableIcon(size, outputName) {
  const iconSvg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgMask" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#135c9f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0d4a7f;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Full background (maskable icons need full bleed) -->
      <rect width="${size}" height="${size}" fill="url(#bgMask)"/>
      <!-- White circle for logo - smaller for safe zone -->
      <circle cx="${size/2}" cy="${size * 0.45}" r="${size * 0.28}" fill="white"/>
      <!-- Hands symbol -->
      <g transform="translate(${size * 0.3}, ${size * 0.25}) scale(${size / 250})">
        <path 
          d="M50 10 C30 10, 10 30, 10 50 C10 70, 25 85, 50 95 C75 85, 90 70, 90 50 C90 30, 70 10, 50 10 Z" 
          fill="#135c9f"
          opacity="0.9"
        />
        <path 
          d="M50 25 C38 25, 25 35, 25 50 C25 62, 35 73, 50 80 C65 73, 75 62, 75 50 C75 35, 62 25, 50 25 Z" 
          fill="white"
        />
        <path 
          d="M50 38 C44 38, 38 43, 38 50 C38 56, 43 61, 50 65 C57 61, 62 56, 62 50 C62 43, 56 38, 50 38 Z" 
          fill="#135c9f"
        />
      </g>
      <!-- Text -->
      <text 
        x="${size/2}" 
        y="${size * 0.82}" 
        text-anchor="middle" 
        font-family="Arial, sans-serif" 
        font-size="${size * 0.07}" 
        font-weight="bold" 
        fill="white"
      >UNITED REFUAH</text>
    </svg>
  `;

  await sharp(Buffer.from(iconSvg))
    .png()
    .toFile(join(publicDir, outputName));
  
  console.log(`Created ${outputName} (${size}x${size} maskable)`);
}

// Generate Apple Touch Icon (simpler, more minimal)
async function createAppleTouchIcon(size, outputName) {
  const iconSvg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgApple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#135c9f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a6db8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Background with slight rounding (iOS will apply its own mask) -->
      <rect width="${size}" height="${size}" fill="url(#bgApple)"/>
      <!-- White circle -->
      <circle cx="${size/2}" cy="${size * 0.45}" r="${size * 0.32}" fill="white"/>
      <!-- Stylized hands/heart symbol -->
      <g transform="translate(${size * 0.28}, ${size * 0.25}) scale(${size / 220})">
        <path 
          d="M50 10 C30 10, 10 30, 10 50 C10 70, 25 85, 50 95 C75 85, 90 70, 90 50 C90 30, 70 10, 50 10 Z" 
          fill="#135c9f"
        />
        <path 
          d="M50 25 C38 25, 25 35, 25 50 C25 62, 35 73, 50 80 C65 73, 75 62, 75 50 C75 35, 62 25, 50 25 Z" 
          fill="white"
        />
        <path 
          d="M50 38 C44 38, 38 43, 38 50 C38 56, 43 61, 50 65 C57 61, 62 56, 62 50 C62 43, 56 38, 50 38 Z" 
          fill="#135c9f"
        />
      </g>
      <!-- Text -->
      <text 
        x="${size/2}" 
        y="${size * 0.85}" 
        text-anchor="middle" 
        font-family="Arial, Helvetica, sans-serif" 
        font-size="${size * 0.085}" 
        font-weight="600" 
        fill="white"
        letter-spacing="1"
      >UNITED REFUAH</text>
    </svg>
  `;

  await sharp(Buffer.from(iconSvg))
    .png()
    .toFile(join(publicDir, outputName));
  
  console.log(`Created ${outputName} (${size}x${size} Apple Touch Icon)`);
}

async function main() {
  console.log('Generating PWA icons...\n');
  
  // Standard PWA icons
  await createPWAIcon(192, 'pwa-icon-192.png');
  await createPWAIcon(512, 'pwa-icon-512.png');
  
  // Maskable icons for Android
  await createMaskableIcon(192, 'pwa-icon-192-maskable.png');
  await createMaskableIcon(512, 'pwa-icon-512-maskable.png');
  
  // Apple Touch Icon
  await createAppleTouchIcon(180, 'apple-touch-icon.png');
  
  // Favicon sizes
  await createPWAIcon(32, 'favicon-32.png');
  await createPWAIcon(16, 'favicon-16.png');
  
  console.log('\n✅ All PWA icons generated!');
}

main().catch(console.error);
