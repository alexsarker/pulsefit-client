import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const AppTrainerDetail = () => {
  const trainerDetail = useLoaderData();
  console.log(trainerDetail);
  return (
    <div>
      <Breadcrumbs router="/dashboard" routeName="" />
      <DashTitle
        headline="Applied Trainer Details"
        subHeadline="View applied user details and preferences."
      />

      <div className="p-10 border rounded-2xl w-max mx-auto my-12 space-y-8">
        <div className="flex justify-center">
          <img
            src={trainerDetail.photo}
            alt="profile image"
            className="avatar w-32 h-32 rounded-full object-cover"
          />
        </div>
        <p className="mx-auto py-1 px-3 bg-hit rounded-full text-white w-max">
          Member
        </p>

        <div className="space-y-4">
          <div className="pb-2">
            <h2 className="text-xl font-semibold text-piccolo">
              Personal Details
            </h2>
            <div className="divider"></div>
          </div>
          <div>
            <h4 className="font-bold">Name</h4>
            <p>{trainerDetail.name}</p>
          </div>
          <div>
            <h4 className="font-bold">Email</h4>
            <p>{trainerDetail.email}</p>
          </div>
          <div>
            <h4 className="font-bold">Age</h4>
            <p>{trainerDetail.age}</p>
          </div>
          <div>
            <h4 className="font-bold">Bio</h4>
            <p>{trainerDetail.bio}</p>
          </div>
          <div>
            <h4 className="font-bold">Experience</h4>
            <p>{trainerDetail.experience}</p>
          </div>
          <div>
            <h4 className="font-bold">Skills</h4>
            <p>{trainerDetail.skills.join(", ")}</p>
          </div>
          <div>
            <h4 className="font-bold">Phone</h4>
            <p>{trainerDetail.phone}</p>
          </div>
          <div>
            <h4 className="font-bold">Location</h4>
            <p>{trainerDetail.location}</p>
          </div>
        </div>

        <div className="space-y-4 pt-10">
          <div className="pb-2">
            <h2 className="text-xl font-semibold text-piccolo">
              Available Day & Time
            </h2>
            <div className="divider"></div>
          </div>
          <div>
            <h4 className="font-bold">Start Time</h4>
            <p>{trainerDetail.startTime}</p>
          </div>
          <div>
            <h4 className="font-bold">End Time</h4>
            <p>{trainerDetail.endTime}</p>
          </div>
          <div>
            <h4 className="font-bold">Day</h4>
            <p>{trainerDetail.day}</p>
          </div>
        </div>

        <div className="space-y-4 pt-10">
          <div className="pb-2">
            <h2 className="text-xl font-semibold text-piccolo">
              Comprehensive Information
            </h2>
            <div className="divider"></div>
          </div>
          <div>
            <h4 className="font-bold">Achievements</h4>
            <p>{trainerDetail.comprehensiveInformation.achievements}</p>
          </div>
          <div>
            <h4 className="font-bold">Certifications</h4>
            <p>{trainerDetail.comprehensiveInformation.certifications}</p>
          </div>
          <div>
            <h4 className="font-bold">Philosophy</h4>
            <p>{trainerDetail.comprehensiveInformation.philosophy}</p>
          </div>
        </div>

        <div className="space-y-4 pt-10">
          <div>
            <h2 className="text-xl font-semibold text-piccolo">Social Links</h2>
            <div className="divider"></div>
          </div>
          <div className="flex gap-4">
            <FaInstagram className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTrainerDetail;
