import React from 'react';

const DateRange = (props) => {
  return (
    <div className="dates">
      Begin date: {props.dateBegin} <br />
      End date: {props.dateEnd}
    </div>
  )
};

export default DateRange;