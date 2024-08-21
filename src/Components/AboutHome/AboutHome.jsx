import React from 'react';
import './AboutHome.css'; // Import your Tailwind CSS styles
import Player from 'react-player';
const campusVideo = require("../../assets/video/hero.mp4");

const timelineData = [
  {
    year: 1950,
    title: 'College Founded',
    description: 'Our institution was established with a focus on [original focus]',
  },
  {
    year: 1970,
    title: 'First Major Expansion',
    description: 'New academic programs were introduced, including [program examples]',
  },
  {
    year: 1990,
    title: 'Focus on Innovation',
    description: 'The college invested in new facilities and technologies to enhance learning.',
  },
  // Add more timeline events here...
];

const TimelineVideo = () => {
  return (
    <section className="about-section py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our College Timeline</h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
        <div className="timeline-column w-full md:w-1/2 mr-4">
          <ul className="timeline">
            {timelineData.map((item) => (
              <li key={item.year} className="timeline-item">
                <div className="timeline-marker bg-blue-500 rounded-full"></div>
                <div className="timeline-content px-4 py-2 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{item.year}</h3>
                  <p className="text-gray-600">{item.title}</p>
                  <p className="text-gray-600 opacity-75">{item.description}</p>
                </div>
              </li>
            ))}
            <li className="timeline-item timeline-inflection"></li>
          </ul>
        </div>
        <div className="video-column w-full md:w-1/2">
          <Player
            url={campusVideo} // Replace with full YouTube URL
            width="100%"
            height="400px"
            controls={true}
            playing={false}
            loop={true}
            style={{ backgroundColor: 'transparent' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineVideo;
