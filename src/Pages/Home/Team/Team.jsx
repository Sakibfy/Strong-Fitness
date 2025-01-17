
import { useEffect, useState } from 'react';
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';
const Team = () => {




const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])






  return (
    <div className="mx-auto w-10/12">
      <div className='text-center text-black'>
        <p className='uppercase font-bold my-3 border-b-2 border-lime-400'>Top Trainers</p>
        <h2 className="text-5xl uppercase font-bold my-2">Meet Our Experienced <br />
          Cool Trainers</h2>
      </div>
       <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 items-center text-center '>
    
        {
          reviews.map((team, indx) => <div key={indx} className=" bg-slate-300 relative  bg-g  shadow-md rounded-full shadow-slate-200 flex w-[450px] ">
             {/*  <!-- Body--> */}
            <div className=" w-1/2  mt-24">
              <h2 className='text-4xl font-bold pl-5'>{ team.name}</h2>
           <p>{team.expertise} </p>
        </div>
            <div className='bg-lime-400  rounded-full h-16 bottom-0  w-full absolute flex cursor-pointer text-2xl gap-3'>
              <FaFacebook className='ml-16 mt-5'></FaFacebook>
              <FaGoogle className='mt-5'></FaGoogle>
              <FaInstagram className='mt-5'></FaInstagram>
              <FaX className='mt-5'></FaX>
        </div>
       
            <div className='w-1/2 z-20'>
              <img
            src={team.photo}
            alt="card image"
            className=" w-full object-contain pr-2 "
          />
          </div>
        
       
        
      </div>)
      }
  
    </div>
    </div>
  );
};

export default Team;