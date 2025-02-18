import  { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CommunityForums = () => {
  const [forums, setForums] = useState([]);
const axiosPublic = useAxiosPublic()

  useEffect(() => {
    const fetchForums = async () => {
      try {
        const response = await axiosPublic.get("/forums"); 
        setForums(response.data);
      } catch (error) {
        console.error("Error fetching forums:", error);
      }
    };

    fetchForums();
  }, [axiosPublic]);

console.log(forums);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Community Forums</h1>
      <div className="bg-white shadow-md rounded p-6 ">
        {forums.length === 0 ? (
          <p className="text-gray-600">No forums available.</p>
        ) : (
          <div className="space-y-4 ">
            {forums.map((forum) => (
              <li key={forum._id} className="p-4  border-red-500 border rounded">
                <h2 className="text-xl font-semibold">{forum.title}</h2>
                <p className="text-gray-800">{forum.description}</p>
                {forum.tags.map((tag, index) => (
      <li key={index} className="inline-block mr-2">
        {tag}
      </li>
    ))}
                <p className="text-sm text-gray-600 mt-2">
                  By {forum.author} ({forum.role}) on{" "}
                  {new Date(forum.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityForums;

