import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import  User  from '../models/user.js';
import * as process from "node:process";
import * as console from "node:console";

// localhost:5001/user/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email: email.trim() });

    if (!oldUser) {
      return res.status(401).json({message: `User does not exist`});
    }
    const isPasswordValied = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordValied) {
      return res.status(401).json({message: `Invalid password`});
    }
    const token = jwt.sign({email: oldUser.email, id: oldUser._id },
      process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ result: oldUser, token });
  } catch(error) {
    res.status(500).json('Something went wrong');
  }
}

// loginhost:5001/user/signup
export const signup = async (req, res) => {

  const { name, email, password, confirmPassword } = req.body;

  try {
    const oldUser = await User.findOne({ where: { email } });

    if (oldUser) {
      return res.status(401).json({message: `User already exist`});
    }

    if (!password === confirmPassword) {
      return res.status(401).json({message: `Passwords do not match`});
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({ name, email, password: hashedPassword });
    const result = await newUser.save();
    const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ result, token });

  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}