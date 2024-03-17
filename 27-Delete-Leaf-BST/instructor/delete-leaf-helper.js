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

  // Method to remove a node with a specific value from the tree
  remove(value) {
    // Helper function to find the node to remove within the current tree
    const findNode = (value, node) => {
      if (!node) return null;
      if (node.value === value) return node;
      if (value < node.value) return findNode(value, node.left);
      return findNode(value, node.right);
    };

    // Call the helper function to find the node to remove
    const nodeToRemove = findNode(value, this.root);

    // If the node to remove is not found, return null
    if (!nodeToRemove) return null;

    // Helper function to remove a node with one child or no child
    const removeNodeWithOneOrNoChild = (node) => {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      return node;
    };

    // Helper function to find the minimum node in a subtree
    const findMinNode = (node) => {
      while (node.left) {
        node = node.left;
      }
      return node;
    };

    // Helper function to remove the node from the tree
    const removeNode = (node, value) => {
      if (!node) return null;

      if (value < node.value) {
        node.left = removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
      } else {
        // Case when the node has one child or no child
        if (!node.left || !node.right) {
          node = removeNodeWithOneOrNoChild(node);
        }
        // Case when the node has two children
        else {
          const minRightNode = findMinNode(node.right);
          node.value = minRightNode.value;
          node.right = removeNode(node.right, minRightNode.value);
        }
      }
      return node;
    };

    // Call the removeNode function to remove the node from the tree
    this.root = removeNode(this.root, value);
  }
}