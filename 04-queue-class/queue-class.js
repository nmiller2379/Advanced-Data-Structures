class Queue {
  constructor() {
    this.collection = [];
  }

  // Print the collection to the console
  print() {
    console.log(this.collection);
  }

  // Push an element to the tail of the queue
  enqueue(element) {
    this.collection.push(element);
  }

  // Remove and return the front element
  dequeue() {
    return this.collection.shift();
  }

  // Get the front element without removing it
  front() {
    return this.collection[0];
  }

  // Get the length of the queue
  size() {
    return this.collection.length;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.collection.length === 0;
  }
}

module.exports = Queue;
