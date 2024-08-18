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
    // If the tree is empty, return null
    if (!this.root) return null;

    let parent; // Variable to keep track of the parent node
    let target = this.root; // Start searching from the root node
    // Traverse the tree to find the node with the specified value
    while (target && target.value !== value) {
      parent = target; // Update the parent node
      // Decide whether to move left or right based on the comparison of values
      if (target.value > value) {
        target = target.left; // Move left
      } else {
        target = target.right; // Move right
      }
    }
    // If the target node is not found, return null
    if (!target) return null;

    // If the target node is the root node
    if (!parent) {
      this.root = null; // Set the root to null (tree becomes empty)
    } else {
      // If the target node is not the root
      const direction = parent.left === target ? "left" : "right"; // Determine the direction from parent
      parent[direction] = null; // Remove the target node by setting its parent's reference to null
    }

    // Case where the target node has a single child
    if (target.left && !target.right) {
      const direction = parent.left === target ? "left" : "right"; // Determine the direction from parent
      parent[direction] = target.left; // Replace the target node with its left child
    } else if (target.right && !target.left) {
      const direction = parent.left === target ? "left" : "right"; // Determine the direction from parent
      parent[direction] = target.right; // Replace the target node with its right child
    }
  }
}

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = { Node, BinarySearchTree };
