document.getElementById("searchBtn").addEventListener("click", searchRandomPerson);

function searchRandomPerson() {
    // Mostrar el icono de carga
    document.getElementById("loadingIcon").style.display = "inline";

    const randomPersonId = Math.floor(Math.random() * 83) + 1;

    fetch(`https://www.swapi.tech/api/people/${randomPersonId}/`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            // Ocultar el icono de carga
            document.getElementById("loadingIcon").style.display = "none";

            console.log("API Response:", data);
            displayResults(data);
        })
        .catch(err => {
            // Ocultar el icono de carga en caso de error
            document.getElementById("loadingIcon").style.display = "none";
            console.error(err);
        });
}

function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (data.result) {
        const person = data.result.properties;
        resultsDiv.innerHTML = `
            <h2>${person.name}</h2>
            <p>Height: ${person.height} cm</p>
            <p>Gender: ${person.gender}</p>
            <p>Birth Year: ${person.birth_year}</p>
            <p>Mass (kg): ${person.mass}</p>
        `;
    } else {
        resultsDiv.innerHTML = "<p>Person not found</p>";
    }
}

