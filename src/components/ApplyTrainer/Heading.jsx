import HeroImg from "/src/assets/apply-trainer/apply-image.png";

const Heading = () => {
  return (
    <>
      <div className="text-center space-y-5 mt-16 mb-24">
        <h2 className="text-5xl font-bold">Join Our Team of Expert Trainers</h2>
        <p className="max-w-2xl mx-auto text-2xl text-trunks pb-5">
          Apply to Become a Certified Trainer and Make a Difference in People's
          Lives
        </p>
        <img src={HeroImg} alt="apply-image" className="mx-auto pb-8" />
      </div>
    </>
  );
};

export default Heading;
