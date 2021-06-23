import React from 'react';
import PropTypes from 'prop-types';

const Frame = (props) => (
  <div className="frame">
    Frame: {props.frame <= 10 ? props.frame : 'Game completed'}
  </div>
);

Frame.propTypes = {
  frame: PropTypes.number.isRequired,
};

export default Frame;