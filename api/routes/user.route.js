import express from 'express';
import { updateUserInfo, deleteUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/update/:id', verifyUser, updateUserInfo)

router.delete('/delete/:id', verifyUser, deleteUser)


export default router;