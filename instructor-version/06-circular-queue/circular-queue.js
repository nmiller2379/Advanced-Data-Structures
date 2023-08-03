class CircularQueue {
    constructor(size) {
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
    // Your code goes here   
    }
  
    dequeue() {
    // Your code goes here
    }
  }

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = CircularQueue