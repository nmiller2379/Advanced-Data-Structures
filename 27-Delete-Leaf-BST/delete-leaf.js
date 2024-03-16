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
  // Add your methods here
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const aux = this.findMinNode(node.right);
      node.value = aux.value;
      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }
}

// const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(12);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// tree.root.left.left = new Node(6);

// displayTree(tree);

// tree.remove(6);

// displayTree(tree);

const newTree = new BinarySearchTree();
console.log(newTree.remove(15));

module.exports = { Node, BinarySearchTree };
