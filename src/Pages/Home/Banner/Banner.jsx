
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


const Banner = () => {
  return (
    <div className='-mt-20 '>
     
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
           <div className='absolute top-72 space-y-10 left-20 text-white'>
               <button className='uppercase border-2 p-2 text-3xl'>strong fitness clus</button>
            <h2 className='uppercase text-7xl font-bold'>make you be the fighter</h2>
             <button className='absolute bg-lime-400 text-black font-bold  p-3 rounded-md hover:bg-lime-500 duration-300'>Know More</button>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img2} />
             <div className='absolute top-72 space-y-10 left-20 text-white'>
               <button className='uppercase border-2 p-2 text-3xl'>strong fitness clus</button>
            <h2 className='uppercase text-7xl font-bold'>make you be the fighter</h2>
             <button className='absolute bg-lime-400 text-black font-bold  p-3 rounded-md hover:bg-lime-500 duration-300'>Know More</button>
           </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img className='w-screen' src={img3} />
            <div className='absolute top-72 space-y-10 left-20 text-white'>
               <button className='uppercase border-2 p-2 text-3xl'>strong fitness clus</button>
            <h2 className='uppercase text-7xl font-bold'>make you be the fighter</h2>
             <button className='absolute bg-lime-400 text-black font-bold  p-3 rounded-md hover:bg-lime-500 duration-300'>Know More</button>
           </div>
          </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
};

export default Banner;