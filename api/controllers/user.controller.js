import express from 'express';
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';


export const updateUserInfo = async(req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401,"You can update only your own account." ));
  }
  console.log(req.body);
  try {
    if(req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    console.log("2222222");
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar
        }
    }, 
    {new: true});
    console.log("3333333");
    const {password, ...rest} = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}


export const deleteUser = async(req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401,"You can delete only your own account." ));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token")
    res.status(200).json({success: true, message: "User has been deleted."});
  } catch (error) {
    next(error);
  }
}