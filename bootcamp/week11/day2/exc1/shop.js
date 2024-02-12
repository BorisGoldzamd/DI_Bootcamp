const appleProducts = require('./product.js');
// console.log(appleProducts);
function searchProduct(productName){
    let result ={
        price: null,
        category: null
    }
    appleProducts.forEach(product =>{
        if (product.name === productName){
            result.price = product.price;
            result.category = product.category;
            return
        }
    })
    return result
}

const productInfo = searchProduct("iPhone 13 Pro");
console.log(productInfo);