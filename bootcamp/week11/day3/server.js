const express = require('express');
const {products} = require ('./config/db.js')
const app = express();

app.listen(3001);

app.get('/api',(request,response)=>{
    response.json(products);
})

app.get("/api/products/:id",(req,res)=>{
    console.log(req.params);
    res.json(products)
})