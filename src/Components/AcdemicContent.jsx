import React from 'react';
import { motion } from 'framer-motion';
import AcademicsHome from './AcademicsHome';
import Syllabus from './Syllabus';
import AcademicCalendars from './AcademicCalender';
import Results from './Result';
import OldQuestionPapers from './OldQuestionPaper';
import EligibilityNumbers from './EligibilityNumber';
import StudentDevelopmentWelfare from './StudentDevelopmentWelfare';
import AccreditationStatus from './AccreditationStatus';

const AcademicContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <AcademicsHome />;
      case 'Syllabus':
        return <Syllabus />;
      case 'Academic Calendars':
        return <AcademicCalendars />;
      case 'Results':
        return <Results />;
      case 'Old Question Papers':
        return <OldQuestionPapers />;
      case 'Eligibility Numbers':
        return <EligibilityNumbers />;
      case 'Student Development & Welfare':
        return <StudentDevelopmentWelfare />;
      case 'Accreditation Status':
        return <AccreditationStatus />;
      default:
        return <AcademicsHome />;
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

export default AcademicContent;
