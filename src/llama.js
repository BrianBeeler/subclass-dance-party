var llama = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('llama');
};

llama.prototype = Object.create(makeDancer.prototype);
llama.prototype.constructor = llama;

llama.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};
