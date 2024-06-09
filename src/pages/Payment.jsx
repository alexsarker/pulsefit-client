import Banner from "../components/Banner";
import BecomeMembership from "../components/Payment/BecomeMembership";
import SectionTitle from "../components/SectionTitle";
import SubImg from "/src/assets/subscription/subImg.png";

const Payment = () => {
  return (
    <>
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
