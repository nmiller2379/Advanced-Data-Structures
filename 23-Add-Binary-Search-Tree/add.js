// See your tree in the console
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Your code goes here
}

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = BinarySearchTree;
