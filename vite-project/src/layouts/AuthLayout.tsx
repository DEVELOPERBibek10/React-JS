import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = ({ user }: { user: boolean }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthLayout;
