import React, { useState, useEffect } from 'react';
import axios from 'axios';

const departments = [
  "First Year Engineering",
  "Computer Engineering",
  "Electronics and Telecommunication Engineering",
  "Information Technology",
  "Instrumentation and Control",
  "M. B. A",
  "Mechanical Engineering"
];

const EditProfile = ({ userId }) => {
  const [image, setImage] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}/profile`);
        const { image, position, department } = response.data;
        setImage(image);
        setPosition(position);
        setDepartment(department);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}/profile`, { image, position, department });
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-orange-500 mb-4">Edit Profile</h2>
      {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">Profile Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-gray-700">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
