class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  push (val) {
    this.storage[this.key] = val;
    this.key++;
  }

  pop () {
    if (this.key === 0) {
      return 0;
    }
    var popped = this.storage[this.key - 1];
    delete this.storage[this.key - 1];
    this.key--;

    return popped;
  }

  size () {
    return this.key;
  }
}