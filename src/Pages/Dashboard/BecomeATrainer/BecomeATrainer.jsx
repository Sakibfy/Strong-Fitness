import { Select } from "flowbite-react";
import { useState } from "react";


const BecomeATrainer = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "user@example.com", // Example, should be dynamically set from user data
    age: "",
    profileImage: null,
    skills: [],
    availableDays: [],
    availableTime: "",
    otherInfo: "",
  });

  // Options for React Select
  const dayOptions = [
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
  ];

  // Skills options (checkboxes)
  const skillOptions = ["Yoga", "Personal Training", "Mindfulness", "Cardio"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDayChange = (selectedOptions) => {
    const days = selectedOptions.map((option) => option.value);
    setFormData((prev) => ({ ...prev, availableDays: days }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
  };

  const handleCheckboxChange = (skill) => {
    setFormData((prev) => {
      const updatedSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      status: "Pending",
    };
    console.log("Submitted Data:", payload);
    // Add API call here to save `payload` to the database
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Become a Trainer</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Email */}
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full p-2 border rounded bg-gray-100 mb-4"
        />

        {/* Age */}
        <label className="block mb-2 font-medium">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Profile Image */}
        <label className="block mb-2 font-medium">Profile Image</label>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Skills */}
        <label className="block mb-2 font-medium">Skills</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {skillOptions.map((skill) => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleCheckboxChange(skill)}
                className="mr-2"
              />
              {skill}
            </label>
          ))}
        </div>

        {/* Available Days */}
        <label className="block mb-2 font-medium">Available Days</label>
        <Select
          options={dayOptions}
          isMulti
          onChange={handleDayChange}
          className="mb-4"
        />

        {/* Available Time */}
        <label className="block mb-2 font-medium">Available Time</label>
        <input
          type="text"
          name="availableTime"
          value={formData.availableTime}
          onChange={handleInputChange}
          placeholder="e.g., 10:00 AM - 12:00 PM"
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Other Info */}
        <label className="block mb-2 font-medium">Other Info</label>
        <textarea
          name="otherInfo"
          value={formData.otherInfo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
          rows="3"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default BecomeATrainer;