var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.key = 0;
  obj.storage = {};

  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.key] = val;
  this.key++;
};

stackMethods.pop = function() {
  if (this.key === 0) {
    return 0;
  }
  var popped = this.storage[this.key - 1];
  this.key--;

  return popped;
};

stackMethods.size = function () {
  return this.key;
};
