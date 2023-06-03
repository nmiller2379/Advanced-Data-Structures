const { expect } = require("chai");
const homeworkStack = require("../stack");

// Import the module or code that contains the homeworkStack variable
// If it's in the same file, no import is necessary

describe("homeworkStack", () => {
  let testArr
  before(() => {

  })

  it("should only contain 4 elements", () => {
    // Assert the length of homeworkStack is 4
    expect(homeworkStack).to.have.lengthOf(4);
  });

  it('should have "CS50" as the last element', () => {
    // Assert the last element of homeworkStack is "CS50"
    expect(homeworkStack[3]).to.equal("CS50");
  });

  it('should not contain "PSY44"', () => {
    // Assert homeworkStack does not include "PSY44"
    expect(homeworkStack).to.not.include("PSY44");
  });

  it("should not modify the initial declaration", () => {
    // Create a copy of the initial homeworkStack declaration
    const initialStack = ["BIO12", "HIS80", "MAT122", "CS50"];

    // Assert that homeworkStack and initialStack are deeply equal
    expect(homeworkStack).to.deep.equal(initialStack);
  });
});
