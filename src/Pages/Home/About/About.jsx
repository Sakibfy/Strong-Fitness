
import aboutImag from '../../../assets/aboutbg-1.png';
import aboutImag2 from '../../../assets/aboutbg-2.jpg';

const About = () => {
  return (
    
       <>
      {/*<!-- Component: Blog card with avatar --> */}
      <div className="md:w-10/12 w-11/12 mx-auto  rounded text-slate-500 shadow-md h- shadow-slate-50 md:flex justify-between bg-slate-200">
        {/*  <!-- Image --> */} 
          <div className='relative '>
            
          <div className='border '>
             <img
            src={aboutImag}
            alt="card image"
            className="p-8 w-full h-full  "
          />
         </div>
          <div className='absolute rounded-2xl h-[120px] md:h-60 md:w-60 w-[120px] md:bottom-[320px] top-20 md:-left-[80px] -left-3'>
             <img
            src={aboutImag2}
            alt="card image"
            className=" rounded-lg  border-l-8 border-lime-300 w-full h-full  "
          />
         </div>
         
          
        </div>
        {/*  <!-- Body--> */}
        <div className=" md:w-1/2 space-y-4 md:mt-24 p-6 md:p-0">
          <span className='font-bold '>Why Choose Us?</span>
          <h2 className='font-bold md:text-5xl text-black text-3xl border-l-8  pl-2 border-gray-400'>We Will Give You Strength and Health</h2>
          <p className='text-[14px]'>
            Our company is at the forefront of revolutionizing the fitness industry. We are dedicated to providing innovative solutions that empower individuals to lead healthier, more active lifestyles. Combining cutting-edge technology with a passion for fitness, we strive to create a community-driven platform that inspires, motivates, and supports our users on their wellness journey.

          </p>
         
          <div className='text-left '>
             <li className='text-[17px]  text-gray-500 font-semibold'>Gymat an unknown printer</li>
          <li className=' text-[17px] text-gray-500 font-semibold'>Scraey aretea bled makea type</li>
          <li className=' text-[17px] text-gray-500 font-semibold'>Bookhas survived not onlyive</li>
          <li className=' text-[17px] text-gray-500 font-semibold'>Centuries but also the leap electronic.</li>
      </div>
        </div>
      </div>
      {/*<!-- End Blog card with avatar --> */}
    </>
    
  );
};

export default About;