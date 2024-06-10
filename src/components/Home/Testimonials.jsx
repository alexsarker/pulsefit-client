import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTestimonials from "/src/hooks/useTestimonials.jsx";


const Testimonials = () => {
  const [useTestimonialsData] = useTestimonials();

  return (
    <div className="mb-24">
      <h2 className="text-center text-4xl font-bold pb-6">Testimonials</h2>
      <Swiper
        slidesPerView={2}
        navigation={true}
        spaceBetween={24}
        modules={[Navigation]}
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {useTestimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="card card-side bg-jiren">
              <div className="avatar">
                <div className="w-32 rounded-full m-12">
                  <img src={testimonial.imageURL} alt={testimonial.name} />
                </div>
                <RiDoubleQuotesL className="absolute top-14 right-36 text-4xl text-white p-2 border-piccolo rounded-full bg-piccolo" />
              </div>
              <div className="divider divider-horizontal py-8" />
              <div className="card-body">
                <div>
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p>Member</p>
                </div>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={testimonial.ratings}
                  readOnly
                />
                <p className="max-w-96 text-trunks font-medium items-stretch">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
