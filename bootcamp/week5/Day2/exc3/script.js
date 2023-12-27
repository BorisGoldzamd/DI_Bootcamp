let allBoldItems = document.querySelectorAll('body strong')

function getBoldItems(){
    return allBoldItems
}
getBoldItems().forEach(function (boldItem) {
    console.log(boldItem.textContent);
  });

getBoldItems().forEach(function(boldItem){
    boldItem.style.color= 'blue';
})

function highlight() {
    // Agregar la clase 'highlight' al body al pasar el ratón por encima del párrafo
    document.body.classList.add('highlight');
  }

  function returnItemsToDefault() {
    // Cambiar el color de todos los elementos en negrita de vuelta a negro
    let allBoldItems = document.querySelectorAll('body strong');
    allBoldItems.forEach(function (boldItem) {
      boldItem.style.color = 'black';
    });

    // Quitar la clase 'highlight' al body al salir el ratón del párrafo
    document.body.classList.remove('highlight');
  }

  // Asociar funciones a los eventos de mouseover y mouseout
  document.getElementById('myParagraph').addEventListener('mouseover', highlight);
  document.getElementById('myParagraph').addEventListener('mouseout', returnItemsToDefault);