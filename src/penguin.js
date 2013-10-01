var Penguin = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //canNOT call "arguments" here
  this.timeBetweenSteps = timeBetweenSteps;

};

Penguin.prototype = Object.create(Dancer.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var colString = '#';

  for (var i=0;i<3;i++) {
    var temp = Math.floor(Math.random()*255);
    colString += temp.toString(16);
  }


  this.$node.animate({"left":Math.random()*1400, "top":Math.random()*800}, 3000);
  this.$node.css("transform","rotate("+Math.random()*180+"deg)");
};