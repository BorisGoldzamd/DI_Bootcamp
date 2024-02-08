const slug = require('slug');
let url = 'I am an URL and the idea of Slug //$%%%% is to convert everything in one string without anything rare';
let formattedUrl = slug(url);

console.log(formattedUrl);