import { NavLink, Outlet } from "react-router-dom";
import { FiHome } from "react-icons/fi";
// import useRole from "../hooks/useRole";





const Dashboard = () => {

  // const [role] = useRole()
  // console.log(role);
  const role = true


  return (
     <div className="flex ">
      {/* left side start*/}
      <div className=" md:w-60 w-36 min-h-screen bg-blue-600 text-white">
        <ul className="menu p-4 md:p-8   space-y-4 mt-3 uppercase ">
          {/* share dashboard start */}

          {role === 'member' && (<>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
            <li><NavLink to='/'><FiHome /> user Home</NavLink></li>
          </>
          
          )}
          {role === 'trainer' && (<>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li>
            <li><NavLink to='/'><FiHome /> trainer Home</NavLink> </li></>
          )}
          {role === 'admin' && (<>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
            <li><NavLink to='/'><FiHome />  admin</NavLink></li>
           
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