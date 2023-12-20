let navBar = document.querySelector("#navBar");
navBar.setAttribute("id", 'socialNetworkNavigation'); 

let ul = document.querySelector('ul');

let newLi = document.createElement('li');
newLi.textContent = 'Logout'; 

ul.appendChild(newLi);


let ul = document.getElementById("miLista");


let primerLi = ul.firstElementChild;


let ultimoLi = ul.lastElementChild;

console.log("Texto del primer enlace:", primerLi.textContent);
console.log("Texto del último enlace:", ultimoLi.textContent);