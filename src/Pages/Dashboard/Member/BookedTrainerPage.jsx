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
      const res = await axiosSecure(`/payments/${user?.email}`)
      
      return res.data
    }
    
  })
   

console.log(bookingData);


  return (
    <div>
      {
        bookingData.map(trainer => (
          <BookedTrainer
            key={trainer?._id}
            trainer={trainer}>
            
            </BookedTrainer>
        ))}
      
    </div>
  );
};

export default BookedTrainerPage;