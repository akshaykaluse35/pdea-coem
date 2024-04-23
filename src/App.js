import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import HeroSection from "./Components/HeroSection/HereSection";
import About from "./Components/AboutSection/About";
import EventCarousel from "./Components/Carousel/EventCarousel";
import FacultyContact from "./Components/ContactSection/FacultyContact";

const LandingPage = () => {
  return (
    <Box className="parent">
      <HeroSection />
      <About/>
      <FacultyContact/>
      <EventCarousel/>
    </Box>
  );
};

export default LandingPage;
