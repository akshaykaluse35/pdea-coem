import React from 'react';
import TeacherCard from './TeacherCard';

const TeacherSection = ({ teachers }) => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-4xl font-bold">Faculty Members</h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teachers.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} /> // Ensure a unique key
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
