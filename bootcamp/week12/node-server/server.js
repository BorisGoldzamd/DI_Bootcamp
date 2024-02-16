const express = require("express");
const bp = require("body-parser");
const products_router = require("./routes/products.router.js");
const users_router = require("./routes/users.router.js");

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(3001);

app.use("/api/products", products_router);
app.use("/api/users", users_router);

/**
server
  |_ config - connection to database
  |_ models * - queries to database
  |_ controllers - function implementation code
  |_ routes - route implementation codes.
 */
