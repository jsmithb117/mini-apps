import React from 'react';

const Piece = (props) => {
  const uncoveredClassName = `uncovered piece row${props.piece.row} col${props.piece.col}`;
  const coveredClassName = `covered piece row${props.piece.row} col${props.piece.col}`
  if (props.piece.uncovered) {
    return (
      <button className={uncoveredClassName} onClick={props.handleClick} onContextMenu={props.handleClick}>
      {props.piece.val}
    </button>
    )
  }
  return (
    <button className={coveredClassName} onClick={props.handleClick} onContextMenu={props.handleClick} >
      {'?'}
  </button>
  );
};

export default Piece;