import toast, { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UserProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.displayName,
      photo: user.photoURL,
    },
  });

  const updateByEmail = (email, updatedData) => {
    return axiosPublic.patch(`/users/email/${email}`, updatedData);
  };

  const onSubmit = (data) => {
    updateUserProfile(data.name, data.photo)
      .then(() => {
        return updateByEmail(user.email, data);
      })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error(
          "Failed to update profile in backend. Please try again later."
        );
      });
  };

  return (
    <div>
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold">Profile</h2>
        <p className="text-trunks">
          Manage Your Account Information and Preferences.
        </p>
      </div>
      <div className="flex gap-12 p-10 border rounded-2xl w-max mx-auto">
        <img
          src={user.photoURL}
          alt="photo image"
          className="w-32 h-32 avatar rounded-full object-cover"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-72"
              {...register("name")}
              required
            />
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="url"
              className="input input-bordered w-72"
              {...register("photo")}
              required
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
              Update
            </button>
          </div>
        </form>
      </div>

      <div className="p-10 border rounded-2xl w-max mx-auto">
        <span className="flex items-center gap-4">
          <div className="badge badge-success badge-xs"></div>
          <h2 className="text-2xl">Last Login Status</h2>
        </span>
        <h4 className="text-piccolo font-bold pt-6">Date & Time</h4>
        <p>{user.metadata.lastSignInTime}</p>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default UserProfile;
