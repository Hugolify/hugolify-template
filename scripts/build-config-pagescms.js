const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to execute a shell command
function runCommand(command) {
  return new Promise((resolve, reject) => {
    console.log(`Executing: ${command}`);
    const process = exec(command);

    process.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    process.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

// Main function
async function buildAndCopy() {
  try {
    // Step 1: Run the build
    console.log('📦 Starting build...');
    await runCommand('yarn build');
    console.log('✅ Build completed successfully');

    // Step 2: Copy the file
    console.log('\n📋 Copying config.yml file...');
    const projectRoot = path.join(__dirname, '..');
    const sourcePath = path.join(projectRoot, 'public', 'admin', 'config.yml');
    const destPath = path.join(projectRoot, '.pages.yml');

    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Source file does not exist: ${sourcePath}`);
    }

    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ File copied: ${sourcePath} -> ${destPath}`);
    
    console.log('\n🎉 Process completed successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
buildAndCopy();