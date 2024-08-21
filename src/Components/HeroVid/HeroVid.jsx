import React from "react";
import { Link } from "react-scroll";
const HeroVideo = require("../../assets/video/hero.mp4");

const HeroVid = () => {
  return (
    <section className="relative h-screen overflow-hidden z-0">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <Link to="nextSection" smooth={true} duration={500} className="cursor-pointer flex flex-col items-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full font-semibold mb-4 shadow-lg transform transition-transform hover:scale-105">
            Explore Now
          </button>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroVid;
