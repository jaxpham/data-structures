var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (!this.head) {
      return undefined;
    }

    var curHead = this.head;
    this.head = curHead.next;

    return curHead.value;

  };

  list.contains = function(target) {
    // iterate over the linkedlist
    // compare the curent node value to target

    var current = this.head;

    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  addToTail = O(1);
  removeHead = O(1);
  contains = O(n);

 */
