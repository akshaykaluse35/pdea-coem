import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import HeroSection from "./Components/HeroSection/HereSection";
import Statistics from "./Components/Statistics/Statistics";
import About from "./Components/AboutSection/About";
import EventCarousel from "./Components/Carousel/EventCarousel";
import Cards from "./Components/Card/card.jsx";


const LandingPage = () => {
  return (
    <Box className="parent">
      <HeroSection />

      <About />

      <Box sx={{ height: 800, width: "100%" }}>
        <EventCarousel />
      </Box>

      <Box sx={{ height:500, width: "100%" }}>
        <Cards />
      </Box>

      <Statistics />
      

    </Box>
  );
};

export default LandingPage;
