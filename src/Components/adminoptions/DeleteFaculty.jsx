import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteFaculty = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFacultyList(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
        setMessageType('error');
        setMessage('Failed to fetch faculty members');
      }
    };

    fetchFaculty();
  }, []);

  const handleDelete = async () => {
    if (!selectedFaculty) {
      setMessageType('error');
      setMessage('Please select a faculty member');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/faculty/${selectedFaculty}`);
      setMessageType('success');
      setMessage('Faculty member deleted successfully');
      setFacultyList(facultyList.filter(faculty => faculty._id !== selectedFaculty));
      setSelectedFaculty('');
    } catch (error) {
      console.error('Error deleting faculty:', error);
      setMessageType('error');
      setMessage('Failed to delete faculty member');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Delete Faculty Member</h2>
      {message && (
        <p className={`mb-4 text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Faculty</label>
        <select
          value={selectedFaculty}
          onChange={(e) => setSelectedFaculty(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Faculty</option>
          {facultyList.map(faculty => (
            <option key={faculty._id} value={faculty._id}>
              {faculty.name} ({faculty.email})
            </option>
          ))}
        </select>
        <button
          onClick={handleDelete}
          className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700"
        >
          Delete Faculty
        </button>
      </div>
    </div>
  );
};

export default DeleteFaculty;
