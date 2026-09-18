const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'tattoo-styles', 'mandala-tattoos');
const COUNT = 200;
const SIZE = 800;

// Deterministic PRNG so re-running regenerates identical output.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function petalPath(r1, r2, width) {
  return `M 0 ${-r1} Q ${width} ${-(r1 + r2) / 2} 0 ${-r2} Q ${-width} ${-(r1 + r2) / 2} 0 ${-r1} Z`;
}

function buildRing(rng, n, radius) {
  const motif = pick(rng, ['petal', 'dot', 'diamond', 'arc', 'leaf']);
  const strokeW = (1.5 + rng() * 3).toFixed(2);
  const parts = [];
  for (let i = 0; i < n; i++) {
    const angle = (360 / n) * i;
    let shape = '';
    if (motif === 'petal') {
      const len = 26 + rng() * 40;
      const width = 8 + rng() * 14;
      shape = `<path d="${petalPath(radius, radius - len, width)}" fill="none" stroke="#141414" stroke-width="${strokeW}"/>`;
    } else if (motif === 'dot') {
      const rDot = 3 + rng() * 6;
      shape = `<circle cx="0" cy="${-radius}" r="${rDot.toFixed(2)}" fill="#141414"/>`;
    } else if (motif === 'diamond') {
      const s = 8 + rng() * 10;
      shape = `<rect x="${-s / 2}" y="${-radius - s / 2}" width="${s}" height="${s}" transform="rotate(45 0 ${-radius})" fill="none" stroke="#141414" stroke-width="${strokeW}"/>`;
    } else if (motif === 'arc') {
      const len = 18 + rng() * 24;
      shape = `<path d="M ${-len / 2} ${-radius} A ${len / 2} ${len / 2} 0 0 1 ${len / 2} ${-radius}" fill="none" stroke="#141414" stroke-width="${strokeW}"/>`;
    } else {
      const len = 20 + rng() * 30;
      shape = `<path d="M 0 ${-radius} Q ${len * 0.6} ${-radius + len * 0.5} 0 ${-radius + len} Q ${-len * 0.6} ${-radius + len * 0.5} 0 ${-radius}" fill="#141414" opacity="0.85"/>`;
    }
    parts.push(`<g transform="rotate(${angle.toFixed(2)})">${shape}</g>`);
  }
  return parts.join('');
}

function generateMandala(seed) {
  const rng = mulberry32(seed);
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const symmetry = pick(rng, [6, 8, 8, 10, 12, 12, 14, 16]);
  const ringCount = 3 + Math.floor(rng() * 4);
  const maxRadius = 240 + rng() * 60;

  const rings = [];
  for (let r = 0; r < ringCount; r++) {
    const radius = 60 + ((maxRadius - 60) / ringCount) * (r + 1);
    rings.push(`<g>${buildRing(rng, symmetry, radius)}</g>`);
  }

  const coreStyle = pick(rng, ['circle', 'flower', 'star']);
  let core = '';
  if (coreStyle === 'circle') {
    core = `<circle r="${(14 + rng() * 10).toFixed(2)}" fill="none" stroke="#141414" stroke-width="2.5"/><circle r="${(4 + rng() * 4).toFixed(2)}" fill="#141414"/>`;
  } else if (coreStyle === 'flower') {
    const petals = 5 + Math.floor(rng() * 4);
    const petalParts = [];
    for (let i = 0; i < petals; i++) {
      const angle = (360 / petals) * i;
      petalParts.push(`<g transform="rotate(${angle.toFixed(2)})">${petalPath(6, 26, 9)}</g>`.replace('<path', '<path fill="none" stroke="#141414" stroke-width="2"'));
    }
    core = petalParts.join('');
  } else {
    const points = 5 + Math.floor(rng() * 3);
    let d = '';
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 === 0 ? 26 : 11;
      const a = (Math.PI / points) * i - Math.PI / 2;
      d += `${i === 0 ? 'M' : 'L'} ${(Math.cos(a) * r).toFixed(2)} ${(Math.sin(a) * r).toFixed(2)} `;
    }
    d += 'Z';
    core = `<path d="${d}" fill="none" stroke="#141414" stroke-width="2.5"/>`;
  }

  const outerRing = `<circle r="${maxRadius + 20}" fill="none" stroke="#141414" stroke-width="3" opacity="0.7"/>`;
  const bg = pick(rng, ['#f6efe0', '#f2ece2', '#efe7d6', '#f4f1e8']);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
  <rect width="${SIZE}" height="${SIZE}" fill="${bg}"/>
  <g transform="translate(${cx} ${cy})">
    ${outerRing}
    ${rings.join('\n')}
    ${core}
  </g>
</svg>`;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (let i = 1; i <= COUNT; i++) {
    const svg = generateMandala(1000 + i);
    const outPath = path.join(OUT_DIR, `mandala-${i}.jpg`);
    await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(outPath);
    if (i % 25 === 0) console.log(`Generated ${i}/${COUNT}`);
  }
  console.log('Done. Output:', OUT_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
