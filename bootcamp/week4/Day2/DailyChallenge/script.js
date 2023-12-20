let words = [];

// Solicitar palabras al usuario
while (true) {
    let word = prompt('Ingrese una palabra (o presione Cancelar para finalizar):');
    if (word === null || word === '') {
        break;
    }
    
    words.push(word); 
}

for (let i = 0; i < words.length; i++) {
    let palabraConAsteriscos = `* ${words[i]} *`;

    console.log(palabraConAsteriscos);
}
