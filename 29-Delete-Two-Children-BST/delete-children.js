// Function to display the tree structure
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// Node class representing individual nodes in the binary search tree
class Node {
  // Constructor to initialize the node with a value
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree class representing the binary search tree itself
class BinarySearchTree {
  // Constructor to initialize an empty tree with no root
  constructor() {
    this.root = null;
  }

  // Method to remove a node with a given value from the tree
  remove(value) {
    // If the tree is empty, return null
    if (this.root === null) {
      return null;
    }

    let target = null; // Node to be removed
    let parent = null; // Parent of the node to be removed

    // Helper function to find the target node and its parent. The default paramater is the root node, causing the function to start at the root. This function is recursive. The base case is when the node is null, in which case the function returns null. If the value is found, the target node is set to the current node. If the value is less than the current node's value, the parent is set to the current node and the function is called recursively on the left child. If the value is greater than the current node's value, the parent is set to the current node and the function is called recursively on the right child.
    const findValue = (node = this.root) => {
      if (node === null) {
        return null;
      }
      if (value === node.value) {
        target = node;
      } else if (value < node.value) {
        parent = node;
        return findValue(node.left);
      } else {
        parent = node;
        return findValue(node.right);
      }
    };

    // Find the target node and its parent
    findValue();

    // If the target node is not found, return null
    if (target === null) {
      return null;
    }

    // Count the children of the target node
    const children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);

    // Case 1: Target has no children
    if (children === 0) {
      if (target === this.root) {
        this.root = null; // If the target is the root, set the root to null
      } else {
        if (parent.left === target) {
          parent.left = null; // Remove the target node from its parent
        } else {
          parent.right = null;
        }
      }
    }

    // Case 2: Target has one child
    if (children === 1) {
      const child = target.left !== null ? target.left : target.right; // Get the single child

      if (target === this.root) {
        this.root = child; // If the target is the root, set the root to the child
      } else {
        if (parent.left === target) {
          parent.left = child; // Replace the target node with its child
        } else {
          parent.right = child;
        }
      }
    }

    // Case 3: Target has two children -- this is the case you need to implement
  }
}

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = { Node, BinarySearchTree };
