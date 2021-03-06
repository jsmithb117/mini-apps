import React from 'react';
import ReactPaginate from 'react-paginate';

const BottomForm = (props) => {
  return (
    <div className="page-form">
    <form onSubmit={props.limitSubmitHandler} onChange={(event) => {props.limitChangeHandler(event)}}>
      <label>
        Entries per page:
        <input type="text" name="limit" />
      </label>
      <input type="submit" value="Change limit" />
    </form>
    <ReactPaginate
      previousLabel={'Prev'}
      nextLabel={'Next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={props.pageCount}
      pageRangeDisplayed={5}
      onPageChange={props.pageClickHandler}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
    </div>
  );
};

export default BottomForm;
