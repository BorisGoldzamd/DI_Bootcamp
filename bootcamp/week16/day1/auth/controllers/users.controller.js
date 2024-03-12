import { register, login, allusers } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const _login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await login(email.toLowerCase());

    // check if user exist in users table
    if (user.length === 0)
      return res.status(404).json({ msg: "email not found" });

    // check password
    const match = bcrypt.compareSync(password + "", user[0].password);
    if (!match) return res.status(404).json({ msg: "wrong password" });

    // token
    const userid = user[0].id;
    const useremail = user[0].email;

    const secret = process.env.ACCESS_TOKEN_SECERT;

    const accessToken = jwt.sign({ userid, useremail }, secret, {
      expiresIn: "60s",
    });

    res.cookie("token", accessToken, {
      maxAge: 60 * 1000,
      httpOnly: true,
    });

    res.json({ token: accessToken });

    
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "somthing went wrong!!!" });
  }
};

export const _register = async (req, res) => {
  const { email, password } = req.body;
  const loweremail = email.toLowerCase();

  // encrypt the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password + "", salt);

  try {
    const user = await register(loweremail, hash);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "email exist" });
  }
};
