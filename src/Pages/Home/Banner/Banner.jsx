
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from  '../../../assets/banner.1.png'
import img2 from  '../../../assets//banner.2.png'
import img3 from  '../../../assets/banner.3.png'


const Banner = () => {
  return (
    <div className=' -mt-12'>
     
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
            <img src={img1} />
            <button className='absolute bg-gray-900 text-[#c3f73a] font-bold bottom-16 left-72 p-3 rounded-2xl hover:bg-slate-800 duration-300'>Know More</button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
             <button className='absolute bg-gray-100 text-black font-bold bottom-72 left-80 p-3 rounded-xl hover:bg-slate-300 duration-300'>Know More</button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
             <button className='absolute bg-gray-300 text-black font-bold bottom-16 left-48 p-3 rounded-md hover:bg-slate-800 duration-300'>Know More</button>
          </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  );
};

export default Banner;