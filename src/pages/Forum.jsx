import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import CommunityForums from "../components/Forum/CommunityForums";
import forumImg from "/src/assets/forum/forumImg.png";

const Forum = () => {

  return (
    <div>
      <Helmet>
        <title>Pulsefit | Forum</title>
      </Helmet>
      <Banner heading={"Forum"} image={forumImg} />

      <CommunityForums />
    </div>
  );
};

export default Forum;
