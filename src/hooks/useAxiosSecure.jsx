import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
  baseURL: 'https://strong-max-server.vercel.app' 

})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth()
  
  // request inceptors to add authorization for header for every secure call to  the api
  
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('request by interceptor', token);
    config.headers.authorization = `Beare ${token}`;
    return config;
  }), function (error) {
    return Promise.reject(error);
  }
    

// intercepts 401 and 403 status

  axiosSecure.interceptors.response.use(function (response) {
    return response;
  },async (error) => {
    const status = error.response.status;
    // console.log('status code', status);
    // for 401 or 403 logout the user and move the user to the user login page
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login')
    }
 return Promise.reject(error)
  })
    
  return axiosSecure;
}

export default useAxiosSecure;