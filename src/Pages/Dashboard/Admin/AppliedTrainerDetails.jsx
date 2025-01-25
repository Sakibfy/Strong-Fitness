import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AppliedTrainerDetails = () => {
  const trainer = useLoaderData();
 
//  const navigate = useNavigate();
const axiosSecure = useAxiosSecure()
  
  console.log(trainer._id);

  const handleConfirm = async () => {
    const res = axiosSecure.patch(`alltrainer/${trainer._id}`)
    console.log('confrom');
     return res.data
   
  };


  return (
    <>
      <h2 className="text-center font-bold md:text-4xl md:mb-6 text-2xl mt-3">Applied Trainer</h2>
     <div className="p-6 mx-16 mt-7 md:my-0 md:mx-0 bg-white rounded shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={trainer.profileImage
}
          alt={trainer.fullName}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{trainer.fullName}</h1>
          <p className="text-gray-600">{trainer.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Age:</strong> {trainer.age}
          </p>
          <p>
            <strong>Available Time:</strong> {trainer.availableTime}
          </p>
          <p>
            <strong>Available Days:</strong>{" "}
            {trainer.availableSlots}
          </p>
        </div>

        <div>
          <p>
            <strong>Skills:</strong>{" "}
            {trainer.skills}
          </p>
          <p>
            <strong>Status:</strong> {trainer.status}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Other Info:</h2>
        <p className="text-gray-700">{trainer.otherInfo}</p>
      </div>
      <div className="mt-4 space-x-4">
        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Confirm
        </button>
        <button
          // onClick={handleReject}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Reject
        </button>
      </div>
    </div></>
  );
};

export default AppliedTrainerDetails;