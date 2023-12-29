
let one = document.querySelector("#one");
let twotree = document.querySelector("#twotree");
let tree = document.querySelector("#tree");
let four = document.querySelector("#four");
let five = document.querySelector("#five");

function countItDown() {
    one.textContent = parseFloat (countDown.textContent)-1
}
window.setInterval(countItDown, 1000)