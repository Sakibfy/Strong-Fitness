
import aboutImag from '../../../assets/about_2-1.png';

const About = () => {
  return (
    
       <>
      {/*<!-- Component: Blog card with avatar --> */}
      <div className="w-10/12 mx-auto  rounded text-slate-500 shadow-md h- shadow-slate-200 md:flex justify-between">
        {/*  <!-- Image --> */} 
          <div className=' '>
            
          <img
            src={aboutImag}
            alt="card image"
            className="p-8 w-full h-full ml-8 "
          />
         
          
        </div>
        {/*  <!-- Body--> */}
        <div className=" w-1/2 space-y-4 mt-3">
          <span className='font-bold border-2  p-3'>WHO WE ARE</span>
          <h2 className='font-bold text-5xl text-black'>We Will Give You Strength and Health</h2>
          <p className='text-[14px]'>
            Gymat an unknown printer took a galley type and scraey aretea bled make a type specimen book. May has survived not onlyive centuries but also the leap electronic.Gymatn unknown printer took a galley of type and scraey aretea.
          </p>
          <li className='text-[20px] text-gray-500 font-semibold'>Gymat an unknown printer</li>
          <li className='text-[20px] text-gray-500 font-semibold'>Scraey aretea bled makea type</li>
          <li className='text-[20px] text-gray-500 font-semibold'>Bookhas survived not onlyive</li>
          <li className='text-[20px] text-gray-500 font-semibold'>Centuries but also the leap electronic.</li>
          <button className='uppercase bg-[#c3f73a] text-black font-bold p-4'>Contact with us  </button>
          <p></p>
        </div>
      </div>
      {/*<!-- End Blog card with avatar --> */}
    </>
    
  );
};

export default About;