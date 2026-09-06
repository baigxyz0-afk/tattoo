const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SVG_PATH = path.join(__dirname, '..', 'public', 'icon.svg');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

// Also check generated image from antigravity
const AI_IMAGE_PATH = 'C:\\Users\\Afzal Baig\\.gemini\\antigravity\\brain\\b9e809c1-c10a-42c9-bedd-132f639f5e0e\\tattoo_favicon_1788721758241.jpg';

async function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // 0-1: Reserved (0)
  // 2-3: Type (1 for icon)
  // 4-5: Count of images
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  // Each directory entry is 16 bytes
  const dirEntrySize = 16;
  let offset = 6 + (pngBuffers.length * dirEntrySize);
  const dirEntries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Colors count (0 if >= 256)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset of image data
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function main() {
  console.log('Generating tattoo favicons...');

  // Use the AI generated tattoo image or SVG
  let inputSource = fs.existsSync(AI_IMAGE_PATH) ? AI_IMAGE_PATH : SVG_PATH;
  console.log('Using source image:', inputSource);

  // 1. Generate PNGs at multiple sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngOutputs = {};

  for (const size of sizes) {
    const buf = await sharp(inputSource)
      .ensureAlpha()
      .resize(size, size, { fit: 'contain', background: { r: 13, g: 13, b: 13, alpha: 1 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngOutputs[size] = buf;
  }

  // 2. Save individual PNGs
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png'), pngOutputs[16]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), pngOutputs[32]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'apple-touch-icon.png'), pngOutputs[180]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'), pngOutputs[192]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'), pngOutputs[512]);

  // 3. Build multi-resolution ICO (16x16, 32x32, 48x48)
  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: pngOutputs[16] },
    { width: 32, height: 32, buffer: pngOutputs[32] },
    { width: 48, height: 48, buffer: pngOutputs[48] },
  ]);

  // Save ICO in public and src/app
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoBuffer);

  // Also sync SVG
  fs.copyFileSync(SVG_PATH, path.join(PUBLIC_DIR, 'favicon.svg'));
  fs.copyFileSync(SVG_PATH, path.join(APP_DIR, 'icon.svg'));

  console.log('Favicons generated successfully:');
  console.log('- public/favicon.ico (16, 32, 48)');
  console.log('- public/favicon-16x16.png');
  console.log('- public/favicon-32x32.png');
  console.log('- public/apple-touch-icon.png (180x180)');
  console.log('- public/icon.svg & favicon.svg');
  console.log('- src/app/favicon.ico & icon.svg');
}

main().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
