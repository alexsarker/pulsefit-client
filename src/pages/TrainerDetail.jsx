import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import BecomeTrainer from "../components/BecomeTrainer";

const TrainerDetail = () => {
  return (
    <>
      <SectionTitle
        heading={"Trainer Detail"}
        subHeading={
          "Comprehensive Profile and Availability Information of Trainers"
        }
      />
      <div className="flex mb-24 gap-24">
        <div>
          <img
            src="https://i.ibb.co/NTDBXxL/1694264756501.jpg"
            alt="trainer image"
            className="w-64"
          />
          <div>
            <div>
              <h2 className="font-bold text-3xl">John Smith</h2>
              <p className="text-whis text-xl">
                Yoga, Pilates, Meditation{" "}
                <small className="text-hit">(10+ Years)</small>
              </p>
            </div>
            <div className="divider"></div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-bold text-xl">Bio</h2>
                <p>
                  John Smith is a dedicated yoga instructor with over a decade
                  of experience in helping individuals find balance and harmony
                  through yoga and meditation. He specializes in personalized
                  yoga sessions that cater to all levels of practitioners, from
                  beginners to advanced yogis.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-bold text-xl">Comprehensive Information</h2>
                <div>
                  {" "}
                  <p className="font-medium">
                    Certifications:{" "}
                    <span className="font-normal">
                      Certified Yoga Instructor (RYT 500), Certified Pilates
                      Instructor
                    </span>
                  </p>
                  <p className="font-medium">
                    Achievements:{" "}
                    <span className="font-normal">
                      Conducted over 500 successful yoga retreats globally,
                      Featured in Yoga Journal.
                    </span>
                  </p>
                  <p className="font-medium">
                    Philosophy:{" "}
                    <span className="font-normal">
                      "Yoga is not just about flexibility, it's about finding
                      peace within."
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <p className="font-medium">
                  Phone : <span className="font-normal">(+1) 123 456 7890</span>
                </p>
                <p className="font-medium">
                  Email :{" "}
                  <span className="font-normal">john.smith@yogafit.com</span>
                </p>
                <p className="font-medium">
                  Location :{" "}
                  <span className="font-normal">
                    Adams St.Westford, MA 01886
                  </span>
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
        <div className="h-full p-10 border border-beerus rounded-2xl">
          <h2 className="font-bold text-xl pb-8 w-96">Available Slots</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-trunks">Monday, 8 AM - 10 AM</p>
              <Link className="btn btn-sm bg-piccolo text-white px-10 hover:bg-[#2A2473]">
                Book Now
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-trunks">Monday, 8 AM - 10 AM</p>
              <Link className="btn btn-sm bg-piccolo text-white px-10 hover:bg-[#2A2473]">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
        <BecomeTrainer />
    </>
  );
};

export default TrainerDetail;
