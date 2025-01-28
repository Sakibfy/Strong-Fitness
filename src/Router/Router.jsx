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
import AddNewSlot from "../Pages/Dashboard/Trainer/AddNewSlot";
import AppliedTrainerDetails from "../Pages/Dashboard/Admin/AppliedTrainerDetails";
import BookedTrainerPage from "../Pages/Dashboard/Member/BookedTrainerPage";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";
import RoleTypeDashboard from "../Pages/Dashboard/RoleTypeDashboard";
import CommunityForums from "../Component/CommunityForums/CommunityForums";


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
        path: 'CommunityForums',
        element: <CommunityForums></CommunityForums>
      },
      {
        path: '/trainerdetails/:id',
        element: <TrainerDetails></TrainerDetails>,
        loader: ({params}) => fetch(`https://strong-max-server.vercel.app/alltrainer/${params.id}`)
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
        path: "",
        element: <RoleTypeDashboard></RoleTypeDashboard>
      },
      {
        path: "allnewslettersubscribers",
        element: <AdminRoute><AllNewsletterSubscribers></AllNewsletterSubscribers>,</AdminRoute>
      },
      {
        path: 'adminalltrainer',
        element: <AdminRoute><AdminAllTrainers></AdminAllTrainers>,</AdminRoute>
      },
      {
        path: 'appliedtrainer',
        element: <AdminRoute><AppliedTrainer></AppliedTrainer>,</AdminRoute>,
      },
       {
        path: 'appliedtrainertetails/:id',
         element: <AdminRoute><AppliedTrainerDetails></AppliedTrainerDetails>,
         </AdminRoute>,
        loader: ({params}) => fetch(`https://strong-max-server.vercel.app/alltrainer/${params.id}`)
      },
      {
        path: 'addNewClass',
        element: <AdminRoute><AddNewClass></AddNewClass>,</AdminRoute>
      },
      {
        path: 'balance',
        element: <AdminRoute><Balance></Balance></AdminRoute>
      },
      // trainer route
      {
        path: 'manageslots',
        element: <TrainerRoute><ManageSlots></ManageSlots></TrainerRoute>
      },
      {
        path: 'AddNewslot',
        element: <TrainerRoute><AddNewSlot></AddNewSlot></TrainerRoute>
      },
      {
        path: 'AddnewForum',
        element: <TrainerRoute><AddNewForum></AddNewForum>,</TrainerRoute>
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
        path: 'bookedTrainerPage',
        element: <BookedTrainerPage></BookedTrainerPage>
      },
    ]
  }  
 
]);