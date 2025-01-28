
import  { useState } from "react";
import Select from "react-select";

import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AddNewSlot = () => {
  const {user} = useAuth()
  const [slotName, setSlotName] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
const axiosPublic = useAxiosPublic()
  const days = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
  ];

    

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newSlots = {
    days: selectedDays.map((d) => d.value), 
    name: slotName,
    time: slotTime,
  };

    
  try {
    const res = await axiosPublic.patch(`/alltrainer/${user.email}`, newSlots);
console.log(res.data);
   return res.data
   

  } catch (error) {
    console.error("Error adding slot:", error); 
    toast.error("Failed to add slot. Please try again."); 
  }
};

  return (
    <div className="p-6 bg-gray-50 min-h-screen rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Add New Slot</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Trainer Info</h2>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Select Days</label>
          <Select
            options={days}
            isMulti
            value={selectedDays}
            onChange={setSelectedDays}
            className="mt-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Slot Name</label>
          <input
            type="text"
            value={slotName}
            onChange={(e) => setSlotName(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter slot name (e.g., Morning Slot)"
          />
        </div>
        <div>
          <label className="block text-gray-700">Slot Time</label>
          <input
            type="text"
            value={slotTime}
            onChange={(e) => setSlotTime(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter slot time (e.g., 1 hour)"
          />
        </div>
        
        <button
          type="submit"
          className="bg-lime-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-lime-700 transition"
        >
          Add Slot
        </button>
      </form>
    </div>
  );
};


export default AddNewSlot;