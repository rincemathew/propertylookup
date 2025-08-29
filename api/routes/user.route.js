import express from 'express';
import { updateUserInfo } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/update/:id', verifyUser, updateUserInfo)


export default router;