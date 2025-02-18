
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';



const Reviews = () => {

const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://strong-max-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



  return (
    <div className="m-3 bg-[#2c2a2b] rounded-xl text-white">
      
      <section>
      <Swiper pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">

         {
            reviews.map(review => <SwiperSlide
                        key={review._id}
            >
              
              <section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="md:text-4xl text-2xl font-semibold leading-none text-center">What our customers are saying about us</h1>
	</div>
	<div className="container mx-auto ">
		<div className="flex flex-col  items-center mx-12 lg:mx-0">
			<div className="relative text-center md:w-[400px]">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
          <p className="px-6 py-1 text-lg italic">{ review.review}</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                    <p>{ review.name}</p>
		</div>
	
	</div>
</section>
           </SwiperSlide>)
                }
            </Swiper>
    </section>
    </div>
  );
};

export default Reviews;