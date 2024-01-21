const { expect } = require("chai");
const { Node, BinarySearchTree } = require("../breadth");

describe("BinarySearchTree", () => {
  describe("levelOrder()", () => {
    it("should return null for an empty tree", () => {
      const bst = new BinarySearchTree();
      expect(bst.levelOrder()).to.equal(null);
    });
    it("should return an array of values for a tree with one node", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      expect(bst.levelOrder()).to.eql([15]);
    });
    it("should return an array of values in level order for a tree with multiple nodes", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      bst.root.left = new Node(10);
      bst.root.right = new Node(20);
      expect(bst.levelOrder()).to.eql([15, 10, 20]);
    });
  });
  describe("reverseLevelOrder()", () => {
    it("should return null for an empty tree", () => {
      const bst = new BinarySearchTree();
      expect(bst.reverseLevelOrder()).to.equal(null);
    });
    it("should return an array of values for a tree with one node", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      expect(bst.reverseLevelOrder()).to.eql([15]);
    });
    it("should return an array of values in reverse level order for a tree with multiple nodes", () => {
      const bst = new BinarySearchTree();
      bst.root = new Node(15);
      bst.root.left = new Node(10);
      bst.root.right = new Node(20);
      expect(bst.reverseLevelOrder()).to.eql([15, 20, 10]);
    });
  });
});
