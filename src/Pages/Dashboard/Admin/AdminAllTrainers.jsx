import useAllTrainer from "../../../hooks/useAllTrainer";
import { RiDeleteBinLine } from "react-icons/ri";

const AdminAllTrainers = () => {

  const [trainers ] = useAllTrainer();
  console.log(trainers);

  return (
     <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">All Trainers</h1>
      <table className="w-full border-collapse bg-white shadow-md">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Skills</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer._id} className="border-b">
              <td className="border px-4 py-2">{trainer.name}</td>
              <td className="border px-4 py-2">{trainer.contactEmail}</td>
              {/* <td className="border px-4 py-2">{trainer.skills.join(', ')}</td> */}
              <td className="border px-4 py-2 space-x-2">
                <button
                  // onClick={() => handleDelete(trainer._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 "
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllTrainers;