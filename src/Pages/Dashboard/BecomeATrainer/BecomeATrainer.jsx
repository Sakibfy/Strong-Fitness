import { useState } from "react";
import Select from "react-select";
import { imageUpload } from "../../../api/utils";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const BecomeATrainer = () => {
const axiosSecure = useAxiosSecure();
const {user} = useAuth() // Replace with actual user context
 const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: user.email,
    age: "",
    profileImage: null,
    skills: [],
    availableDays: [],
    availableTime: "",
    otherInfo: "",
  });

  // console.log(formData);
  
  const [status, setStatus] = useState("pending");

  const skillsOptions = [
    { label: "Yoga", value: "Yoga" },
    { label: "Cardio", value: "Cardio" },
    { label: "Strength Training", value: "Strength Training" },
    { label: "Zumba", value: "Zumba" },
  ];

  const daysOptions = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleSelectChange = (selectedOptions, field) => {
    setFormData({ ...formData, [field]: selectedOptions.map((option) => option.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.age || !formData.availableTime) {
      toast.error("Please fill out all required fields.");
      return;
    }

    let photoURL = "";
    if (formData.profileImage) {
      photoURL = await imageUpload(formData.profileImage);
    }

    const submissionData = {
      ...formData,
      profileImage: photoURL,
      status,
    };

    try {
      const response = await axiosSecure.post("/becomeatrainer", submissionData);
      console.log(response.data);
      if (response.data) {
        toast.success("Trainer application submitted successfully!");
        navigate('/')
        setFormData({
          fullName: "",
          email: user.email,
          age: "",
          profileImage: null,
          skills: [],
          availableDays: [],
          availableTime: "",
          otherInfo: "",
        });
        document.getElementById("image").value = ""; // Reset file input
        setStatus("pending");
      } else {
        toast.error("Failed to submit the application.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
 

  return (
    <div className="max-w-2xl mx-auto p-4 m-5 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Be a Trainer</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Enter your full name"
          required
        />

        {/* Email (Read-only) */}
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-200"
        />

        {/* Age */}
        <label className="block mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Enter your age"
          required
        />

        {/* Profile Image */}
        <label className="block mb-2">Profile Image</label>
        <input
          required
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />

        {/* Skills */}
        <label className="block mb-2">Skills</label>
        <Select
          isMulti
          options={skillsOptions}
          value={skillsOptions.filter((option) =>
            formData.skills.includes(option.value)
          )}
          onChange={(selected) => handleSelectChange(selected, "skills")}
          className="mb-4"
        />

        {/* Available Days */}
        <label className="block mb-2">Available Days</label>
        <Select
          isMulti
          options={daysOptions}
          value={daysOptions.filter((option) =>
            formData.availableDays.includes(option.value)
          )}
          onChange={(selected) => handleSelectChange(selected, "availableDays")}
          className="mb-4"
        />

        {/* Available Time */}
        <label className="block mb-2">Available Time</label>
        <input
          type="time"
          name="availableTime"
          value={formData.availableTime}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {/* Other Info */}
        <label className="block mb-2">Other Info</label>
        <textarea
          name="otherInfo"
          value={formData.otherInfo}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Enter any additional information"
        ></textarea>

        {/* Apply Button */}
        <button
          type="submit"
          className="w-full bg-lime-600 text-white py-2 rounded hover:bg-lime-700"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default BecomeATrainer;
