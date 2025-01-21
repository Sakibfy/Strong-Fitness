import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
  // tan stack quer 
  const axiosSecure = useAxiosSecure();
  const { data: dataClass = [] } = useQuery({
    queryKey: ['class'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allclasses')
      // console.log(res.data);
      return  res.data
    }
  })
  console.log(dataClass);
  return [dataClass]
};

export default useClasses;