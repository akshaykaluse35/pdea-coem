import React from 'react';
import { motion } from 'framer-motion';
function DisciplineAndConduct() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={"px-4 py-6 bg-gray-100 rounded-lg flex flex-col"}
    >
      <h2 className={"text-xl font-bold mb-4"}>Discipline & Conduct</h2>
      <p className="mt-4 text-gray-700">
        PDEA's College of Engineering Manjari is committed to maintaining a high
        standard of discipline and conduct among its students. The following rules
        and regulations are expected to be followed by all students:
      </p>
      <motion.ol
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={"list-decimal pl-4 mt-4 text-gray-700"}>
        <li>
        It is essential for students to attend classes from the opening day to the last day of each term during the academic year.
        </li>
        <li>
        Students must maintain regular attendance for both theory and practical classes. If attendance falls below 75% for either, the term will not be granted.
        </li>
        <li>
        Students should complete all term work, including journals, drawing sheets, workshop assignments, and any other tasks as per the schedule.
        </li>
        <li>
        Students must be punctual for all theory and practical classes.
        </li>
        <li>
        Students must wear their college ID card every day and attend the college in full uniform on specified days.
        </li>
        <li>
        Strict disciplinary action will be taken against students who fail to attend tests, practicals, tutorials, or theory classes.
        </li>
        <li>
        Students and parents should note that if a student fails to complete term work regularly and to the satisfaction of the Head of the Department, the term will not be granted, and the student will not be allowed to appear for the University examination.
        </li>
        <li>
        Students are responsible to the authorities of the Institute not only for their conduct within the premises but also for their general behavior outside.
        </li>
        <li>
        Any reported or observed objectionable conduct within or outside the Institute premises will result in strict disciplinary action.
        </li>
        <li>
        Students should not participate in any political or antisocial activities.
        </li>
        <li>
        Students should help maintain the cleanliness and tidiness of the Institute's buildings and campus.
        </li>
        {/* Add additional rules and regulations here */}
      </motion.ol>
    </motion.div>
  );
}

export default DisciplineAndConduct;
