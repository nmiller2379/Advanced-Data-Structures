const { expect } = require("chai");
const LinkedList = require("../linked-list-class");

describe("LinkedList", () => {
  describe("add()", () => {
    it("should add a node to the list", () => {
      const list = new LinkedList();
      list.add("a");
      list.add("b");
      list.add("c");
      expect(list.head.data).to.equal("a");
      expect(list.head.next.data).to.equal("b");
      expect(list.head.next.next.data).to.equal("c");
    });
  });

  describe("size()", () => {
    it("should return the size of the list", () => {
      const list = new LinkedList();
      list.add("a");
      list.add("b");
      list.add("c");
      expect(list.size).to.equal(3);
    });
  });
});
