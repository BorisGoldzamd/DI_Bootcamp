let form = document.querySelector('form');
console.log(form);

let fName = document.querySelector('#fName');
let lName = document.querySelector('#lname');
console.log(fName,lName);

let fNameSelector = document.querySelector('input[name="firstname"]');
let lNameSelector = document.querySelector('input[name="lastname"]');
console.log(fNameSelector, lNameSelector);

document.addEventListener('DOMContentLoaded', function () {
    // Agregar un event listener al formulario
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe y la página se actualice
  
      // Obtener los valores de los campos de entrada
      let firstNameValue = document.getElementById('fname').value;
      let lastNameValue = document.getElementById('lname').value;
  
      // Verificar que los campos no estén vacíos
      if (firstNameValue.trim() !== '' && lastNameValue.trim() !== '') {
        // Crear elementos <li> con los valores y agregarlos a la lista <ul>
        let usersAnswerList = document.querySelector('.usersAnswer');
  
        let firstNameLi = document.createElement('li');
        firstNameLi.textContent = `First name: ${firstNameValue}`;
        usersAnswerList.appendChild(firstNameLi);
  
        let lastNameLi = document.createElement('li');
        lastNameLi.textContent = `Last name: ${lastNameValue}`;
        usersAnswerList.appendChild(lastNameLi);
  
        // Limpiar los campos de entrada después de agregar a la lista
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
      }
    });
  });
  