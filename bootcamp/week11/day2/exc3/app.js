const { readFile, writeFile } = require('./fileManager');

// Lee el contenido del archivo "Hello World.txt"
const helloContent = readFile('Hello World.txt');

// Escribe el contenido en el archivo "Bye World.txt"
writeFile('Bye World.txt', helloContent);

console.log("Content from 'Hello World.txt' copied to 'Bye World.txt'.");