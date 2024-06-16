import { GoPlus } from "react-icons/go";
import PropTypes from 'prop-types';

const AddButton = ({ name, onClick }) => {
  return (
    <div className="flex justify-end">
      <button
        className="btn btn-sm btn-outline border-beerus hover:text-[#4E46B4] hover:bg-[#4E46B41F] hover:border-[#4E46B41F]"
        onClick={onClick}
      >
        <GoPlus className="text-xl" />
        {name}
      </button>
    </div>
  );
};

AddButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
