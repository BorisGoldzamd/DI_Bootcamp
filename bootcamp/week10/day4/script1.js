//exc2 
//const apiKey = '061LYQ7aS6EHaeeulEkaWNtRAzIKKL9k'; 
// const searchTerm = 'sun'; 

// const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;


// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error("Error en la solicitud:", error);
//   });

//exc3

// const Url= "https://www.swapi.tech/api/starships/9/";
// async function fetchData() {
//     try {
//     const response = await fetch(Url);
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();

//     console.log(data);
//     } catch (error) {
//     console.error("Error:", error);
//     }
// }

//   // Llamar a la función asincrónica
// await fetchData();


//exc4
//first the async and then the timeOut, because, even thought that both of them are asyncronic codes, when js read resolveaftertwoseconds() keep reading the code and go back once it finished. so thats why it console "calling" and after "resolving"