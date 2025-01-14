import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../error/Error";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);