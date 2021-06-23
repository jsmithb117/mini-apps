import React from 'react';
import PropTypes from 'prop-types';

const Score = (props) => {
  let calculateScore = () => {
    const rawScore = props.rawScore;
    let score = 0;
    for (let i = 0; i < 10 && rawScore[i][0] !== null; i++) {
      const frame = rawScore[i];
      const strike = frame[0] === 10;
      const spare = frame[0] + frame[1] === 10;
      const tenth = i === 9;
      const ninth = i === 8
      const nextFrame = rawScore[i+1];
      const nextNextFrame = rawScore[i+2];

      //Due to the rules of bowling, frames 9 and 10 have different scoring rules than frames 1-8
      if (!tenth && !ninth) {
        if (!strike && !spare) {
          score = score + frame[0] + frame[1];
        }
        if (strike) {
          if (nextFrame.length === 2 && nextFrame[1] !== null) {
            score = score + 10 + nextFrame[0] + nextFrame[1];
          } else if (nextFrame.length === 1 && nextNextFrame && nextNextFrame[0] !== null) {
            score = score + 10 + nextFrame[0] + nextNextFrame[0];
          }
        } else if (spare) {
          if (nextFrame && nextFrame[0]) {
            score = score + 10 + nextFrame[0];
          }
        }
      }
      if (ninth) {
        if (!strike && !spare) {
          score = score + frame[0] + frame[1];
        }
        if (strike) {
          if (nextFrame[0] && nextFrame[1]) {
            score = score + 10 + nextFrame[0] + nextFrame[1];
          }
        } else if (spare) {
          if (nextFrame[0]) {
            score = score + 10 + nextFrame[0];
          }
        }
      }
      if (tenth) {
        score = frame[0] ? score + frame[0] : score;
        score = frame[1] ? score + frame[1] : score;
        score = frame[2] ? score + frame[2] : score;
      }
    }
    return score;
  }

  return (
    <div className="score">
      {props.frame <= 10 ? 'Interim Score' : 'Final Score'}: { calculateScore() }
    </div>
  )
};

Score.propTypes = {
  rawScore: PropTypes.array.isRequired,
  frame: PropTypes.number.isRequired,
};

export default Score;