fetch("http://localhost:3001/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const html = data.map(item => {
        return `<div>
            ${item.name} ${item.price}
        </div>`
    });
    document.getElementById('root').innerHTML += html.join('')
  })
  .catch((e) => {
    console.log(e);
  });


  fetch("http://localhost:3001/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const html = data.map(item => {
        return `<div>
            ${item.name} ${item.email}
        </div>`
    });
    document.getElementById('root').innerHTML += html.join('')
  })
  .catch((e) => {
    console.log(e);
  });