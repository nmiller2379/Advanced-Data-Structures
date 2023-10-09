const { expect } = require("chai");
const BinarySearchTree = require("../add");

describe("BinarySearchTree", () => {
  describe("add method", () => {
    it("should add elements according to the binary search tree rules", () => {
      const tree = new BinarySearchTree();
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(10);
      expect(tree.root.value).to.equal(10);
      expect(tree.root.left.value).to.equal(5);
      expect(tree.root.right.value).to.equal(15);
      expect(tree.root.left.left).to.equal(null);
      expect(tree.root.left.right).to.equal(null);
      expect(tree.root.right.left).to.equal(null);
      expect(tree.root.right.right).to.equal(null);
    });
    it("should return null when adding an element that already exists", () => {
      const tree = new BinarySearchTree();
      tree.add(10);
      tree.add(5);
      tree.add(15);
      expect(tree.add(10)).to.equal(null);
    });
  });
});