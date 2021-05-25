import React from 'react';
import Date from './Date.jsx';
import Description from './Description.jsx';

const Event = (props) => {
  return (
    <div className="event">
      <Date date={props.event.date} />
      <Description description={props.event.description} />
    </div>
  );
};

export default Event;