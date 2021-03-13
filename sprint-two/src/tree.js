var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;

};

var treeMethods = {};


treeMethods.addChild = function(value) {

  var newNode = new Tree(value);
  this.children.push(newNode);

};

treeMethods.contains = function(target) {
  var found = false;

  if (this.value === target) {
    found = true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      var currentNode = this.children[i];

      if (currentNode.contains(target)) {
        found = currentNode.contains(target);
        return found;
      }
    }
  }
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?

  .contains = O(n)
 */


/*
    5
   / \
  1   3

1:tree(5) ->

tree = {
  newTree: 5,
  children: []
  treeMethods:{}
}

2:tree.addChild(1);
3:tree.addChild(3);

tree = {
  newTree: 5,
  children: [{0:1}, {1:3}]
  treeMethods:{}
}


DFS
Inorder traversal

     20
    / \
  15   25
  / \    \
 13  18   30

function inOrder(root) {
  root.left && inOrder(root.left)
  console.log(root.val)
  root.right && inOrder(root.right)
}


node.inOder(node) // 13, 15, 18, 20, 25, 30
*/

// var Tree = Tree();
// Tree.addChild(5);
// tree.children[0].addChild(6);
// expect(tree.children[0].children[0].value).to.equal(6);
