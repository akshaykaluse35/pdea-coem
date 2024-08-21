import React from 'react'
import { motion } from 'framer-motion'
import {placementofficer} from '../data/placement'

function TandPHome() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 px-5" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800  py-2">About Training & Placement</h1>
      <div className='flex flex-col gap-5 '>
        <span>The Training and Placement Office facilitates the placement of graduates from the Institute by collaborating with prominent organizations and institutions to develop internship and training programs for students.</span>
        <span>The office works with various industrial companies, corporate houses, and other organizations to conduct campus interviews and select graduate and post-graduate students from all fields. It provides the necessary infrastructure for group discussions, examinations, and interviews, and coordinates with numerous sectors nationwide, hosting nearly ten organizations for on and off-campus interviews. The industries that engage with the institution include:</span>
        <ol className='list-decimal ml-10'>
          <li>Core engineering industries</li>
          <li>IT & IT enabled services.</li>
          <li>Manufacturing Industries.</li>
          <li>Consultancy Firms</li>
          <li>Finance Companies.</li>
          <li>Management Organizations.</li>
          <li>R&D Laboratories.</li>
        </ol>
        <span>The placement season runs throughout the year, starting in the last week of July and concluding in March. Pre-placement discussions are also held at mutually convenient times. The Training and Placement Office announces job offers, interview dates, candidate selections, and more.</span>
        <span>A group of members from the undergraduate engineering and postgraduate management disciplines assists the Placement Office. This committee follows a set of established rules, with student members actively involved in implementing these policies.</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 px-5" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 mt-10 py-2">Training:</h1>
      <div className='flex flex-col gap-5 '>
        <span>Students are sent to various establishments for practical training based on their areas of interest and specialization. Faculty members from different disciplines monitor the students' training in various industries. The analysis of industrial training is conducted based on assessment reports received from the industries, the content of the training, the presentation of the training report by the students, and the viva-voce conducted by an expert committee formed for this purpose.</span>
        <span>Additionally, our college has initiated a program called "CAMPUS CONNECTORS," where student coordinators have the opportunity to work with the Training and Placement Office and company delegates on administrative matters.</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Training and Placement Officer Profile</h1>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <tbody>
          {placementofficer.map((officer, index) => (
            <>
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">
                <img
                  src={officer.photo}
                  alt={officer.name}
                  className="w-full h-50 object-fit" // Image styles
                />
              </td>
              <tc className="flex flex-col ml-5">
              <td className="py-2 px-4"><b>Name:</b>{officer.name}</td>
              <td className="py-2 px-4"><b>Designation: </b>{officer.designation}</td>
              <td className="py-2 px-4"><b>Qualification: </b>{officer.qualification}</td>
              <td className="py-2 px-4"><b>Email ID:</b> {officer.emailID}</td>
              <td className="py-2 px-4"><b>Contact No.: </b>{officer.contact}</td>
              </tc>
            </tr>
            </>
          ))}
        </tbody>
        </table>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-lg shadow-md bg-gray-100 " // Added styles
        >
          <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600 text-center mt-1">
            <thead>
              <tr>
                <th >Experience in Years:</th>
                <th>Expert Area:</th>
                <th>Subjects Taught:</th>
                <th>Journal Publications:</th>
                <th>Petants:</th>
                <th>Books Published:</th>
                <th>ResearchProject Handled:</th>
                <th>Memberships:</th>
                <th>Academic Profile:</th>
              </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td>
                    <sapn>Teaching: 24.0</sapn>
                    <sapn>Industry: 1.0</sapn>
                  </td>
                  <td>
                  <div className='flex flex-col px-5'>
                    <sapn>Heat Power</sapn>
                    </div>
                    </td>
                  <td>
                    <div className='flex flex-col px-5'>
                    <sapn>EVS</sapn>
                    <sapn>SME</sapn>
                    <sapn>ENGINEERING GRAPHICS</sapn>
                    </div>
                    </td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><a href="http://www.pdeacoem.org/erp/admin/downloadresume?employeeid=113" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">View Profile</a></td>
                  
                </tr>
            </tbody>
          </table>
        </motion.div>
          
        </motion.div>
    </>
  )
}

export default TandPHome