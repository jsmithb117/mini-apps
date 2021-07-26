const initialState = {
  currentPlayer: 1,
  numberOfPlayers: 1,
  players: [
    {
      rawScore: [
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null, null]
      ],
      player: 1,
      frame: 1,
      roll: 1,
      score: 0
    }
  ]
};

module.exports = initialState;