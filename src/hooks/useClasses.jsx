import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useClasses = () => {
  // tan stack quer 
  const axiosPublic = useAxiosPublic();
  const { data: dataClass = [] } = useQuery({
    queryKey: ['class'],
    queryFn: async () => {
      const res = await axiosPublic.get('/allclasses')
      // console.log(res.data);
      return  res.data
    }
  })
  return [dataClass]
};

export default useClasses;