import Ember from 'ember';

function Bubble (x,y) {
  this.x = x;
  this.y = y;
  this.lifespan = 255

  this.display = function () {
    stroke(200);
    fill(255,this.lifespan);
    ellipse(this.x,this.y, 24,24);
  }

  this.move = function () {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    this.lifespan = this.lifespan -1;
  }
}

export function bubbleDrag() {

  var bubbles = [];



  function mouseDragged(){
    bubbles.push(new Bubble(mouseX,mouseY));
  }


  function draw() {
    background(0);
    for (var i =bubbles.length-1 ; i>= 0; i --) {
      bubbles[i].move();
      bubbles[i].display();

      if (bubbles[i].lifespan < 0){
        bubbles.splice(i,1);
      }
    }
  }

}

export default Ember.Helper.helper(bubbleDrag);
