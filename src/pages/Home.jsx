import FeaturedTrainers from "../components/Home/FeaturedTrainers";
import Banner from "../components/Home/Banner";
import Community from "../components/Home/Community";
import Hero from "../components/Home/Hero";
import NewsletterForm from "../components/Home/NewsletterForm";
import PopularClass from "../components/Home/PopularClass";
import Testimonials from "../components/Home/Testimonials";
import { Helmet } from "react-helmet-async";
import Featured from "../components/Home/Featured";
import About from "../components/Home/About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pulsefit | Home</title>
      </Helmet>
      <Hero />
      <Featured />
      <About />
      <PopularClass />
      <Testimonials />
      <Banner />
      <Community />
      <NewsletterForm />
      <FeaturedTrainers />
    </div>
  );
};

export default Home;
