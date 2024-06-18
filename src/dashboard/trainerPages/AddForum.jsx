import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import AddButton from "../../components/DashComp/AddButton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCommunity from "../../hooks/useCommunity";
import { BiDownvote, BiUpvote } from "react-icons/bi";

const AddForum = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [forumsData, refetch] = useCommunity();
  const [userData] = useUser(`/email/${user.email}`);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [updateData, setUpdateData] = useState(null);

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = `${month}/${date}/${year}`;

  const onSubmit = (data) => {
    const forumData = {
      title: data.title,
      author: user.displayName,
      date: currentDate,
      role: userData.role,
      excerpt: data.description,
      imageURL: data.photo,
      authorImageURL: user.photoURL,
      upvotes: 0,
      downvotes: 0,
    };

    axiosPublic
      .post("/community", forumData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Post added successfully");
          reset();
          setShowForm(false);
          refetch();
        } else {
          toast.error("Failed to add post");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  const handleDelete = (forumId) => {
    axiosPublic
      .delete(`/community/${forumId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Post deleted successfully");
          refetch();
        } else {
          toast.error("Failed to delete post");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  const handleUpdate = (forumId) => {
    const forumToUpdate = forumsData.find((forum) => forum._id === forumId);
    setUpdateData(forumToUpdate);
    setShowForm(true);
  };

  const handlePatchSubmit = (data) => {
    const updatedForumData = {
      title: data.title,
      description: data.description,
      photo: data.photo,
    };

    axiosPublic
      .patch(`/community/${updateData._id}`, updatedForumData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Post updated successfully");
          reset();
          setShowForm(false);
          refetch();
        } else {
          toast.error("Failed to update post");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  return (
    <div>
      <Breadcrumbs router="/dashboard/allForums" routeName="All Forum Posts" />
      <DashTitle
        headline="All Forum Posts"
        subHeadline="Monitor and Moderate Forum Discussions"
      />
      <AddButton name={"Add New Post"} onClick={() => setShowForm(true)} />
      {showForm && (
        <div className="p-10 border rounded-2xl w-max mx-auto mt-12">
          <form
            onSubmit={
              updateData
                ? handleSubmit(handlePatchSubmit)
                : handleSubmit(onSubmit)
            }
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">
                {updateData ? "Update Post" : "Add New Post"}
              </h2>
              <IoCloseOutline
                className="text-3xl cursor-pointer"
                onClick={() => {
                  setShowForm(false);
                  setUpdateData(null);
                }}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="input input-bordered w-72"
                placeholder="Post Title"
                {...register("title", { value: updateData?.title })}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                className="input input-bordered w-72"
                placeholder="Post Image URL"
                {...register("photo", { value: updateData?.imageURL })}
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered text-base"
                placeholder="Post Description"
                {...register("description", { value: updateData?.excerpt })}
                required
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-piccolo w-max text-white px-10 hover:bg-[#2A2473]">
                {updateData ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Forum Post</th>
              <th>Posted by</th>
              <th>Voted</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {forumsData.map((forum, index) => (
              <tr key={forum._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex space-x-4 items-center">
                    <img
                      src={forum.imageURL}
                      className="avatar rounded-full w-6 h-6"
                      alt={forum.title}
                    />
                    <p>{forum.title}</p>
                  </div>
                </td>
                <td>{forum.author}</td>
                <td>
                  <div className="flex space-x-4">
                    <div className="flex items-center gap-2">
                      <BiUpvote className="text-3xl text-roshi p-2 bg-roshi-10 rounded-full" />
                      <p>{forum.upvotes}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BiDownvote className="text-3xl text-dodoria p-2 bg-dodoria-10 rounded-full" />
                      <p>{forum.downvotes}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex space-x-8 justify-center">
                    <AiOutlineEdit
                      onClick={() => handleUpdate(forum._id)}
                      className="text-2xl text-whis cursor-pointer"
                    />
                    <AiOutlineDelete
                      onClick={() => handleDelete(forum._id)}
                      className="text-2xl text-dodoria cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddForum;
