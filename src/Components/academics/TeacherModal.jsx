import React from 'react';
import { motion } from 'framer-motion';

const TeacherModal = ({ teacher, onClose }) => {
  if (!teacher) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Resume of {teacher.name}</h2>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">Name</td>
              <td className="border p-2">{teacher.name}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Designation</td>
              <td className="border p-2">{teacher.position}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Qualification</td>
              <td className="border p-2">{teacher.qualification || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Email ID</td>
              <td className="border p-2">{teacher.email}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Experience in Years</td>
              <td className="border p-2">{teacher.experience || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Expert Area</td>
              <td className="border p-2">{teacher.expertArea || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Subjects Taught</td>
              <td className="border p-2">{teacher.subjectsTaught || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Journal Publications</td>
              <td className="border p-2">{teacher.journalPublications || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Research Projects Handled</td>
              <td className="border p-2">{teacher.researchProjects || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Memberships</td>
              <td className="border p-2">{teacher.memberships || 'N/A'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">Academic Profile</td>
              <td className="border p-2">
                <a
                  href={teacher.academicProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default TeacherModal;
