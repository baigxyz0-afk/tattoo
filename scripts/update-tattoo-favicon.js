const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_IMG = 'C:\\Users\\Kamil Computers\\.gemini\\antigravity\\brain\\2300a44a-8404-4acf-89d6-4d902777e8bb\\tattoo_favicon_art_1790445490629.jpg';
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
  console.log('Processing new tattoo pen & rose artwork for favicons...');

  // 1. Crop to square around the badge
  const cropped = await sharp(SOURCE_IMG)
    .extract({ left: 92, top: 98, width: 840, height: 840 })
    .resize(512, 512)
    .ensureAlpha()
    .toBuffer();

  // 2. Generate smooth circular alpha mask at 512x512
  const maskPng = await sharp(Buffer.from(
    `<svg width="512" height="512" viewBox="0 0 512 512"><circle cx="256" cy="256" r="252" fill="white" /></svg>`
  ))
    .resize(512, 512)
    .png()
    .toBuffer();

  const masterBadge = await sharp(cropped)
    .composite([{ input: maskPng, blend: 'dest-in' }])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  // 3. Save master 512x512
  fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'), masterBadge);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'tattoo-favicon-master.png'), masterBadge);

  // 4. Generate all required sizes
  const sizes = [16, 32, 48, 64, 180, 192];
  const pngOutputs = {};

  for (const size of sizes) {
    const buf = await sharp(masterBadge)
      .resize(size, size, { fit: 'contain' })
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();
    pngOutputs[size] = buf;
  }

  // 5. Save standard PNG favicons
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png'), pngOutputs[16]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), pngOutputs[32]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'apple-touch-icon.png'), pngOutputs[180]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'), pngOutputs[192]);

  // 6. Build multi-resolution ICO (16x16, 32x32, 48x48)
  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: pngOutputs[16] },
    { width: 32, height: 32, buffer: pngOutputs[32] },
    { width: 48, height: 48, buffer: pngOutputs[48] },
  ]);

  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoBuffer);

  // 7. Generate vector SVG with embedded high-resolution data URI
  const base64Png = masterBadge.toString('base64');
  const svgWrapper = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${base64Png}" width="512" height="512" />
</svg>
`.trim();

  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon.svg'), svgWrapper);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), svgWrapper);
  fs.writeFileSync(path.join(APP_DIR, 'icon.svg'), svgWrapper);

  console.log('New tattoo favicons generated successfully!');
}

main().catch(err => {
  console.error('Error generating new tattoo favicons:', err);
  process.exit(1);
});
