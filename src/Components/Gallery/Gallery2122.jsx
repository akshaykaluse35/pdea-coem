import React, { useState, useEffect } from "react";
import GalleryCategory from "./GalleryCategory";
import { motion } from "framer-motion";

const departments = [
  "Library",
  "First Year Engineering",
  "Computer Engineering",
  "Electronics and Telecommunication Engineering",
  "Information Technology",
  "Instrumentation and Control",
  "M. B. A",
  "Mechanical Engineering",
];

const Gallery2021 = () => {
  const [selectedCategory, setSelectedCategory] = useState("Library");
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gallery, setGallery] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsFullscreenOpen(true);
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
    setIsFullscreenOpen(false);
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/gallery?year=2021-22&department=${selectedCategory}`
        );
        const data = await response.json();
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, [selectedCategory]);

  return (
    <div className="gallery-container bg-gray-100 min-h-screen p-8">
      <motion.div
        className="flex flex-wrap justify-center mb-8 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {departments.map((category, idx) => (
          <GalleryCategory
            key={category}
            name={category}
            isActive={category === selectedCategory}
            onClick={() => handleCategoryClick(category)}
            className={`mt-5 text-lg font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              category === selectedCategory
                ? "bg-accent-color text-white"
                : "bg-blue-500 text-white hover:bg-secondary-color hover:text-primary-color"
            }`}
          />
        ))}
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {gallery.map((image) => (
          <motion.img
            key={image._id}
            src={image.image}
            alt={image.department}
            className="rounded-lg shadow-lg object-cover h-64 md:h-auto cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
            onClick={() => handleImageClick(image)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>

      {isFullscreenOpen && (
        <motion.div
          className="fullscreen-image fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={selectedImage?.image}
            alt={selectedImage?.department}
            className="max-h-screen max-w-screen-lg object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.button
            className="absolute top-16 right-16 text-white bg-transparent hover:bg-gray-700 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={handleCloseFullscreen}
            whileHover={{ opacity: 1 }}
            animate={{ opacity: 0.8, transition: { duration: 0.3 } }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery2021;
