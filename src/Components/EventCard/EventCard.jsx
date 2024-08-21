import React from 'react';
import './eventcard.css';

function EventCard({ date, title, description, link }) {
  const wordLimit = 20; // Set word limit for description
  const truncatedDescription = description.split(' ').slice(0, wordLimit).join(' ') + (description.split(' ').length > wordLimit ? '...' : '');

  return (
    <div className="event-card">
      <div className="event-date-time-container">
        <time className="event-date-time" dateTime={date}>
          <span>{new Date(date).getFullYear()}</span>
          <span className="event-separator"></span>
          <span>{new Date(date).toLocaleString('default', { month: 'short', day: 'numeric' })}</span>
        </time>
      </div>
      <div className="event-content">
        <div className="event-infos">
          <a href="/">
            <span className="event-title">
              {title}
            </span>
          </a>
          <p className="event-description">
            {truncatedDescription}
          </p>
        </div>
        <a className="event-action" href={link} target="_blank" rel="noopener noreferrer">
          Register Now
        </a>
      </div>
    </div>
  );
}

export default EventCard;
