import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { Card, Label } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Component/SocialLogin";

const Login = () => {
  
const {singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log('state in the location', location.state);

  const handleLogin = (event) => {
 
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
  const password = form.password.value
  
    singIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
  title: "User Login Successful",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
        });
         navigate(from, {replace: true});
    })

}




  return (
    <>
      <Helmet>
        <title>Strong Fitness | Login</title>
      </Helmet>
      <div>
        <div>
          
        </div>
        <Card className="max-w-sm mx-auto mt-40 bg-slate-100">
          <h2 className="text-center font-bold text-4xl">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
           <input type="email"name="email" placeholder="email" className="w-full rounded-lg my-3" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label  value="Your password" />
          </div>
           <input type="password" name="password" placeholder="password" className="w-full rounded-lg my-3" required />
        </div>
        
            <button type="submit" className="bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 duration-500 font-bold">Login</button>
      {/* social */}
            
          <SocialLogin></SocialLogin>
      </form>
    </Card>
    </div>
      </>
  );
};

export default Login;