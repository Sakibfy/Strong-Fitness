import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Newsletter = () => {
  const { user } = useAuth() 
  // console.log(user);
  const axiosPublic = useAxiosPublic()
  const handleSubscribe = async () => {

    const subdata = {
      user: user?.email,
      name: user?.displayName,
      subscribed: new Date().toISOString(),
      
    }

    const res = await axiosPublic.post('/subscribe', subdata)
    toast.success('Subscribed')
    return res.data
  }
  return (
    <div>
      <section className="py-6 bg-[#1f2937] text-white rounded-xl">
	<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
		<div className="flex flex-col space-y-4 text-center lg:text-left">
			<h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
			<p className="text-lg">Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
		</div>
		<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
			<div className="flex flex-row">
				<input type="text" placeholder={user?.email} className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
				<button onClick={handleSubscribe} type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-lime-700 text-white hover:bg-lime-500 duration-200">Subscribe</button>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Newsletter;