import { FaDollarSign, FaRegNewspaper, FaUserCircle, FaUsers } from "react-icons/fa";
import { Link,  NavLink, Outlet } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa6";
import useRole from "../hooks/useRole";
import Loding from "../Component/Loading/Loding";
import { VscGitStashApply } from "react-icons/vsc";
import { BsBuildingFillAdd } from "react-icons/bs";



const Dashboard = () => {

 
const [role, isLoading] = useRole()
  if (isLoading) return <Loding />


 

  return (
     <div className="md:flex ">
      {/* left side start*/}
 
     
      <div className=" md:w-60  md:min-h-screen h-full w-full bg-slate-400 p-2 text-white">
        <Link to={'/'}>
          <span className="italic  items-center text-center md:text-2xl text-[16px]  font-bold dark:text-white  text-white uppercase"> Strong <span className="mt-2 border-b-4 border-lime-400">Fitness</span> </span>
        </Link>
          
  <ul className="menu p-4 md:p-8 md:flex md:flex-col justify-normal  space-y-4 mt-3 uppercase ">
    {/* share dashboard start */}

{role === 'admin' && (<>
 <li className="flex text-[13px] gap-2 md:gap-3"><FaRegNewspaper  className="text-2xl  text-lime-300 "/> <NavLink to='/dashboard/allNewslettersubscribers'> Newsletter </NavLink></li>
 <li className="flex  text-[13px] gap-2 md:gap-3"><FaUsers className="text-2xl text-lime-300 "/> <NavLink to='/dashboard/adminalltrainer'> Trainers</NavLink></li>
 
 <li className="flex text-[13px] gap-2 md:gap-3"> <VscGitStashApply className="text-2xl text-lime-300 "/><NavLink to='/dashboard/appliedTrainer'>Applied Trainer</NavLink></li>
 <li className="flex text-[13px] gap-2 md:gap-3"> <FaDollarSign className="text-2xl text-lime-300 " /><NavLink to='/dashboard/balance'>Balance</NavLink></li>
 <li className="flex text-[13px] gap-2 md:gap-3"> <BsBuildingFillAdd  className="text-lime-300 text-2xl"/><NavLink to='/dashboard/addnewclass'>Add new Class</NavLink></li>
 
   </>
         
   )}
{role === 'trainer' && (<>
  <li><NavLink to='/dashboard/manageslots'>Manage Slots</NavLink> </li>
  <li><NavLink to='/dashboard/addnewslot'>Add New slot</NavLink> </li>
  <li><NavLink to='/dashboard/addnewforum'>Add new Forum</NavLink> </li>

   </>
  )}
{role === 'member' && (<>
  <li className="flex text-[13px] gap-2 md:gap-3 "> <FaUserCircle className="text-2xl" /><NavLink to='/dashboard/ProfilePage'> Profile Page</NavLink> </li>
  <li><NavLink to='/dashboard/ActivityLogpage'>Activity Log page</NavLink> </li>
  <li><NavLink to='/dashboard/bookedTrainerPage'>Booked Trainer</NavLink> </li>
 
</>)}

   
        
  </ul>
      </div>


      {/* left side end*/}
      {/* Right side Start*/}
      <div className="flex-1 md:p-12   bg-slate-200">
        <Outlet></Outlet>
      </div>
      {/* Right side End*/}

    </div>
  );
};

export default Dashboard;