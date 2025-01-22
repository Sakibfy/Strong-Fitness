import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
  const location = useLocation();
  const {   trainerName, memberShipName, selectedSlot, price, email, name } = location.state || {};
 

  // payment
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK)
  
  
  return (
    <>
    <h2 className="text-5xl text-center mt-4 font-bold">Payment Now</h2>
    <div className="w-10/12 mx-auto border shadow-lg shadow-lime-500  md:flex rounded-sm my-20  justify-around p-2 text-center md:text-left">
      <div className="md:w-1/2 ml-2 space-y-2 ">
         <h1 className="text-2xl font-bold ">Payment Details</h1>
        <p>Trainer Name: {trainerName}</p>
        <p>Slot Name: {selectedSlot}</p>
        <p>Package Name: {memberShipName}</p>
        <p>Price: ${price}</p>
        <p>Your Name: {name}</p>
        <p>Your Email: {email}</p>
      </div>
      {/* payment  */}

      <div className="md:w-1/2 md:mt-0 mt-8  ">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
     </Elements>
      </div>
    </div>
    </>
  );
};

export default Payment;