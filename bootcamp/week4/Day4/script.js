//ex1
// let div= document.querySelector('div')
// console.log(div)
// Cambiar el nombre "Pete" a "Richard"
// Seleccionar y cambiar el segundo elemento de la primera lista
// Cambiar "Pete" a "Richard"
// Cambiar "Pete" a "Richard"
// Función auxiliar para buscar un elemento que contiene un texto
function findElementWithText(selector, text) {
    let elements = document.querySelectorAll(selector);
    return Array.from(elements).find(element => element.textContent.includes(text));
}

// Cambiar "Pete" a "Richard"
let peteElement = findElementWithText('.list li', 'Pete');
if (peteElement) {
    peteElement.textContent = "Richard";
}

// Eliminar el <li> que contiene el texto "Sarah"
let sarahElement = findElementWithText('.list:nth-child(2) li', 'Sarah');
if (sarahElement) {
    sarahElement.parentNode.removeChild(sarahElement);
}

// Cambiar cada primer nombre de las dos <ul>'s a "TuNombre"
let ulElements = document.querySelectorAll('.list');
ulElements.forEach(function(ul) {
    let firstLi = ul.querySelector('li:first-child');
    if (firstLi) {
        firstLi.textContent = "Boris";
    }
});
