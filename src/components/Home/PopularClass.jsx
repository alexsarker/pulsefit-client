import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import useClass from "../../hooks/useClass";
import { IoIosArrowForward } from "react-icons/io";

const PopularClass = () => {
  const [classesData] = useClass("/totalBookings");

  return (
    <>
      <div className="mb-24">
        <div className="flex justify-between">
          <h2 className="text-center text-4xl font-bold pb-6">
            Our Most Popular Classes
          </h2>
          <Link
            to="/classes"
            className="text-xl text-piccolo items-center flex gap-2"
          >
            See All <IoIosArrowForward />
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {classesData.map((classItem) => (
            <SwiperSlide key={classItem._id}>
              <div className="card w-72">
                <figure>
                  <img
                    src={classItem.imageURL}
                    alt="Class image"
                    className="rounded-2xl border-t-2 border-chichi w-72 h-72 object-cover"
                  />
                </figure>
                <div className="space-y-2">
                  <h2 className="card-title pt-6 text-xl font-bold">
                    {classItem.className}
                  </h2>
                  <p className="text-trunks line-clamp-2">
                    {classItem.description}
                  </p>
                  <p className="text-piccolo font-semibold">
                    Total Bookings: {classItem.totalBookings}
                  </p>
                  <Link
                    to={`/classes/${classItem._id}`}
                    className="text-hit font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PopularClass;
