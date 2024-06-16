import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import AdminBoard from "./adminPages/AdminBoard";
import MemberBoard from "./memberPages/MemberBoard";
import TrainerBoard from "./trainerPages/TrainerBoard";

const Dashboard = () => {
  const { user } = useAuth();
  const [userData] = useUser(`/email/${user.email}`);

  return (
    <div>
      {userData?.role === "Member" && <MemberBoard />}
      {userData?.role === "Admin" && <AdminBoard />}
      {userData?.role === "Trainer" && <TrainerBoard />}
    </div>
  );
};

export default Dashboard;
