import React from 'react';
import Rows from './Rows.jsx';

const Board = (props) => {
  return (
    <div className="board">
      <Rows handleClick={props.handleClick} />
    </div>
  );
};

export default Board;