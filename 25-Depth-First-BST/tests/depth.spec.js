const { expect } = require("chai");
const { BinarySearchTree } = require("../depth");
const { Node } = require("../depth");

console.log(BinarySearchTree);

describe("BinarySearchTree", () => {
  it('should have methods named "inOrder", "preOrder", and "postOrder"', () => {
    const bst = new BinarySearchTree();
    expect(typeof bst.inOrder).to.equal("function");
    expect(typeof bst.preOrder).to.equal("function");
    expect(typeof bst.postOrder).to.equal("function");
  });
  it("should return an array of values visited in-order", () => {
    const bst = new BinarySearchTree();
    bst.root = new Node(15);
    bst.root.left = new Node(10);
    bst.root.right = new Node(20);
    bst.root.left.left = new Node(8);
    bst.root.left.right = new Node(12);
    bst.root.right.left = new Node(16);
    bst.root.right.right = new Node(25);
    expect(bst.inOrder()).to.eql([8, 10, 12, 15, 16, 20, 25]);
  });
  it("should return an array of values visited pre-order", () => {
    const bst = new BinarySearchTree();
    bst.root = new Node(15);
    bst.root.left = new Node(10);
    bst.root.right = new Node(20);
    bst.root.left.left = new Node(8);
    bst.root.left.right = new Node(12);
    bst.root.right.left = new Node(16);
    bst.root.right.right = new Node(25);
    expect(bst.preOrder()).to.eql([15, 10, 8, 12, 20, 16, 25]);
  });
  it("should return an array of values visited post-order", () => {
    const bst = new BinarySearchTree();
    bst.root = new Node(15);
    bst.root.left = new Node(10);
    bst.root.right = new Node(20);
    bst.root.left.left = new Node(8);
    bst.root.left.right = new Node(12);
    bst.root.right.left = new Node(16);
    bst.root.right.right = new Node(25);
    expect(bst.postOrder()).to.eql([8, 12, 10, 16, 25, 20, 15]);
  });
  it("should return null for an empty tree", () => {
    const bst = new BinarySearchTree();
    expect(bst.inOrder()).to.equal(null);
    expect(bst.preOrder()).to.equal(null);
    expect(bst.postOrder()).to.equal(null);
  });
});
