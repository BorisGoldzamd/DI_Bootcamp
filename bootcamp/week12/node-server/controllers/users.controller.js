const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  getAllUsers,
};
