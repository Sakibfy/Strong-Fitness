import { FaUserCircle } from "react-icons/fa";
import { Link,  NavLink, Outlet } from "react-router-dom";

import useRole from "../hooks/useRole";
import Loding from "../Component/Loading/Loding";





const Dashboard = () => {

 
const [role, isLoading] = useRole()
  if (isLoading) return <Loding />


 

  return (
     <div className="flex ">
      {/* left side start*/}
 
     
      <div className=" md:w-60 w-36 min-h-screen bg-slate-400 p-2 text-white">
        <Link to={'/'}>
          <span className="italic  items-center text-center md:text-3xl text-lg  font-bold dark:text-white  text-white uppercase"> Strong <span className="mt-2 border-b-4 border-lime-400">Fitness</span> </span>
        </Link>
          
  <ul className="menu p-4 md:p-8   space-y-4 mt-3 uppercase ">
    {/* share dashboard start */}

{role === 'admin' && (<>
 <li><NavLink to='/dashboard/allNewslettersubscribers'> Newsletter </NavLink></li>
 <li><NavLink to='/dashboard/adminalltrainer'> Trainers</NavLink></li>
 <li><NavLink to='/dashboard/appliedTrainer'>Applied Trainer</NavLink></li>
 <li><NavLink to='/dashboard/balance'>Balance</NavLink></li>
 <li><NavLink to='/dashboard/addnewclass'>Add new Class</NavLink></li>
 
   </>
         
   )}
{role === 'trainer' && (<>
  <li><NavLink to='/dashboard/manageslots'>Manage Slots</NavLink> </li>
  <li><NavLink to='/dashboard/addnewslot'>Add New slot</NavLink> </li>
  <li><NavLink to='/dashboard/addnewforum'>Add new Forum</NavLink> </li>

   </>
  )}
{role === 'member' && (<>
  <li><NavLink to='/dashboard/ProfilePage'><FaUserCircle className="block" /> Profile Page</NavLink> </li>
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