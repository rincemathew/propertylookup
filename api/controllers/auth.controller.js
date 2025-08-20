import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import {errorHandler} from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async(req, res, next) => {
  const { username,email, password } = req.body; 
  const hashedPassword = await bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password:hashedPassword
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
    
  } catch (error) {
    next(error);
  }

}

export const signin = async(req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = await bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Username or password is incorrect"));
    }
    //removing password from user details before sending response
    //to avoid sending sensitive information
    // password: _ is a convention meaning "ignore this field".
    const { password:_, ...userDetails } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('access_token', token, {httpOnly:true}).status(200).json({
      success: true,
      message: "User signed in successfully",
      ...userDetails
    });
  } catch (error) {
    next(error);
  }
}