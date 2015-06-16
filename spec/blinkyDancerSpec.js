describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();

    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("vanDam", function () {
  var vanDam2;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    vanDam2 = new vanDam(10, 20, timeBetweenSteps);
  });

  it ("should have a jQuery $node object", function () {
    expect(vanDam.$node).to.be.an.instanceof(jQuery);
  });

  it ("should have a step function that makes its node blink", function () {
    sinon.spy(vanDam.$node, 'toggle');
    vanDam.step();
    expect(vanDam.$node.toggle.called).to.be.true;
  })

  describe("dance", function () {
    it("should call step at least once per second", function () {
      sinon.spy(vanDam, "step");
      expect(vanDam.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(vanDam.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(vanDam.step.callCount).to.be.equal(2);
    })
  })
});
