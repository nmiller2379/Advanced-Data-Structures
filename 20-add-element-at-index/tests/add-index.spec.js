const { expect } = require("chai");
const LinkedList = require("../add-index");

// addAt method should reassign head to the new node when the given index is 0.

// addAt method should increase the length of the linked list by one for each new node added to the linked list.

// addAt method should return false if a node was unable to be added.

describe("LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should be able to add a node at a specific index", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("fourth");
    linkedList.addAt(2, "third");
    expect(linkedList.indexOf("third")).to.equal(2);
  });

  it("should reassign head to the new node when the given index is 0", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.addAt(0, "zeroth");
    expect(linkedList.head.data).to.equal("zeroth");
  });

  it("should increase the length of the linked list by one for each new node added to the linked list", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("fourth");
    linkedList.addAt(2, "third");
    expect(linkedList.size).to.equal(4);
  });

  it("should return false if a node was unable to be added", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("fourth");
    expect(linkedList.addAt(5, "third")).to.equal(false);
  });
});
