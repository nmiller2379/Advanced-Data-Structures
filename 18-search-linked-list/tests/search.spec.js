const chai = require("chai");
const LinkedList = require("../search");

const { expect } = chai;

describe("LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should be able to add elements to the linked list", () => {
    expect(linkedList.isEmpty()).to.equal(true);
    linkedList.add("first");
    expect(linkedList.isEmpty()).to.equal(false);
  });

  it("should be able to remove elements from the linked list", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("third");
    linkedList.remove("second");
    expect(linkedList.indexOf("second")).to.equal(-1);
    expect(linkedList.indexOf("third")).to.equal(1);
  });

  it("should return the index of an element", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("third");
    expect(linkedList.indexOf("second")).to.equal(1);
  });

  it("should return -1 if the element is not in the linked list", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("third");
    expect(linkedList.indexOf("fourth")).to.equal(-1);
  });

  it("should return true if the linked list is empty", () => {
    expect(linkedList.isEmpty()).to.equal(true);
  });

  it("should return false if the linked list is not empty", () => {
    linkedList.add("first");
    expect(linkedList.isEmpty()).to.equal(false);
  });

  it("should return the element at the specified index", () => {
    linkedList.add("first");
    linkedList.add("second");
    linkedList.add("third");
    expect(linkedList.elementAt(1)).to.equal("second");
  });
});
