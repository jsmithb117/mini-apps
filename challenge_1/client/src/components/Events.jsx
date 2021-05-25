import React from 'react';
import Event from './Event.jsx';

const Events = (props) => (
    <div className="events">
    {props.eventData.map((event, index) => {
      return <Event event={event} key={'event' + index} />
    }
    )}
    </div>
);

export default Events;