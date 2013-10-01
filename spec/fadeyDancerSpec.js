describe("fadeyDancer", function() {

  var fadeyDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeyDancer = new FadeyDancer(20, 40, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fadeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that fades in and out", function() {
    sinon.spy(fadeyDancer.$node, 'fadeToggle');
    fadeyDancer.step();
    expect(fadeyDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(fadeyDancer, "step");
      expect(fadeyDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeyDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(fadeyDancer.step.callCount).to.be.equal(3);
    });
  });


});
