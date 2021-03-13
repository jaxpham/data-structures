var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // FIFO
  var storage = {};
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    if (key === 0) {
      return 0;
    }

    if (key === 1) {
      var dequeued = storage[key - 1];
      delete storage[key - 1];
      key--;
      return dequeued;
    } else if (key > 1) {
      var dequeued = storage[0];
      for (var i = 0; i < Object.keys(storage).length; i++) {
        storage[i] = storage[i + 1];
      }
      delete storage[key - 1];
      return dequeued;
    }

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

