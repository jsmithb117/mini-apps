import React from 'react';
import Events from './Events.jsx';
import TopForm from './TopForm.jsx';
import BottomForm from './BottomForm.jsx';

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverURL: 'http://localhost:3000',
      search: 'William of Orange',
      eventData: [],
      offset: 0,
      page: 1,
      pageCount: 1,
      sortBy: 'date',
      sortOrder: 'asc',
      limitForm: 10,
      limit: 5,
      language: 'en'
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.limitChangeHandler = this.limitChangeHandler.bind(this);
    this.limitSubmitHandler = this.limitSubmitHandler.bind(this);
    this.pageClickHandler = this.pageClickHandler.bind(this);
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    const url = `${this.state.serverURL}/events?q=${this.state.search}&_page=${this.state.page + this.state.offset}&_limit=${this.state.limit}`;
    fetch(url)
      .then((serverResponse) => {
        this.setState({ pageCount: Math.ceil(serverResponse.headers.get('X-Total-Count') / this.state.limit) });
        return serverResponse.json()
      })
      .then((json) => {
        this.setState({ eventData: json });
      })
      .catch((err) =>  console.error('Error in componentDidMount: ', err));
  };

  formChangeHandler (event) {
    this.setState({ search: event.target.value });
  };

  formSubmitHandler () {
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

  pageClickHandler (pageData) {
    let selected = pageData.selected;
    let offset = Math.ceil(selected);
    this.setState({ offset: offset }, () => {
      this.getData();
    });
  }

  render() {
    return (
      <div className="finder">
        <div className="title">
          Historical Events Finder
        </div>
        <br />
          <TopForm formChangeHandler={this.formChangeHandler} formSubmitHandler={this.formSubmitHandler} />
          <Events eventData={this.state.eventData} page={this.state.page} sortBy={this.state.sortBy} sortOrder={this.state.sortOrder} language={this.state.language} />
          <BottomForm page={this.state.page} pageHandler={this.pageHandler} limitChangeHandler={this.limitChangeHandler} limitSubmitHandler={this.limitSubmitHandler} pageCount={this.state.pageCount} pageClickHandler={this.pageClickHandler} />
      </div>
    );
  };
};

export default Finder;
