import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loding from "../Component/Loading/Loding";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();
  if (loading) {
     return <Loding></Loding>
}
  if (user) {
    return children
  }

  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;