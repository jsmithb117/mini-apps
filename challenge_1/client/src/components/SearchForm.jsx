import React from 'react';

const SearchForm = (props) => (
  <div className="form">
    <form onSubmit={props.formSubmitHandler} onChange={props.formChangeHandler}>
      <label>
        Search term:
        <input type="text" name="search" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <br />
  </div>
);

export default SearchForm;
