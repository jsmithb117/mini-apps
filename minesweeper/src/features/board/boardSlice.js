import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: [
    [{
      val: 0,
      uncovered: false,
      row: 0,
      col: 0,
      markedAsMine: false
    }]
  ],
  win: false,
  loss: false
};


export const boardSlice = createSlice({
  name: 'board',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setBoard: (state, action) => {
      state = action.payload;
    },
    setLoss: (state) => {
      if (!state.win && !state.loss) {
        state.loss = true;
      }
    },
    setWin: (state) => {
      if (!state.win && !state.loss) {
        state.win = true;
      }
    }
  },
});

export const { setBoard, setLoss, setWin } = boardSlice.actions;

export const selectBoard = (state) => state.board;
export const selectWin = (state) => state.win;
export const selectLoss = (state) => state.loss;

export default boardSlice.reducer;