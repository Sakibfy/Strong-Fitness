

const TrainerCard = ({ trainer }) => {
  


    
  //   "name": "Sophia Lee",
  //   "profileImage": "https://i.ibb.co.com/9p7N3RV/class-img-5.jpg",
  //    "expertise": ["Yoga", "Mindfulness", "Personal Training"],
  //   "experience": 5,
  //   "socialLinks": [
  //     { "platform": "facebook", "url": "https://facebook.com/sophia" },
  //     { "platform": "twitter", "url": "https://twitter.com/sophia" },
  //     { "platform": "linkedin", "url": "https://linkedin.com/in/sophia" }
  //   ],
  //   "availableSlots": "Monday - Friday, 9 AM to 5 PM"
  // },



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
      <button
        onClick={() => window.location.href = `/trainer/${trainer.id}`}
        className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 duration-200"
      >
        Know More
      </button>
    </div>
  );
};

export default TrainerCard;