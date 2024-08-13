import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion (optional)
import principalImg from '../assets/images/Principal.jpg'

const PrincipalMsgAbout = () => {
  const principalmsgaboutText = (
    <div className="principalmsgprincipalmsgabout-text flex flex-col gap-4">
      <div className="flex flex-col gap-5 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Principal's Message</h2>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col md:flex-row gap-10 justify-center ml-20 ">
        <div className="image-msg-about">
          <img
            className="rounded-md min-w-44" // Added rounded corners for better styling
            src={principalImg}
            alt="principal of PDEA"
          />
        </div>
        <div className="content-img-msg-about flex flex-col font-bold text-blue-900 " >
          <span>Dr. R. V. Patil</span>
          <span>Principal</span>
          <span>PDEA's College of Engineering, Manjari (Bk.)</span>
        </div>
      </div>
      <span className="text-blue-900">It is my great pleasure to welcome you to the innovative world of engineering. PDEA's College of Engineering, Manjari (Bk) in Pune, is a leading engineering education center located in the heart of Pune City. At PDEA COEM, we believe that imparting knowledge to students goes beyond teaching engineering lessons; it involves providing them with the skills, professionalism, vision, and wisdom necessary for their overall development.</span>
      <span className="text-blue-900">Our team consists of skilled, experienced, and dedicated professors, administrative staff, and non-teaching staff who are committed to achieving excellence in every activity of the institute. We maintain transparency in our operations and boast excellent infrastructure, well-equipped engineering departments, libraries, a training and placement cell, sports facilities, well-lit classrooms, seminar rooms, and an auditorium. Here, students are exposed to thought-provoking and inspiring seminars and guest lectures, in addition to regular lectures, cultural activities, and sports events, making learning an engaging and enriching experience.</span>
      <span className="text-blue-900">In the global context, professional education in India plays a pivotal role, as Indian professionals contribute significantly to the world's knowledge pool. Therefore, our professional training is characterized by a judicious blend of the values of our ancient wisdom and the rapidly evolving concepts in technology and management. We are committed to empowering today's youth with the knowledge and leadership qualities that will enable them not only to be self-sufficient but also to become world leaders in various fields.</span>
    
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg" // Added styles
    >
      {principalmsgaboutText}
    </motion.div>
  );
};

export default PrincipalMsgAbout;
