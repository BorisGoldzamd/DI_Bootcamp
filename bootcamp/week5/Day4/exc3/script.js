function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    // Obtén las coordenadas del evento de soltar
    var x = event.clientX - draggedElement.clientWidth / 2;
    var y = event.clientY - draggedElement.clientHeight / 2;

    // Asegúrate de que el elemento no salga de los límites del contenedor
    x = Math.max(0, Math.min(x, document.getElementById('target').clientWidth - draggedElement.clientWidth));
    y = Math.max(0, Math.min(y, document.getElementById('target').clientHeight - draggedElement.clientHeight));

    // Asigna las nuevas coordenadas al elemento
    draggedElement.style.left = x + 'px';
    draggedElement.style.top = y + 'px';
}