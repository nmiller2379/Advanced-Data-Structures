const myMap = require("../map");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("myMap", () => {
  it("should be an instance of Map", () => {
    expect(myMap).to.be.an.instanceOf(Map);
  });

  it('should return "Awesome!" for key "persevere"', () => {
    expect(myMap.get("persevere")).to.equal("Awesome!");
  });
});
