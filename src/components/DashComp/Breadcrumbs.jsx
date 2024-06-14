import { GoHome } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ router, routeName }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-trunks breadcrumbs">
        <ul>
          <li>
            <Link to="/dashboard">
              <GoHome className="text-trunks" />
            </Link>
          </li>
          <li>
            <Link to={router}>{routeName}</Link>
          </li>
        </ul>
      </div>
      <div>
        <IoIosNotificationsOutline className="text-3xl text-piccolo" />
      </div>
    </div>
  );
};

export default Breadcrumbs;
