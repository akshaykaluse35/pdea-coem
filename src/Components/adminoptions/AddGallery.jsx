import React, { useState } from "react";
import axios from "axios";

const departments = [
  "First Year Engineering",
  "Computer Engineering",
  "Electronics and Telecommunication Engineering",
  "Information Technology",
  "Instrumentation and Control",
  "M. B. A",
  "Mechanical Engineering",
  "Library",
];

const academicYears = ["2020-21", "2021-22", "2022-23"];

const AddGallery = () => {
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [department, setDepartment] = useState("");

  const [year, setYear] = useState(""); // Add state for year
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTags([...tags, value]);
      setDepartment(value);
    } else {
      setTags(tags.filter((tag) => tag !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/gallery",
        { image, department: department, year }, // Include year in the payload
        { withCredentials: true }
      );
      setMessageType("success");
      setMessage("Gallery Photo added successfully");

      setImage("");
      setTags([]);
      setYear(""); // Reset year
    } catch (error) {
      console.error("Error adding gallery photo:", error);
      setMessageType("error");
      setMessage("Failed to add gallery photo");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-text-color">
        Add Gallery
      </h2>
      {message && (
        <p
          className={`mb-4 text-center ${
            messageType === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          {departments.map((department, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                value={department}
                checked={tags.includes(department)}
                onChange={handleTagChange}
                className="form-checkbox h-4 w-4 text-orange-400 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{department}</span>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Academic Year
          </label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          >
            <option value="" disabled>
              Select Year
            </option>
            {academicYears.map((yearOption, index) => (
              <option key={index} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
        >
          Add Gallery
        </button>
      </form>
    </div>
  );
};

export default AddGallery;
