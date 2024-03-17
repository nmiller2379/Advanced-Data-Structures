const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Your code goes here
}

module.exports = { Node, BinarySearchTree };
