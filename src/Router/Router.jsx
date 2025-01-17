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

import AddNewClass from "../Component/Admin/AddNewClass";
import PrivateRoute from "./PrivateRoute";


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
    path: '/Dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children: [
      {
        path: 'AddNewClass',
        element:<AddNewClass></AddNewClass>
     }
    ]
  }  
 
]);