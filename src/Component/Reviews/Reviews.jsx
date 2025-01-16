
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
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



  return (
    <div className="m-3 bg-black text-white">
      <h2 className="md:text-6xl text-3xl font-bold italic md:py-8 mb-4">WHAT CUTOMERS SAY</h2>
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
              
              <div className="md:flex md:w-full md:p-10">
                <div className="md:w-1/2 ">
                  <img className="w-11/12 pl-3" src={review.photo} alt="" /></div>

                 <div className="flex flex-col   md:w-1/2 md:mt-44 p-5 border-l-4 border-lime-400">
                <Rating className=""
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                />
                <p className="md:py-8 md:text-2xl font-bold">{review.review}</p>
                <h3 className="text-2xl font-extrabold">{review.name}</h3>
                <p>{ review.date}</p>
            </div>
           </div>
           </SwiperSlide>)
                }
            </Swiper>
    </section>
    </div>
  );
};

export default Reviews;