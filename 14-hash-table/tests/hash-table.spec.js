const { expect } = require("chai");
const assert = require("assert");
const HashTable = require("../hash-table");

describe("HashTable", () => {
  it("should create a HashTable object", () => {
    const test = new HashTable();
    expect(test).to.be.an("object");
  });

  it("should have an add method", () => {
    const test = new HashTable();
    expect(test.add).to.be.a("function");
  });
});
