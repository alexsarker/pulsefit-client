import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Follow from "../components/Home/Follow";

const Root = () => {
  const location = useLocation();

  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      {location.pathname === "/" && <Follow />}
      <Footer></Footer>
    </div>
  );
};

export default Root;
