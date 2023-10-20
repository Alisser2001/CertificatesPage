const fs = require('fs');
const path = require('path');

const directoryPath = './public/assets/';
const outputFile = 'certificatesInfo.json';

if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
    const jsonArray = pdfFiles.map(file => ({ name: file, relevance: "" }));

    const jsonContent = JSON.stringify(jsonArray, null, 2);

    fs.writeFileSync(outputFile, jsonContent);
});
