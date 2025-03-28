import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOGO_PATH = join(__dirname, '../public/logo.png');
const PUBLIC_DIR = join(__dirname, '../public');

async function generateFavicon() {
  try {
    // Generate 32x32 PNG buffer
    const pngBuffer = await sharp(LOGO_PATH)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();

    // Create ICO header
    const header = Buffer.from([
      0x00, 0x00,             // Reserved
      0x01, 0x00,             // ICO format
      0x01, 0x00,             // 1 image
      0x20, 0x20,             // Width, height (32x32)
      0x00,                   // No color palette
      0x00,                   // Reserved
      0x01, 0x00,             // Color planes
      0x20, 0x00,             // Bits per pixel (32)
      ...Buffer.alloc(4)      // Size placeholder
    ]);

    // Update size in header
    header.writeUInt32LE(pngBuffer.length, 8);

    // Combine header and PNG data
    const icoFile = Buffer.concat([header, pngBuffer]);
    
    // Save ICO file
    await fs.writeFile(join(PUBLIC_DIR, 'favicon.ico'), icoFile);
    console.log('Generated favicon.ico (32x32)');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon(); 