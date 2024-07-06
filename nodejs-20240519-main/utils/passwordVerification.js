import { PASSWORD_REGEX } from "../constants/regex.js";

function verifyPassword(password, confirmPassword) {
  if (password !== confirmPassword) throw new Error("Passwords do not match.");

  if (password.length < 8)
    throw new Error("Password length must be greater than 8.");
}

export default verifyPassword;
