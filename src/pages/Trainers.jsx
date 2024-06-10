import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import TrainerImg from "/src/assets/trainers/local.png";
import { Helmet } from "react-helmet-async";

const Trainers = () => {
  return (
    <>
      <Banner heading={"Our Trainers"} image={TrainerImg} />

      <div>
        <Helmet>
          <title>Pulsefit | Trainers</title>
        </Helmet>
        <SectionTitle
          heading={"We Trained You to Gain"}
          subHeading={
            "Our team of professional trainers is here to help you achieve your fitness goals. Get to know our trainers and their expertise."
          }
        />

        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            <div className="card w-80 bg-piccolo">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="trainer image"
                />
              </figure>
              <div className="card-body divide-y-2 divide-[#FF4E64] space-y-2">
                <div className="flex justify-between items-center text-white">
                  <h2 className="card-title text-xl">Amanda</h2>
                  <div className="rating w-16">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <p className="font-bold text-white">Experience:</p>
                  <p className="text-white">8+ Years</p>
                  <p className="font-bold text-white">Expertise:</p>
                  <p className="text-white">Yoga, Pilates</p>
                  <div className="flex gap-2 text-white pt-4">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainers;
