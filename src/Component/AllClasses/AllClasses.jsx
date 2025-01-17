
import { useNavigate } from "react-router-dom";
import useClasses from "../../hooks/useClasses";



const AllClasses = () => {
  const [dataClass] = useClasses()
  const navigate = useNavigate()
  console.log(dataClass);
  
  return (
    <div className=" bg-[#242322] my-4">
      <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center w-10/12 py-8 mx-auto">
        {dataClass.map((classItem) => (
        <div
            key={classItem._id}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-slate-50"
        >
            <h3 className="text-3xl text-lime-500 font-bold">{classItem.title}</h3>
            <h3 className="text-lg font-bold">{classItem.additionalDetails}</h3>
            <p className="text-gray-600">{classItem.description}</p>
            <div className="mt-4 flex gap-8 justify-center">
                {classItem.trainers.map((trainer, indx) => (
                  <div key={indx}>
                     <img
                        key={trainer._id}
                        src={trainer.photo}
                        alt={trainer.name}
                        className="w-24 h-24 rounded cursor-pointer"
                        onClick={() => navigate(`/trainers/${trainer._id}`)}
                    />
                    <h4>{ trainer.name}</h4>
                   </div>
                  
                ))}
            </div>
        </div>
    ))}
    </div>
</div>
  );
};

export default AllClasses;
