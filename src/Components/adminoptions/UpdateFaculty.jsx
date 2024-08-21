import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacultySelector from '../FacultySelector';

const departments = [
  "First Year Engineering",
  "Computer Engineering",
  "Electronics and Telecommunication Engineering",
  "Information Technology",
  "Instrumentation and Control",
  "M. B. A",
  "Mechanical Engineering"
];

const UpdateFaculty = ({ facultyId }) => {
  const [faculty, setFaculty] = useState(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [expertArea, setExpertArea] = useState('');
  const [subjectsTaught, setSubjectsTaught] = useState('');
  const [journalPublications, setJournalPublications] = useState('');
  const [researchProjects, setResearchProjects] = useState('');
  const [memberships, setMemberships] = useState('');
  const [academicProfile, setAcademicProfile] = useState('');
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (facultyId) {
      const fetchFaculty = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/faculty/${facultyId}`);
          const data = response.data;
          setFaculty(data);
          setName(data.name);
          setPosition(data.position);
          setImage(data.image);
          setEmail(data.email);
          setQualification(data.qualification);
          setExperience(data.experience);
          setExpertArea(data.expertArea);
          setSubjectsTaught(data.subjectsTaught);
          setJournalPublications(data.journalPublications);
          setResearchProjects(data.researchProjects);
          setMemberships(data.memberships);
          setAcademicProfile(data.academicProfile);
          setTags(data.tags || []);
        } catch (error) {
          console.error('Error fetching faculty details:', error);
          setMessageType('error');
          setMessage('Failed to fetch faculty details');
        }
      };
      fetchFaculty();
    }
  }, [facultyId]);

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setTags((prevTags) => 
      checked ? [...prevTags, value] : prevTags.filter(tag => tag !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/faculty/${facultyId}`, { 
        name, position, image, email, qualification, experience, expertArea, 
        subjectsTaught, journalPublications, researchProjects, memberships, academicProfile, tags 
      });
      setMessageType('success');
      setMessage('Faculty member updated successfully');
    } catch (error) {
      console.error('Error updating faculty:', error);
      setMessageType('error');
      setMessage('Failed to update faculty member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-text-color">
        Update Faculty Member
      </h2>
      {message && (
        <p className={`mb-4 text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
      <FacultySelector />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image Link</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience in Years</label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expert Area</label>
          <input
            type="text"
            value={expertArea}
            onChange={(e) => setExpertArea(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subjects Taught</label>
          <input
            type="text"
            value={subjectsTaught}
            onChange={(e) => setSubjectsTaught(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Journal Publications</label>
          <input
            type="text"
            value={journalPublications}
            onChange={(e) => setJournalPublications(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Research Projects Handled</label>
          <input
            type="text"
            value={researchProjects}
            onChange={(e) => setResearchProjects(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Memberships</label>
          <input
            type="text"
            value={memberships}
            onChange={(e) => setMemberships(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Academic Profile</label>
          <textarea
            value={academicProfile}
            onChange={(e) => setAcademicProfile(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
          <div className="space-y-2">
            {departments.map((department) => (
              <div key={department} className="flex items-center">
                <input
                  type="checkbox"
                  id={department}
                  value={department}
                  checked={tags.includes(department)}
                  onChange={handleTagChange}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor={department} className="ml-2 text-sm text-gray-600">
                  {department}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Faculty'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFaculty;
