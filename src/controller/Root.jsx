import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Follow from "../components/Home/Follow";

const Root = () => {
  const location = useLocation();

  return (
    <div>
      <ScrollRestoration />
      {location.pathname === "/dashboard" ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <div className="container mx-auto">
          <Navbar />
          <Outlet />
        </div>
      )}
      {location.pathname === "/" && <Follow />}
      {location.pathname === "/dashboard" ? "" : <Footer />}
    </div>
  );
};

export default Root;
