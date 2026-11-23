import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const GALLERY_DIR = path.resolve("src/assets/gallery");
const MAX_DIMENSION = 900;
const QUALITY = 82;

async function optimizeImages() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error(`Diretório não encontrado: ${GALLERY_DIR}`);
    return;
  }

  const files = fs.readdirSync(GALLERY_DIR);
  const imageFiles = files.filter((file) =>
    /\.(png|jpe?g|webp)$/i.test(file)
  );

  if (imageFiles.length === 0) {
    console.log("Nenhuma imagem encontrada para otimizar.");
    return;
  }

  console.log(`🔍 Analisando ${imageFiles.length} imagem(ns) em src/assets/gallery/...\n`);

  for (const file of imageFiles) {
    const filePath = path.join(GALLERY_DIR, file);
    const inputBuf = fs.readFileSync(filePath);
    const origSize = inputBuf.length;

    try {
      const meta = await sharp(inputBuf).metadata();

      const outputBuf = await sharp(inputBuf)
        .resize({
          width: meta.width > MAX_DIMENSION ? MAX_DIMENSION : undefined,
          height: meta.height > MAX_DIMENSION ? MAX_DIMENSION : undefined,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: QUALITY, effort: 6 })
        .toBuffer();

      const newSize = outputBuf.length;
      const targetName = file.replace(/\.(png|jpe?g)$/i, ".webp");
      const targetPath = path.join(GALLERY_DIR, targetName);

      if (file !== targetName || newSize < origSize) {
        fs.writeFileSync(targetPath, outputBuf);

        if (file !== targetName && fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`✨ ${file} ➔ ${targetName}`);
        } else {
          console.log(`✨ ${file}`);
        }

        const newMeta = await sharp(outputBuf).metadata();
        const reduction = Math.round((1 - newSize / origSize) * 100);
        console.log(`   ${meta.width}x${meta.height} (${(origSize / 1024).toFixed(1)} KB) ➔ ${newMeta.width}x${newMeta.height} (${(newSize / 1024).toFixed(1)} KB) [${reduction > 0 ? `-${reduction}%` : "otimizado"}]\n`);
      } else {
        console.log(`✔️ ${file} já está otimizado (${(origSize / 1024).toFixed(1)} KB)\n`);
      }
    } catch (err) {
      console.error(`❌ Erro ao processar ${file}:`, err.message);
    }
  }

  console.log("🎉 Otimização concluída com sucesso!");
}

optimizeImages();
