// Display the tree structure in a readable format
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// Node class represents a single node in the BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // Reference to the left child node
    this.right = null; // Reference to the right child node
  }
}

// BinarySearchTree class represents the entire Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null; // Reference to the root node of the tree
  }

  // Your code goes here
}

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = { Node, BinarySearchTree };
