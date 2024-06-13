import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

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
        <ul className="px-1 gap-10 mr-20 hidden lg:flex">{navLinks}</ul>
        {user ? (
          <div className="dropdown dropdown-end">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[20] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/adminBoard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="justify-between">
                  User Profile
                </Link>
              </li>
              <li>
                <a
                  onClick={() =>
                    logOut().then(() => {
                      navigate("/login");
                      toast.success("Logout Successfully");
                    })
                  }
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
              Login
            </button>
          </Link>
        )}
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Navbar;
