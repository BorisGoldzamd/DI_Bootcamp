        // Asociar la función a un evento de clic en el botón
        document.getElementById('lib-button').addEventListener('click', function() {
            // Obtener los valores de los campos del formulario
            var noun = document.getElementById('noun').value;
            var adjective = document.getElementById('adjective').value;
            var person = document.getElementById('person').value;
            var verb = document.getElementById('verb').value;
            var place = document.getElementById('place').value;

            // Crear la historia utilizando los valores
            var story = "Once upon a time, there was a " + adjective + " " + noun +
                        " named " + person + ". They loved to " + verb +
                        " in the magical land of " + place + ".";

            // Mostrar la historia en el elemento con id 'story'
            document.getElementById('story').textContent = story;
        });