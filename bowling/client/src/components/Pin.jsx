import React from 'react';
import PropTypes from 'prop-types';

const Pin = (props) => {
  return (
    <>
      <li onClick={() => (props.addPins(props.pin))}>
      {props.pin}
      </li>
    </>
  )
};

Pin.propTypes = {
  pin: PropTypes.number.isRequired,
  addPins: PropTypes.func.isRequired,
};

export default Pin;