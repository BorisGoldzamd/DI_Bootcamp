const http = require('http');
const server= http.createServer((request, response)=>{
    console.log('hello from my first server');
    // console.log('url=>',request.url);
    // console.log('method=>', request.method)
    const products = [
        { id: 1, name: "iPhone", price: 700 },
        { id: 2, name: "iPad", price: 600 },
        { id: 3, name: "iWatch", price: 500 },
    ];
    response.end(JSON.stringify(products))
});

server.listen(3001);