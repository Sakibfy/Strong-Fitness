import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Balance = () => {


  const axiosSecure = useAxiosSecure();


  const { data: payments =[] } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payments')
      return res.data;
    }
  })
 

  return (
   <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="text-3xl text-center mb-4  font-semibold leading-tight">Total Payment History</h2>
      <div>
        <div className="overflow-x-auto">
  <table className="min-w-full text-xs md:text-[16px]">
    {/* head */}
    <thead className="bg-gray-300">
      <tr  className="text-left">
        <th className="p-3">#</th>
        <th className="p-3">price</th>
        <th className="p-3">Transation Id</th>
        <th className="p-3">Date</th>
        <th className="p-3">Email</th>
        
      </tr>
    </thead>
    <tbody>
          {payments.map((payment, indx) =>
       <tr className="border-b border-opacity-20 border-gray-700 dark:bg-gray-50" key={payment.id}>
        <th className="p-3">{ indx + 1}</th>
        <td className="p-3">$ {payment.price}</td>
        <td className="p-3">{ payment.transactionId}</td>   
        <td className="p-3">{ payment.data}</td>
        <td className="p-3">{ payment.email}</td>
      </tr>
     )}
     
    </tbody>
  </table>
</div>
      </div>
    </div>
    
  );
};

export default Balance;