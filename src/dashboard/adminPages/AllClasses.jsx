import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import AddButton from "../../components/DashComp/AddButton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useClass from "../../hooks/useClass";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllClasses = () => {
  const axiosPublic = useAxiosPublic();
  const [classesData, refetch] = useClass();
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [updateData, setUpdateData] = useState(null);

  const onSubmit = (data) => {
    const classData = {
      className: data.title,
      imageURL: data.photo,
      description: data.description,
      totalBookings: 0,
    };

    axiosPublic
      .post("/classes", classData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Class added successfully");
          reset();
          setShowForm(false);
          refetch();
        } else {
          toast.error("Failed to add class");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  const handleDelete = (classId) => {
    axiosPublic
      .delete(`/classes/${classId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Class deleted successfully");
          refetch();
        } else {
          toast.error("Failed to delete class");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  const handleUpdate = (classId) => {
    const classToUpdate = classesData.find((classItem) => classItem._id === classId);
    setUpdateData(classToUpdate);
    setValue("title", classToUpdate.className);
    setValue("photo", classToUpdate.imageURL);
    setValue("description", classToUpdate.description);
    setShowForm(true);
  };

  const handlePatchSubmit = (data) => {
    const updatedClassData = {
      className: data.title,
      imageURL: data.photo,
      description: data.description,
    };

    axiosPublic
      .patch(`/classes/${updateData._id}`, updatedClassData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Class updated successfully");
          reset();
          setShowForm(false);
          refetch();
        } else {
          toast.error("Failed to update class");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  return (
    <div>
      <Breadcrumbs router="/dashboard/allClasses" routeName="All Classes" />
      <DashTitle
        headline="All Classes"
        subHeadline="Manage and Review All Available Classes"
      />
      <AddButton name={"Add New Class"} onClick={() => setShowForm(true)} />
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
                {updateData ? "Update Class" : "Add New Class"}
              </h2>
              <IoCloseOutline
                className="text-3xl cursor-pointer"
                onClick={() => {
                  setShowForm(false);
                  setUpdateData(null);
                  reset();
                }}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="input input-bordered w-72"
                placeholder="Class Title"
                {...register("title", { value: updateData?.className })}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                className="input input-bordered w-72"
                placeholder="Class Image URL"
                {...register("photo", { value: updateData?.imageURL })}
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered text-base"
                placeholder="Class Description"
                {...register("description", { value: updateData?.description })}
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
              <th>Class Name</th>
              <th>Managing Trainer</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {classesData?.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex space-x-4 items-center">
                    <img
                      src={classItem.imageURL}
                      className="avatar rounded-full w-12 h-12"
                      alt={classItem.className}
                    />
                    <p>{classItem.className}</p>
                  </div>
                </td>
                <td>
                  {classItem.trainers?.map((trainer, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <img
                        src={trainer.profileImage}
                        className="avatar rounded-full w-6 h-6 mt-2"
                        alt={trainer.name}
                      />
                      <span className="mt-2">{trainer.name}</span>
                    </div>
                  ))}
                </td>
                <td>
                  <div className="flex space-x-8 justify-center">
                    <AiOutlineEdit
                      onClick={() => handleUpdate(classItem._id)}
                      className="text-2xl text-whis cursor-pointer"
                    />
                    <AiOutlineDelete
                      onClick={() => handleDelete(classItem._id)}
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

export default AllClasses;
