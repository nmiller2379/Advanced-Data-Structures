const { expect } = require("chai");
const DoublyLinkedList = require("../doubly-linked");

// The DoublyLinkedList data structure should exist

// The DoublyLinkedList should have a method called add

// The DoublyLinkedList should have a method called remove.

// Removing an item from an empty list should return null.

// The add method should add items to the list.

// Each node should keep track of the previous node.

// The first item should be removable from the list.

// The first item should be removable from the list.

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
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    doublyLinkedList.remove("second");
    expect(doublyLinkedList.indexOf("second")).to.equal(-1);
  });

  it("should be able to remove the first node from the list", () => {
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    doublyLinkedList.remove("first");
    expect(doublyLinkedList.indexOf("first")).to.equal(-1);
  });

  it("should be able to remove the last node from the list", () => {
    doublyLinkedList.add("first");
    doublyLinkedList.add("second");
    doublyLinkedList.add("third");
    doublyLinkedList.remove("third");
    expect(doublyLinkedList.indexOf("third")).to.equal(-1);
  });
});
