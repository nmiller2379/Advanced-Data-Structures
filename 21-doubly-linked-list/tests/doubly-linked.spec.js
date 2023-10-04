const { expect } = require("chai");
const DoublyLinkedList = require("../doubly-linked");


describe("DoublyLinkedList", () => {
  let doublyLinkedList;
  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  it("should be able to add a node to the end of the list", () => {
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    expect(doublyLinkedList.tail.data).to.equal("third");
  });

  it("should be able to remove a node from the list", () => {
    // doublyLinkedList.size should equal 2 after element removed
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    doublyLinkedList.remove("second");
    expect(doublyLinkedList.size).to.equal(2);
  });

  it("should be able to remove the first node from the list", () => {
    // doublyLinkedList.size should equal 2 after element removed
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    doublyLinkedList.remove("first");
    expect(doublyLinkedList.size).to.equal(2);
  });

  it("should be able to remove the last node from the list", () => {
    // doublyLinkedList.size should equal 2 after element removed
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    doublyLinkedList.remove("third");
    expect(doublyLinkedList.size).to.equal(2);
  });
});
