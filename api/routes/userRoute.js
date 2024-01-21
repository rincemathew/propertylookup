import express from "express";
const router = express.Router();

import {homePage} from "../controllers/userController.js"


router.get('/',homePage)


export default router;