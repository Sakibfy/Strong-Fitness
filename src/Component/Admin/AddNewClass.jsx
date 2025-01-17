import { useForm } from "react-hook-form";

import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewClass = () => {

const { register, handleSubmit , reset} = useForm()
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data)
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }    
    
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const classList = {
        name: data.name,
        image: res.data.data.display_url,
        category: data.category,
        details: data.details,
        schedule: data.schedule,
        trainerName: data.trainerName,
        duration: data.duration
        
      }
      const classRes = await axiosSecure.post('/allclasses', classList);
      console.log(classRes.data);
      if (classRes.data.insertedId) {
        // show the seccess meg
        reset()
        Swal.fire({
         position: "top-end",
         icon: "success",
         title: `${data.name}Class added .`,
         showConfirmButton: false,
         timer: 1500
       });
      }
      
    }
    console.log('with img url',res.data);
  }



  return (
    <div className="">
      <h2 className="text-center font-bold md:text-5xl text-2xl text-blue-500">Add Class</h2>
     <div className="mt-9 ">
      <div className="w-10/12 mx-auto bg-slate-300 p-5 rounded-md">
         <form onSubmit={handleSubmit(onSubmit)}>
          
         
    <label className="form-control w-full my-6  max-w-xs">
    <div className="label">
    <span className="label-text font-semibold text-[17px]">Class name*</span>
    
     </div>
        <input {...register("name" ,{required:true}) }
          type="text" placeholder="Recipe Name" className="input my-3 input-bordered w-full " />
          </label>
          
          <h2 className="my-2 text-xl">Additional Info Fields</h2>
       <div className="md:flex w-full gap-3">
           <label className="form-control w-full max-w-xl ">
        <div className="label">
         <span className="label-text font-semibold text-[17px] ">Schedule/Time</span>
    
         </div>
        <input {...register("schedule",{required:true})}
          type="text" placeholder="Monday, Wednesday, Friday - 6:00 PM to 7:00 PM" className="input input-bordered w-full  max-w-xl" />
            </label>
            
          <label className="form-control w-full  max-w-xl">
         <div className="label">
         <span className="label-text font-semibold text-[17px] ">Trainer Name</span>
    
          </div>
        <input {...register("trainerName",{required:true})}
          type="text" placeholder="session" className="input input-bordered w-full max-w-xl" />
             </label>
         
            </div>
          
       <div className="md:flex w-full gap-3 mt-3">
           <label className="form-control w-full max-w-xl ">
        <div className="label">
         <span className="label-text font-semibold text-[17px] ">Duration</span>
    
         </div>
        <input {...register("duration",{required:true})}
          type="text" placeholder="class time duration" className="input input-bordered w-full  max-w-xl" />
            </label>
            
          <label className="form-control w-full  max-w-xl">
         <div className="label">
         <span className="label-text font-semibold text-[17px] ">Category</span>
    
          </div>
        <input {...register("category",{required:true})}
          type="text" placeholder="category" className="input input-bordered w-full max-w-xl" />
             </label>
         
            </div>
      
          
     <label className="form-control">
  <div className="label mt-4 ">
    <span className="label-text font-semibold text-[17px] mt-y">Class Details*</span>
   </div>
     <textarea
     {...register("details",{required:true})}
           className="textarea textarea-bordered w-full h-24" placeholder="Class etails*"></textarea>
  <div className="label">
    
  <div>
                <input
                  {...register("image",{required:true})}
                  type="file" className="my-4 file-input file-input-bordered w-full max-w-xs" />
  </div>
  </div>
</label>
   <div className="flex justify-end -mt-16"> <button className="bg-blue-600 p-3 hover:bg-blue-500 duration-500 rounded-md btn btn-ghost font-bold text-white">Add Class</button></div>
    </form>
   </div>
    </div>
    </div>
  );
};

export default AddNewClass;