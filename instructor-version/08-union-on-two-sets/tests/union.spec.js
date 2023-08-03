const { expect } = require("chai");
const Set = require("./Set"); // Assuming Set class is defined in a separate file

describe("Set", () => {
  let set;

  beforeEach(() => {
    set = new Set();
  });

  it("should add elements to the set", () => {
    set.add("a");
    set.add("b");
    set.add("c");

    expect(set.size()).to.equal(3);
  });

  it("should remove elements from the set", () => {
    set.add("a");
    set.add("b");
    set.add("c");

    set.remove("b");

    expect(set.size()).to.equal(2);
    expect(set.has("b")).to.be.false;
  });

  it("should check for the presence of elements in the set", () => {
    set.add("a");
    set.add("b");

    expect(set.has("a")).to.be.true;
    expect(set.has("c")).to.be.false;
  });

  it("should return all values in the set", () => {
    set.add("a");
    set.add("b");
    set.add("c");

    const values = set.values();

    expect(values).to.be.an("array");
    expect(values).to.have.members(["a", "b", "c"]);
  });

  it("should return the size of the set", () => {
    set.add("a");
    set.add("b");
    set.add("c");

    expect(set.size()).to.equal(3);
  });

  it("should return the union of two sets", () => {
    const otherSet = new Set();
    set.add("a");
    set.add("b");
    set.add("c");
    otherSet.add("c");
    otherSet.add("d");

    const unionSet = set.union(otherSet);

    expect(unionSet.size()).to.equal(4);
    expect(unionSet.values()).to.have.members(["a", "b", "c", "d"]);
  });
});
