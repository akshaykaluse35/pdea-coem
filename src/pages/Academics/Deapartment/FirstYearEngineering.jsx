import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { firstyear } from '../../../data/hod';
import { firstYearDepartmentData } from '../../../data/department';

const FirstYear = () => {
  const [events, setEvents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('First Year Engineering'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        const filteredTeachers = response.data.filter(teacher => teacher.tags && teacher.tags.includes('First Year Engineering'));
        setTeachers(filteredTeachers);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchEvents();
    fetchTeachers();
  }, []);

  return (
    <DepartmentTemplate 
      cardsData={firstyear}
      title={firstYearDepartmentData.title} 
      description={firstYearDepartmentData.description}
      teachers={teachers}
      events={events}
      galleryImages={firstYearDepartmentData.galleryImages}
    />
  );
};

export default FirstYear;
