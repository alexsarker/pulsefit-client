import FeaturedTrainers from "../components/FeaturedTrainers";
import Banner from "../components/Home/Banner";
import Community from "../components/Home/Community";
import Follow from "../components/Home/Follow";
import Hero from "../components/Home/Hero";
import NewsletterForm from "../components/Home/NewsletterForm";
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
      <NewsletterForm />
      <FeaturedTrainers />
      <Follow />
    </div>
  );
};

export default Home;
