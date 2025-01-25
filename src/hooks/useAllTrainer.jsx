import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllTrainer = () => {

  const axiosPublic = useAxiosPublic()
  const { data: trainers = [], refetch} = useQuery({
    queryKey: ['alltrainer'],
    queryFn: async () => {
      const res = await axiosPublic.get('/alltrainer/');
      return res.data;
    }
  })
  console.log(trainers);
  return [trainers, refetch]
};

export default useAllTrainer;