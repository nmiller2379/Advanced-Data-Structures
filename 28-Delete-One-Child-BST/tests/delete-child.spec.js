const { expect } = require("chai");
const { Node, BinarySearchTree } = require("../delete-child");

describe("BinarySearchTree", () => {
  describe("remove()", () => {
    it("should return null for an empty tree", () => {
      const bst = new BinarySearchTree();
      expect(bst.remove(15)).to.equal(null);
    });
    it("should return null for a value not in the tree", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      expect(bst.remove(10)).to.equal(null);
    });
    it("should remove a leaf node from the tree", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      bst.root.left = new Node(10);
      bst.root.right = new Node(20);
      bst.remove(10);
      expect(bst.root.left).to.equal(null);
    });
    it("should set the root to null if the root node has no children", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      bst.remove(15);
      expect(bst.root).to.equal(null);
    });
    it("should remove a node with one child from the tree", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      bst.root.left = new Node(10);
      bst.root.right = new Node(20);
      bst.root.left.left = new Node(5);
      bst.remove(10);
      expect(bst.root.left.value).to.equal(5);
    });
    it("should remove a node with one child from the tree", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      bst.root.left = new Node(10);
      bst.root.right = new Node(20);
      bst.root.right.right = new Node(25);
      bst.remove(20);
      expect(bst.root.right.value).to.equal(25);
    });
  });
});
