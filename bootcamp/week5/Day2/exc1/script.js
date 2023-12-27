let myh1 = document.querySelector('article h1');
console.log(myh1)   

//2
let lastParragraph = document.querySelector('article p:last-child');
lastParragraph.remove()=    
console.log(lastParragraph);
function changeColor() {
// Cambia el color de fondo del h2 a rojo cuando se hace clic
document.getElementById('myH2').style.backgroundColor = 'red';
}

function hideH3() {
    // Oculta el h3 cuando se hace clic
    document.getElementById('myH3').style.display = 'none';
}

function makeParagraphsBold() {
    // Hace que el texto de todos los párrafos sea negrita
    let paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(function(paragraph) {
    paragraph.style.fontWeight = 'bold';
    });
}