var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.key = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.key] = val;
  this.key++;
};

Queue.prototype.dequeue = function () {
  if (this.key === 0) {
    return 0;
  }

  if (this.key === 1) {
    var dequeued = this.storage[this.key - 1];
    delete this.storage[this.key - 1];
    this.key--;
    return dequeued;
  } else if (this.key > 1) {
    var dequeued = this.storage[0];
    for (var i = 0; i < Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.key - 1];
    return dequeued;
  }
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};
