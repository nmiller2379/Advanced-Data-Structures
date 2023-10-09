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

  // Find min value
  findMin() {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // Find max value
  findMax() {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
}

// Example usage:
const tree = new BinarySearchTree();
tree.add(9);
tree.add(4);
tree.add(17);
tree.add(3);
tree.add(16);

displayTree(tree);

console.log(tree.findMin()); // Returns 3
console.log(tree.findMax()); // Returns 17

// DO NOT CHANGE CODE BELOW THIS LINE
module.exports = BinarySearchTree;
