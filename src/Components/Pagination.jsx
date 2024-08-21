import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="inline-flex items-center -space-x-px">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-4 py-2 ml-2 leading-tight rounded-lg transition-colors duration-300 ${
                  currentPage === number
                    ? 'bg-orange-400 text-white'
                    : 'bg-white text-blue-400 hover:bg-gray-200'
                } border border-gray-300`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
