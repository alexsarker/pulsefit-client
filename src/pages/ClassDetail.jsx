import { useLoaderData } from "react-router-dom";

const ClassDetail = () => {
  const classData = useLoaderData();

  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col items-center">
        <img
          src={classData.imageURL}
          alt={classData.className}
          className="rounded-2xl w-full h-96 object-cover mb-8"
        />
        <h2 className="text-4xl font-bold mb-4">{classData.className}</h2>
        <p className="text-trunks mb-4">{classData.description}</p>
        <p className="text-piccolo text-xl">Bookings: {classData.totalBookings}</p>
      </div>
    </div>
  );
};

export default ClassDetail;
