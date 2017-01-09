export default function registerNeighbours(board) {
  return board.map((row, rowIndex, board) => {
    return row.map((cell, cellIndex) => {
      const left = wrapAround(cellIndex - 1, row.length);
      const right = wrapAround(cellIndex + 1, row.length);
      const up = wrapAround(rowIndex - 1, row.length);
      const down = wrapAround(rowIndex + 1, row.length);

      const neighbours = [
        board[up][left],
        board[up][cellIndex],
        board[up][right],
        board[rowIndex][left],
        board[rowIndex][right],
        board[down][left],
        board[down][cellIndex],
        board[down][right]
      ];

      cell.set('neighbours', neighbours);
      return cell;
    });
  });
}

function wrapAround(index, length) {
  if (index === -1) {
    return length - 1;
  } else if (index === length) {
    return 0;
  } else {
    return index;
  }
}
