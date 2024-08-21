import React from 'react';
import { motion } from 'framer-motion';
import { accreditationStatus } from '../data/academics';

const AccreditationStatus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-2 px-4 py-6 rounded-lg shadow-md"
      style={{
        backgroundColor: 'var(--background-color)', // Use the defined color variable
        color: 'var(--text-color)', // Use the defined color variable for text
      }}
    >
      <h1 className="text-2xl font-medium">Accreditation Status</h1>
      <ul className="list-disc pl-4">
        {accreditationStatus.map((status, index) => (
          <li key={index} className="text-base leading-relaxed">
            {status}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AccreditationStatus;
