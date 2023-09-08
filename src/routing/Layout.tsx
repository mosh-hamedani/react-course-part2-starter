import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        {/* Outlet is like a Placeholder for child component. Different components render inside this component */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
