import React from 'react';
import Chart from 'chart.js/auto';
import LineChart from './LineChart.jsx';
import DateRange from './DateRange.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinDeskData: []
    };
  }

  componentDidMount() {
    this.getCoinDeskRecent();
  }

  getCoinDeskRecent () {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((apiResponse) => apiResponse.json())
    .then((json) => {
      let coinDeskData = [];
      let keys = Object.keys(json.bpi);
      let values = Object.values(json.bpi);
      keys.forEach((key) => {
        coinDeskData.push({
          time: key,
          value: json.bpi[key]
        });
      });
      this.setState({
        coinDeskData,
        dateBegin: keys[0],
        dateEnd: keys[keys.length - 1]
      });
    })
    .catch((err) => {
      if (err) {
        console.error('Error in getCoinDeskRange: ', err);
      }
    });
  };

  render() {
    return (
      <div className="app">
        <div className="dates">
          <DateRange dateBegin={this.state.dateBegin} dateEnd={this.state.dateEnd} />
        </div>
        <div className="main chart-wrapper">
          <LineChart
            data={this.state.coinDeskData}
            title={"Line chart of last 31 days"}
            color="#3E517A"
          />
        </div>
      <div className="coin-base">
        <a href="https://www.coindesk.com/price/bitcoin">
          Powered By CoinDesk
        </a>
      </div>
      </div>
    );
  };
};

export default App;
