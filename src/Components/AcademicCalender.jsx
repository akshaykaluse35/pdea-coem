import React from 'react';
import { motion } from 'framer-motion';
import { academicCalendars } from '../data/academics';

const AcademicCalendars = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="list-none space-y-2 px-4 py-6 rounded-lg shadow-md bg-gray-100" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800">Academic Calendars</h1>
      <ul>
        {academicCalendars.map((calendar, index) => (
          <li key={index} className="text-base leading-relaxed hover:text-blue-500">
            <a href={calendar.url} download>{calendar.year}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AcademicCalendars;
