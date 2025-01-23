import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllClasses from "../Component/AllClasses/AllClasses";
import AllTrainer from "../Component/AllTrainer/AllTrainer";

import Dashboard from "../Layout/Dashboard";

import AddNewClass from "../Pages/Dashboard/Admin/AddNewClass";
import PrivateRoute from "./PrivateRoute";
import TrainerDetails from "../Component/TrainerDetails/TrainerDetails";
import ActiveiteLogPage from "../Pages/Dashboard/Member/ActiveiteLogPage";
import ManageSlots from "../Pages/Dashboard/Trainer/ManageSlots";
import TrainerBooked from "../Component/TrainerBooked/TrainerBooked";
import BecomeATrainer from "../Pages/Dashboard/BecomeATrainer/BecomeATrainer";
import Payment from "../Component/Payment/Payment";
import Balance from "../Pages/Dashboard/Admin/Balance";
import AllNewsletterSubscribers from "../Pages/Dashboard/Admin/AllNewsletterSubscribers";
import AdminAllTrainers from "../Pages/Dashboard/Admin/AdminAllTrainers";
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import AddNewForum from "../Pages/Dashboard/Trainer/AddNewForum";
import ProfilePage from "../Pages/Dashboard/Member/ProfilePage";
import BookedTrainer from "../Pages/Dashboard/Member/BookedTrainer";
import AddNewSlot from "../Pages/Dashboard/Trainer/AddNewSlot";
import AppliedTrainerDetails from "../Pages/Dashboard/Admin/AppliedTrainerDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'AllClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: 'AllTrainer',
        element: <AllTrainer></AllTrainer>
      },
      {
        path: '/trainerdetails/:id',
        element: <TrainerDetails></TrainerDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/alltrainer/${params.id}`)
      },
      {
        path: "/trainer/:id/book",
        element: <PrivateRoute>
          <TrainerBooked></TrainerBooked>
        </PrivateRoute>,
      },
      {
        path: "/become-a-trainer",
        element: <PrivateRoute>
          <BecomeATrainer></BecomeATrainer>
        </PrivateRoute>,
      },
      {
        path: '/payment',
        element: <PrivateRoute>
          <Payment></Payment>
        </PrivateRoute>,
      },
      
    
     
    ]
    
  },
   {
     path: '/login',
     element: <Login></Login>,
   },
   {
     path: '/registaion',
     element: <Registration></Registration>,
  },
     // dashboard
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children: [
      // admin route
      {
        path: "allnewslettersubscribers",
        element: <AllNewsletterSubscribers></AllNewsletterSubscribers>,
      },
      {
        path: 'adminalltrainer',
        element: <AdminAllTrainers></AdminAllTrainers>,
      },
      {
        path: 'appliedtrainer',
        element: <AppliedTrainer></AppliedTrainer>,
      },
       {
        path: 'appliedtrainertetails/:id',
        element: <AppliedTrainerDetails></AppliedTrainerDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/becomeatrainer/${params.id}`)
      },
      {
        path: 'addNewClass',
        element:<AddNewClass></AddNewClass>,
      },
      {
        path: 'balance',
        element: <Balance></Balance>,
      },
      // trainer route
      {
        path: 'manageslots',
        element: <ManageSlots></ManageSlots>,
      },
      {
        path: 'AddNewslot',
        element: <AddNewSlot></AddNewSlot>
      },
      {
        path: 'AddnewForum',
        element: <AddNewForum></AddNewForum>,
      },
      
      // member route
      {
        path: 'activitylogpage',
        element: <ActiveiteLogPage></ActiveiteLogPage>,
      },
      {
        path: 'ProfilePage',
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: 'BookedTrainer',
        element: <BookedTrainer></BookedTrainer>,
      },
    ]
  }  
 
]);