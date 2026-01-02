const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroDir = path.join(__dirname, '../public/assets/hero');
const outputDir = path.join(__dirname, '../public/assets/hero-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImages() {
    const files = fs.readdirSync(heroDir);

    for (const file of files) {
        if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
            const inputPath = path.join(heroDir, file);
            const outputPath = path.join(outputDir, file.replace(/\.(jpg|png)$/, '.webp'));

            try {
                const stats = fs.statSync(inputPath);
                console.log(`Processing: ${file} (${(stats.size / 1024).toFixed(1)}KB)`);

                await sharp(inputPath)
                    .resize(1920, null, { // Max width 1920px for hero images
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({
                        quality: 75, // Good balance of quality vs size
                        effort: 6
                    })
                    .toFile(outputPath);

                const newStats = fs.statSync(outputPath);
                console.log(`  → Compressed to: ${(newStats.size / 1024).toFixed(1)}KB (${((1 - newStats.size / stats.size) * 100).toFixed(0)}% reduction)`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
    }

    console.log('\n✅ Compression complete! Optimized images are in: public/assets/hero-optimized');
    console.log('To use them, copy optimized files back to hero folder or update image paths.');
}

compressImages();
