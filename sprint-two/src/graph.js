

// Instantiate a new graph
var Graph = function() {
  this.list = {};

};

/*

        7
      /  \
    6  -  8
        /
      1

      // Each key value pair should represent a node

      addNode(7); this.list  = {7:{}}
      addNode(6); this.list = {7:{}, 6:{}}
      addEdge(7,6); this.list = {7:{6:v}, 6:{7:v}}

      addNode(8); this.list = {7:{6:v}, 6:{7:v}, 8:{}}
      addEdge(7,8); this.list = {7:{6:v, 8:v}, 6:{7:v}, 8:{7:v}}

      delete this.list[node]; // 7:{}
      removeEdge(7,8); this.list = {7:{6:v, 8:v}, 6:{7:v}, 8:{7:v}}
      // iterate over the list node (key) 7/8, within their value,
      // for (var node in this.list) {
             if (node === fromNode || node === toNode) {
               for (var edge in this.list.node) {
                 if (edge === fromNode || node === toNode) {
                   delete this.likst.node[edge];
                 }
               }
             }
      }

      // iterate over the value, delete the nodes (key) 7/8


*/



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  if (!this.list[node]) {
    this.list[node] = {};
  }
  // this.node = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var nodeKey = Object.keys(this.list);

  if (nodeKey.includes(node.toString())) {
    return true;
  }
  return false;
};


// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  // we need to find toNode
  // addNode(7); this.list  = {7:{}}
  // addNode(6); this.list = {7:{}, 6:{}}
  // addEdge(7,6); this.list = {7:{6:v}, 6:{7:v}}

  for (var key in this.list) {
    delete this.list[key][node];
  }

  delete this.list[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  //input: fromNode / toNode
  //output: boolean
  if (this.list[fromNode][toNode] && this.list[toNode][fromNode]) {
    return true;
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // this.list[7][6] = {};
  // this.list[6][7] = {};

  // First access this.list, then access toNode or fromNode and then set it to {};
  this.list[fromNode][toNode] = {};
  this.list[toNode][fromNode] = {};

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.list[fromNode][toNode];
  delete this.list[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // input: cb
  // output: cb(node)

  //   for (var key in collection) {
  //     iterator(key);
  //   }


  for (var key in this.list) {
    cb(key);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


