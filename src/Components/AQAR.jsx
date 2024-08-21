import React from 'react';
import { motion } from 'framer-motion';
import { aqarreports } from '../data/naac';

function AQAR() {

  const fadeInUp = {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-6 flex flex-col bg-gray-100 rounded-lg"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">AQAR Reports</h2>
        </div>
        <motion.div initial={fadeInUp} animate={{ opacity: 1, y: 0 }} exit={fadeInUp}>
          <div className='overflow-x-auto mb-5'>
            <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Sr.No</th>
                  <th className="px-4 py-2">Name</th>
                </tr>
              </thead>
              <tbody>
                {aqarreports.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 px-4">{item.srNo}</td>
                    <td className="py-2 px-4">{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AQAR