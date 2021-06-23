import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player.jsx';
import Frame from './Frame.jsx';
import Pins from './Pins.jsx';

const Input = (props) => {

  const calculatePinsToDisplay = () => {
    const frame = props.playerData.frame;
    const roll = props.playerData.roll;
    const scoreFrame = props.playerData.rawScore[frame - 1];
    if (!scoreFrame) {
      return null;
    }
    if (frame < 10) {
      return 10 - scoreFrame[0];
    }
    const first = scoreFrame[0];
    const second = scoreFrame[1];
    const spare = first + second === 10;
    const empty = first === null;
    const firstStrike = first === 10;
    const secondStrike = second === 10;
    const tenthFrame = frame === 10;
    const secondRoll = roll === 2;
    const thirdRoll = roll === 3;
    if (tenthFrame && (empty || spare || firstStrike || secondStrike || thirdRoll)) {
      return 10;
    } else if (tenthFrame && secondRoll) {
      return 10 - scoreFrame[0];
    }
  };

  return (
    <div className="input" >
      <Player currentPlayer={props.playerData.player}/>
      <Frame frame={props.playerData.frame} />
      <Pins pins={calculatePinsToDisplay()} addPins={props.addPins} />
    </div>
    )
};

Input.propTypes = {
  playerData: PropTypes.object.isRequired,
  addPins: PropTypes.func.isRequired,
  setNumberOfPlayers: PropTypes.func.isRequired,
};

export default Input;