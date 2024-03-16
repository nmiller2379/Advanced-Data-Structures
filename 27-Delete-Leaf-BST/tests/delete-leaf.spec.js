const { expect } = require("chai");
const { Node, BinarySearchTree } = require("../delete-leaf");

// The binary search tree should have a method called remove.
// The remove method should remove a leaf node from the tree.
// Trying to remove an element form an empty tree should return null.
// Trying to remove an element that is not in the tree should return null.
// If the root node has no children, deleting it should set the root to null.

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
  });
});
