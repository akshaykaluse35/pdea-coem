import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import EventCard from '../Components/EventCard/EventCard';
import Footer from '../Components/Footer/Footer';
import '../assets/css/event.css';
import { motion } from 'framer-motion';
import axios from 'axios';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data); // Events are already sorted by date in the backend
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='Events'>
      <Navbar />
      <div className="bg-blue-500 text-white mt-20 py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Events</h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our upcoming events and join us to learn, share, and connect. Check out the details below.
          </p>
        </motion.div>
      </div>
      <div className="events-grid mt-10 my-5">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              link={event.link}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 text-xl ">
            No Events Currently Live
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
