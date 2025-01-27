import  { useState } from "react";
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNewForum = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic();
  const [role] = useRole()
  const [forum, setForum] = useState({
    title: "",
    description: "",
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForum({ ...forum, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForum = {
      ...forum,
      author: user?.name,
      role,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await axiosPublic.post("/forums", newForum);
      toast.success("Forum added successfully!");
     navigate('/CommunityForums')
      if (response.status === 201) {
        setForum({ title: "", description: "", tags: [] });
      }
    } catch (error) {
      console.error("Error adding forum:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Add New Forum</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Forum Title</label>
          <input
            type="text"
            name="title"
            value={forum.title}
            onChange={handleInputChange}
            placeholder="Enter forum title"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Forum Description</label>
          <textarea
            name="description"
            value={forum.description}
            onChange={handleInputChange}
            placeholder="Enter forum description"
            rows="4"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Tags (Optional)</label>
          <input
            type="text"
            name="tags"
            value={forum.tags}
            onChange={(e) =>
              setForum({
                ...forum,
                tags: e.target.value.split(",").map((tag) => tag.trim()),
              })
            }
            placeholder="Enter tags separated by commas (e.g., React, Fitness)"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Add Forum
        </button>
      </form>
    </div>
  );
};




export default AddNewForum;