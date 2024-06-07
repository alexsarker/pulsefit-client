import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="mb-24">
      <h2 className="text-center text-4xl font-bold pb-6">
        Latest Community Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10">
        <div className="card w-72">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Class image"
              className="rounded-2xl border-t-2 border-chichi"
            />
          </figure>
          <div className="space-y-2">
            <h2 className="card-title pt-6 text-xl font-bold">
              Tips for Staying Motivated in Your Fitness Journey
            </h2>
            <p className="text-piccolo font-semibold text-sm">
              by John Doe, June 1, 2024
            </p>
            <p className="text-trunks">
              Maintaining motivation can be challenging, but with these simple
              tips, you can keep your fitness goals on track. Read on to
              discover how to stay motivated...
            </p>
            <Link to="/" className="text-hit font-semibold">
              Read More
            </Link>
          </div>
        </div>
        <div className="card w-72">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Class image"
              className="rounded-2xl border-t-2 border-chichi"
            />
          </figure>
          <div className="space-y-2">
            <h2 className="card-title pt-6 text-xl font-bold">
              Tips for Staying Motivated in Your Fitness Journey
            </h2>
            <p className="text-piccolo font-semibold text-sm">
              by John Doe, June 1, 2024
            </p>
            <p className="text-trunks">
              Maintaining motivation can be challenging, but with these simple
              tips, you can keep your fitness goals on track. Read on to
              discover how to stay motivated...
            </p>
            <Link to="/" className="text-hit font-semibold">
              Read More
            </Link>
          </div>
        </div>
        <div className="card w-72">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Class image"
              className="rounded-2xl border-t-2 border-chichi"
            />
          </figure>
          <div className="space-y-2">
            <h2 className="card-title pt-6 text-xl font-bold">
              Tips for Staying Motivated in Your Fitness Journey
            </h2>
            <p className="text-piccolo font-semibold text-sm">
              by John Doe, June 1, 2024
            </p>
            <p className="text-trunks">
              Maintaining motivation can be challenging, but with these simple
              tips, you can keep your fitness goals on track. Read on to
              discover how to stay motivated...
            </p>
            <Link to="/" className="text-hit font-semibold">
              Read More
            </Link>
          </div>
        </div>
        <div className="card w-72">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Class image"
              className="rounded-2xl border-t-2 border-chichi"
            />
          </figure>
          <div className="space-y-2">
            <h2 className="card-title pt-6 text-xl font-bold">
              Tips for Staying Motivated in Your Fitness Journey
            </h2>
            <p className="text-piccolo font-semibold text-sm">
              by John Doe, June 1, 2024
            </p>
            <p className="text-trunks">
              Maintaining motivation can be challenging, but with these simple
              tips, you can keep your fitness goals on track. Read on to
              discover how to stay motivated...
            </p>
            <Link to="/" className="text-hit font-semibold">
              Read More
            </Link>
          </div>
        </div>
        <div className="card w-72">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Class image"
              className="rounded-2xl border-t-2 border-chichi"
            />
          </figure>
          <div className="space-y-2">
            <h2 className="card-title pt-6 text-xl font-bold">
              Tips for Staying Motivated in Your Fitness Journey
            </h2>
            <p className="text-piccolo font-semibold text-sm">
              by John Doe, June 1, 2024
            </p>
            <p className="text-trunks">
              Maintaining motivation can be challenging, but with these simple
              tips, you can keep your fitness goals on track. Read on to
              discover how to stay motivated...
            </p>
            <Link to="/" className="text-hit font-semibold">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
