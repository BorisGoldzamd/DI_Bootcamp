import React, { useState } from 'react';

// Función para realizar la solicitud HTTP POST
async function fetchData() {
  try {
    const url = 'https://webhook.site/60200177-9f4d-4a1b-a433-e5d960e3ab96'; // URL del servicio de webhook
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function Exc4() {
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    try {
      const responseData = await fetchData(); // Llama a la función fetchData
      setResponse(responseData);
      console.log(responseData); // Muestra la respuesta en la consola
    } catch (error) {
      // Maneja el error si ocurriera
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button> {/* Botón para realizar la solicitud */}
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre> {/* Muestra la respuesta en la interfaz de usuario */}
        </div>
      )}
    </div>
  );
}

export default Exc4;
