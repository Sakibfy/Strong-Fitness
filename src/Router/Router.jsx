import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

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
]);