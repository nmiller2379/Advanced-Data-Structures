// Function to display the tree structure in a readable format
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// Node class represents a single node in the binary search tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;  // Reference to the left child node
    this.right = null; // Reference to the right child node
  }
}

// BinarySearchTree class represents the binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null; // Reference to the root node of the tree
  }

  // Level Order Traversal: Traverse the tree level by level from left to right
  levelOrder() {
    if (!this.root) {
      return null; // Return null if the tree is empty
    }
    const queue = [];   // Queue to keep track of nodes at each level
    const result = [];  // Array to store the traversal result
    queue.push(this.root); // Start traversal from the root node

    while (queue.length > 0) {
      const node = queue.shift(); // Dequeue the front node
      result.push(node.value);    // Add the node's value to the result

      // Enqueue the left and right children, if they exist
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result; // Return the level order traversal result
  }

  // Reverse Level Order Traversal: Traverse the tree level by level from right to left
  reverseLevelOrder() {
    if (!this.root) {
      return null; // Return null if the tree is empty
    }
    const queue = [];   // Queue to keep track of nodes at each level
    const result = [];  // Array to store the traversal result
    queue.push(this.root); // Start traversal from the root node

    while (queue.length > 0) {
      const node = queue.shift(); // Dequeue the front node
      result.push(node.value);    // Add the node's value to the result

      // Enqueue the right and left children, if they exist
      if (node.right) {
        queue.push(node.right);
      }
      if (node.left) {
        queue.push(node.left);
      }
    }
    return result; // Return the reverse level order traversal result
  }
}

// Create a binary search tree and populate it with nodes
const bst = new BinarySearchTree();
bst.root = new Node(15);
bst.root.left = new Node(10);
bst.root.right = new Node(20);
bst.root.left.left = new Node(8);
bst.root.left.right = new Node(12);
bst.root.right.left = new Node(16);
bst.root.right.right = new Node(25);

// Display the tree structure
displayTree(bst);

// Print the level order and reverse level order traversals
console.log(bst.levelOrder());
console.log(bst.reverseLevelOrder());
