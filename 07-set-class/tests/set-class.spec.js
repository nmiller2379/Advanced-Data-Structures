const { expect } = require("chai");
const Set = require("../set-class");

describe("Set", () => {
  describe("add", () => {
    it("should have an add method", () => {
      const set = new Set();
      expect(set.add).to.be.a("function");
    });

    it("should not add duplicate values", () => {
      const set = new Set();
      set.add("A");
      set.add("B");
      set.add("A");
      expect(set.values()).to.deep.equal(["A", "B"]);
    });

    it("should return false when a duplicate value is added", () => {
      const set = new Set();
      const result1 = set.add("A");
      const result2 = set.add("A");
      expect(result1).to.be.true;
      expect(result2).to.be.false;
    });

    it("should return true when a value has been successfully added", () => {
      const set = new Set();
      const result = set.add("A");
      expect(result).to.be.true;
    });
  });

  describe("remove", () => {
    it("should have a remove method", () => {
      const set = new Set();
      expect(set.remove).to.be.a("function");
    });

    it("should only remove items that are present in the set", () => {
      const set = new Set();
      set.add("A");
      set.add("B");
      const result1 = set.remove("A");
      const result2 = set.remove("C");
      expect(result1).to.be.true;
      expect(result2).to.be.false;
      expect(set.values()).to.deep.equal(["B"]);
    });

    it("should remove the given item from the set", () => {
      const set = new Set();
      set.add("A");
      set.add("B");
      set.remove("A");
      expect(set.values()).to.deep.equal(["B"]);
    });
  });

  describe("size", () => {
    it("should have a size method", () => {
      const set = new Set();
      expect(set.size).to.be.a("function");
    });

    it("should return the number of elements in the collection", () => {
      const set = new Set();
      set.add("A");
      set.add("B");
      set.add("C");
      const size = set.size();
      expect(size).to.equal(3);
    });
  });
});
