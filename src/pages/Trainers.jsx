import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import TrainerImg from "/src/assets/trainers/local.png";
import { Helmet } from "react-helmet-async";
import useTrainer from "../hooks/useTrainer";
import { Link } from "react-router-dom";

const Trainers = () => {
  const [trainersData] = useTrainer("");

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {trainersData.map((trainer) => (
              <Link
                to={`/trainers/${trainer._id}`}
                key={trainer._id}
                className="card w-80 bg-piccolo"
              >
                <figure>
                  <img
                    src={trainer.profileImage}
                    alt="trainer image"
                    className="w-80 h-72 object-cover"
                  />
                </figure>
                <div className="card-body h-64 divide-y-2 divide-[#FF4E64] space-y-2">
                  <div className="flex justify-between items-center text-white">
                    <h2 className="card-title text-xl">{trainer.name}</h2>
                    <div className="flex gap-2 text-white">
                      <FaInstagram />
                      <FaFacebook />
                      <FaTwitter />
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <p className="text-white">
                      <span className="font-semibold text-hit">
                        Experience:
                      </span>{" "}
                      {trainer.experience} Years
                    </p>
                    <p className="text-white">
                      <span className="font-semibold text-hit">Expertise:</span>{" "}
                      {trainer.skills.join(", ")}
                    </p>
                    <p className="text-white">
                      <span className="font-semibold text-hit">Slots: </span>
                      {trainer.availableSlots.day},{" "}
                      {trainer.availableSlots.time}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainers;
