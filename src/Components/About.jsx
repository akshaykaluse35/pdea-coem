import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)

const About = () => {
  const aboutText = (
    <div className="about-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">About PDEA</h2>
        </div>
      <span className=' text-blue-900'>Pune District Education Association (PDEA) is a renowned educational society founded by a dedicated team of social reformers led by the former Chief Officer of Z. P. Pune, the late Shri Baburaoji Gholap. With over 67 years of experience in the field of education, PDEA celebrated the birth centenary year of our founder secretary in 2003-04. We are proud to mention that PDEA received the prestigious "Best Educational Institute Award" from the Government of Maharashtra for remarkable achievements in education and social work on September 5, 2000.</span>
      <span className=' text-blue-900'>The association operates various branches, including 11 Pre-Primary Schools (Marathi and English Medium), 12 Primary Schools, 61 Secondary Schools, 31 Higher Secondary Schools, 25 Vocational Courses, 8 Senior Colleges (Multi-Facility), 1 Ayurved College and Research Center, 2 Pharmacy Colleges, 3 Management Institutes, 1 Polytechnic Institute, 1 Engineering College, 1 Law College, and 1 D.Ed College.</span>
      <span className=' text-blue-900'>Since its establishment in 1941, PDEA has made significant strides. In 1983, Prof. Ramkrishna More, a young and dynamic leader (former Minister of Education, Sports and Youth Welfare and Culture, Government of Maharashtra), assumed the role of President. During his tenure, Prof. More accelerated PDEA's activities with the aim of contributing to intellectual and social transformation in various areas such as education, social, and cultural fields. Under his leadership, all PDEA institutes have made remarkable progress.</span>
      <span className=' text-blue-900'>In 2006, the visionary and dynamic leader, Honorable Ajit Pawar (former Deputy Chief Minister, Government of Maharashtra), took over as President of PDEA.</span>
      <span className=' text-blue-900'>He inspires the inner and spiritual strength of the PDEA family, including life members, employees, and students. All branches of PDEA are now advancing at a global pace towards their goals.</span>
    </div>
  );


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {aboutText}
    </motion.div>
  );
};

export default About;
