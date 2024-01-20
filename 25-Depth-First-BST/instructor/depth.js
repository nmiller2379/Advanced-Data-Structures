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

  // In-order traversal: Visit left subtree, current node, then right subtree
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      // Helper function for recursive in-order traversal
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left); // Traverse left subtree
        result.push(node.value); // Visit current node
        node.right && traverseInOrder(node.right); // Traverse right subtree
      }
      traverseInOrder(this.root); // Start traversal from the root
      return result; // Return the in-order traversal result
    }
  }

  // Pre-order traversal: Visit current node, left subtree, then right subtree
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      // Helper function for recursive pre-order traversal
      function traversePreOrder(node) {
        result.push(node.value); // Visit current node
        node.left && traversePreOrder(node.left); // Traverse left subtree
        node.right && traversePreOrder(node.right); // Traverse right subtree
      }
      traversePreOrder(this.root); // Start traversal from the root
      return result; // Return the pre-order traversal result
    }
  }

  // Post-order traversal: Visit left subtree, right subtree, then current node
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      // Helper function for recursive post-order traversal
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left); // Traverse left subtree
        node.right && traversePostOrder(node.right); // Traverse right subtree
        result.push(node.value); // Visit current node
      }
      traversePostOrder(this.root); // Start traversal from the root
      return result; // Return the post-order traversal result
    }
  }
}

// Create a Binary Search Tree and populate it with nodes
let bst = new BinarySearchTree();
bst.root = new Node(15);
bst.root.left = new Node(10);
bst.root.right = new Node(20);
bst.root.left.left = new Node(8);
bst.root.left.right = new Node(12);
bst.root.right.left = new Node(16);
bst.root.right.right = new Node(25);

// Display the inorder traversal result
console.log(bst.inOrder());

// Display the pre-order traversal result
console.log(bst.preOrder());

// Display the post-order traversal result
console.log(bst.postOrder());

displayTree(bst);

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = { Node, BinarySearchTree };
