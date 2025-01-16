
"use client";
import { LuLogOut } from "react-icons/lu";
import { IoIosFitness } from "react-icons/io";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export function NavbarComponent() {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
        logOut()
         .then(() => { })
        .catch(error => console.log(error));
        
    }
  const link = <>
           <li className="text-white text-[17px] italic font-bold">Home</li>
           <li className="text-white text-[17px] italic font-bold">All Trainer</li>
          <NavLink to={'/AllClasses'}> <li className="text-white text-[17px] italic font-bold">All Classes</li></NavLink>
  </>


  

  return (
    
      <Navbar fluid rounded className="mx-auto relative backdrop-blur-sm  bg-gray-900 h-[80px]  z-10 bg-opacity-30 w-full items-center text-center ">
     
       
        <Link to={'/'}>
          <span className="italic items-center text-center text-3xl font-bold dark:text-white  text-white uppercase"> Strong <span className="border-b-4 border-lime-400">Fitness</span> </span>
        </Link>
     
      
      <div className=" md:order-2  flex gap-3 md:mr-20">
        
        {
          user ?
            <Dropdown
          arrowIcon={false}
          inline
          label={ <Avatar className="" img={user.
            photoURL} alt=""  />
            }>
          <Dropdown.Header className="mr-12  ">
            <span className="block text-xl font-bold mb-2 ml-8 uppercase">{user?.displayName}</span>
            
            <div className="items-center text-center flex">
                  <button onClick={handleLogOut} className=" block rounded-md font-bold ml-12 border-b-8 hover:bg-red-600 hover:text-white border-red-700 text-[#ef5350] px-4 py-2 duration-500   my-2 pointer-events-auto">Sign out  </button>
                  <span className="block text-red-700"><LuLogOut  /></span>
           </div>
          </Dropdown.Header>
            </Dropdown>
            :
           <>
             <NavLink to={'/login'}> <button className=" hover:bg-lime-400 duration-500  bg-lime-300   rounded-md font-bold text-black px-9 py-3 border-lime-300 my-2 ">Login</button></NavLink>
             <NavLink to={'/registaion'}> <button className=" hover:bg-lime-400 duration-500  bg-lime-300   rounded-md font-bold text-black px-9 py-3 border-lime-300 my-2 ">Register</button></NavLink>
          </>
         }
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {link}
        
      </Navbar.Collapse>
    </Navbar>
   
  );
}
