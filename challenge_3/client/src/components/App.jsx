import React from 'react';
import initialState from '../initialState';
import Output from './Output.jsx';
import Input from './Input.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.addPins = this.addPins.bind(this);
    this.setNumberOfPlayers = this.setNumberOfPlayers.bind(this);
  }

  addPins(pins) {

    this.setState((state) => {
      const player = state.players[this.state.currentPlayer - 1];
      let frame = player.frame;
      let roll = player.roll;
      const rawScore = player.rawScore;
      const strike = pins === 10;
      const spare = rawScore[9][0] + pins >= 10;
      const first = roll === 1;
      const second = roll === 2;
      const tenth = frame === 10;

      const removeNextRoll = (tenth && second && !spare) || (!tenth && first && strike);
      if (removeNextRoll) {
        state.players[this.state.currentPlayer - 1].rawScore[frame - 1].pop();
      }
      state.players[this.state.currentPlayer - 1].rawScore[frame - 1][roll - 1] = pins;
    //if next roll is defined, increment roll, else increment frame and reset roll
      if (rawScore[frame - 1][roll] !== undefined) {
        state.players[this.state.currentPlayer - 1].roll++;
          } else {
        state.players[this.state.currentPlayer - 1].roll = 1;
        state.players[this.state.currentPlayer - 1].frame++;
      }
      return state.players;
    })
  }

  setNumberOfPlayers(numberOfPlayers) {
    this.setState({ numberOfPlayers });
  }

  render() {
    const playerData = this.state.players[this.state.currentPlayer - 1];
    const rawScore = playerData.rawScore;
    const frame = playerData.frame;
    return (
      <div className="bowling">
        <div className = "output">
          <Output rawScore={rawScore} frame={frame} />
        </div>
          <Input playerData={playerData} addPins={this.addPins} setNumberOfPlayers={this.setNumberOfPlayers} />
      </div>
    )
  }
}

export default App;