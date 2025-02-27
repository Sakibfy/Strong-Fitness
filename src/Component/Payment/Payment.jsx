import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
  const location = useLocation();
  const {   trainerName, memberShipName, selectedSlot, price, email, name,photoURL,trainerId,skills } = location.state || {};
 

  // payment
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK)
  
  
  return (
    <>
    <h2 className="text-5xl text-center mt-4 font-bold">Payment Now</h2>
    <div className="w-11/12 mx-auto border shadow-lg shadow-lime-500  md:flex rounded-sm my-20  justify-around p-2 text-center md:text-left">
      <div className="md:w-1/2 ml-2 text-left space-y-2 p-5">
       
        <p> {trainerName}</p>
        <p>{selectedSlot}</p>
        <p> {memberShipName}</p>
        <p>$ {price}</p>
        <p> {name}</p>
        <p> {email}</p>
      </div>
      {/* payment  */}

      <div className="md:w-1/2 border md:mt-0 mt-8  ">
        <Elements stripe={stripePromise}>
            <CheckoutForm
            price={price}
            trainerName={trainerName}
            memberShipName={memberShipName}
            selectedSlot={selectedSlot}
            name={name}
            photoURL={photoURL}
            trainerId={trainerId}
            classes={skills}
            
            ></CheckoutForm>
     </Elements>
      </div>
    </div>
    </>
  );
};

export default Payment;