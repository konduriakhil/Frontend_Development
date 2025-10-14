import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const Signup = async (req, res) => {
      try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                  return res.status(400).json({
                        message: "Please fill all the fields",
                        success: false,
                        error: true,
                  });
            }

            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                  return res.status(400).json({
                        message: "User Already Existed",
                        success: false,
                        error: true,
                  });
            }

            const user = await userModel({
                  name,
                  email,
                  password
            })

            user.password = await bcrypt.hash(password, 12)

            await user.save();

            res.status(200).json({
                  message: "User is Created",
                  success: true,
                  error: false,
            })

      } catch (error) {
            console.log(error);
            res.send(401)
                  .json({
                        message: 'Error in regestering the user',
                        success: false,
                        error: true
                  })
      }
}

export const Login = async (req, res) => {
      try {
            const { email, password } = req.body;

            if (!email || !password) {
                  res.send(400)
                        .json({
                              message: 'Please fill all the fields',
                              success: false,
                              error: true
                        })
            }

            const user = await userModel.findOne({ email });

            if (!user) {
                  res.status(400)
                        .json({
                              message: 'user does not exist',
                              success: false,
                              error: true
                        })
            }

            const isMatched = await bcrypt.compare(password, user.password)
            if (!isMatched) {
                  res.status(400)
                        .json({
                              message: 'Invalid Email or Password',
                              success: false,
                              error: true
                        })
            }

            const jsonwebtoken = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })

            res.status(200)
                  .json({
                        message: 'User Logged in Successfully',
                        success: true,
                        error: false,
                        jsonwebtoken,
                        email,
                        name: user.name
                  })
      } catch (error) {
            console.log(error);
            res.status(401)
                  .json({
                        message: 'Error in Login',
                        success: false,
                        error: true
                  })
      }
};
