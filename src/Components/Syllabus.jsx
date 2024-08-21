import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLink } from 'react-icons/ai'; // Import AiOutlineLink icon

const Syllabus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-4 py-2 bg-gray-100  rounded-lg"  // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800  py-2">Syllabus</h1>
      <div className='flex align-top '>
      <a
        href="http://www.unipune.ac.in/university_files/syllabi.htm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        Go to Syllabus Page
      </a>
      <AiOutlineLink className="ml-2 mt-1 text-blue-500 hover:text-blue-700" />
      </div>
    </motion.div>
  );
};

export default Syllabus;
