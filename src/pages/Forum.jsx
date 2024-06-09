import Banner from "../components/Banner";
import CommunityForums from "../components/Forum/CommunityForums";
import forumImg from "/src/assets/forum/forumImg.png";

const Forum = () => {
  return (
    <div>
      <Banner heading={"Forum"} image={forumImg} />

      <CommunityForums />
    </div>
  );
};

export default Forum;
