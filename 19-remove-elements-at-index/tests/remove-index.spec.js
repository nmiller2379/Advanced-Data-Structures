const { expect } = require("chai");
const LinkedList = require("../remove-index");

// LinkedList class should have a removeAt method.

// removeAt method should reduce the size of the linked list by one.

// removeAt method should remove the node at the specified index.

// removeAt method should return the removed node.

// removeAt method should return null if the index is out of bounds.

describe("LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should have a removeAt method", () => {
    expect(linkedList.removeAt).to.be.a("function");
  });

  it("should reduce the size of the linked list by one", () => {
    linkedList.add("a");
    linkedList.add("b");
    linkedList.add("c");
    linkedList.removeAt(1);
    expect(linkedList.size).to.equal(2);
  });

  it("should remove the node at the specified index", () => {
    linkedList.add("a");
    linkedList.add("b");
    linkedList.add("c");
    linkedList.removeAt(1);
    expect(linkedList.elementAt(1)).to.equal("c");
  });

  it("should return the removed node", () => {
    linkedList.add("a");
    linkedList.add("b");
    linkedList.add("c");
    const removed = linkedList.removeAt(1);
    expect(removed.data).to.equal("b");
  });

  it("should return null if the index is out of bounds", () => {
    linkedList.add("a");
    linkedList.add("b");
    linkedList.add("c");
    const removed = linkedList.removeAt(3);
    expect(removed).to.equal(null);
  });

  it("should return null if the index is less than 0", () => {
    linkedList.add("a");
    linkedList.add("b");
    linkedList.add("c");
    const removed = linkedList.removeAt(-1);
    expect(removed).to.equal(null);
  });
});
