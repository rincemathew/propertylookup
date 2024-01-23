import express from "express";
const router = express.Router();

import {homePage} from "../controllers/user.controller.js"


router.get('/',homePage);


export default router;