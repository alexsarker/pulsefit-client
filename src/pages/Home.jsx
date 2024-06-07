import Banner from "../components/Home/Banner";
import Community from "../components/Home/Community";
import Hero from "../components/Home/Hero";
import PopularClass from "../components/Home/PopularClass";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularClass />
      <Testimonials />
      <Banner />
      <Community />
    </div>
  );
};

export default Home;
