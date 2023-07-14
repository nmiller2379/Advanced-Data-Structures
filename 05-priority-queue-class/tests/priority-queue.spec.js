const { expect } = require("chai");
const PriorityQueue = require("../priority-queue"); // Assuming PriorityQueue class is defined in a separate file

describe("PriorityQueue", () => {
  let queue;

  beforeEach(() => {
    queue = new PriorityQueue();
  });

  it("should have an enqueue method", () => {
    expect(queue.enqueue).to.be.a("function");
  });

  it("should have a size method", () => {
    expect(queue.size).to.be.a("function");
  });

  it("should have a dequeue method", () => {
    expect(queue.dequeue).to.be.a("function");
  });

  it("should have a front method", () => {
    expect(queue.front).to.be.a("function");
  });

  it("should have an isEmpty method", () => {
    expect(queue.isEmpty).to.be.a("function");
  });

  it("should correctly keep track of the current number of items using the size method", () => {
    queue.enqueue("item1", 1);
    expect(queue.size()).to.equal(1);

    queue.enqueue("item2", 2);
    expect(queue.size()).to.equal(2);

    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });

  it("should return the correct item at the front of the queue using the front method", () => {
    queue.enqueue("item1", 1);
    expect(queue.front()).to.equal("item1");

    queue.enqueue("item2", 2);
    expect(queue.front()).to.equal("item2");

    queue.dequeue();
    expect(queue.front()).to.equal("item1");
  });

  it("should return true when the queue is empty using the isEmpty method", () => {
    expect(queue.isEmpty()).to.be.true;

    queue.enqueue("item1", 1);
    expect(queue.isEmpty()).to.be.false;

    queue.dequeue();
    expect(queue.isEmpty()).to.be.true;
  });

  it("should prioritize items with higher priority before items with lower priority", () => {
    queue.enqueue("item1", 2);
    queue.enqueue("item2", 1);
    queue.enqueue("item3", 3);

    expect(queue.dequeue()).to.equal("item3");
    expect(queue.dequeue()).to.equal("item1");
    expect(queue.dequeue()).to.equal("item2");
  });

  it("should return items in first-in-first-out order if priorities are the same", () => {
    queue.enqueue("item1", 1);
    queue.enqueue("item2", 1);
    queue.enqueue("item3", 1);

    expect(queue.dequeue()).to.equal("item1");
    expect(queue.dequeue()).to.equal("item2");
    expect(queue.dequeue()).to.equal("item3");
  });
});
