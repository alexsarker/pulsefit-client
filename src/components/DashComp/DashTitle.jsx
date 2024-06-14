const DashTitle = ({ headline, subHeadline }) => {
  return (
    <div className="mt-6 mb-8 space-y-2 w-[1500px]">
      <h1 className="text-4xl font-bold">{headline}</h1>
      <p className="text-trunks">{subHeadline}</p>
    </div>
  );
};

export default DashTitle;
