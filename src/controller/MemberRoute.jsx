import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const MemberRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userData] = useUser(`/email/${user.email}`);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-infinity loading-lg my-24 md:my-48 lg:my-96"></span>
      </div>
    );
  }

  if (userData?.role === "Admin" || userData?.role === "Member") {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" />;
};

MemberRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MemberRoute;
