
"use client";
import { IoIosFitness } from "react-icons/io";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function NavbarComponent() {
  const link = <>
           <li className="text-white text-[17px] italic font-bold">Home</li>
           <li className="text-white text-[17px] italic font-bold">All Trainer</li>
           <li className="text-white text-[17px] italic font-bold">All Classes</li>
  </>
  return (
    
      <Navbar fluid rounded className=" relative backdrop-blur-lg bg-gray-600  z-10 bg-opacity-30 max-w-screen-xl items-center text-center ">
      <Navbar.Brand className="flex gap-2" href="https://flowbite-react.com">
        <p><IoIosFitness className="block text-3xl text-[#c3f73a]"></IoIosFitness></p>
        <span className="italic items-center text-center text-3xl font-bold dark:text-white  text-white"> Strong Fitness </span>
        
      </Navbar.Brand>
      <div className=" md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Sakib</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown.Header>
          {link }
          
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {link}
        
      </Navbar.Collapse>
    </Navbar>
   
  );
}
