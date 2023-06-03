// Import the necessary dependencies
const { expect } = require("chai");
const sumNums = require("../practice-challenge");

// Describe the test suite
describe("sumNums should add two numbers", () => {
  // Test case 1
  it("should add two numbers together and return the result", () => {
    // Arrange
    const number1 = 5;
    const number2 = 10;

    // Act
    const result = sumNums(number1, number2);

    // Assert
    expect(result).to.equal(15);
  });

  //   Test case 2
  it("should have two parameters", () => {
    const result = sumNums("param1", "param2");
    expect(sumNums.length).to.equal(2);
  });
});
