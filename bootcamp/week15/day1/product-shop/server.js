const express = require('express');
const cors = require('cors');
const router = require('./routes/products.js')
const app = express();
const PORT = 5000;
app.use(cors());

app.listen(process.env.PORT|| 5000, () => {
    console.log(`runing on port ${PORT}`);
})

app.use('/api/products',router)