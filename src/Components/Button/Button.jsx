import React from 'react';

const Button = ({ label }) => {
  return (
    <button
      className="bg-white text-blue-800 hover:bg-orange-400 font-bold py-2 px-4 rounded-md shadow-sm transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 border border-orange-400 border-2"
    >
      {label}
    </button>
  );
};

export default Button;
