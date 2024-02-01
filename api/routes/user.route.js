import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

import {homePage, updateUser,deleteUser,getUserListings} from "../controllers/user.controller.js"
import { verifyToken } from '../utils/verifyUser.js';


router.get(`${process.env.COMMON_URL}/`,homePage);

router.post(`${process.env.COMMON_URL}/update/:id`, verifyToken, updateUser)

router.delete(`${process.env.COMMON_URL}/update/:id`, verifyToken, deleteUser)

router.get('api/user/listings/:id', verifyToken, getUserListings)
export default router;