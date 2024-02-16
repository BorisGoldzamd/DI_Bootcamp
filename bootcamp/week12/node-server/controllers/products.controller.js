const { products } = require("../config/db.js");
const {_getAllProducts} = require('../models/products.models.js');


const getAllProducts = (req, res) => {
  _getAllProducts()
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    res.status(404).json({message:'not found'})
  })
  // const newproducts = products.map((item) => {
  //   return { id: item.id, name: item.name };
  // });
  // res.json(products);
};

const getOneProduct = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) {
    res.status(404).json({ msg: "Product not found" });
  }
  res.json(product);
};

const search4Product = (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filterproducts = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filterproducts.length === 0) {
    return res
      .status(404)
      .json({ msg: "No Product matched your search query" });
  }

  res.json(filterproducts);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const indx = products.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404);

  products.splice(indx, 1);

  res.json(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indx = products.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404);
  //.status(404).json({ messgae: "product not found" });

  products[indx] = { ...products[indx], name, price };
  res.json(products);
};

const createProduct = (req, res) => {
    console.log(req.body);
    const { name, price } = req.body;
  
    // const newProduct = {
    //   id: products.length + 1,
    //   name: req.body.name,
    //   price: req.body.price,
    // };
    const newProduct = { ...req.body, id: products.length + 1 };
  
    products.push(newProduct);
    res.json(products);
  }

module.exports = {
  getAllProducts,
  getOneProduct,
  search4Product,
  deleteProduct,
  updateProduct,
  createProduct
};
