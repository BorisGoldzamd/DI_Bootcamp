let selectedColor = '';
const canvasContainer = document.getElementById('canvas-container');
const colorPalette = document.getElementById('colorPalette');

function selectColor(colorId) {
    selectedColor = colorId;
}
// Crea una cuadrícula de 50x50 en el lienzo
for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
        const canvasItem = document.createElement('div');
        canvasItem.classList.add('grid-item', 'canvas-item');
        canvasItem.addEventListener('click', function () {
            applyColor(canvasItem);
        });
        canvasContainer.appendChild(canvasItem);
    }
}

function applyColor(canvasItem) {
    if (selectedColor !== '') {
        canvasItem.style.backgroundColor = document.getElementById(selectedColor).style.backgroundColor;
    }
}
