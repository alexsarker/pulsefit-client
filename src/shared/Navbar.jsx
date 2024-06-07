import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/trainers">Trainers</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/forum">Forum</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-4 md:my-6 lg:my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src={Logo} alt="Pulsefit" className="h-8 lg:h-full md:h-full" />
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="px-1 gap-10 mr-20 hidden lg:flex">
          {navLinks}
        </ul>
        <Link>
          <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
