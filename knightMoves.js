class Node {
  constructor(place, prev = null, distance = null) {
    this.place = place;
    this.distance = distance;
    this.prev = prev;
  }
}

export default function knightMoves(start, end) {
  // function to find all possible legal moves
  const possibleMoves = ([x, y]) => {
    const moves = [
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y - 2],
      [x - 1, y + 2],
      [x + 1, y - 2],
      [x + 1, y + 2],
      [x + 2, y - 1],
      [x + 2, y + 1],
    ];
    return moves.filter((move) => {
      if (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7)
        return true;
    });
  };

  // build the board graph
  const board = (() => {
    const board = {};
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        board[`${i},${j}`] = new Node([i, j]);
      }
    }
    return board;
  })();

  // helper function to print the route when the end node is found
  const printRoute = (node) => {
    const route = [];
    let tmp = node;
    route.unshift(tmp.place);
    while (tmp.prev) {
      tmp = tmp.prev;
      route.unshift(tmp.place);
    }
    console.log(route.join(" -> "));
  };

  // helper function to compare arrays eg. [0, 1] == [0, 1] -> true
  const compareMove = (move1, move2) => {
    if (move1[0] == move2[0] && move1[1] == move2[1]) return true;
    else return false;
  };

  const queue = [];
  queue.push(board[start]);
  board[start].distance = 0;
  while (queue.length) {
    const current = queue.shift();
    const moves = possibleMoves(current.place);
    moves.forEach((move) => {
      // check if moves already visited
      if (board[move].distance === null) {
        board[move].prev = current;
        board[move].distance = current.distance + 1;
        // if found return the result immediately
        if (compareMove(move, end)) return printRoute(board[move]);
        // if not found push the moves to queue
        queue.push(board[move]);
      }
    });
  }

  return null;
}
