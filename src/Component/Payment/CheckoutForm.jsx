import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

// import useCart from "../../../../hooks/useCart";


import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const [clintSecret, setClintSecret] = useState('');
  const [transactionId, settransactionId] = useState('');
  const [error, setError] = useState('')
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth()
  // const navigate = useNavigate()
//   const [cart, refetch] = useCart();
// const totelPrice = cart.reduce((total, item) => total + item.price ,0)


  useEffect(() => {
      axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        console.log(res.data.clientSecret);
        setClintSecret(res.data.clientSecret);
      })   
  },  [axiosSecure])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    };
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    }
    else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }

    // confirm payment 
    const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clintSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {
      console.log('confirm error');
    }
    else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        settransactionId(paymentIntent.id)

        // now save the payment in the database
        const paymentInfo = {
          email: user.email,
          price,
          transactionId: paymentIntent.id,
          data: new Date(),
          
        }
        console.log(paymentInfo);
        const res = await axiosSecure.post('/payments', paymentInfo)
        console.log('payment saved', res.data);
        toast.success('Thank you for the payment')
        
      }
    }
  };



  return (
    <form className="bg-stone-100 p-10 rounded-xl shadow-sm shadow-lime-600" onSubmit={handleSubmit}>
       <CardElement
        options={{
          style: {
            base: {
              fontSize: '25px', 
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="bg-lime-500 hover:bg-lime-600 duration-300 py-2 px-6 mt-20 rounded-lg" type="submit" disabled={!stripe || !clintSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      
   </form>
  );
};

export default CheckoutForm;