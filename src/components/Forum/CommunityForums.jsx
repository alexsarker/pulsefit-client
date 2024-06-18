import { useState, useEffect } from "react";
import { TbShieldHalf } from "react-icons/tb";
import SectionTitle from "../SectionTitle";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import useCommunity from "../../hooks/useCommunity";
import { PiCrownThin } from "react-icons/pi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";

const CommunityForums = () => {
  const axiosPublic = useAxiosPublic();
  const [forumsData] = useCommunity();
  const [search, setSearch] = useState("");
  const [filteredForums, setFilteredForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    if (forumsData) {
      const filtered = forumsData.filter(
        (post) =>
          post.title && post.title.toLowerCase().includes(search.toLowerCase())
      );
      const updatedFiltered = filtered.map((post) => ({
        ...post,
        upvotes: post.upvotes || 0,
        downvotes: post.downvotes || 0,
      }));
      setFilteredForums(updatedFiltered);
      setCurrentPage(0);
    }
  }, [search, forumsData]);

  const totalPages = Math.ceil(filteredForums.length / itemsPerPage);
  const paginatedForums = filteredForums.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleUpvote = (postId) => {
    const updatedForums = filteredForums.map((post) => {
      if (post._id === postId) {
        return { ...post, upvotes: post.upvotes + 1 };
      }
      return post;
    });
    setFilteredForums(updatedForums);

    const upvotesData = {
      upvotes: updatedForums.find((post) => post._id === postId).upvotes,
    };
    axiosPublic.patch(`/community/${postId}`, upvotesData);
  };

  const handleDownvote = (postId) => {
    const updatedForums = filteredForums.map((post) => {
      if (post._id === postId) {
        return { ...post, downvotes: post.downvotes + 1 };
      }
      return post;
    });
    setFilteredForums(updatedForums);

    const downvotesData = {
      downvotes: updatedForums.find((post) => post._id === postId).downvotes,
    };
    axiosPublic.patch(`/community/${postId}`, downvotesData);
  };

  return (
    <div className="mb-24">
      <SectionTitle
        heading={"Community Forums"}
        subHeading={"Join the Discussion and Share Your Insights"}
      />
      <div className="text-center space-y-5 mt-16 mb-16">
        <h2 className="text-5xl font-bold">Explore Forums</h2>
        <p className="max-w-2xl mx-auto text-2xl text-trunks pb-5">
          Find and engage in discussions that matter to you
        </p>
        <label className="input input-bordered w-96 mx-auto flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid place-items-center space-y-6">
        {paginatedForums.map((post) => (
          <div key={post._id} className="flex gap-10 p-10 border rounded-2xl">
            <div className="avatar">
              {(post.role === "Admin" && (
                <PiCrownThin className="relative left-16 top-2 border-2 rounded-full bg-krillin text-white border-krillin" />
              )) ||
                (post.role === "Trainer" && (
                  <TbShieldHalf className="relative left-16 top-2 border-2 rounded-full bg-whis text-white border-whis" />
                ))}
              <div className="w-16 h-max rounded-full">
                <img src={post.authorImageURL} alt={post.title} />
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
                  <BiUpvote
                    className="text-4xl text-roshi p-2 bg-roshi-10 rounded-full cursor-pointer"
                    onClick={() => handleUpvote(post._id)}
                  />
                  <p className="text-trunks">{post.upvotes}</p>
                </div>
                <div className="flex items-center gap-4">
                  <BiDownvote
                    className="text-4xl text-dodoria p-2 bg-dodoria-10 rounded-full cursor-pointer"
                    onClick={() => handleDownvote(post._id)}
                  />
                  <p className="text-trunks">{post.downvotes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="join mt-12 flex justify-center">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`join-item btn ${
              index === currentPage
                ? "btn-active bg-piccolo text-white hover:bg-[#2A2473]"
                : "bg-transparent hover:bg-[#4E46B41F]"
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommunityForums;
