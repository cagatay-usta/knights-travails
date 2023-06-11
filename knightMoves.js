// build graph
class Node {
  constructor(place, prev = null) {
    this.place = place;
    this.prev = prev;
  }
}
// recursively calculate the distance for each possible move until discovered
export default function knightMoves(start, end) {
  const route = [];

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

  // helper function to print the route when the end node is found
  const printRoute = (node) => {
    const route = [];
    let tmp = node;
    while (tmp.prev) {
      route.unshift(tmp.place);
      tmp = tmp.prev;
    }
    route.unshift(tmp);
    route.forEach((item) => {
      console.log(`${item} -> `);
    });
  };

  // add possible moves to queue
  const queue = [];
  queue.push(start);
  while (queue.length) {
    const place = queue.shift();
    const moves = possibleMoves(place);
    const discovered = [];
    // if the ending square found, return the route immediately
    if (moves.some((move) => move[0] === end[0] && move[1] === end[1]))
      return printRoute(new Node(end, place));
    // else create nodes for each and add them to queue
  }

  return null;
}
