const fs = require('fs');
const path = require('path');

const copydir = require('copy-dir');

function cpDist() {
  const distPath = path.join(process.cwd(), 'dist');
  const examplePath = path.join(
    process.cwd(),
    'example',
    'node_modules',
    'rn-responsive-theme',
    'dist'
  );
  console.log(distPath);
  console.log(examplePath);
  copydir(distPath, examplePath, {
    utimes: true, // keep add time and modify time
    mode: true, // keep file mode
    cover: true,
  });
}

cpDist();
