import Swal from "sweetalert2";
import useAllTrainer from "../../../hooks/useAllTrainer";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminAllTrainers = () => {
  const [trainers, refetch] = useAllTrainer();
const axiosSecure = useAxiosSecure()
  const handleDelete = (_id) => {
    console.log(`Deleting trainer with ID: ${_id}`);
    // Add delete logic here, e.g., API call

      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/alltrainer/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
        })
      }
    });


  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">All Trainers</h1>
      {trainers && trainers.length > 0 ? (
        <table className="w-full border-collapse bg-white shadow-md">
          <thead className="text-left">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer._id} className="border-b">
                <td className="border px-4 py-2">{trainer.fullName || "N/A"}</td>
                
                <td className="border px-4 py-2">{trainer.email || "N/A"}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleDelete(trainer._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No trainers found.</p>
      )}
    </div>
  );
};

export default AdminAllTrainers;
