const { expect } = require("chai");
const BinarySearchTree = require("../value");

describe("Data structure: BinarySearchTree", () => {
  describe("findMin()", () => {
    it("should return null for an empty tree", () => {
      const bst = new BinarySearchTree();
      expect(bst.findMin()).to.be.null;
    });
  });

  describe("findMax()", () => {
    it("should return null for an empty tree", () => {
      const bst = new BinarySearchTree();
      expect(bst.findMax()).to.be.null;
    });
  });

  describe("findMin()", () => {
    it("should return the minimum value in the tree", () => {
      const bst = new BinarySearchTree();
      bst.add(10);
      bst.add(5);
      bst.add(20);
      bst.add(3);
      bst.add(7);
      bst.add(15);
      bst.add(25);
      expect(bst.findMin()).to.equal(3);
    });
  });

  describe("findMax()", () => {
    it("should return the maximum value in the tree", () => {
      const bst = new BinarySearchTree();
      bst.add(10);
      bst.add(5);
      bst.add(20);
      bst.add(3);
      bst.add(7);
      bst.add(15);
      bst.add(25);
      bst.add(30);
      expect(bst.findMax()).to.equal(30);
    });
  });
});
