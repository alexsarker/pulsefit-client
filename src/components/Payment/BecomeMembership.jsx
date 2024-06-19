import Gateway from "./Gateway";
import PropTypes from "prop-types";

const BecomeMembership = ({ booking }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border p-10 space-y-10 max-h-fit items-center rounded-2xl mb-12 w-max">
          <div className="flex gap-5 items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={booking.photo} alt="Trainer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">{booking.name}</h4>
              <p className="text-hit">{booking.trainerSkills.join(", ")}</p>
            </div>
          </div>
          <div className="space-x-2">
            <span className="text-white bg-black py-2 px-4 h-full rounded-md">
              {booking.date} {booking.time}
            </span>
            <span className="text-white bg-whis py-2 px-4 h-full rounded-md">
              {booking.packageName} Membership / ${booking.price}
            </span>
          </div>
          <Gateway booking={booking} />
        </div>
      </div>
    </>
  );
};

BecomeMembership.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default BecomeMembership;
