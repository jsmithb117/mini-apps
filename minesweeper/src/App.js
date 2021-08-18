import React from 'react';
import Board from './components/Board.jsx';
import boardCreator from './features/board/boardCreator';
import zeroFinder from './features/board/zeroFinder';
import checkWin from './features/board/checkWin';
import initialState from './features/board/initialState';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const board = boardCreator();
    this.setState({ board }, () => {
      let newBoard = [...this.state.board];
      for (let i = 0; i < newBoard.length; i++) {
        newBoard[i] = newBoard[i].map((elem) => {
          return elem.val;
        })
      }
    });

  }

  handleClick (event) {
    event.preventDefault();
    let leftClick = event.type === "click";
    let rightClick = event.type === "contextmenu";

    if (this.state.loss || this.state.win) {
      return;
    }

    let row = event.target.className.split(' ')[2].split('w')[1];  //There is probably a better way to store/retrieve the rows and cols
    let col = event.target.className.split(' ')[3].split('l')[1];

    if (rightClick) {
      event.target.style.color = !event.target.style.color ? 'black' : null
      event.target.innerHTML = event.target.innerHTML === '?' ? 'M' : '?';
      this.setState((state) => {
        state.board[row][col].markedAsMine = event.target.innerHTML === 'M';
        return state;
      })
    }

    if (leftClick) {
      this.setState((state) => {
        let pieceIsX = state.board[row][col].val === 'X';
        let pieceIsMarkedAsMine = state.board[row][col].markedAsMine

        if (pieceIsX && !pieceIsMarkedAsMine) {
          state.loss = true;
          return state;
        }

        state = zeroFinder(parseInt(row), parseInt(col), state.board);
        return state;
      }, () => {
        if (checkWin(this.state.board)) {
          document.body.style = 'background: green;';
          console.log('You win!');
        }
        if (this.state.loss && !this.state.win) {
          document.body.style = 'background: red;';
          console.log('Sorry, try again.');
        }
      })
    }
  }

  render() {
    return (
      <div className="minesweeper">
        <Board board={this.state.board} handleClick={this.handleClick} />
      </div>
    );
  }
};

export default App;
