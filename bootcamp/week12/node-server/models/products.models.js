const { db } = require("../config/pgconnect.js");

const _getAllProducts = () => {
    return db('products').select('id', 'name', 'price').orderBy('id');
}; // this will return a promise

module.exports = {
    _getAllProducts,
};
