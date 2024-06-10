import { TbShieldHalf } from "react-icons/tb";
import SectionTitle from "../SectionTitle";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import useCommunity from "../../hooks/useCommunity";
import { PiCrownThin } from "react-icons/pi";

const CommunityForums = () => {
  const [forumsData] = useCommunity();
  return (
    <div className="mb-24">
      <SectionTitle
        heading={"Community Forums"}
        subHeading={"Join the Discussion and Share Your Insights"}
      />
      <div className="grid place-items-center space-y-6">
        {forumsData.map((post) => (
          <div key={post._id} className="flex gap-10 p-10 border rounded-2xl">
            <div className="avatar">
              {(post.role === "Admin" && (
                <PiCrownThin className="relative left-16 top-2 border-2 rounded-full bg-krillin text-white border-krillin" />
              )) ||
                (post.role === "Trainer" && (
                  <TbShieldHalf className="relative left-16 top-2 border-2 rounded-full bg-whis text-white border-whis" />
                ))}
              <div className="w-16 h-max rounded-full">
                <img src={post.authorImageURL} />
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl max-w-96">{post.title}</h2>
                  <p className="text-piccolo text-sm">posted {post.date}</p>
                </div>
                <p className="text-trunks max-w-96 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <BiUpvote className="text-4xl text-roshi p-2 bg-roshi-10 rounded-full" />
                  <p className="text--trunks">{post.upvotes}</p>
                </div>
                <div className="flex items-center gap-4">
                  <BiDownvote className="text-4xl text-dodoria p-2 bg-dodoria-10 rounded-full" />
                  <p className="text--trunks">{post.downvotes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="join mt-12 flex justify-center">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
};

export default CommunityForums;
