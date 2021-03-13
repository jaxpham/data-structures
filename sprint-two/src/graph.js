

// Instantiate a new graph
var Graph = function() {

  this.nodes = {};

};

/*

        7
      /  \
    6  -  8
        /
      1

      addNode(7); this.nodes = {7:{}}
      addNode(6); this.nodes = {7:{}, 6:{}}
      addNode(8); this.nodes = {7:{}, 6:{}, 8:{}}

      addEdge(7,6); this.nodes = {7:{6:form}, {6:{7:to} {8:{}}

      // Each key value pair should represent a node
*/



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  if (!this.nodes[node]) {
    this.nodes[node] = {};
  }
  // this.node = {};


};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var nodeKey = Object.keys(this.nodes);

  if (!nodeKey.includes(node)) {
    return true;
  }
  return false;
};




// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


