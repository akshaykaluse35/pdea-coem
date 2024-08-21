import React from 'react';
import EventCard from '../EventCard/EventCard';

const EventDepartmentSection = ({ events }) => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Department Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
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
          <div className="text-center text-gray-500 text-xl">
            No Events Currently Live
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDepartmentSection;
