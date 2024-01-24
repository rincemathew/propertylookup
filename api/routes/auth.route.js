import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

import { signUp } from "../controllers/auth.controller.js";


router.post(`${process.env.COMMON_URL}/signup`,signUp);

export default router;