var sketch = function (p) {

  var x = 100;
  var y = 100;
  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(0, 30, 100);
    p.fill(10, 180, 220);
    p.rect(x, y, 100, 100);
  };
};

var blaSketch = new p5(sketch);
