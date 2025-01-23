
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AppliedTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();
  const axiosSecure = useAxiosPublic();

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axiosSecure.get("/becomeatrainer");
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, [axiosSecure]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Applied Trainers</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">info</th>
            <th className="border px-4 py-2 ">Action</th>
            <th className="border px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
   <tr className="text-center" key={trainer.id}>
    <td className="border border-gray-300 shadow-md text-[12px] md:text-[18px] md:px-4 p-2 py-2">{trainer.fullName}</td>
    <td className="border  border-gray-300 shadow-md text-[12px] md:text-[18px] md:px-4 p-2 py-2">{trainer.email}</td>
    
    <td className="border  border-gray-300 shadow-md text-[15px] md:text-[18px] md:px-4 p-2 py-2"><button className="bg-green-700 text-white px-3 py-1 rounded mr-2">{trainer.status}</button></td>
    <td className="border  border-gray-300 shadow-md md:px-4 px-2 py-2">
       <Link to={`/dashboard/appliedtrainertetails/${trainer._id}`}>
     <button
        className="bg-blue-600 text-white md:px-3 px-1 py-1 rounded mr-2"
        
      >
     Details
     </button>  
        </Link>
                
        </td>
    <td className="border  border-gray-300 shadow-md px-4 py-2">
      <button
        className="bg-red-700 text-white px-3 py-1 rounded mr-2"
        onClick={() => navigate(`/applied-trainers/${trainer._id}`)}
      >
              Rejact
            </button>
          </td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedTrainer;
