
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from  '../../../assets/bg_3.jpg'
import img2 from  '../../../assets/bg_2.jpg'
import img3 from  '../../../assets/bg-home-v2.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='md:-mt-20 -mt-[80px] '>
     
       <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img1} />
           <div className='absolute md:top-[300px] top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-white'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>strong fitness clus</button>
            <h2 className='uppercase md:text-7xl text-xl font-bold '>make you be the fighter</h2>
              <Link to={'/allclasses'}>
                 <button className='absolute bg-lime-400 mt-4 text-black md:font-bold  md:p-3 p-[5px] md:text-xl text-[14px] rounded-md hover:bg-lime-500 duration-300'>Know More</button>
              </Link>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img2} />
             <div className='absolute md:top-[300px] top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-white'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>strong fitness clus</button>
            <h2 className='uppercase md:text-7xl text-xl font-bold'>make you be the fighter</h2>
             <Link to={'/allclasses'}>
                 <button className='absolute bg-lime-400 mt-4 text-black md:font-bold  md:p-3 p-[5px] md:text-xl text-[14px] rounded-md hover:bg-lime-500 duration-300'>Know More</button>
              </Link>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img3} />
           <div className='absolute md:top-[300px] top-20 space-y-2 left-16 md:space-y-10 md:left-20  text-white'>
               <button className='uppercase md:border-2 md:p-2 md:text-3xl text-[10px]'>strong fitness clus</button>
            <h2 className='uppercase md:text-7xl text-xl font-bold'>make you be the fighter</h2>
            <Link to={'/allclasses'}>
                 <button className='absolute bg-lime-400 mt-4 text-black md:font-bold  md:p-3 p-[5px] md:text-xl text-[14px] rounded-md hover:bg-lime-500 duration-300'>Know More</button>
              </Link>
           </div>
          </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
};

export default Banner;