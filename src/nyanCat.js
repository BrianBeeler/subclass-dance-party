var Cat = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cat');
};

Cat.prototype = Object.create(makeDancer.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};
