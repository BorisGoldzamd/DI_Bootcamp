const axios = require('axios');

async function fetchPosts(){
    try{
        const response = await axios.getAdapter('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }catch(error){
        console.error('Error to catch the post', error)
        throw error
    }
}

module.exports = fetchPosts;