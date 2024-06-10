import { Helmet } from "react-helmet-async";
import ApplyForm from "../components/ApplyTrainer/ApplyForm";
import Heading from "../components/ApplyTrainer/Heading";

const ApplyTrainer = () => {
  return (
    <div>
      <Helmet>
        <title>Pulsefit | ApplyTrainer</title>
      </Helmet>
      <Heading />
      <ApplyForm />
    </div>
  );
};

export default ApplyTrainer;
