import { Link } from "react-router-dom";


const TrainerCard = ({ trainer }) => {
  

  return (
     <div className="p-4  bg-white shadow-md rounded-lg">
      {/* Profile Image */}
      <img
        src={trainer.profileImage}
        alt={trainer.name}
        className="w-36 h-36 hover:scale-110 duration-500 mx-auto rounded-3xl object-cover"
      />
      {/* Trainer Name */}
      <h3 className="text-xl font-semibold text-center mt-4">{trainer.name}</h3>
      {/* Years of Experience */}
      <p className="text-sm text-gray-600 text-center">
        {trainer.experience} years of experience
      </p>
      {/* Social Icons */}
      <div className="flex justify-center mt-3 space-x-3">
        {trainer.socialLinks.map((link) => (
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
        <span className="font-semibold">Available Slots:</span>{' '}
        {trainer.availableSlots}
      </p>
      {/* Know More Button */}
      <Link to={`/trainer/${trainer._id}`}>
        <button
       
        className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 duration-200"
      >
        Know More
      </button></Link>
    </div>
  );
};

export default TrainerCard;