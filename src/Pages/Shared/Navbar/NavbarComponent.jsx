
"use client";
import { LuLogOut } from "react-icons/lu";
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
  <NavLink to={'/'}><li className="text-white text-[17px] italic font-bold  hover:scale-x-110 duration-150">Home</li></NavLink>
  <NavLink to={'/allTrainer'}><li className="text-white text-[17px] italic font-bold hover:scale-x-110 duration-150">All Trainer</li></NavLink>
  <NavLink to={'/allClasses'}> <li className="text-white text-[17px] italic font-bold  hover:scale-x-110 duration-150">All Classes</li></NavLink>
  <NavLink to={'/communityForums'}> <li className="text-white text-[17px] italic font-bold hover:scale-x-110 duration-150 ">Forums</li></NavLink>
  <Link to={'/dashboard'}> <li className="text-white text-[17px] italic font-bold mb-1 hover:scale-x-110 duration-150">Dashboard</li></Link> 
     

  </>
   
    

  

  return (
    
      <Navbar  className="mx-auto  relative backdrop-blur-sm  bg-gray-900 md:h-[80px]  z-10 bg-opacity-30  items-center text-center ">
     
       
        <Link to={'/'}>
          <span className="italic items-center text-center md:text-2xl lg:text-3xl sm:text-[22px] text-[18px] font-bold md:ml-9  text-white uppercase"> Strong <span className="border-b-4 border-lime-400">Fitness</span> </span>
        </Link>
     
      
      <div className=" md:order-2 rounded-3xl flex  gap-3 md:mr-20">

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
     <NavLink to={'/login'}> <button className=" hover:bg-lime-400 duration-500  bg-lime-300   rounded-md md:font-bold text-black px-3 md:px-9 sm:py-3  py-2 border-lime-300 my-2 ">Login</button></NavLink>
     <NavLink to={'/registaion'}> <button className=" hover:bg-lime-400 duration-500  bg-lime-300   rounded-md md:font-bold text-black px-3 md:px-9 md:py-3 py-2 border-lime-300 my-2 ">Register</button></NavLink>
          </>
         }
        
        <Navbar.Toggle className="" />
        
      </div>
      <Navbar.Collapse className="">
        {link}
        
      </Navbar.Collapse>
    </Navbar>
   
  );
}
