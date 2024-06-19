import gif from "/src/assets/paymentsuccess/efs.gif";

const PaymentSuccess = () => {
  return (
    <div className="flex justify-center mb-24">
      <div className="text-center">
        <img src={gif} alt="success" className="w-96" />
        <h2 className="text-3xl font-bold text-roshi">Payment Successful!</h2>
        <p className="text-lg text-trunks pt-2">Thank you for your payment.</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
