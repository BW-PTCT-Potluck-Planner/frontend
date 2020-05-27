import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../events/Event/Event';

export function EventsAxios() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get('https://evening-sierra-34842.herokuapp.com/events')
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Events">
      {events.map((event) => {
        return <Event event={event} />;
      })}
    </div>
  );
}
