import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  const [notifications, setNotifications] = useState([]);
  const [events, setEvents] = useState([]);
  const [limitedNotifications, setLimitedNotifications] = useState([]);
  const [limitedEvents, setLimitedEvents] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/notifications');
        const fetchedNotifications = await response.json();
        setNotifications(fetchedNotifications.sort((a, b) => new Date(b.date) - new Date(a.date))); // Sort by date
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const fetchedEvents = await response.json();
        setEvents(fetchedEvents.sort((a, b) => new Date(b.date) - new Date(a.date))); // Sort by date
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchNotifications();
    fetchEvents();
  }, []);

  useEffect(() => {
    setLimitedNotifications(notifications.slice(0, 2)); // Show top 2 notifications
    setLimitedEvents(events.slice(0, 2)); // Show top 2 events
  }, [notifications, events]);

  return (
    <section className="news-section py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="news-subsection bg-gray-100 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-center mb-4">Official Notifications</h3>
            <ul role="list" aria-labelledby="official-notifications-title">
              {limitedNotifications.map((notification) => (
                <li key={notification._id} className="news-card flex bg-white border border-gray-300 hover:border-gray-400 transition duration-300 px-5 py-5 mb-4 rounded-lg">
                  <h4 className="text-base font-medium mr-4">{notification.title}</h4>
                  <p className="text-gray-600 text-base line-clamp-2">{notification.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-4">
              <Link to="/notifications" className="news-section-link text-center text-blue-500 hover:text-blue-700 transition duration-300 py-2 px-4 rounded-md">
                Read More
              </Link>
            </div>
          </div>
          <div className="news-subsection bg-gray-100 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-center mb-4">Latest Events</h3>
            <ul role="list" aria-labelledby="latest-events-title">
              {limitedEvents.map((event) => (
                <li key={event._id} className="news-card flex bg-white border border-gray-300 hover:border-gray-400 transition duration-300 px-5 py-5 mb-4 rounded-lg">
                  <h4 className="text-base font-medium mr-4">{event.title}</h4>
                  <p className="text-gray-600 text-base line-clamp-2">{event.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-4">
              <Link to="/events" className="news-section-link text-center text-blue-500 hover:text-blue-700 transition duration-300 py-2 px-4 rounded-md">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
