import React from 'react';
import Rows from './Rows.jsx';

const Board = (props) => {
  return (
    <div className="board">
      <Rows board={props.board} handleClick={props.handleClick} />
    </div>
  );
};

export default Board;