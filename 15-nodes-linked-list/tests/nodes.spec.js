const { expect } = require("chai");
const Node = require("../nodes");

describe("Linked List", () => {
  it("should have a reference to a Cat node from the Puppy node", () => {
    const Kitten = new Node("Kitten");
    const Puppy = new Node("Puppy");
    const Cat = new Node("Cat");

    Kitten.next = Puppy;
    Puppy.next = Cat;

    expect(Kitten.next).to.equal(Puppy);
    expect(Puppy.next).to.equal(Cat);
  });

  it("should have a reference to a Dog node from the Cat node", () => {
    const Kitten = new Node("Kitten");
    const Puppy = new Node("Puppy");
    const Cat = new Node("Cat");
    const Dog = new Node("Dog");

    Kitten.next = Puppy;
    Puppy.next = Cat;
    Cat.next = Dog;

    expect(Puppy.next).to.equal(Cat);
    expect(Cat.next).to.equal(Dog);
  });
});
