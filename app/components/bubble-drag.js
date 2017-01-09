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

function hi () {
  console.log('hello');
}

var bubbles = [];

function setup() {
  createCanvas(600,400);
  for (var i = 0;i< 2; i++){
    bubbles[i]= new Bubble(random(0,width),random(0,height));
  }
}

// setup();

export default Ember.Component.extend({


  didInsertElement: function () {

    hi();

  },


mouseMove: function () {
  console.log("hi");
},

  doubleClick: function() {
    alert("DoubleClickableComponent was clicked!");
  }

});
