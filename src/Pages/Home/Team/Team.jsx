
import { useEffect, useState } from 'react';
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';
const Team = () => {




const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://strong-max-server.vercel.app/team')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])






  return (
    <div className="">
      <div className='text-center text-black'>
        <p className='uppercase font-bold my-3 border-b-2 border-lime-400'>Top Trainers</p>
        <h2 className="text-4xl uppercase font-bold my-2">Meet Our Experienced <br />
          Cool Trainers</h2>
      </div>
       <div className=' grid grid-cols-1 md:grid-cols-4 gap-10 items-center  text-center '>
    
        {
          reviews.map((team, indx) => <div key={indx} className=" bg-slate-200 relative    shadow-md rounded-2xl shadow-slate-200 flex w-[320px] ">
             {/*  <!-- Body--> */}
            <div className=" w-1/2  mt-16 ml-1">
              <h2 className='text-2xl font-bold '>{ team.name}</h2>
           <p>{team.expertise} </p>
        </div>
            <div className=' top-40  rounded-full bottom-0  w-full absolute flex cursor-pointer text-sm gap-3'>
              <FaFacebook className='ml-10  mt-2'></FaFacebook>
              <FaGoogle className='mt-2'></FaGoogle>
              <FaInstagram className='mt-2'></FaInstagram>
              <FaX className='mt-2'></FaX>
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