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
}

// Example usage:
const tree = new BinarySearchTree();
tree.add(10); // Adds 10 to the tree
tree.add(5); // Adds 5 to the tree
tree.add(15); // Adds 15 to the tree
tree.add(10); // Returns null because 10 already exists in the tree

displayTree(tree);

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = BinarySearchTree;
