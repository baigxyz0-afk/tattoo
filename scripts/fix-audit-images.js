const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PINS_DIR = path.join(PUBLIC_DIR, 'pinterest_pins');
const ARTISTS_DIR = path.join(PUBLIC_DIR, 'images', 'artists');

async function main() {
  console.log('Fixing 400 Bad Request image files...');

  const copyMap = {
    'Cyber-Sigilism-Neo-Tribal-Tattoo.jpg': '4. Cyber Sigilism Neo Tribal Tattoo.jpg',
    'Watercolor-Hummingbird-Lotus-Flower-Tattoo.jpg': '5. Watercolor Hummingbird and Lotus Tattoo.jpg',
    'Minimalist-Floral-Crescent-Moon-Tattoo.jpg': '1. Minimalist Floral Crescent Moon Tattoo.jpg',
    'Sacred-Geometry-Mandala-Back-Tattoo.jpg': '3. Sacred Geometry Mandala Back Tattoo.jpg',
    'Neo-Traditional-Wolf-And-Rose-Tattoo.jpg': '2. Neo Traditional Wolf and Rose Tattoo.jpg'
  };

  for (const [target, source] of Object.entries(copyMap)) {
    const srcPath = path.join(PINS_DIR, source);
    const tgtPath = path.join(PINS_DIR, target);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, tgtPath);
      console.log(`[Copied] ${source} -> ${target}`);
    } else {
      console.warn(`[Missing Source] ${srcPath}`);
    }
  }

  // Optimize artist images (currently ~754 KB each)
  console.log('Optimizing artist images to <100 KB...');
  const artistFiles = ['alex.jpg', 'michael.jpg', 'daniel.jpg', 'sophia.jpg'];
  for (const file of artistFiles) {
    const filePath = path.join(ARTISTS_DIR, file);
    if (fs.existsSync(filePath)) {
      const origBuffer = fs.readFileSync(filePath);
      const origSize = origBuffer.length;
      const optimized = await sharp(origBuffer)
        .resize(800, 800, { fit: 'cover' })
        .jpeg({ quality: 82, progressive: true })
        .toBuffer();
      fs.writeFileSync(filePath, optimized);
      console.log(`[Optimized] ${file}: ${Math.round(origSize/1024)}KB -> ${Math.round(optimized.length/1024)}KB`);
    }
  }

  // Optimize about-image.jpg (currently 778 KB)
  const aboutPath = path.join(PUBLIC_DIR, 'images', 'about-image.jpg');
  if (fs.existsSync(aboutPath)) {
    const origBuffer = fs.readFileSync(aboutPath);
    const origSize = origBuffer.length;
    const optimized = await sharp(origBuffer)
      .resize(1200, 800, { fit: 'cover' })
      .jpeg({ quality: 80, progressive: true })
      .toBuffer();
    fs.writeFileSync(aboutPath, optimized);
    console.log(`[Optimized] about-image.jpg: ${Math.round(origSize/1024)}KB -> ${Math.round(optimized.length/1024)}KB`);
  }

  // Optimize pinterest pins to high-quality compressed JPEG under 100KB
  console.log('Optimizing pinterest pin files...');
  const pinFiles = fs.readdirSync(PINS_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
  for (const file of pinFiles) {
    const filePath = path.join(PINS_DIR, file);
    const origBuffer = fs.readFileSync(filePath);
    const origSize = origBuffer.length;
    if (origSize > 100 * 1024) {
      const optimized = await sharp(origBuffer)
        .resize(1000, 1500, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 78, progressive: true })
        .toBuffer();
      fs.writeFileSync(filePath, optimized);
      console.log(`[Optimized] ${file}: ${Math.round(origSize/1024)}KB -> ${Math.round(optimized.length/1024)}KB`);
    }
  }

  console.log('Image fixes and optimizations completed successfully!');
}

main().catch(console.error);
