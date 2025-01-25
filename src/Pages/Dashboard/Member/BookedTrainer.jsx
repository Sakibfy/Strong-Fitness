

import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const BookedTrainer = ({ trainer }) => {
  
  const axiosPublic = useAxiosPublic()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setFeedback] = useState('');


  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      trainerId: trainer._id,
      name: trainer.trainerName,
      rating,
      review,
      memberName: trainer.name,
      email: trainer.email,
    };

    try {
      await axiosPublic.post('/reviews', reviewData);
      toast.success('Review submitted successfully');
      setIsModalOpen(false);
      setRating(0);
      setFeedback('');
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert('Failed to submit review');
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Booked Trainer</h1>

      {/* Trainer Info */}
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-xl font-bold">{trainer.trainerName}</h2>
        <p>Email: {trainer.email}</p>
        <p>Selected Slot: {trainer.selectedSlot}</p>
      </div>

      {/* Classes Info */}
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h3 className="text-lg font-bold">Classes Offered:</h3>
        <ul className="list-disc ml-6">
          {trainer.skills?.map((cls, index) => (
            <li key={index}>{cls}</li>
          ))}
        </ul>
      </div>

      {/* Membership Info */}
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h3 className="text-lg font-bold">Membership Info:</h3>
        <p>Name: {trainer.memberShipName}</p>

        <p>Price: ${trainer.price}</p>
      </div>

     
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        Give a Review
      </button>
       {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-700 text-white rounded shadow-md p-6 w-96">
            <h3 className="text-xl font-bold mb-4 text-center">Submit Your Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-4">
                <label htmlFor="rating" className="block font-medium mb-1">
                  Star Rating (1-5)
                </label>
                <input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="block font-medium mb-1">
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  rows="4"
                  value={review}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full border-2 border-gray-800 px-3 py-2 rounded"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>


        
        
        
        
      )} 
    </div>
  );
};




export default BookedTrainer;