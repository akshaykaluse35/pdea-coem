import React from 'react';

// Example alumni data
const alumniData = [
  {
    name: 'John Doe',
    batch: '2015',
    review: 'My experience at Pdea\'s College of Engineering was amazing. The faculty and infrastructure were top-notch.',
    videoUrl: 'https://www.youtube.com/embed/example1', // Replace with actual video URL
  },
  {
    name: 'Jane Smith',
    batch: '2017',
    review: 'The education and support I received here have been invaluable in my career.',
    videoUrl: 'https://www.youtube.com/embed/example2', // Replace with actual video URL
  },
  // Add more alumni as needed
];

const AlumniCard = ({ name, batch, review, videoUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <iframe
        className="w-full"
        height="200"
        src={videoUrl}
        title={name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-800">{name}</div>
        <p className="text-gray-700 text-base">
          Batch of {batch}
        </p>
        <p className="text-gray-700 text-base mt-2">
          "{review}"
        </p>
      </div>
    </div>
  );
};

const AlumniComponent = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-8">
      <header className="relative bg-blue-900 text-white py-20">
        <img
          src="https://ideogram.ai/assets/image/lossless/response/F8Ei734lTryOr63pGnlL6A" // Replace with actual image URL
          alt="College"
          className="absolute inset-0 w-full h-full object-cover opacity-50 "
        />
        <div className="relative container mx-auto px-4 text-center shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Alumni Page</h2>
          <p className="text-xl max-w-2xl mx-auto">
            We are proud of our alumni and their achievements. This page is dedicated to
            celebrating your success and staying connected with our college community.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {alumniData.map((alumni, index) => (
            <AlumniCard key={index} {...alumni} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AlumniComponent;
