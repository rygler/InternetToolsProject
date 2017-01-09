import Cell from 'strangeness/models/cell';

export default function boardGenerator(width, height, density) {
  const board = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const alive = Math.random() < density;
      row.pushObject(Cell.create({alive}));
    }
    board.pushObject(row);
  }

  return board;
}
