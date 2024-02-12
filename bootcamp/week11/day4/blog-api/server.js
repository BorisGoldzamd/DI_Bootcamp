const express = require('express');
const app = express();

const blogPosts = [
    {
        id: 1,
        title: "Introduction to Node.js",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
    },
    {
        id: 2,
        title: "Getting Started with Express.js",
        content: "Express.js is a minimal and flexible Node.js web application framework."
    },
    {
        id: 3,
        title: "Building RESTful APIs with Node.js and Express",
        content: "RESTful APIs are a key component of modern web applications."
    },
    {
        id: 4,
        title: "Authentication in Node.js Applications",
        content: "Implementing user authentication is essential for securing Node.js applications."
    },
    {
        id: 5,
        title: "Using MongoDB with Node.js",
        content: "MongoDB is a popular NoSQL database that works well with Node.js applications."
    },
    {
        id: 6,
        title: "Asynchronous Programming in JavaScript",
        content: "Asynchronous programming allows JavaScript to handle multiple operations simultaneously."
    },
    {
        id: 7,
        title: "Deploying Node.js Applications to Heroku",
        content: "Heroku is a cloud platform that makes it easy to deploy and scale Node.js applications."
    },
    {
        id: 8,
        title: "Testing Node.js Applications with Jest",
        content: "Jest is a JavaScript testing framework that simplifies unit and integration testing of Node.js applications."
    },
    {
        id: 9,
        title: "Handling File Uploads in Node.js",
        content: "Node.js provides APIs for handling file uploads, allowing users to upload files to your server."
    }];

app.get('/post',(req,res)=>{
    res.json(blogPosts);
})

app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(res.json(post => post.id === postId));
    
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.post('/post'),(req,res)=>{
    const newPost = req.body;
    const postId = blogPost.lenght + 1; 
    newPost.id = postId;

    blogPosts.push(newPost);
    res.status(201).json(newPost);
}
//new post

const newPost = {
    title: 'CSS',
    content: 'Change colors of the web :)'
};

blogPosts.push(newPost)


// Route to update an existing blog post
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPost = req.body;
    const index = blogPosts.findIndex(post => post.id === postId);

    if (index !== -1) {
        blogPosts[index] = { ...blogPosts[index], ...updatedPost };
        res.json(blogPosts[index]);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// Route to delete a blog post
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const index = blogPosts.findIndex(post => post.id === postId);

    if (index !== -1) {
        blogPosts.splice(index, 1);
        res.json({ message: 'Post deleted successfully' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// Error handling for invalid routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Invalid route' });
});

// Error handling for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.port || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})