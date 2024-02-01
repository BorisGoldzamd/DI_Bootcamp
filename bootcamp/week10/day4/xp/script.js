//exc1
const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchData() {
  try {
    // Hacer la solicitud GET usando fetch y esperar la respuesta
    const response = await fetch(apiUrl);

    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(`error! Status: ${response.status}`);
    }

    // Parsear el JSON en la respuesta y esperar el resultado
    const data = await response.json();

    // Log del objeto JavaScript recibido de la API
    console.log(data);
  } catch (error) {
    // Log de cualquier error que ocurra durante la solicitud
    console.error("Fetch error:", error);
  }
}

// Llamar a la función asincrónica
fetchData();


