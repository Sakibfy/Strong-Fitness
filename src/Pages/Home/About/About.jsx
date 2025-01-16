
import aboutImag from '../../../assets/about_2-1.png';

const About = () => {
  return (
    
       <>
      {/*<!-- Component: Blog card with avatar --> */}
      <div className="md:w-10/12 w-11/12 mx-auto  rounded text-slate-500 shadow-md h- shadow-slate-200 md:flex justify-between bg-slate-200">
        {/*  <!-- Image --> */} 
          <div className=' '>
            
          <img
            src={aboutImag}
            alt="card image"
            className="p-8 w-full h-full md:ml-8 "
          />
         
          
        </div>
        {/*  <!-- Body--> */}
        <div className=" md:w-1/2 space-y-4 mt-3 p-6 md:p-0">
          <span className='font-bold '>WHO WE ARE</span>
          <h2 className='font-bold md:text-5xl text-black text-3xl border-l-8  pl-2 border-gray-400'>We Will Give You Strength and Health</h2>
          <p className='text-[14px]'>
            Our company is at the forefront of revolutionizing the fitness industry. We are dedicated to providing innovative solutions that empower individuals to lead healthier, more active lifestyles. Combining cutting-edge technology with a passion for fitness, we strive to create a community-driven platform that inspires, motivates, and supports our users on their wellness journey.

          </p>
          <li className='text-[20px] text-gray-500 font-semibold'>Gymat an unknown printer</li>
          <li className='text-[20px] text-gray-500 font-semibold'>Scraey aretea bled makea type</li>
          <li className='text-[20px] text-gray-500 font-semibold'>Bookhas survived not onlyive</li>
          <li className='text-[20px] text-gray-500 font-semibold'>Centuries but also the leap electronic.</li>
          <button className='uppercase bg-[#c3f73a] hover:bg-[#a5d132]  duration-300 hover: text-black font-bold md:p-4 p-2'>Contact with us  </button>
          <p></p>
        </div>
      </div>
      {/*<!-- End Blog card with avatar --> */}
    </>
    
  );
};

export default About;