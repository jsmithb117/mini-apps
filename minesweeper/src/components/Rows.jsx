import React from 'react';
import Row from './Row.jsx';

const Rows = (props) => {
  const rowsMap = props.board.map((elem, index) => (
    <Row row={elem} key={"row".concat(index)} handleClick={props.handleClick} />
  ));
  return (
    <div className="rows">
      {rowsMap}
    </div>
  );
};

export default Rows;