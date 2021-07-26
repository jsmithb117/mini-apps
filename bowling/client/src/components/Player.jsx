import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => (
  <div className="player">
    Player: {props.currentPlayer}
  </div>
);

Player.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
};

export default Player;