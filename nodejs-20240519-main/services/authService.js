import { EMAIL_REGEX } from "../constants/regex.js";
import bcrypt from "bcryptjs";
import User from "../model/User.js";

const registerUser = async (data) => {
  try {
    const emailExists = await User.findOne({ email: data.email });

    if (emailExists) throw new Error("Email already exists.");

    const isValidEmail = data.email.match(EMAIL_REGEX);

    if (!isValidEmail) throw new Error("Invalid email address.");

    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const createdUser = await User.create({
      ...data,
      password: hashedPassword,
    });

    return {
      id: createdUser._id,
      email: createdUser.email,
      name: createdUser.name,
      roles: createdUser.roles,
      createdAt: createdUser.createdAt,
    };
  } catch (error) {
    throw error;
  }
};

const loginUser = async (data) => {
  try {
    const existingUser = await User.findOne({ email: data.email });

    if (!existingUser) throw new Error("Email or password doesn't match.");

    const isMatch = await bcrypt.compare(data.password, existingUser.password);

    if (!isMatch) throw new Error("Email or password doesn't match.");

    return {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      roles: existingUser.roles,
    };
  } catch (error) {
    throw error;
  }
};

export default {
  registerUser,
  loginUser,
};
