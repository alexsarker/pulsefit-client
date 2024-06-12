import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { Link, useLoaderData } from "react-router-dom";
import BecomeTrainer from "../components/BecomeTrainer";
import { Helmet } from "react-helmet-async";

const TrainerDetail = () => {
  const trainer = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Pulsefit | Trainer Detail</title>
      </Helmet>
      <SectionTitle
        heading={"Trainer Detail"}
        subHeading={
          "Comprehensive Profile and Availability Information of Trainers"
        }
      />
      <div className="flex mb-24 gap-24">
        {trainer && (
          <div>
            <img
              src={trainer.profileImage}
              alt="trainer image"
              className="w-64 rounded-2xl"
            />
            <div>
              <div className="space-y-4">
                <h2 className="font-bold text-3xl pt-6">{trainer.name}</h2>
                <p className="text-whis text-xl">
                  {trainer.skills.join(", ")}{" "}
                  <small className="text-hit">
                    ({trainer.experience}+ Years)
                  </small>
                </p>
              </div>
              <div className="divider"></div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-bold text-xl">Bio</h2>
                  <p>{trainer.bio}</p>
                </div>
                <div className="space-y-4">
                  <h2 className="font-bold text-xl">
                    Comprehensive Information
                  </h2>
                  <div>
                    <p className="font-bold">
                      Certifications:{" "}
                      <span className="font-normal">
                        {trainer.comprehensiveInformation.certifications.join(
                          ", "
                        )}
                      </span>
                    </p>
                    <p className="font-bold">
                      Achievements:{" "}
                      <span className="font-normal">
                        {trainer.comprehensiveInformation.achievements.join(
                          ", "
                        )}
                      </span>
                    </p>
                    <p className="font-bold">
                      Philosophy:{" "}
                      <span className="font-normal">
                        {trainer.comprehensiveInformation.philosophy}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-bold">
                    Phone : <span className="font-normal">{trainer.phone}</span>
                  </p>
                  <p className="font-bold">
                    Email :{" "}
                    <span className="font-normal text-whis">
                      {trainer.email}
                    </span>
                  </p>
                  <p className="font-bold">
                    Location :{" "}
                    <span className="font-normal">{trainer.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <FaInstagram className="text-2xl" />
                <FaFacebook className="text-2xl" />
                <FaTwitter className="text-2xl" />
              </div>
            </div>
          </div>
        )}

        <div className="h-full p-10 border border-beerus rounded-2xl">
          <h2 className="font-bold text-xl pb-8 w-96">Available Slots</h2>
          <div className="space-y-4">
            {trainer && (
              <div className="flex justify-between items-center">
                <p className="text-trunks">
                  {trainer.availableSlots.day}, {trainer.availableSlots.time}
                </p>
                <Link
                  to="#"
                  className="btn btn-sm bg-piccolo text-white px-6 hover:bg-[#2A2473]"
                >
                  Book Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <BecomeTrainer />
    </>
  );
};

export default TrainerDetail;
