import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout({ user }: { user: boolean }) {
  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
}

export default MainLayout;
