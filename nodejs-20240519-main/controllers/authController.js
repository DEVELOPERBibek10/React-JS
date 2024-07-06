import createToken from "../helpers/authHelper.js";
import authService from "../services/authService.js";
import verifyPassword from "../utils/passwordVerification.js";

const registerUser = async (req, res) => {
  try {
    const { email, name, password, confirmPassword } = req.body;

    if (!email || !name || !password)
      return res.status(422).send("Required params are missing.");

    verifyPassword(password, confirmPassword);

    const user = await authService.registerUser(req.body);

    const token = createToken(user);

    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    res.json({ ...user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);

    const token = createToken(user);

    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    res.json({ ...user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    res.json({
      status: "OK",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  logoutUser,
  registerUser,
  loginUser,
};
