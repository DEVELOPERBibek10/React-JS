import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, roles: user.roles },
    process.env.JWT_SECRET,
    {
      expiresIn: 86400,
    }
  );
};

export default createToken;
