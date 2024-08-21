import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)
import PresidentImg from '../assets/images/Presedent.jpg'

const PresidentMsgAbout = () => {
  const presidentmsgaboutText = (
    <div className="presidentmsgpresidentmsgabout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">President's Message</h2>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col md:flex-row gap-10 justify-center ml-20 ">
        <div className="image-msg-about">
          <img
            className="rounded-md min-w-42" // Added rounded corners for better styling
            src={PresidentImg}
            alt="President of PDEA"
          />
        </div>
        <div className="content-img-msg-about flex flex-col font-bold text-blue-900 " >
          <span>Shri. Ajit Pawar</span>
          <span>Hon. President</span>
          <span>Pune District Education Association, Pune</span>
        </div>
      </div>
      <span className="text-blue-900">
        Our vision is built on hard work, open communication, a strong emphasis on teamwork, and a high level of responsibility. This visionary culture encourages our students to not only face contemporary challenges but also embrace their individual responsibilities towards society and our nation.
      </span>
      <span className="text-blue-900">
        Learning should be grounded in practical experience rather than just theoretical knowledge. Unless learning solutions are connected to real-life situations and inspire learners to acquire and apply knowledge, the entire process remains superficial. Any esteemed engineering institution aims to maximize the productivity of future global leaders. Our institution has established specific objectives and planned activities to achieve excellence in all areas of technical education.
      </span>
      <span className="text-blue-900">
        The contribution of our institution in producing personally mature, professionally skilled, and service-oriented graduates is truly noteworthy. We firmly believe in academic excellence and uphold high standards in teaching and discipline. These three elements are the foundation of our operations.
      </span>
      <div className="flex flex-col text-center gap-2 my-5">
        <h4 className="text-lg font-bold">SUCCESS IS A JOURNEY NOT A DESTINATION</h4>
        <span>Ensure that you are moving in the right direction, rather than merely at the right speed.</span>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {presidentmsgaboutText}
    </motion.div>
  );
};

export default PresidentMsgAbout;
