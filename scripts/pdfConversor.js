const { fromPath } = require('pdf2pic');
const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra'); 

const pdfPath = './public/assets';
const outputFolder = './public/miniatures';

fsExtra.emptyDirSync(outputFolder);

fs.readdir(pdfPath, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }
    const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
    
    pdfFiles.forEach(file => {
        const fileName = path.basename(file, '.pdf');
        const options = {
            density: 100,
            saveFilename: fileName,
            savePath: outputFolder,
            format: 'png',
            width: 600,
            height: 600
        };
        const convert = fromPath(`${pdfPath}/${file}`, options);

        convert(1)
            .then((resolve) => {
                console.log(`${file} se ha convertido como imagen`);
            })
            .catch((error) => {
                console.error(`Error al convertir ${file} a imagen: ${error}`);
            });
    });
});
