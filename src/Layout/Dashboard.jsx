import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { FaBook, FaCalendarAlt, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdContactPhone } from "react-icons/md";
import { FiHome } from "react-icons/fi";


const isAdmin = true


const Dashboard = () => {
  return (
     <div className="flex ">
      {/* left side start*/}
      <div className=" md:w-60 w-36 min-h-screen bg-blue-600 text-white">
        <ul className="menu p-4 md:p-8   space-y-4 mt-3 uppercase ">
          {/* share dashboard start */}
          {
            isAdmin ?
              <>
              <li>
            <NavLink to='/dashboard/adminHome'>All Newsletter</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/addItems'> All Trainer</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/manageItems'>Applicd Trainer </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/Booking'> Balance</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/AddNewClass'>Add New Class</NavLink>
          </li>
             </>
              :
              <>
                <li>
            <NavLink to='/dashboard/UserHome'> User Home</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'> Not History</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/cart'> My Cart </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review'> Add Review</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/paymenthistory'>Real Payment Histroy</NavLink>
          </li>
              </>
          }
          
          {/* share dashboard end */}
          <div className="divider"></div>
          <li>
            <NavLink to='/'><FiHome />  Home</NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'><TiThMenu />  Menu</NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'><FaShoppingBag />  Shop</NavLink>
          </li>
          <li>
            <NavLink to='/'><MdContactPhone /> Contact</NavLink>
          </li>
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