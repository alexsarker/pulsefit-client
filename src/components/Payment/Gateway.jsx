const Gateway = () => {
  return (
    <>
      <div className="card shrink-0 max-w-md">
        <form className="card-body gap-4">
          <h2 className="text-xl font-bold mb-2">Payment Method</h2>
          <div className="form-control">
            <input
              type="number"
              placeholder="Card number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Name on Card"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder="Expiration date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              placeholder="CVV"
              className="input input-bordered"
              required
            />
          </div>
          <p className="text-sm">
            I confirm that all the information are correct and legal by
            authority.
          </p>
          <div className="form-control mt-4">
            <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
              Confirm payment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Gateway;
