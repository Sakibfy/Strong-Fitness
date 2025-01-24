import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Component/SocialLogin";

const Registration = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
   
    const navigate = useNavigate()
    
    const onSubmit = data => {
  ;
        createUser(data.email, data.password)
            .then(resul => {
                const loggedUser = resul.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL) 
                    .then(() => {
                        // create user entry in the database
                      
                        const userinfo = {
                            name: data.name,
                            email: data.email,
                            role: 'member',
                        }
                        axiosPublic.post('/users', userinfo)
                         .then(res => {
                             if (res.data.insertedId) {
                            console.log('user added to the database');     
                          reset()
                          navigate('/');
                           Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "User create successfully",
                           showConfirmButton: false,
                           timer: 1500
                           });
                           
                           }
                           })
                       
                    })
                .catch(error=> console.log(error))
        })
    };
   

return (
   <>
<Helmet>
    <title>Strong Fitness| Registration</title>
  </Helmet>
 
    <div className=" border flex-col p-4  gap-4 lg:flex-row-reverse">
     
     <div className="">
 <h1 className="text-5xl font-bold text-center my-6">Sign up now!</h1>
 
    </div>
 <div className=" shadow-2xl bg-base-100 border rounded-3xl lg:w-6/12 md:w-8/12 mx-auto ">
 <form onSubmit={handleSubmit(onSubmit)} className=" p-5 w-10/12 mx-auto  mt-4">
     <div className="">
         <label className="label">
             <span className="label-text">Name</span>
         </label>
         <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="rounded-lg my-2 w-full" />
         {errors.name && <span className="text-red-600">Name is required</span>}
     </div>
     <div className="">
         <label className="label">
             <span className="label-text">Photo URL</span>
         </label>
         <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="rounded-lg my-2 w-full" />
         {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
     </div>
     <div className="">
         <label className="label">
             <span className="label-text">Email</span>
         </label>
         <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="rounded-lg my-2 w-full" />
         {errors.email && <span className="text-red-600">Email is required</span>}
     </div>
     <div className="">
         <label className="label">
             <span className="label-text">Password</span>
         </label>
  <input type="password"  {...register("password", {
             required: true,
             minLength: 6,
             maxLength: 20,
             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
         })} placeholder="password" className="w-full rounded-lg my-2" />
         {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
         {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
         {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
         {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
         <label className="label">
             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
         </label>
     </div>
     <div className=" mt-6 text-center">
         <button type="submit" className="bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 duration-500 font-bold w-full">Registration</button>
     </div>
 </form>
    <p className="text-center font-semibold text-xl mb-3"><small >Already have an account <Link to="/login">-Login</Link></small></p>
  <div className="my-4"><SocialLogin></SocialLogin></div>
 </div>
   </div>
    
</>
  );
};

export default Registration;

