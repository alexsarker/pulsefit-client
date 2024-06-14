import useAuth from "../../hooks/useAuth";
import DashImg from "/src/assets/dashboard/DashBan.svg";

const DashBan = () => {
  const { user } = useAuth();
  return (
    <div
      className="hero h-80 rounded-2xl"
      style={{
        backgroundImage: `url(${DashImg})`,
      }}
    >
      <div className="hero-content mr-[800px]">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-5xl font-bold">Welcome, {user.displayName}!</h1>
          <p className="text-trunks">
            Here's what's going on with your campaigns to see and explore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBan;
