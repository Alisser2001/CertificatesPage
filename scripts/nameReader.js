const fs = require('fs');
const path = require('path');

const directoryPath = './public/assets/';
const outputFile = './certificatesInfo.json';
const imageFormat = 'jpg';

if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
    const jsonArray = pdfFiles.map(file => {
        const fileName = path.basename(file, '.pdf'); // Obtiene el nombre sin la extensión
        const imgName = `${fileName}.${imageFormat}`;
        return { name: fileName, img: imgName };
    });

    const jsonContent = JSON.stringify(jsonArray, null, 2);

    fs.writeFileSync(outputFile, jsonContent);
});
