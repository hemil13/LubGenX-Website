const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('logo.png')) {
      content = content.replace(/logo\.png/g, 'logo.svg');
      fs.writeFileSync(filePath, content);
    }
  }
});
console.log('Logo paths updated.');
