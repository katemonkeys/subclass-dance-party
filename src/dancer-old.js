// Creates and returns a new dancer object that can step
var GenericDancer = function(top, left, timeBetweenSteps){

  var dancer = {};
  this.top = top || 500;
  this.left = left || 500;
  this.timeBetweenSteps = timeBetweenSteps || 1000;
  //these were just arbitrary before i learn how CSS pulls the top and left pixel of a screen

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer shake"></span>');
  return dancer;
};

GenericDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
  //!!!! setTimeout, when it eventually runs, migth NOT be bound to the thing you think at the time it runs.
  //!!!! Like now it is bound to window which is all wrong. line 22 is more probably ok but 18 is definitely bad. 
  //!!!! setTimeout makes the "this" reference subtly unexpected. Better to say: setTimeout(this.step.bind(this),this.timeBetweenSteps);
  this.step();
};

GenericDancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  // this.$node.css(styleSettings);
  this.setPosition(top, left);
};