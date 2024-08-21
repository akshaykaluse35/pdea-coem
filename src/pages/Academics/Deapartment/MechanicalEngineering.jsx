import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Mechanical } from '../../../data/hod';
import { mechDepartmentData } from '../../../data/department';

const MechEngg = () => {
  const [events, setEvents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        const filteredEvents = response.data.filter(event => event.tags && event.tags.includes('Mechanical Engineering'));
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        const filteredTeachers = response.data.filter(teacher => teacher.tags && teacher.tags.includes('Mechanical Engineering'));
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
      cardsData={Mechanical}
      title={mechDepartmentData.title} 
      description={mechDepartmentData.description}
      teachers={teachers}
      events={events}
      galleryImages={mechDepartmentData.galleryImages}
    />
  );
};

export default MechEngg;
