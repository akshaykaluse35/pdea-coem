import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from '../Components/Navbar/Navbar';
import AcademicCard from '../Components/academics/AcademicCard/AcademicCard';
import TeacherSection from '../Components/academics/FacultySection';
import EventDepartmentSection from '../Components/academics/EventDepartmentSection';
import GallerySection from '../Components/academics/GallerySection';
import Button from '../Components/Button/Button';
import Footer from '../Components/Footer/Footer';

const DepartmentTemplate = ({ cardsData, teachers, title, description, events,  }) => {
  return (
    <>
      <div className="departmentPage">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 px-10 py-20">
          <div className="text-center pt-0 lg:pt-20">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">{title}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-500 sm:text-4xl">{description}</p>
          </div>
          <div className="flex flex-row items-center justify-center py-5">
            {cardsData.map(card => (
              <AcademicCard
                key={card.id}
                image={card.image}
                name={card.name}
                position={card.position}
                message={card.message}
              />
            ))}
          </div>
          <div className="departmentBtns flex flex-col gap-5 lg:flex-row">
            <ScrollLink to="teachersSection" smooth={true} duration={500}>
              <Button label="Professors" />
            </ScrollLink>
            <ScrollLink to="eventSection" smooth={true} duration={500}>
              <Button label="Events" />
            </ScrollLink>
          </div>
        </div>
        <div className="bg-gray-100 mx-10" id='teachersSection'>
          <TeacherSection teachers={teachers} />
        </div>
        <div className="bg-gray-100 mx-10" id='eventSection'>
          <EventDepartmentSection events={events} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DepartmentTemplate;
