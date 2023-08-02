const { expect } = require("chai");
const Stack = require("../stack-class"); // Assuming Stack class is defined in a separate file

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should have a push method", () => {
    expect(stack.push).to.be.a("function");
  });

  it("should have a pop method", () => {
    expect(stack.pop).to.be.a("function");
  });

  it("should have a peek method", () => {
    expect(stack.peek).to.be.a("function");
  });

  it("should have an isEmpty method", () => {
    expect(stack.isEmpty).to.be.a("function");
  });

  it("should have a clear method", () => {
    expect(stack.clear).to.be.a("function");
  });

  it("should return the top element with peek method", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).to.equal(3);
  });

  it("should remove and return the top element with pop method", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const poppedElement = stack.pop();
    expect(poppedElement).to.equal(3);
    expect(stack.peek()).to.equal(2);
  });

  it("should return true if the stack is empty with isEmpty method", () => {
    expect(stack.isEmpty()).to.be.true;
    stack.push(1);
    expect(stack.isEmpty()).to.be.false;
  });

  it("should remove all elements with clear method", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();
    expect(stack.isEmpty()).to.be.true;
  });
});
