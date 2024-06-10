import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import useTrainer from "../../hooks/useTrainer";
import { Link } from "react-router-dom";

const FeaturedTrainers = () => {
  const [trainersData] = useTrainer("/experience");

  return (
    <div className="mb-24">
      <SectionTitle
        heading={"Meet Our Expert Trainer"}
        subHeading={
          "Our team of professional trainers is here to help you achieve your fitness goals. Get to know our trainers and their expertise."
        }
      />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {trainersData.slice(0, 3).map((trainer) => (
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
              <div className="card-body h-72 divide-y-2 divide-[#FF4E64] space-y-2">
                <div className="flex justify-between items-center text-white">
                  <h2 className="card-title text-xl">{trainer.name}</h2>
                  <div className="flex gap-2 text-white">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <p className="text-hit">
                    {trainer.skills.join(", ")}
                  </p>
                  <p className="text-white line-clamp-4">{trainer.bio}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrainers;
