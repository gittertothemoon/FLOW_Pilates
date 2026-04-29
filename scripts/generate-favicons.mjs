import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(here, "..", "public");
const source = resolve(publicDir, "logo-dark.png");

const meta = await sharp(source).metadata();
const side = Math.max(meta.width, meta.height);

// Pad logo into a square with transparent background, leaving a small breathing margin.
const margin = Math.round(side * 0.08);
const canvas = side + margin * 2;
const squareBuffer = await sharp({
  create: {
    width: canvas,
    height: canvas,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([{ input: source, gravity: "center" }])
  .png()
  .toBuffer();

async function pngFromSquare(size, outName, background) {
  const pipeline = sharp(squareBuffer).resize(size, size, {
    fit: "contain",
    background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
  });
  if (background) {
    pipeline.flatten({ background });
  }
  await pipeline.png().toFile(resolve(publicDir, outName));
}

await pngFromSquare(16, "favicon-16x16.png");
await pngFromSquare(32, "favicon-32x32.png");
// apple-touch-icon: iOS dislikes transparency on home screen, so flatten on brand cream.
await pngFromSquare(180, "apple-touch-icon.png", { r: 245, g: 240, b: 232, alpha: 1 });

// Build a single-image .ico that wraps a 32x32 PNG (modern browsers accept PNG-in-ICO).
const icoPng = await sharp(squareBuffer).resize(32, 32, { fit: "contain" }).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // width (0 means 256)
entry.writeUInt8(32, 1); // height
entry.writeUInt8(0, 2); // palette
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(icoPng.length, 8); // image size
entry.writeUInt32LE(header.length + entry.length, 12); // offset
await writeFile(resolve(publicDir, "favicon.ico"), Buffer.concat([header, entry, icoPng]));

console.log("Generated: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png");
