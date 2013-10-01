var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  //canNOT call "arguments" here
  this.timeBetweenSteps = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work, so we must keep a copy of the old version of this function
  Dancer.prototype.step.call(this);
  //BlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};
