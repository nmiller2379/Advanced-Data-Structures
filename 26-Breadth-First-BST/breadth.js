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
  // Your code here
}

const bst = new BinarySearchTree();
bst.root = new Node(15);
bst.root.left = new Node(10);
bst.root.right = new Node(20);
bst.root.left.left = new Node(8);
bst.root.left.right = new Node(12);
bst.root.right.left = new Node(16);
bst.root.right.right = new Node(25);

displayTree(bst);

console.log(bst.levelOrder());
console.log(bst.reverseLevelOrder());

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = { Node, BinarySearchTree };
