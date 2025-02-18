
import { Link } from "react-router-dom";
import useClasses from "../../hooks/useClasses";



const AllClasses = () => {
  const [dataClass] = useClasses()
  


 
  
  return (
    <div className=" bg-[#242322] md:-mt-20">
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 md:gap-7 gap-3text-center w-10/12 py-8 mx-auto">
        {dataClass.map((classItem) => (
        <div
            key={classItem._id}
            className=" shadow-white border-2 border-lime-300   shadow-inner p-3 rounded-xl md:mt-16 hover:shadow-lg flex justify-betweentransition w-[600px]  gap-5"
          >
            <div className="w-[300px] ">
               <img src={classItem.image} className="rounded-lg h-full  cursor-pointer hover:scale-x-105 duration-500 object-cover" alt="" />
           </div>
          <div className="text-left w-[300px] text-white mt-4 space-y-3">           
              <h3 className="text-xl">{classItem.name}</h3>         
              <h3 className="text-[14px] ">{classItem.details}</h3> 
              <h3 className="text-[20px] ">Category: {classItem.category}</h3> 
              <h3 className="underline cursor-pointer"> {classItem.trainerName}</h3>
              
            </div> 
        </div>
    ))}
        
      </div>
      
</div>
  );
};

export default AllClasses;
