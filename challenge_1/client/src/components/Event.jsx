import React from 'react';
import Date from './Date.jsx';
import Description from './Description.jsx';

const Event = (props) => (
    <div className="event">
      <Date date={props.event.date} />
      <Description description={props.event.description} />
      <br />
    </div>
);

export default Event;