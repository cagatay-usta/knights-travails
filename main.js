import knightMoves from "./knightMoves.js";

knightMoves([0, 0], [2, 1]); // 0,0 -> 2,1
knightMoves([7, 7], [0, 0]); // 7,7 -> 5,6 -> 3,5 -> 1,4 -> 0,2 -> 2,1 -> 0,0
knightMoves([1, 4], [7, 1]); // 1,4 -> 3,3 -> 5,2 -> 7,1
