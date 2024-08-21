import React from 'react';
import GalleryCarousel from "./GalleryCarousal";

const TeacherSection = ({galleryImages  }) => {
  return (
    <div className="py-12 bg-white">
        <h2 className='text-center text-4xl font-bold '>Gallery</h2>
        <div className="mt-10">
        <GalleryCarousel images={galleryImages} />
          </div>
        </div>
  );
};

export default TeacherSection;
