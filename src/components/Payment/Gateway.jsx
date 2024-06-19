import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import MasterCard from "/src/assets/gateway/mastercard.svg";
import Visa from "/src/assets/gateway/visa.svg";

const Gateway = ({ booking }) => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const invoice = {
      packageName: booking.packageName,
      price: booking.price,
      payment: "Paid",
      cardName: data.nameOnCard,
      cardNumber: data.cardNumber,
    };
    axiosPublic.patch(`/booked/${booking._id}`, invoice).then(() => {
      navigate(`/invoice/${booking._id}`);
    });
  };

  return (
    <div className="card shrink-0 max-w-md">
      <form className="card-body gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold mb-2">Payment Method</h2>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              className="grow"
              placeholder="Card Number"
              maxLength={16}
              {...register("cardNumber")}
              required
            />
            <img src={MasterCard} alt="MasterCard" className="w-6" />
            <img src={Visa} alt="Visa" className="w-6" />
          </label>
        </div>
        <div className="form-control">
          <input
            type="text"
            {...register("nameOnCard")}
            placeholder="Name on Card"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="date"
            {...register("expirationDate")}
            placeholder="Expiration date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            {...register("cvv")}
            placeholder="CVV"
            className="input input-bordered"
            required
          />
        </div>
        <p className="text-sm">
          I confirm that all the information are correct and legal by authority.
        </p>
        <div className="form-control mt-4">
          <button
            type="submit"
            className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]"
          >
            Confirm payment
          </button>
        </div>
      </form>
    </div>
  );
};

Gateway.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default Gateway;
