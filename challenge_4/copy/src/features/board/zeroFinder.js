let debugger1 = true;

let zeroFinder = (row, col, board) => {
  // unhides contiguous zeros and their adjacent pieces

  if (board[row][col].val === 0) {
    // creates references to nearby elements if they exist
      // UL|U|UR
      // LL| |RR
      // DL|D|DR
    let UL = board[row - 1] && board[row - 1][col - 1] ? board[row - 1][col - 1] : undefined;
    let U = board[row - 1] && board[row - 1][col] ? board[row - 1][col] : undefined;
    let UR = board[row - 1] && board[row - 1][col + 1] ? board[row - 1][col + 1] : undefined;

    let LL = board[row][col - 1] ? board[row][col - 1] : undefined;
    let RR = board[row][col + 1] ? board[row][col + 1] : undefined;

    let DL = board[row + 1] && board[row + 1][col - 1] ? board[row + 1][col - 1] : undefined;
    let D = board[row + 1] && board[row + 1][col] ? board[row + 1][col] : undefined;
    let DR = board[row + 1] && board[row + 1][col + 1] ? board[row + 1][col + 1] : undefined;

    // recurses as required
    board[row][col].uncovered = true;
    if (UL && UL.val !== 'X' && !UL.uncovered) {
      UL.uncovered = true;
      if (UL.val === 0) {
        board = zeroFinder(row - 1, col - 1, board);
      }
    }
    if (U && U.val !== 'X' && !U.uncovered) {
      U.uncovered = true;
      if (U.val === 0) {
        board = zeroFinder(row - 1, col, board);
      }
    }
    if (UR && UR.val !== 'X' && !UR.uncovered) {
      UR.uncovered = true;
      if (UR.val === 0) {
        board = zeroFinder(row - 1, col + 1, board);
      }
    }
    if (LL && LL.val !== 'X' && !LL.uncovered) {
      LL.uncovered = true;
      if (LL.val === 0) {
        board = zeroFinder(row, col - 1, board);
      }
    }
    if (RR && RR.val !== 'X' && !RR.uncovered) {
      RR.uncovered = true;
      if (RR.val === 0) {
        board = zeroFinder(row, col + 1, board);
      }
    }
    if (DR && DR.val !== 'X' && !DR.uncovered) {
      DR.uncovered = true;
      if (DR.val === 0) {
        board = zeroFinder(row + 1, col + 1, board);
      }
    }
    if (D && D.val !== 'X' && !D.uncovered) {
      D.uncovered = true;
      if (D.val === 0) {
        board = zeroFinder(row + 1, col, board);
      }
    }
    if (DL && DL.val !== 'X' && !DL.uncovered) {
      DL.uncovered = true;
      if (DL.val === 0) {
        board = zeroFinder(row + 1, col - 1, board);
      }
    }
  } else {
    if (board[row][col].val !== 'X') {
      board[row][col].uncovered = true;
    }
  }
  return board;
};

export default zeroFinder;
