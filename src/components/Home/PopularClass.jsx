import { Link } from "react-router-dom";

const PopularClass = () => {
  return (
    <div className="mb-24">
      <h2 className="text-4xl font-bold pb-6">Our Most Popular Classes</h2>
      <div className="carousel gap-5 rounded-none max-w-full">
        <div className="carousel-item">
          <div className="card w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Class image"
                className="rounded-2xl border-t-2 border-chichi"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="card-title pt-6 text-xl font-bold">
                Yoga for Beginners
              </h2>
              <p className="text-trunks">
                A calming yoga class designed to introduce you to basic poses
                and relaxation techniques.
              </p>
              <p className="text-piccolo font-semibold">Total Bookings: 25</p>
              <Link to="/" className="text-hit font-semibold">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Class image"
                className="rounded-2xl border-t-2 border-chichi"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="card-title pt-6 text-xl font-bold">
                Yoga for Beginners
              </h2>
              <p className="text-trunks">
                A calming yoga class designed to introduce you to basic poses
                and relaxation techniques.
              </p>
              <p className="text-piccolo font-semibold">Total Bookings: 25</p>
              <a href="#" className="text-hit font-semibold">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Class image"
                className="rounded-2xl border-t-2 border-chichi"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="card-title pt-6 text-xl font-bold">
                Yoga for Beginners
              </h2>
              <p className="text-trunks">
                A calming yoga class designed to introduce you to basic poses
                and relaxation techniques.
              </p>
              <p className="text-piccolo font-semibold">Total Bookings: 25</p>
              <a href="#" className="text-hit font-semibold">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Class image"
                className="rounded-2xl border-t-2 border-chichi"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="card-title pt-6 text-xl font-bold">
                Yoga for Beginners
              </h2>
              <p className="text-trunks">
                A calming yoga class designed to introduce you to basic poses
                and relaxation techniques.
              </p>
              <p className="text-piccolo font-semibold">Total Bookings: 25</p>
              <a href="#" className="text-hit font-semibold">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Class image"
                className="rounded-2xl border-t-2 border-chichi"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="card-title pt-6 text-xl font-bold">
                Yoga for Beginners
              </h2>
              <p className="text-trunks">
                A calming yoga class designed to introduce you to basic poses
                and relaxation techniques.
              </p>
              <p className="text-piccolo font-semibold">Total Bookings: 25</p>
              <a href="#" className="text-hit font-semibold">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
