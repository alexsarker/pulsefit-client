import PropTypes from "prop-types";
const BookedInfo = ({ booking }) => {
  if (!booking) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row lg:flex-row border p-5 gap-12 max-h-fit items-center rounded-2xl mb-12 w-max">
      <div className="flex gap-5 items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={booking.trainerImage} alt="Profile" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl">{booking.trainerName}</h4>
          <p className="text-hit">{booking.trainerSkills.join(", ")}</p>
        </div>
      </div>
      <span className="text-white bg-black py-2 px-4 h-full rounded-md">
        {booking.date} {booking.time}
      </span>
    </div>
  );
};

BookedInfo.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default BookedInfo;
