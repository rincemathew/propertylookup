import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

import { signUp,signIn, google } from "../controllers/auth.controller.js";

router.post(`${process.env.COMMON_URL}/signup`,signUp);

router.post(`${process.env.COMMON_URL}/signin`,signIn)

router.post(`${process.env.COMMON_URL}/google`,google)

export default router;