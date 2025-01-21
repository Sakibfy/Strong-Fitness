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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        path: 'trainerdetails',
        element: <TrainerDetails></TrainerDetails>
      }
    
     
    ]
    
  },
   {
     path: '/login',
     element: <Login></Login>
   },
   {
     path: '/registaion',
     element: <Registration></Registration>
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
        path: 'addNewClass',
        element:<AddNewClass></AddNewClass>
      },
      // trainer route
      {
        path: 'manageslots',
        element: <ManageSlots></ManageSlots>
      },
      
      // member route
      {
        path: 'activitylogpage',
        element: <ActiveiteLogPage></ActiveiteLogPage>
      },
    ]
  }  
 
]);