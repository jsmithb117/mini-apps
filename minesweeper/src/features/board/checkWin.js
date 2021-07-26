const checkWin = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j].uncovered && board[i][j].val !== 'X') {
        return false;
      }
    }
  }
  return true;
};

export default checkWin;