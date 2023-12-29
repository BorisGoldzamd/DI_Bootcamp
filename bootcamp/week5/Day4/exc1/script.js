setTimeout(function(){
let container = document.querySelector("#container");
let paragraph = document.createElement('p');
paragraph.textContent = 'Hello World';
container.appendChild(paragraph);
}, 2000);


var intervalo = setInterval(function(){
    let container = document.querySelector("#container");
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);
}, 2000);

function detenerIntervalo() {
    clearInterval(intervalo);
}
