import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProfile from '../../pages/EditProfile';

const ManageFacultyContent = () => {
  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFaculty(response.data);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, []);

  const handleEdit = (facultyMember) => {
    setSelectedFaculty(facultyMember);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/faculty/${id}`);
      setFaculty(faculty.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error deleting faculty member:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Faculty</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Department</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((member) => (
            <tr key={member._id}>
              <td className="py-2">{member.username}</td>
              <td className="py-2">{member.email}</td>
              <td className="py-2">{member.profile?.department}</td>
              <td className="py-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="text-red-500 hover:underline ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedFaculty && (
        <EditProfile userId={selectedFaculty._id} />
      )}
    </div>
  );
};

export default ManageFacultyContent;
