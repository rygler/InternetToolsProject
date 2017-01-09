import Ember from 'ember';

// var myGame;

export default Ember.Route.extend({

  didInsertElement: function () {
    console.log("hi this is stuff");
    var myGame = new GameOfLife({
      canvas_id:              "gameoflife_canvas",
      num_cols:               80,
      num_rows:               40,
      cell_size:              10,
      color_lines:            "#cccccc",
      color_cell_dead:        "#ffffff",
      color_cell_alive:       "#57A0DB",
      update_interval:        50
    });

    myGame.setState([
      {col: 1, row: 0},
      {col: 1, row: 1},
      {col: 1, row: 2}
    ]);
    myGame.start();
    console.log("game started");
  },
  actions: {
    step() {

    },
    start() {

    }
  }
});
