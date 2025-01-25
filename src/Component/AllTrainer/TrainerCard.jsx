import { Link } from "react-router-dom";


const TrainerCard = ({ trainer }) => {
  

  return (
     <div className="p-2  bg-white shadow-md rounded-lg ">
      {/* Profile Image */}
      <img
        src={trainer.profileImage}
        alt={trainer.name}
        className="w-36 h-44  hover:scale-110 duration-500 mx-auto rounded-3xl object-fill"
      />
      {/* Trainer Name */}
      <h3 className="text-xl font-semibold text-center mt-2">{trainer.fullName}</h3>
      {/* Years of Experience */}
      <p className="text-sm text-gray-600 text-center">
        {trainer?.yearsOfExperience}
      </p>
      {/* Social Icons */}
      <div className="flex justify-center mt-3 space-x-3">
        {trainer?.socialLinks?.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <i className={`fab fa-${link.platform}`}></i>
          </a>
        ))}
      </div>
      {/* Available Slots */}
      <p className="text-center mt-3">
        <span className="font-semibold">Available Slots:</span>
        <div className="mt-2">
          {trainer?.availableSlots?.map((slot, index) => (
            <div key={index} className="text-sm ml-28  sm:ml-48 md::ml-36 text-left text-gray-700">
              {slot}
            </div>
          ))}
        </div>
      </p>
      {/* Know More Button */}
      <Link  to={`/trainerdetails/${trainer._id}`}>
        <button
       
        className="w-8/12 mx-auto flex flex-col items-center mt-4 bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-500 duration-300"
      >
        Know More
      </button></Link>
    </div>
  );
};

export default TrainerCard;