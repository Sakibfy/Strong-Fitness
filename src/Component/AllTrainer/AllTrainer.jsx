
import useAllTrainer from "../../hooks/useAllTrainer";
import TrainerCard from "./TrainerCard";

const AllTrainer = () => {
  const [trainers] = useAllTrainer();

// console.log(trainers);

  return (
    <div className=" p-12 bg-black">
      <h2 className="md:text-5xl text-4xl font-bold mb-6 text-white text-center">Our Trainers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer._id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;