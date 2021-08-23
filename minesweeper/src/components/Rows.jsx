import React, { useContext } from 'react';
import BoardContext from '../features/board/Context';
import Row from './Row.jsx';

const Rows = (props) => {
  const board = useContext(BoardContext);
  const rowsMap = board.map((elem, index) => (
    <Row row={elem} key={"row".concat(index)} handleClick={props.handleClick} />
  ));

  return (
    <div className="rows">
      {rowsMap}
    </div>
  );
};

export default Rows;