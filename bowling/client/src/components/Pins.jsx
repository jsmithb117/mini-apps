import React from 'react';
import PropTypes from 'prop-types';
import Pin from './Pin.jsx';

const Pins = (props) => {
  const pinsArray = [];
  for (let i = 0; i <= props.pins; i++) {
    pinsArray.push(i);
  }

  const pinButtons = pinsArray.map((pin, index) => (
    <Pin addPins={props.addPins} key={'pin'.concat(index)} pin={pin ? pin : 0}/>
  ));

  return (
    <div className="pins">
      {pinButtons}
    </div>
  )
};

Pins.propTypes = {
  pins: PropTypes.number,
  addPins: PropTypes.func.isRequired,
};

export default Pins;