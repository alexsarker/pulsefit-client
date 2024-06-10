import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useCommunity from "../../hooks/useCommunity";

const Community = () => {
  const [forumsData] = useCommunity("/upvotes");

  return (
    <div className="mb-24">
      <div className="flex justify-between">
        <h2 className="text-center text-4xl font-bold pb-6">
          Latest Community Posts
        </h2>
        <Link
          to="/forum"
          className="text-xl text-piccolo items-center flex gap-2"
        >
          See All <IoIosArrowForward />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {forumsData.slice(0, 4).map((post, index) => (
          <div key={index} className="card max-w-96">
            <figure>
              <img
                src={post.imageURL}
                alt="Class image"
                className="rounded-2xl border-t-2 border-chichi h-56 w-96 object-cover"
              />
            </figure>
            <div className="space-y-2">
              <h2 className="card-title pt-6 text-xl font-bold line-clamp-1">
                {post.title}
              </h2>
              <p className="text-piccolo font-semibold text-sm">
                by {post.author}, {post.date}
              </p>
              <p className="text-trunks line-clamp-3">{post.excerpt}</p>
              <Link
                to={`/forum/${post._id}`}
                className="text-hit font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
