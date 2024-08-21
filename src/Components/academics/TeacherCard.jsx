import React, { useState } from 'react';
import TeacherModal from './TeacherModal';

const TeacherCard = ({ teacher }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
      <p className="text-gray-600">{teacher.position}</p>
      <p className="text-gray-500 text-sm">{teacher.email}</p>
      <button
        onClick={handleOpenModal}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Detailed Info
      </button>

      {isModalOpen && <TeacherModal teacher={teacher} onClose={handleCloseModal} />}
    </div>
  );
};

export default TeacherCard;
