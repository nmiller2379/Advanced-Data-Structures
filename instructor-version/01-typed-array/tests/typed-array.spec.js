const expect = require("chai").expect;

// Code to be tested

const buffer = require("../typed-array");
const i32View = require("../typed-array");

// Tests
describe("Buffer and View", function () {
  it("should have a buffer of 64 bytes", function () {
    expect(buffer.byteLength).to.equal(64);
  });

  it("should have a view of the buffer with 64 bytes", function () {
    expect(i32View.byteLength).to.equal(64);
  });

  it("should have a view of the buffer with 16 elements", function () {
    expect(i32View.length).to.equal(16);
  });
});
