// //try & catch
// console.log('before')
// for(let i = 0; i < 5; i++){
//     console.log(i)
// };
// try{
// console.log(i)}
// catch(err){
//     console.log(err.message)
// };
// finally{
    
// }
// console.log('after');
// console.log('after after')

// function solution(S) {
//     let foundB = false;
  
//     for (let i = 0; i < S.length; i++) {
//       if (S[i] === 'b') {
//         foundB = true;
//       } else if (foundB && S[i] === 'a') {
//         // Si encontramos 'a' después de 'b', retorna falso
//         return false;
//       }
//     }
  
//     // Si no hay 'b' o 'a' aparece antes que 'b', retorna verdadero
//     return true;
//   }
//   console.log(solution("bbb"));
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => {
    render(users); // Llamada a la función render con los datos
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>${item.name}  ${item.id} ${item.email}</div>`;
    });

    document.getElementById('root').innerHTML = html.join('');
}
