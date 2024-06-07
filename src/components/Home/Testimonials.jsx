import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="mb-24">
      <h2 className="text-center text-4xl font-bold pb-6">Testimonials</h2>

      <div className="carousel gap-5 rounded-none max-w-full flex justify-center">
        <div className="carousel-item">
          <div className="card card-side bg-jiren">
            <div className="avatar">
              <div className="w-32 rounded-full m-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <RiDoubleQuotesL className="absolute top-14 right-36 text-4xl text-white p-2 border-piccolo rounded-full bg-piccolo" />
            </div>
            <div className="divider divider-horizontal py-8" />
            <div className="card-body">
              <div>
                <h2 className="card-title">Nattasha</h2>
                <p>Athletics /Trainer</p>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="max-w-96 text-trunks font-medium">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card card-side bg-jiren">
            <div className="avatar">
              <div className="w-32 rounded-full m-10">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="divider divider-horizontal py-8"></div>
            <div className="card-body">
              <div>
                <h2 className="card-title">Nattasha</h2>
                <p>Athletics /Trainer</p>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="max-w-96 text-trunks font-medium">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
