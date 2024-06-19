import SubImg from "/src/assets/subscription/subImg.png";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import BookedInfo from "../components/Subscription/BookedInfo";
import Plans from "../components/Subscription/Plans";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Subscription = () => {
  const bookedData = useLoaderData();

  return (
    <>
      <Banner heading={"Subscriptions Plan"} image={SubImg} />

      <div>
        <Helmet>
          <title>Pulsefit | Subscription</title>
        </Helmet>
        <SectionTitle
          heading={"Booked Your Trainer"}
          subHeading={
            "Book Your Personalized Training Session with John Smith Today!"
          }
        />
        <BookedInfo booking={bookedData} />
        <Plans booking={bookedData} />
      </div>
    </>
  );
};

export default Subscription;
