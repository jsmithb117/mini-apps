import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score.jsx';

const Output = (props) => {
  return (
  <div className="output">
    <Score rawScore={props.rawScore} frame={props.frame} />
  </div>
  )
};

Output.propTypes = {
  rawScore: PropTypes.array.isRequired,
  frame: PropTypes.number.isRequired,
};

export default Output;