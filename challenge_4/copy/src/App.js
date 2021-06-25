import React from 'react';
import Board from './components/Board.jsx';
import boardCreator from './features/board/boardCreator';
import zeroFinder from './features/board/zeroFinder';
import checkWin from './features/board/checkWin';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [{
          val: null,
          uncovered: false
        }]
      ],
      win: false,
      loss: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    event.preventDefault();
    //if left click, uncovers piece.  If right click, toggles mine marker
    if (event.type === "contextmenu" && !this.state.loss && !this.state.win) {
      if (event.target.style.color === 'gray' || !event.target.style.color) {
        event.target.style.color = 'black';
      } else if (event.target.style.color === 'black') {
        event.target.style.color = 'gray';
      }
    } else if (event.type === 'click') {
      let className = event.target.className;
      let classArray = className.split(' ');
      let row = classArray[2].split('w')[1];
      let col = classArray[3].split('l')[1];

      this.setState((state) => {
        if (state.board[row][col].val === 'X' && !state.board[row][col].markedAsMine) {
          state.loss = true;
          document.body.style = 'background: red;';
        } else {
          state.board[row][col].markedAsMine = true;
          state = zeroFinder(parseInt(row), parseInt(col), state.board);
        }
        return state;
      }, () => {
        if (checkWin(this.state.board)) {
          document.body.style = 'background: green;';
          console.log('You win!');
        }
      })
    }
  }

  componentDidMount() {
    //Creates a new board and loads into state.
    const board = boardCreator();
    this.setState({ board }, () => {
      let newBoard = [...this.state.board];
      console.log(JSON.stringify(newBoard));
      for (let i = 0; i < newBoard.length; i++) {
        newBoard[i] = newBoard[i].map((elem) => {
          return elem.val;
        })
      }
      console.table(newBoard);
    });
  }

  componentDidUpdate() {
    if (this.state.loss) {
      console.log('Sorry, try again.')
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
