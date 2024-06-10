import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import BecomeMembership from "../components/Payment/BecomeMembership";
import SectionTitle from "../components/SectionTitle";
import SubImg from "/src/assets/subscription/subImg.png";

const Payment = () => {
  return (
    <>
          <Helmet>
        <title>Pulsefit | Payment</title>
      </Helmet>
      <Banner heading={"Payment Procedure"} image={SubImg} />
      <SectionTitle
        heading={"Complete Your Booking"}
        subHeading={
          "Finalize Your Payment and Secure Your Training Session with Trainer"
        }
      />
      <BecomeMembership />
    </>
  );
};

export default Payment;
