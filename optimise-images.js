/**
 * 
 * Optimise images and produce different sizes
 */

const sharp = require('sharp');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');

// Trailing slashes needed
const config = {
  src: "./src/images/",
  dest: "./public/images/",
  quality: 80, /* sharp default is 80 */
  sizes: {
    s: 200,
    m: 600,
    l: 1200
  },
  skipExisting: true,
  copyOriginal: true
};

function validateConfig(c) {
  const startsWithSlash = (v) => v.startsWith('/');
  const endsWithSlash = (v) => v.endsWith('/');
  if (startsWithSlash(c.src)) throw new Error(`src should be a relative path`);
  if (startsWithSlash(c.dest)) throw new Error(`dest should be a relative path`);
  if (!endsWithSlash(c.src)) throw new Error(`src must end with slash`);
  if (!endsWithSlash(c.dest)) throw new Error(`dest must end with slash`);
}

validateConfig(config);

async function process(input) {
  // Input file without base source directory
  const pathOffset = input.substring(config.src.length);

  // File name
  const fileNameWithExt = path.basename(input,);
  const ext = path.extname(fileNameWithExt);
  const fileNameWithoutExt = fileNameWithExt.substring(0, fileNameWithExt.length - ext.length);

  // Destination -- full path
  const destFullPath = config.dest + pathOffset;

  // Destination -- directory
  const destDirectory = path.dirname(destFullPath);

  // Ensure destination directory exists
  mkdirp.sync(destDirectory);

  if (ext === '.gif') {
    console.log('CPY ' + destFullPath);
    fs.copyFileSync(input, destFullPath);
    return;
  } else if (config.copyOriginal) {
    console.log('CPY ' + destFullPath);
    fs.copyFileSync(input, destFullPath);
  }

  // Optimise full size
  const destFullSize = destDirectory + '/' + fileNameWithoutExt + '.jpg';
  if (config.skipExisting && fs.existsSync(destFullSize)) {
    // skip
  } else {
    console.log('OPT ' + destFullSize);
    sharp(input)
      .jpeg({mozjpeg: true, quality: config.quality})
      .toFile(destFullSize);
  }

  // Generate various sizes
  // eg. file-s.jpg, file-m.jpg, file-l.jpg
  for (const [sizeName, dim] of Object.entries(config.sizes)) {
    // Let PNG go through, everything else convert to JPEG
    let extToUse = ext === '.png' ? '.png' : '.jpg';

    const destCorrectedName = destDirectory + '/' + fileNameWithoutExt + '-' + sizeName + extToUse;
    if (config.skipExisting && fs.existsSync(destCorrectedName)) return;
    console.log('RSZ ' + destCorrectedName);
    if (extToUse === '.png') {
      sharp(input)
        .resize(dim)
        .png({mozjpeg: true, quality: config.quality})
        .toFile(destCorrectedName);
    } else {
      sharp(input)
        .resize(dim)
        .jpeg({mozjpeg: true, quality: config.quality})
        .toFile(destCorrectedName);
    }
  }
}

(async () => {
  try {
    const globby = await import('globby');

    const exts = 'jpg gif png webp'.split(' ');
    const patterns = exts.map(e => config.src + '**/*.' + e);

    const paths = await globby.globby(patterns);
    paths.forEach(p => {
      process(p);
    });

    console.log('All done.');
  } catch (e) {
    console.log(e);
  }
})();