var FadeyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //canNOT call "arguments" here
  this.timeBetweenSteps = timeBetweenSteps;
};

FadeyDancer.prototype = Object.create(Dancer.prototype);
FadeyDancer.prototype.constructor = FadeyDancer;

FadeyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
    var colString = '#';

  for (var i=0;i<3;i++) {
    var temp = Math.floor(Math.random()*255);
    colString += temp.toString(16);
  }

  this.$node.css({"border": Math.random()*30 + "px solid " + colString, "background-color": "10px solid " + colString});
  this.$node.animate({"padding": Math.random()*30 + 'px'});
};
