import React from 'react';
import { motion } from 'framer-motion';

const StudentDevelopmentWelfare = () => {
  const services = [
    { name: 'Counseling', url: '/path/to/counseling' },
    { name: 'Career Services', url: '/path/to/career-services' },
    // Add more services here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-2 px-4 py-6 rounded-lg shadow-md bg-gray-100  "
      style={{
        backgroundColor: 'var(--background-color)', // Use the defined color variable
        color: 'var(--text-color)', // Use the defined color variable for text
      }}
    >
      <h1 className="text-2xl font-medium">Student Development & Welfare</h1>
      <ul className="list-none pl-4">
        {services.map((service, index) => (
          <li key={index} className="text-base leading-relaxed hover:text-blue-500">
            <a href={service.url}>{service.name}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default StudentDevelopmentWelfare;
