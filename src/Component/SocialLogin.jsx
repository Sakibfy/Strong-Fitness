import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const handleGoogleSingIn = () => {
    googleSingIn()
      .then(result => {
        console.log(result);
        const userinfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userinfo)
          .then(res => {
            console.log(res.data);
            navigate('/')
        })
    })
}
  return (
    <div className="flex justify-center">
       <div className="divider"></div>
    
       <button
           onClick={handleGoogleSingIn}
            size="lg"
            className="flex h-12 px-5 border-blue-gray-200 items-center justify-center gap-2 border-2 rounded-md py-2 hover:bg-slate-300 text-black duration-500" >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </button>
    </div>
  );
};

export default SocialLogin;