const { expect } = require("chai");
const Kitten = require("../nodes").Kitten;
const Puppy = require("../nodes").Puppy;
const Cat = require("../nodes").Cat;
const Dog = require("../nodes").Dog;


describe("Node", () => {
  describe("Kitten", () => {
    it("should have a reference to a Puppy node", () => {
      expect(Kitten.next).to.eql(Puppy);
    });
  });

  describe("Puppy", () => {
    it("should have a reference to a Cat node", () => {
      expect(Puppy.next).to.eql(Cat);
    });
  });

  describe("Cat", () => {
    it("should have a reference to a Dog node", () => {
      expect(Cat.next).to.eql(Dog);
    });
  });
});
