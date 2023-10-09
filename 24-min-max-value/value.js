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

  // Add method to add values to the tree
  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return undefined;
    }

    return this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value === node.value) {
      return null; // Value already exists, return null
    }

    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
        return undefined;
      } else {
        return this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
        return undefined;
      } else {
        return this.insertNode(node.right, newNode);
      }
    }
  }

  // Your code goes here
}

// DO NOT CHANGE CODE BELOW THIS LINE
module.exports = BinarySearchTree;
