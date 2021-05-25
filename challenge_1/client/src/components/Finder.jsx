import React from 'react';
import Events from './Events.jsx';

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
      limit: 10,
      language: 'en'
    };
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    const url = `
    ${this.state.serverURL}/events?q=${this.state.search}&_page=${this.state.page}&_sort=${this.state.sortBy}&order=${this.state.sortOrder}&_limit=${this.state.limit}`;
    fetch(url)
      .then((serverResponse) => {
        return serverResponse.json();
      })
      .then((json) => {
        this.setState({ eventData: json });
      })
      .catch((err) => {
        if (err) {
          console.error('Error in componentDidMount: ', err);
        }
      });
  };

  render() {
    return (
      <div className="finder">
          <Events eventData={this.state.eventData} page={this.state.page} sortBy={this.state.sortBy} sortOrder={this.state.sortOrder} language={this.state.language} />
      </div>
    );
  };

};

export default Finder;