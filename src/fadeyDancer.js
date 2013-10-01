var FadeyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //canNOT call "arguments" here
  this.timeBetweenSteps = timeBetweenSteps;
};

FadeyDancer.prototype = Object.create(Dancer.prototype);
FadeyDancer.prototype.constructor = FadeyDancer;

FadeyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
