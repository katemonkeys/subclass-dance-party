var MoveNShaker = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //canNOT call "arguments" here
  this.timeBetweenSteps = timeBetweenSteps;
};

MoveNShaker.prototype = Object.create(Dancer.prototype);
MoveNShaker.prototype.constructor = MoveNShaker;

MoveNShaker.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var colString = '#';

  for (var i=0;i<3;i++) {
    var temp = Math.floor(Math.random()*255);
    colString += temp.toString(16);
  }

  this.$node.css({"border": "10px solid " + colString});
  this.$node.animate({"left":Math.random()*1200});
  this.$node.animate({"top":Math.random()*1200});
};