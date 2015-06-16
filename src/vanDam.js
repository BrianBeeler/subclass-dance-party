var vanDam = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="square-dancer"></span>');
  // this.$node = $('<div class="square-dancer"></div>');
  this.$node.addClass('van-dam');
};

vanDam.prototype = Object.create(makeDancer.prototype);
vanDam.prototype.constructor = vanDam;

vanDam.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
