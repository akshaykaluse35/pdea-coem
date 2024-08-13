import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateFaculty from './adminoptions/UpdateFaculty';

const FacultySelector = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFacultyId, setSelectedFacultyId] = useState(null);

  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFacultyList(response.data);
      } catch (error) {
        console.error('Error fetching faculty list:', error);
      }
    };

    fetchFacultyList();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-text-color">Select Faculty Member</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Choose Faculty Member</label>
        <select
          value={selectedFacultyId || ''}
          onChange={(e) => setSelectedFacultyId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
        >
          <option value="">Select a faculty member</option>
          {facultyList.map((faculty) => (
            <option key={faculty._id} value={faculty._id}>
              {faculty.name}
            </option>
          ))}
        </select>
      </div>
      {selectedFacultyId && <UpdateFaculty facultyId={selectedFacultyId} />}
    </div>
  );
};

export default FacultySelector;
