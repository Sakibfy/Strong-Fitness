import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";


const TrainerBooked = () => {
  const [selectedMembership, setSelectedMembership] = useState([]);
  const location = useLocation();
  const { trainerName, selectedSlot, skills,trainerId,availableTime } = location.state || {};
  const {user} = useAuth()
 
  console.log(availableTime);
  console.log(skills
);
  const navigate = useNavigate();
  
  const membershipOptions  = [
    {
      name: "Basic Membership",
      benefits: [
        "Access to gym facilities during regular operating hours.",
        'Use of cardio and strength training equipment.',
        'Access to locker rooms and showers.'
      ],
      price: "50",
    },
    { 
      name: "Standard Membership",
      benefits: [
        "All benefits of Basic Membership.",
        "Access to cardio and strength training equipment.",
        "Access to group fitness classes (e.g., Yoga, Spinning, Zumba).",
      ],
      price: "100",
    },
    {
       
      name: "Premium Membership",
      benefits: [
        "All benefits of Standard Membership.",
        "Access to personal training sessions with certified trainers.",
        "Access to locker rooms and showers.",
        "Discounts on additional services such as massage therapy or nutrition counseling.",
      ],
      price: "150",
    },
  ];
  


  const memberShipName = selectedMembership.name || {};
  const price = selectedMembership.price || {};
  
//  console.log(memberShipName, price);


 const handleSelectMembership = (membership) => {
    setSelectedMembership(membership);
    toast.success(`Selected: ${membership.name}`);
  };

  const handleBookTrainer = async (membership) => {
   
    setSelectedMembership(membership);
    // Prepare the data to send to the backend
    // const data = {
    //   trainerName,
    //   selectedSlot: selectedSlot,
    //   skills,
    //   memberShipName,
    //   price: parseInt(price),
    //   email: user.email,
    //   name: user.displayName,
    //   photoURL: user.photoURL,
    //   trainerId,
    //   availableTime,
    // };

    
    
    navigate("/payment", {
      state: {
      skills,
      trainerName,
      memberShipName,
      selectedSlot,
      price,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      trainerId,
      availableTime,
    },
  });
}


console.log(availableTime);
console.log(price);

  

  return (
     <div className="container bg-black  mx-auto px-6 py-10">
     <div className="space-y-2 text-left text-white flex flex-col mb-2">
      
      <p className="text-3xl"> {trainerName}</p>
      <p className="text-2xl text-left  p-1 rounded-md"> {selectedSlot}</p>
     
      <ul>
        {skills
?.map((item, index) => (
          <p className=" text-xl  mb-3" key={index}>{item}</p>
        ))}
      </ul>
    </div>

      {/* Packages Section */}
      <div className="grid  md:grid-cols-3  sm:grid-cols-1 grid-cols-1 gap-6">
      {membershipOptions.map((membership) => (
        <div
          key={membership.id}
          className="border bg-[#a78bfa] hover:bg-slate-200 duration-500 text-black rounded-lg px-3 py-5 shadow hover:shadow-lg transition"
        >
          <h3 className="md:text-3xl font-semibold">{membership.name}</h3>
          <ul className="mt-2 ">
            {membership.benefits.map((benefit, index) => (
              <li key={index} className="list-disc ml-6 ">
                {benefit}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold md:text-3xl">Price:$ {membership.price}</p>
         <button
            onClick={() => handleSelectMembership(membership)}
            className='bg-slate-300 px-4 py-2 rounded-md mt-2'
          >
            {selectedMembership?._id === membership._id ? "Select" : "Selected"}
          </button>
            
         
        </div>
      ))}
       
     
    </div>

     <div className=" flex justify-center items-center text-center w-2/12 mx-auto">
          <button
        onClick={handleBookTrainer}
        className="w-full mt-6 bg-lime-600 text-white py-2 rounded hover:bg-lime-800 duration-300"
      >
        Book Trainer
      </button>
        </div>
    </div>
  );
};

export default TrainerBooked;