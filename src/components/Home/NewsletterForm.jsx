import Frame from "/src/assets/hero/Frame.svg";
const NewsletterForm = () => {
  return (
    <div className="mb-24 flex justify-center">
      <div className="hero bg-piccolo rounded-2xl border-t-4 border-chichi text-white max-w-5xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Frame} />
          <div>
            <h1 className="text-4xl font-bold max-w-md">
              Stay Updated with Our Latest News!
            </h1>
            <p className="py-6 max-w-md">
              Don’t miss out on our latest updates, fitness tips, exclusive
              offers, and much more! Join our community and get all the latest
              news delivered straight to your inbox.
            </p>
            <div className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email address"
                className="input w-full max-w-xs"
                required
              />
              <span>
                <button className="btn btn-white text-piccolo border-none hover:bg-[#2A2473] hover:text-white">
                  Subscribe Now
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
