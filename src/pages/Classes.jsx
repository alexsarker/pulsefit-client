import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useClass from "../hooks/useClass";

const Classes = () => {
  const [classesData] = useClass("");
  const [search, setSearch] = useState("");
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const filtered = classesData.filter(classItem =>
      classItem.className.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredClasses(filtered);
    setCurrentPage(0);
  }, [search, classesData]);

  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);
  const paginatedClasses = filteredClasses.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <>
      <Helmet>
        <title>Pulsefit | Classes</title>
      </Helmet>
      <div className="mb-24">
        <div className="text-center space-y-5 mt-16 mb-16">
          <h2 className="text-5xl font-bold">Explore Our Classes</h2>
          <p className="max-w-2xl mx-auto text-2xl text-trunks pb-5">
            Find the Perfect Class to Meet Your Fitness Goals
          </p>
          <label className="input input-bordered w-96 mx-auto flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {paginatedClasses.map((classItem) => (
            <Link
              to={`classes/${classItem._id}`}
              key={classItem._id}
              className="card card-side hover:bg-[#4E46B40D]"
            >
              <img
                src={classItem.imageURL}
                alt={classItem.className}
                className="rounded-2xl w-56 h-56 object-cover"
              />
              <div className="card-body">
                <h2 className="card-title">
                  {classItem.className}
                </h2>
                <p className="text-trunks line-clamp-2">
                  {classItem.description}
                </p>
                <div className="flex gap-4 items-center">
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    {classItem.trainers.slice(0, 3).map((trainer, index) => (
                      <div key={index} className="avatar">
                        <div className="w-12">
                          <img src={trainer.profileImage} alt={trainer.name} />
                        </div>
                      </div>
                    ))}
                    {classItem.trainers.length > 3 && (
                      <div className="avatar placeholder">
                        <div className="w-12 bg-piccolo text-white">
                          <span>+{classItem.trainers.length - 3}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-piccolo">
                    Bookings ({classItem.totalBookings})
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="join mt-12 flex justify-center">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`join-item btn ${index === currentPage ? "btn-active bg-piccolo text-white hover:bg-[#2A2473]" : "bg-transparent hover:bg-[#4E46B41F]"}`}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Classes;
