class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    this.queue.push({ item, priority });
  }

  size() {
    return this.queue.length;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let highestPriorityIndex = 0;
    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority > this.queue[highestPriorityIndex].priority) {
        highestPriorityIndex = i;
      }
    }
    return this.queue.splice(highestPriorityIndex, 1)[0].item;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    let highestPriorityIndex = 0;
    for (let i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority > this.queue[highestPriorityIndex].priority) {
        highestPriorityIndex = i;
      }
    }
    return this.queue[highestPriorityIndex].item;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = PriorityQueue;
