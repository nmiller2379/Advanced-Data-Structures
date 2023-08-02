const { expect } = require("chai");
const Queue = require("../queue-class");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should enqueue elements correctly", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).to.equal(3);
  });

  it("should dequeue and return the front element", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const frontElement = queue.dequeue();

    expect(frontElement).to.equal(1);
    expect(queue.size()).to.equal(2);
  });

  it("should return the value of the front element", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const frontElement = queue.front();

    expect(frontElement).to.equal(1);
    expect(queue.size()).to.equal(3);
  });

  it("should return the correct size of the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).to.equal(3);
  });

  it("should return false if the queue is not empty", () => {
    queue.enqueue(1);

    expect(queue.isEmpty()).to.be.false;
  });

  it("should return true if the queue is empty", () => {
    expect(queue.isEmpty()).to.be.true;
  });
});
