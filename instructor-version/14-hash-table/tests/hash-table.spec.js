const { expect } = require("chai");
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

  it("should have a lookup method", () => {
    const test = new HashTable();
    expect(test.lookup).to.be.a("function");
  });

  it("should have a remove method", () => {
    const test = new HashTable();
    expect(test.remove).to.be.a("function");
  });

  it("should add a key-value pair and return the correct value", () => {
    const test = new HashTable();
    test.add("key", "value");
    expect(test.lookup("key")).to.equal("value");
  });

  it("should call the add method at least 3 times", () => {
    const test = new HashTable();
    let called = 0;
    test.add = function () {
      called++;
    };
    test.add("key1", "value1");
    test.add("key2", "value2");
    test.add("key3", "value3");
    expect(called).to.be.at.least(3);
    expect(called % 3).to.equal(0);
  });

  it("should lookup and return the correct values for different keys", () => {
    const test = new HashTable();
    test.add("key1", "value1");
    test.add("1key", "value2");
    test.add("ke1y", "value3");
    expect(test.lookup("key1")).to.equal("value1");
    expect(test.lookup("1key")).to.equal("value2");
    expect(test.lookup("ke1y")).to.equal("value3");
  });
  it("should remove a key-value pair correctly", () => {
    const test = new HashTable();
    test.add("key", "value");
    test.remove("key");
    expect(test.lookup("key")).to.be.undefined;
  });

  it("should remove a key-value pair and keep other pairs intact", () => {
    const test = new HashTable();
    test.add("key", "value");
    test.add("otherKey", "otherValue");
    test.remove("key");
    expect(test.lookup("key")).to.be.undefined;
    expect(test.lookup("otherKey")).to.equal("otherValue");
  });

  it("should not modify the collection if the key does not exist", () => {
    const test = new HashTable();
    test.add("key", "value");
    const collectionBeforeRemove = { ...test.collection };
    test.remove("nonexistentKey");
    expect(test.collection).to.deep.equal(collectionBeforeRemove);
  });

  it("should not throw an error when removing from an empty collection", () => {
    const test = new HashTable();
    expect(() => test.remove("key")).to.not.throw();
  });
});
