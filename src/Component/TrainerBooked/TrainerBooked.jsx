import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";


const TrainerBooked = () => {
  const [selectedMembership, setSelectedMembership] = useState(null);
  const location = useLocation();
  const { trainerName, selectedSlot, classes } = location.state || {};
const {user} = useAuth()
const axiosSecure = useAxiosSecure()
  
  const membershipOptions  = [
    {
      name: "Basic Membership",
      benefits: [
        "Access to gym facilities during regular operating hours.",
        'Use of cardio and strength training equipment.',
        'Access to locker rooms and showers.'
      ],
      price: "$50",
    },
    {
      name: "Standard Membership",
      benefits: [
        "All benefits of Basic Membership.",
        "Access to cardio and strength training equipment.",
        "Access to group fitness classes (e.g., Yoga, Spinning, Zumba).",
      ],
      price: "$100",
    },
    {
      name: "Premium Membership",
      benefits: [
        "All benefits of Standard Membership.",
        "Access to personal training sessions with certified trainers.",
        "Access to locker rooms and showers.",
        "Discounts on additional services such as massage therapy or nutrition counseling.",
      ],
      price: "$150",
    },
  ];
  const handleSelectMembership = async (membership) => {
    setSelectedMembership(membership);
    // Prepare the data to send to the backend
    const data = {
      trainerName,
      selectedSlot: selectedSlot,
      classes,
      membershipType: membership.name,
      price: membership.price,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
    };
 console.log(data);
    await axiosSecure.post('/bookingtrainer', data)
    toast.success('trainer Booked Successfull!')
  }



  return (
     <div className="container mx-auto px-6 py-10">
     <div className="space-y-3 items-center flex flex-col mb-2">
      <h1 className="text-center font-bold text-5xl">Booking Details</h1>
      <p className="text-3xl">Trainer: {trainerName}</p>
      <button className="text-2xl underline p-1 rounded-md">Slot: {selectedSlot}</button>
      <p></p>
      <ul>
        {classes?.map((item, index) => (
          <li className="list-disc mb-2 text-xl inline-block ml-4" key={index}>{item}</li>
        ))}
      </ul>
    </div>

      {/* Packages Section */}
      <div className="grid  md:grid-cols-3 grid-cols-1 gap-6">
      {membershipOptions.map((membership) => (
        <div
          key={membership.id}
          className="border bg-[#a78bfa] text-black rounded-lg px-10 py-16 shadow hover:shadow-lg transition"
        >
          <h3 className="md:text-4xl font-semibold">{membership.name}</h3>
          <ul className="mt-2 ">
            {membership.benefits.map((benefit, index) => (
              <li key={index} className="list-disc ml-6 md:text-xl">
                {benefit}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold md:text-3xl">Price: {membership.price}</p>
        
            <button
            onClick={() => handleSelectMembership(membership)}
            className="mt-4  w-full disabled: bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
          >
            Select
          </button>
         
        </div>
      ))}
     
    </div>

      
    
    </div>
  );
};

export default TrainerBooked;