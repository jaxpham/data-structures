var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.key = 0;
};


Stack.prototype.push = function (val) {
  this.storage[this.key] = val;
  this.key++;
};


Stack.prototype.pop = function () {
  if (this.key === 0) {
    return 0;
  }
  var popped = this.storage[this.key - 1];
  delete this.storage[this.key - 1];
  this.key--;

  return popped;
};

Stack.prototype.size = function () {
  return this.key;
};
