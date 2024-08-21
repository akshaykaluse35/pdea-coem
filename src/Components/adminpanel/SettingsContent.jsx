import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SettingsContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem('userId'); // Assume userId is stored in local storage
      const token = localStorage.getItem('token'); // Assume token is stored in local storage

      try {
        const response = await axios.get(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOption) {
      setErrorMessage('Please select what to update.');
      return;
    }

    try {
      let updateData = {};

      switch (selectedOption) {
        case 'username':
          updateData = { username };
          break;
        case 'password':
          updateData = { password };
          break;
        case 'email':
          updateData = { email };
          break;
        default:
          return;
      }

      const userId = localStorage.getItem('userId'); // Assume userId is stored in local storage
      const token = localStorage.getItem('token'); // Assume token is stored in local storage

      const response = await axios.put(`/api/users/${userId}/profile`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle success scenario
      setSuccessMessage(`${selectedOption} updated successfully!`);
      setErrorMessage('');
    } catch (error) {
      // Handle error scenario
      console.error(`Error updating ${selectedOption}:`, error);
      setSuccessMessage('');
      setErrorMessage(`Failed to update ${selectedOption}. Please try again.`);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Management</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Select what to update:</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                value="username"
                checked={selectedOption === 'username'}
                onChange={() => setSelectedOption('username')}
              />
              <span className="ml-2">Username</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                className="form-radio"
                value="password"
                checked={selectedOption === 'password'}
                onChange={() => setSelectedOption('password')}
              />
              <span className="ml-2">Password</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                className="form-radio"
                value="email"
                checked={selectedOption === 'email'}
                onChange={() => setSelectedOption('email')}
              />
              <span className="ml-2">Email</span>
            </label>
          </div>
        </div>
        {selectedOption && (
          <div>
            <label htmlFor={selectedOption} className="block text-sm font-medium text-gray-700 capitalize">{selectedOption}</label>
            <input
              type={selectedOption === 'password' ? 'password' : 'text'}
              id={selectedOption}
              value={selectedOption === 'username' ? username : selectedOption === 'password' ? password : email}
              onChange={selectedOption === 'username' ? (e) => setUsername(e.target.value) : selectedOption === 'password' ? (e) => setPassword(e.target.value) : (e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SettingsContent;
