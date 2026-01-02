const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');

// Directories to compress
const dirsToCompress = [
    'Product1', 'Product2', 'Product3', 'Product4', 'Product5', 'Product6', 'Product7',
    'PrefabHome', 'WhyChooseUs', 'Services', 'SecurityCabin', 'PreOffice',
    'ContainerOff', 'CarvanContainer', 'Industry', 'images'
];

async function compressDirectory(dirName) {
    const inputDir = path.join(assetsDir, dirName);
    const outputDir = path.join(assetsDir, `${dirName}-optimized`);

    if (!fs.existsSync(inputDir)) {
        console.log(`Skipping ${dirName} - directory not found`);
        return;
    }

    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(inputDir);
    let totalSaved = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            try {
                const stats = fs.statSync(inputPath);

                await sharp(inputPath)
                    .resize(1200, null, { // Max width 1200px for product images
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({
                        quality: 75,
                        effort: 6
                    })
                    .toFile(outputPath);

                const newStats = fs.statSync(outputPath);
                const saved = stats.size - newStats.size;
                totalSaved += saved;

                // Copy back to original location
                fs.copyFileSync(outputPath, inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            } catch (err) {
                // Skip errors silently for non-image files
            }
        }
    }

    if (totalSaved > 0) {
        console.log(`${dirName}: Saved ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
    }

    // Skip cleanup to avoid file lock issues
    // fs.rmSync(outputDir, { recursive: true, force: true });
}

async function main() {
    console.log('🔄 Starting bulk image compression...\n');

    for (const dir of dirsToCompress) {
        await compressDirectory(dir);
    }

    console.log('\n✅ All images compressed!');
}

main();
