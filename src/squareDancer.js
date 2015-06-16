var squareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="square-dancer"></span>');
  this.$node.addClass('square-dancer');
};

squareDancer.prototype = Object.create(makeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;

squareDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
