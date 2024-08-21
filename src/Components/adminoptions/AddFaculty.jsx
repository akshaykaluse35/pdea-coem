import React, { useState } from "react";
import axios from "axios";

const AddFaculty = ({ facultyToUpdate }) => {
  const [name, setName] = useState(facultyToUpdate ? facultyToUpdate.name : "");
  const [position, setPosition] = useState(
    facultyToUpdate ? facultyToUpdate.position : ""
  );
  const [image, setImage] = useState(
    facultyToUpdate ? facultyToUpdate.image : ""
  );
  const [email, setEmail] = useState(
    facultyToUpdate ? facultyToUpdate.email : ""
  );
  const [qualification, setQualification] = useState(
    facultyToUpdate ? facultyToUpdate.qualification : ""
  );
  const [experience, setExperience] = useState(
    facultyToUpdate ? facultyToUpdate.experience : ""
  );
  const [expertArea, setExpertArea] = useState(
    facultyToUpdate ? facultyToUpdate.expertArea : ""
  );
  const [subjectsTaught, setSubjectsTaught] = useState(
    facultyToUpdate ? facultyToUpdate.subjectsTaught : ""
  );
  const [journalPublications, setJournalPublications] = useState(
    facultyToUpdate ? facultyToUpdate.journalPublications : ""
  );
  const [researchProjects, setResearchProjects] = useState(
    facultyToUpdate ? facultyToUpdate.researchProjects : ""
  );
  const [memberships, setMemberships] = useState(
    facultyToUpdate ? facultyToUpdate.memberships : ""
  );
  const [academicProfile, setAcademicProfile] = useState(
    facultyToUpdate ? facultyToUpdate.academicProfile : ""
  );
  const [tags, setTags] = useState(
    facultyToUpdate ? facultyToUpdate.tags || [] : []
  );
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setTags((prevTags) =>
      checked ? [...prevTags, value] : prevTags.filter((tag) => tag !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = facultyToUpdate
      ? `http://localhost:5000/api/faculty/${facultyToUpdate._id}`
      : "http://localhost:5000/api/faculty";
    const method = facultyToUpdate ? "put" : "post";

    try {
      await axios({
        method,
        url,
        data: {
          name,
          position,
          image,
          email,
          qualification,
          experience,
          expertArea,
          subjectsTaught,
          journalPublications,
          researchProjects,
          memberships,
          academicProfile,
          tags,
        },
        withCredentials: true,
      });
      setMessageType("success");
      setMessage(
        facultyToUpdate
          ? "Faculty member updated successfully"
          : "Faculty member added successfully"
      );
      // Clear fields or update state as necessary
    } catch (error) {
      console.error("Error adding/updating faculty:", error);
      setMessageType("error");
      setMessage(
        facultyToUpdate
          ? "Failed to update faculty member"
          : "Failed to add faculty member"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-text-color">
        {facultyToUpdate ? "Update Faculty Member" : "Add Faculty Member"}
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
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image Link
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
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Qualification
          </label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience in Years
          </label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expert Area
          </label>
          <input
            type="text"
            value={expertArea}
            onChange={(e) => setExpertArea(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subjects Taught
          </label>
          <input
            type="text"
            value={subjectsTaught}
            onChange={(e) => setSubjectsTaught(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Journal Publications
          </label>
          <input
            type="text"
            value={journalPublications}
            onChange={(e) => setJournalPublications(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Research Projects Handled
          </label>
          <input
            type="text"
            value={researchProjects}
            onChange={(e) => setResearchProjects(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Memberships
          </label>
          <input
            type="text"
            value={memberships}
            onChange={(e) => setMemberships(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Academic Profile
          </label>
          <textarea
            value={academicProfile}
            onChange={(e) => setAcademicProfile(e.target.value)}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              "First Year Engineering",
              "Information Technology",
              "Computer Engineering",
              "Electronics and Telecommunication Engineering",
              "Instrumentation and Control",
              "Mechanical Engineering",
              "Library",
              "M. B. A",
            ].map((tag) => (
              <label key={tag} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={tag}
                  checked={tags.includes(tag)}
                  onChange={handleTagChange}
                  className="form-checkbox h-4 w-4 text-orange-600"
                />
                <span className="ml-2 text-sm text-gray-700">{tag}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow-sm focus:outline-none ${
            loading ? "bg-gray-500" : "bg-orange-600 hover:bg-orange-700"
          }`}
        >
          {loading
            ? "Processing..."
            : facultyToUpdate
            ? "Update Faculty"
            : "Add Faculty"}
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
