import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const TrainerCard = ({ trainer }) => {

  return (
     <div className="p-2 hover:scale-110 duration-500 bg-white shadow-md rounded-lg  ">
      <div className="">
          {/* Profile Image */}
      <img
        src={trainer.profileImage}
        alt={trainer.name}
        className="w-full h-48   mx-auto rounded-3xl object-fill"
      />
      {/* Trainer Name */}
      <h3 className="text-3xl font-semibold text-center my-2">{trainer.fullName}</h3>
      {/* Years of Experience */}
      <p className="text-xl text-gray-600 text-center">
       Experience: {trainer?.yearsOfExperience}
      </p>
      <p className="text-xl text-gray-600 text-center">
       Age: {trainer?.age}
      </p>
      {/* Social Icons */}
      <div className="flex justify-center mt-3 space-x-5">
        {trainer?.socialLinks?.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-lime-600 duration-150 text-2xl "
          >
            <i className={`fab fa-${link.platform}`}></i>
          </a>
        ))}
      </div>
      {/* Available Slots */}
      <p className="text-center mt-3">
        <span className="font-semibold"></span>
        <div className="mt-2">
         
        </div>
      </p>
      {/* Know More Button */}
      <Link to={`/trainerdetails/${trainer?._id}`}>
        
        <button
       
        className=" mx-auto flex flex-col w-full items-center mt-4 bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-500 duration-300 "
      >
          Know More
          
      </button> </Link>
    </div>
    </div>
  );
};


TrainerCard.propTypes = {
  trainer: PropTypes.element,
}


export default TrainerCard;