
import { IoIosArrowForward } from "react-icons/io";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const TrainerDetails = () => {
  const trainer = useLoaderData();
 const { id } = useParams(); // Trainer ID from the route
  const navigate = useNavigate();
  console.log(trainer);
// console.log(trainer);
const handleSlotClick = (slot) => {
    navigate(`/trainer/${id}/book`, {state: {
        trainerName: trainer.fullName,
        selectedSlot: slot,
        skills: trainer.skills,
        trainerId: id,
        availableTime: trainer.availableTime,
      },  });
    
  };

  
// Redirect to Become a Trainer page
  const handleBecomeTrainerClick = () => {
    navigate("/become-a-trainer");
  };


  return (
   <div className="container mx-auto bg-gray-800 px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Trainer Information Section */}
        <div className=" shadow-md  rounded-sm ">
          <div className="">
             <img
            src={trainer.profileImage}
            alt={trainer.fullName}
            className="w-full  rounded-lg "
          />
         </div>
       {/* Social Icons */}
      <div className="flex justify-center my-3 space-x-5">
        {trainer?.socialLinks?.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-lime-600 duration-150 text-2xl "
          >
            <i className={`fab fa-${link.platform}`}></i>
          </a>
        ))}
      </div>
        </div>

        {/* Available Slots Section */}
        <div className="bg-[#dfe4ea] text-black text-left shadow-md rounded-lg p-6">
             <h1 className="md:text-4xl text-3xl font-bold  mt-4">{trainer.fullName}</h1>
          <h1 className="text-xl font-bold  mt-4">Age:{trainer.age}</h1>
          <h1 className="text-xl font-semibold my-3">{trainer.email}</h1>
          <p className="">{trainer.
             otherInfo}</p>
          {/* <p className="text-gray-700 text-center mt-2">{trainer.skills}</p> */}
          <div className="">
            <h2 className="text-xl font-semibold">Experience: {trainer.
              yearsOfExperience}</h2>
              <ul>
        {trainer?.skills?.map((item, index) => (
          <p className=" text-xl  mb-3" key={index}>{item}</p>
        ))}
      </ul>
          </div>
          <div className="mt-6">
            <p className="text-gray-200">{trainer.otherInfo}</p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Available Slots</h2>
          <div className="space-y-4">
             {trainer.availableSlots.map((slot, index) => (
               <div onClick={() => handleSlotClick(slot)} className="mx-3 bg-lime-700 text-white py-2 px-4 rounded-lg hover:bg-lime-600 transition duration-200 inline-block cursor-pointer" key={index}>
                  <button
                
              >
                {slot}
              </button> 
              <span className="ml-3 ">{ trainer.availableTime}</span>
             </div>
             ))}
          </div>
        </div>
      </div>
      {/* Be A Trainer Section */}
      <div className="text-center my-5 ">
        <button
          onClick={handleBecomeTrainerClick}
          className="bg-lime-600 text-white px-6 py-3 rounded-lg hover:bg-lime-700 transition duration-200 text-xl"
        >
         <IoIosArrowForward className="inline-block text-2xl"></IoIosArrowForward> Become a Trainer
        </button>
      </div>
    </div>
  );
};

export default TrainerDetails;