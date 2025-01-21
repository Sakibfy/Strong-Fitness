// import { NavLink, Outlet } from "react-router-dom";
// import { FiHome } from "react-icons/fi";
// import useRole from "../hooks/useRole";

import { Sidebar } from "flowbite-react";
import { Outlet } from "react-router-dom";





const Dashboard = () => {

  // const [role] = useRole()
  // console.log(role);
  // const role = 'admin'
 


  return (
     <div className="flex ">
      {/* left side start*/}

     <div><Sidebar></Sidebar></div>


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