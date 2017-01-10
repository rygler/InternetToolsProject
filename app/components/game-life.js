import Ember from 'ember';

let myGame;

export default Ember.Component.extend({
  didInsertElement: function () {

    myGame = new GameOfLife({
      canvas_id: "gameoflife_canvas",
      num_cols: 80,
      num_rows: 40,
      cell_size: 10,
      color_lines: "#cccccc",
      color_cell_dead: "#a2a2a2",
      color_cell_alive: "#a567db",
      update_interval: 50
    });

  },
  actions: {

    start() {
      myGame.start();
      console.log("game started");
    },
    stop() {
      myGame.stop();
      console.log("game stopped");
    },
    step() {
      myGame.step();
      console.log("step forward");
    },
    reset() {
      myGame.reset();
      console.log("game reset");
    },
    blinker() {
      myGame.setState([
        {col: 2, row: 1},
        {col: 2, row: 2},
        {col: 2, row: 3}
      ]);
    },
    glider() {
      myGame.setState([
        {col: 6, row: 3},
        {col: 7, row: 1},
        {col: 7, row: 3},
        {col: 8, row: 2},
        {col: 8, row: 3}
      ]);
    },
    pentadecathlon() {
      myGame.setState([
        {col: 23, row: 5},
        {col: 23, row: 10},
        {col: 24, row: 3},
        {col: 24, row: 4},
        {col: 24, row: 6},
        {col: 24, row: 7},
        {col: 24, row: 8},
        {col: 24, row: 9},
        {col: 24, row: 11},
        {col: 24, row: 12},
        {col: 25, row: 5},
        {col: 25, row: 10}
      ]);
    },
    gostersGliderGun() {
      myGame.setState([
        {col: 1, row: 31},
        {col: 1, row: 32},
        {col: 2, row: 31},
        {col: 2, row: 32},
        {col: 11, row: 31},
        {col: 11, row: 32},
        {col: 11, row: 33},
        {col: 12, row: 30},
        {col: 12, row: 34},
        {col: 13, row: 29},
        {col: 13, row: 35},
        {col: 14, row: 29},
        {col: 14, row: 35},
        {col: 15, row: 32},
        {col: 16, row: 30},
        {col: 16, row: 34},
        {col: 17, row: 31},
        {col: 17, row: 32},
        {col: 17, row: 33},
        {col: 18, row: 32},
        {col: 21, row: 29},
        {col: 21, row: 30},
        {col: 21, row: 31},
        {col: 22, row: 29},
        {col: 22, row: 30},
        {col: 22, row: 31},
        {col: 23, row: 28},
        {col: 23, row: 32},
        {col: 25, row: 27},
        {col: 25, row: 28},
        {col: 25, row: 32},
        {col: 25, row: 33},
        {col: 35, row: 29},
        {col: 35, row: 30},
        {col: 36, row: 29},
        {col: 36, row: 30}
      ]);
    },
    acorn() {
      myGame.setState([
        {col: 35, row: 22},
        {col: 36, row: 20},
        {col: 36, row: 22},
        {col: 38, row: 21},
        {col: 39, row: 22},
        {col: 40, row: 22},
        {col: 41, row: 22}
      ]);
    }
  }
});

