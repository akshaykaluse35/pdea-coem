import React from 'react';

const AcademicCard = ({ image, name, position, message }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-2/5">
          <img className="w-full h-auto md:h-full object-cover" src={image} alt="Profile" />
        </div>
        <div className="p-6 w-full md:w-3/5 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{position}</p>
          <p className="mt-2 text-gray-500">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AcademicCard;
