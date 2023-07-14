const { expect } = require('chai');
const CircularQueue = require('../circular-queue');

describe('CircularQueue', () => {
  describe('enqueue', () => {
    it('should add items to the circular queue', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.print()).to.deep.equal(['A', 'B', 'C']);
    });

    it('should not enqueue items past the read pointer', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      const result = queue.enqueue('D');
      expect(result).to.be.null;
      expect(queue.print()).to.deep.equal(['A', 'B', 'C']);
    });
  });

  describe('dequeue', () => {
    it('should dequeue items from the queue', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      const item = queue.dequeue();
      expect(item).to.equal('A');
      expect(queue.print()).to.deep.equal([null, 'B', 'C']);
    });

    it('should reset the position of the dequeued item to null', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      queue.dequeue();
      expect(queue.print()).to.deep.equal([null, 'B', 'C']);
    });

    it('should return null when dequeueing past the write pointer', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      const item = queue.dequeue();
      expect(item).to.be.null;
      expect(queue.print()).to.deep.equal([null, null, null]);
    });
  });
});
