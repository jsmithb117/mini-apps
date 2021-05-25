import React from 'react';

const PageForm = (props) => {
  if (props.page === 1) {
    return (
      <div className="page-form">
      <div className="prev-page">
        Previous
      </div>
      <div className="next-page" onClick={() => {props.pageHandler(props.page + 1)}}>
        Next
      </div>
      <form onSubmit={props.limitSubmitHandler} onChange={(event) => {props.limitChangeHandler(event)}}>
    <label>
      Entries per page:
      <input type="text" name="limit" />
    </label>
    <input type="submit" value="Change limit" />
  </form>
      </div>
    )
  }
  return (
    <div className="page-form">
    <div className="prev-page" onClick={() => {props.pageHandler(props.page - 1)}}>
    Previous
  </div>
  <div className="next-page" onClick={() => {props.pageHandler(props.page + 1)}}>
    Next
  </div>
  <form onSubmit={props.limitSubmitHandler} onChange={(event) => {props.limitChangeHandler(event)}}>
    <label>
      Entries per page:
      <input type="text" name="limit" />
    </label>
    <input type="submit" value="Change limit" />
  </form>
  </div>
  );
};

export default PageForm;
