const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const USER_IMG = 'C:\\Users\\Afzal Baig\\.gemini\\antigravity\\brain\\b9e809c1-c10a-42c9-bedd-132f639f5e0e\\.user_uploaded\\media_1788722442168.jpg';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

async function createIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  const dirEntrySize = 16;
  let offset = 6 + (pngBuffers.length * dirEntrySize);
  const dirEntries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function main() {
  console.log('Processing user lion-sunflower tattoo image...');

  // 1. Extract the tattoo artwork from the user image
  // The right side has the clean lineart (left: 375, top: 35, width: 385, height: 780)
  // The lion head itself is from top: 35 to 550 (approx 515 height)
  // Let's crop the iconic head with sunflower:
  const headLineart = await sharp(USER_IMG)
    .extract({ left: 375, top: 35, width: 385, height: 530 })
    .toBuffer();

  // Create high-contrast dark version:
  // Invert lines so they are crisp white/light gold on pure dark background
  const invertedHead = await sharp(headLineart)
    .negate({ alpha: false })
    .resize(380, 380, { fit: 'contain', background: { r: 13, g: 13, b: 13, alpha: 1 } })
    .toBuffer();

  // Background dark circle with gold metallic border
  const svgBadge = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCE588" />
          <stop offset="40%" stop-color="#E5B842" />
          <stop offset="75%" stop-color="#C99A2E" />
          <stop offset="100%" stop-color="#8A6714" />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="246" fill="#0D0D0D" stroke="url(#gold)" stroke-width="14" />
      <circle cx="256" cy="256" r="226" stroke="url(#gold)" stroke-width="3" stroke-dasharray="8 8" opacity="0.4" />
    </svg>
  `;

  // Master 512x512 PNG
  const masterBadge = await sharp(Buffer.from(svgBadge))
    .composite([
      { input: invertedHead, top: 66, left: 66 }
    ])
    .ensureAlpha()
    .png()
    .toBuffer();

  // Save master 512x512
  fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'), masterBadge);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'lion-tattoo-badge.png'), masterBadge);

  // Generate all sizes (16, 32, 48, 64, 180, 192)
  const sizes = [16, 32, 48, 64, 180, 192];
  const pngOutputs = {};

  for (const size of sizes) {
    const buf = await sharp(masterBadge)
      .ensureAlpha()
      .resize(size, size, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngOutputs[size] = buf;
  }

  // Save favicons
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png'), pngOutputs[16]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), pngOutputs[32]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'apple-touch-icon.png'), pngOutputs[180]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'), pngOutputs[192]);

  // Build multi-resolution ICO
  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: pngOutputs[16] },
    { width: 32, height: 32, buffer: pngOutputs[32] },
    { width: 48, height: 48, buffer: pngOutputs[48] },
  ]);

  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoBuffer);

  // Also convert master to SVG data URI wrapper for icon.svg and favicon.svg
  const base64Png = masterBadge.toString('base64');
  const svgWrapper = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${base64Png}" width="512" height="512" />
</svg>
  `.trim();

  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon.svg'), svgWrapper);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), svgWrapper);
  fs.writeFileSync(path.join(APP_DIR, 'icon.svg'), svgWrapper);

  // Also sync to the other tattoo projects (tatoo design, tatto vip)
  const otherDirs = ['E:\\tatoo design\\public', 'E:\\tatto vip\\public'];
  for (const dir of otherDirs) {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);
      fs.writeFileSync(path.join(dir, 'favicon-32x32.png'), pngOutputs[32]);
      fs.writeFileSync(path.join(dir, 'favicon-16x16.png'), pngOutputs[16]);
      fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), pngOutputs[180]);
      fs.writeFileSync(path.join(dir, 'icon.svg'), svgWrapper);
    }
  }

  console.log('Lion sunflower tattoo favicons generated successfully!');
}

main().catch(err => {
  console.error('Error generating lion favicons:', err);
  process.exit(1);
});
