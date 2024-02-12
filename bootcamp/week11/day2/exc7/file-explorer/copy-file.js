const fs = require('fs');
const sourceFilePath = './source.txt';
const destinationFilePath = './destination.txt';

fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading', err);
      return;
    }
  
    // Escribir el contenido en el archivo de destino
    fs.writeFile(destinationFilePath, data, 'utf8', (err) => {
      if (err) {
        console.error('Error sending', err);
        return;
      }
  
      console.log('the content is copy from source.txt to destination.txt successfully');
    });
  });