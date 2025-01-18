
import useClasses from "../../hooks/useClasses";



const AllClasses = () => {
  const [dataClass] = useClasses()
  // const navigate = useNavigate()
  // onClick={() => navigate(`/trainers/${trainer._id}`)}
 
  

  return (
    <div className=" bg-[#242322] my-4">
      <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center w-10/12 py-8 mx-auto">
        {dataClass.map((classItem) => (
        <div
            key={classItem._id}
            className="p-6  shadow-white hover:shadow-lg transition w-[350px]"
          >
            <img src={classItem.image} className="rounded-lg w-[300px] h-[250px] cursor-pointer hover:scale-x-105 duration-500 object-cover" alt="" />
            <div className="text-left text-white mt-4 space-y-2">
              
              <h3 className="text-xl">Name: {classItem.name}</h3>
              <h3 className="">Details: {classItem.details}</h3>
               <h3 className="text-xl ">Tainer: {classItem.trainerName}</h3>           
             <h3 className="text-[20px] ">Category: {classItem.category}</h3>
            <h3 className="text-[18px]">Duration:  {classItem.duration}</h3>
              
            </div>
           
            
           
        </div>
    ))}
    </div>
</div>
  );
};

export default AllClasses;
