import SectionTitle from "../SectionTitle";
import AboutImg from "/src/assets/about.svg";
const About = () => {
  return (
    <div className="mb-24">
      <SectionTitle
        heading={"About Us"}
        subHeading={"Let's know about work and provide."}
      />
      <div className="flex justify-center gap-32 items-center">
        <div>
          <ul className="list-disc w-96 space-y-4">
            <li>
              Welcome to Pulsefit, where we're dedicated to providing
              exceptional service. Our goal is to ensure your experience with us
              is excellent.
            </li>
            <li>
              We aim to make health and fitness technology accessible and
              reliable for everyone, empowering individuals to take control of
              their well-being.
            </li>
            <li>
              Our vision is to lead the global fitness technology industry with
              a commitment to excellence, innovation, and customer satisfaction.
            </li>
            <li>
              At Pulsefit, we value integrity, customer focus, and continuous
              improvement. Our goal is to exceed your expectations and enhance
              your lifestyle.
            </li>
          </ul>
        </div>
        <div>
          <img src={AboutImg} alt="about us" className="w-96"/>
        </div>
      </div>
    </div>
  );
};

export default About;
