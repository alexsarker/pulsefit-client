const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center pb-6">
      <h2 className=" text-4xl font-bold pb-2">{heading}</h2>
      <p className="max-w-xl mx-auto text-trunks">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
