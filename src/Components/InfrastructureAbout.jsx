import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const InfrastructureAbout = () => {
  const InfrastructureAboutText = (
    <div className="InfrastructureAbout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">InfrastructureAbout PDEA</h2>
        </div>
      <span className="text-blue-900">Pune District Education Association's College of Engineering, Manjari (Bk.), Pune, is situated on Hadapsar Manjari Road, Manjari (Bk.), Pune.</span>
      <span className="text-blue-900">The campus spans 5 acres and features 3 buildings with a total built-up area of 14,007 Sq.m.</span>
      <span className="text-blue-900">These buildings are functionally efficient, aesthetically pleasing, and meet the built-up space requirements as per AICTE norms.

</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
    {InfrastructureAboutText}
    </motion.div>
  );
};

export default InfrastructureAbout;
