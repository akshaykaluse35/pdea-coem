import React from 'react';

import IQACCommitte from './IQACCommitte';
import AQAR from './AQAR';
import IQACmatReports from './IQACmatReports';
import NAACSSRDocument from './NAACSSRDocument';
import IQACNotices from './IQACNotices';
import OtherDocument from './OtherDocument';


import { motion } from 'framer-motion';

const AboutUsContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
        case 'IQAC COMMITTEE':
            // Replace with content for Vision & Mission section
            return (
                <IQACCommitte />
            );
        case 'AQAR Reports':
            // Replace with content for Vision & Mission section
            return (
                <AQAR />
            );
        case 'IQAC Minutes & Action Taken Reports':
            // Replace with content for Vision & Mission section
            return (
                <IQACmatReports />
            );
        case 'NAAC SSR Document':
            // Replace with content for Vision & Mission section
            return (
                <NAACSSRDocument />
            );
      // Add more case statements for other sections as needed
      default:
        return <IQACCommitte />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="content"
    >
      {renderSection()}
    </motion.div>
  );
};

export default AboutUsContent;
