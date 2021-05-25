import React from 'react';
import Events from './Events.jsx';
import SearchForm from './SearchForm.jsx';
import PageForm from './PageForm.jsx';

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverURL: 'http://localhost:3000',
      search: 'William of Orange',
      eventData: [],
      page: 1,
      sortBy: 'date',
      sortOrder: 'asc',
      limitForm: 10,
      limit: 10,
      language: 'en'
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.limitChangeHandler = this.limitChangeHandler.bind(this);
    this.limitSubmitHandler = this.limitSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    const url = `${this.state.serverURL}/events?q=${this.state.search}&_page=${this.state.page}&_sort=${this.state.sortBy}&order=${this.state.sortOrder}&_limit=${this.state.limit}`;
    fetch(url)
      .then((serverResponse) => {
        return serverResponse.json();
      })
      .then((json) => {
        this.setState({ eventData: json });
      })
      .catch((err) => {
        if (err) {
          debugger;
          console.error('Error in componentDidMount: ', err);
        }
      });
  };

  formChangeHandler (event) {
    this.setState({ search: event.target.value });
  };

  formSubmitHandler (event) {
    event.preventDefault();
    this.getData();
  };

  pageHandler (page) {
    this.setState({ page }, () => {
      this.getData();
    });
  };

  limitChangeHandler (event) {
    this.setState({ limitForm: event.target.value });
  };

  limitSubmitHandler () {
    event.preventDefault();
    this.setState({ limit: this.state.limitForm }, () => {
      this.getData();
    });
  };

  render() {
    return (
      <div className="finder">
        <div className="title">
          Historical Events Finder
        </div>
        <br />
          <SearchForm formChangeHandler={this.formChangeHandler} formSubmitHandler={this.formSubmitHandler} />
          <Events eventData={this.state.eventData} page={this.state.page} sortBy={this.state.sortBy} sortOrder={this.state.sortOrder} language={this.state.language} />
          <PageForm page={this.state.page} pageHandler={this.pageHandler} limitChangeHandler={this.limitChangeHandler} limitSubmitHandler={this.limitSubmitHandler} />
      </div>
    );
  };
};

export default Finder;
