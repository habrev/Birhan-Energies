import React from 'react';

const EventFilter = () => {
  return (
    <div>
      <label>Filter by Event: </label>
      <select>
        <option value="event1">Event 1</option>
        <option value="event2">Event 2</option>
        {/* Add more events as needed */}
      </select>
    </div>
  );
};

export default EventFilter;
