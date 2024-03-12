import express from "express";
import { _register, _login } from "../controllers/users.controller.js";

const router = express.Router();

router.post("/register", _register);
router.post("/login", _login);

export default router;
