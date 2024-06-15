import SectionTitle from "../SectionTitle";
import { PiChalkboardTeacher } from "react-icons/pi";
import { RiFileUserLine } from "react-icons/ri";
import { IoMdFitness } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbShieldCheckered } from "react-icons/tb";

const Featured = () => {
  return (
    <div className="mb-24">
      <SectionTitle
        heading={"Our Features"}
        subHeading={"Discover what makes Pulsefit unique."}
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="w-80 space-y-2 text-center p-10 border rounded-2xl">
            <div className="flex justify-center">
              <PiChalkboardTeacher className="text-7xl rounded-full p-4 mb-4 text-piccolo bg-jiren" />
            </div>
            <h4 className="text-xl font-semibold">
              Solo Instructor Sessions
            </h4>
            <p className="text-trunks">
              Easily book your favorite instructors for one-on-one sessions or
              group classes.
            </p>
          </div>
          <div className="w-80 space-y-2 text-center p-10 border rounded-2xl">
            <div className="flex justify-center">
              <IoMdFitness className="text-7xl rounded-full p-4 mb-4 text-piccolo bg-jiren" />
            </div>
            <h4 className="text-xl font-semibold">Diverse Fitness Classes</h4>
            <p className="text-trunks">
              Join a variety of fitness classes designed for all levels, from
              beginners to advanced.
            </p>
          </div>
          <div className="w-80 space-y-2 text-center p-10 border rounded-2xl">
            <div className="flex justify-center">
              <RiFileUserLine className="text-7xl rounded-full p-4 mb-4 text-piccolo bg-jiren" />
            </div>
            <h4 className="text-xl font-semibold">Professional Trainers</h4>
            <p className="text-trunks">
              Access to a roster of certified professional trainers to help you
              achieve your fitness goals.
            </p>
          </div>
          <div className="w-80 space-y-2 text-center p-10 border rounded-2xl">
            <div className="flex justify-center">
              <BiSupport className="text-7xl rounded-full p-4 mb-4 text-piccolo bg-jiren" />
            </div>
            <h4 className="text-xl font-semibold">Community Support</h4>
            <p className="text-trunks">
              Engage with a supportive community of fitness enthusiasts.
            </p>
          </div>
          <div className="w-80 space-y-2 text-center p-10 border rounded-2xl">
            <div className="flex justify-center">
              <TbShieldCheckered className="text-7xl rounded-full p-4 mb-4 text-piccolo bg-jiren" />
            </div>
            <h4 className="text-xl font-semibold">Become a Trainer</h4>
            <p className="text-trunks">
              Apply to join our team of professional trainers and help others
              achieve their fitness goals.
            </p>
          </div>
          <div className="w-80 space-y-2 text-center p-10 border rounded-2xl">
            <div className="flex justify-center">
              <MdOutlineSpaceDashboard className="text-7xl rounded-full p-4 mb-4 text-piccolo bg-jiren" />
            </div>
            <h4 className="text-xl font-semibold">Personalized Dashboard</h4>
            <p className="text-trunks">
              Access a personalized dashboard to manage your bookings, classes,
              and progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
