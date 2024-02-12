const express = require("express");
const app = express();
const fetchPosts = require('./data/dataService');
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Servidor express listening in port ${PORT}`);
})


app.get('/posts', async (req, res) => {
    try {
        // Utiliza la función fetchPosts para obtener los posts
        const posts = await fetchPosts();

        // Responde con los posts recuperados de la API JSONPlaceholder
        res.json(posts);

        // Muestra un mensaje en la consola indicando que los datos han sido recuperados y enviados
        console.log('Datos de los posts han sido recuperados y enviados como respuesta.');
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir al obtener los posts
        console.error('Error al obtener los posts:', error);
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
});