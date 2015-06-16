var makeDancer = function (top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step()
  this.setPosition()
};

makeDancer.prototype.step = function () {
  var that = this;

  setTimeout(function () {
    that.step();
  }, this.timeBetweenSteps)
};

makeDancer.prototype.setPosition = function () {

  var styleSettings = {
    top: this.top,
    left: this.left
  }

  this.$node.css(styleSettings);
};
