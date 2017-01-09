//
//
// var sketch = function (p) {
//
//   function Bubble (x,y) {
//     this.x = x;
//     this.y = y;
//     this.lifespan = 255
//
//     this.display = function () {
//       p.stroke(200);
//       p.fill(255,this.lifespan);
//       p.ellipse(this.x,this.y, 24,24);
//     }
//
//     this.move = function () {
//       this.x = this.x + random(-1,1);
//       this.y = this.y + random(-1,1);
//       this.lifespan = this.lifespan -1;
//     }
//   }
//
//   var bubbles = [];
//
//   p.setup = function () {
//     p.createCanvas(600, 400);
//     for (var i = 0; i < 2; i++) {
//       bubbles[i] = new Bubble(random(0, width), random(0, height));
//     }
//   }
//
//   p.mouseDragged = function () {
//     bubbles.push(new Bubble(mouseX, mouseY));
//   }
//
//
//   p.draw() = function () {
//     p.background(0);
//     for (var i = bubbles.length - 1; i >= 0; i--) {
//       bubbles[i].move();
//       bubbles[i].display();
//
//       if (bubbles[i].lifespan < 0) {
//         bubbles.splice(i, 1);
//       }
//     }
//   }
//
// }

var sketch = function (p) {

  var x = 100;
  var y = 100;
  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(100, 49, 190);
    p.fill(0, 80, 220);
    p.rect(x, y, 100, 100);
  };
};

var bubbleSketch = new p5(sketch);
