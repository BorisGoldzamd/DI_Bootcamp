const express = require("express");
const { products } = require("../config/db.js");
const {
  getAllProducts,
  getOneProduct,
  search4Product,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controllers/products.controller.js");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/search", search4Product);
router.get("/:id", getOneProduct);

/** Delete - delete one product using the id from params */
router.delete("/:id", deleteProduct);
/** Update a product
 *  PUT - id in params, name & price in the body
 */
router.put("/:id", updateProduct);
/** Create a new  product */
router.post("/", createProduct);

module.exports = router;
