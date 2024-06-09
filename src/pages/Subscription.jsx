import SubImg from "/src/assets/subscription/subImg.png";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import BookedInfo from "../components/Subscription/BookedInfo";
import Plans from "../components/Subscription/Plans";

const Subscription = () => {
  return (
    <>
      <Banner heading={"Subscriptions Plan"} image={SubImg} />

      <div>
        <SectionTitle
          heading={"Booked Your Trainer"}
          subHeading={
            "Book Your Personalized Training Session with John Smith Today!"
          }
        />
        <BookedInfo />
        <Plans />
      </div>
    </>
  );
};

export default Subscription;
