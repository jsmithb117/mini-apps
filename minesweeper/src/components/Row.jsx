import React from 'react';
import Piece from './Piece.jsx';

const Row = (props) => {
  const rowMap = props.row.map((elem, index) => (
    <Piece piece={elem} key={'piece'.concat(index)} handleClick={props.handleClick} />
  ));

  return (
    <div className="row">
      {rowMap}
    </div>
  );
};

export default Row;