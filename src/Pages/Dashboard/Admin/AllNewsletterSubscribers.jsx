import  { useState, useEffect } from "react";

import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllNewsletterSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const axiosPublic = useAxiosPublic();
  
console.log(subscribers);

  useEffect(() => {
    axiosPublic.get("/subscribe")
      .then((response) => {
        setSubscribers(response.data);
      })
      .catch((error) => console.error("Error fetching subscribers:", error));
  }, [axiosPublic]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">All Newsletter Subscribers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm uppercase">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length > 0 ? (
              subscribers.map((subscriber) => (
                <tr
                  key={subscriber._id}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{subscriber.name || "N/A"}</td>
                  <td className="px-4 py-2">{subscriber.user}</td>
                  <td className="px-4 py-2">
                    {new Date(subscriber.subscribed).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-4 text-gray-500 font-medium"
                >
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AllNewsletterSubscribers;