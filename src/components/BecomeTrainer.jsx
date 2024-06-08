import { Link } from "react-router-dom";
import BecomeImg from "/src/assets/becometrainer.svg";

const BecomeTrainer = () => {
  return (
    <>
      <div className="p-10 bg-jiren rounded-2xl space-y-5 text-center max-w-96 mx-auto mb-24">
        <h2 className="font-medium text-2xl text-piccolo">
          Join our team to help others achieve their fitness goals.
        </h2>
        <img src={BecomeImg} alt="become trainer" />
        <p className="font-medium"> Apply now and make a difference.</p>
        <Link
          to="/becomeTrainer"
          className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]"
        >
          Become a Trainer
        </Link>
      </div>
    </>
  );
};

export default BecomeTrainer;
