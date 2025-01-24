import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BookedTrainer from "./BookedTrainer";


const BookedTrainerPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const { data: bookingData = [] } = useQuery({
    queryKey: ['bookingData', user?.email],

    queryFn: async () => {
      const { data } = await axiosSecure(`/bookingtrainer/${user?.email}`)
      return data
    }
    ,
  })
   
  console.log(bookingData);
  return (
    <div>
      {
        bookingData.map(trainer => (
          <BookedTrainer
            key={trainer?._id}
            trainers={trainer}>
            
            </BookedTrainer>
        ))}
      
    </div>
  );
};

export default BookedTrainerPage;