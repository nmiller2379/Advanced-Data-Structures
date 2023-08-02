  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item, priority) {
      this.queue.push( {item, priority} )
    }
  
    dequeue() {
      this.queue.sort((a, b) => a.priority - b.priority)
      return this.queue.shift()
    }
  
    size() {
      return this.queue.length;
    }
  
    front() {
      this.queue.sort((a, b) => a.priority - b.priority)
      return this.queue[0] ? this.queue[0].item : null
    }
  
    isEmpty() {
      if (this.queue.length == 0) {
        return true
      } else {
        return false
      }
    }
    
    print() {
      console.log(this.queue);
    }
  }
  const test1 = new PriorityQueue()
  test1.enqueue("coffee", 2)
  test1.enqueue("apples", 1)
  test1.enqueue("popcorn", 3)
   test1.print()
  // const front = test1.front()
  // console.log(front)
  
  // DO NOT CHANGE THE CODE BELOW THIS LINE
  module.exports = PriorityQueue;
  
  