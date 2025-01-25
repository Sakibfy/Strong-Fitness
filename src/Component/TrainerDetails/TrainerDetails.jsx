
import { IoIosArrowForward } from "react-icons/io";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const TrainerDetails = () => {
  const trainer = useLoaderData();
 const { id } = useParams(); // Trainer ID from the route
  const navigate = useNavigate();


console.log(trainer);
const handleSlotClick = (slot) => {
    navigate(`/trainer/${id}/book`, {state: {
        trainerName: trainer.name,
        selectedSlot: slot,
        skills: trainer.skills,
        trainerId: id,
      },  });
    
  };

  console.log(trainer.skills);
// Redirect to Become a Trainer page
  const handleBecomeTrainerClick = () => {
    navigate("/become-a-trainer");
  };
  return (
   <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Trainer Information Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src={trainer.profileImage}
            alt={trainer.fullName}
            className="w-48 h-48 mx-auto rounded-full object-contain"
          />
          <h1 className="text-3xl font-bold text-center mt-4">{trainer.name}</h1>
          <p className="text-gray-700 text-center mt-2">{trainer.
             otherInfo}</p>
          {/* <p className="text-gray-700 text-center mt-2">{trainer.skills}</p> */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Expertise:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {trainer.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Additional Information:</h2>
            <p className="text-gray-700">{trainer.otherInfo}</p>
          </div>
        </div>

        {/* Available Slots Section */}
        <div className="bg-white shadow-md rounded-lg p-6 md:mt-32">
          <h2 className="text-2xl font-bold mb-4">Available Slots</h2>
          <div className="space-y-4">
             {trainer.availableSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleSlotClick(slot)}
                className="mx-3 bg-lime-700 text-white py-2 px-4 rounded-lg hover:bg-lime-600 transition duration-200"
              >
                {slot}
              </button> 
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