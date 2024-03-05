const { db } = require('../config/db.js');

const _getAllProducts = () => {
    return db('products').select('id','name','price');
};

const _getProductById = (id) =>{ 
    return db('products')
    .select('id','name','price','description')
    .where({id:id}); 
};

module.exports = {
    _getAllProducts,
    _getProductById,
};
