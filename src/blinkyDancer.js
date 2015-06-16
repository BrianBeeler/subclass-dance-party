
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// copies methods
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  // oldStep();
  this.$node.toggle();
};



// var streetFighter = function (top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node = $('<div class="streetFighter"></div>');
// };
//
// streetFighter.prototype = Object.create(makeDancer.prototype);
// streetFighter.prototype.constructor = streetFighter;
//
// streetFighter.prototype.step = function () {
//
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };
