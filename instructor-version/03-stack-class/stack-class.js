class Stack {
  constructor() {
    this.collection = [];
  }

  //   Your code goes here.
  push(e){
    return this.collection.push(e)
  }

  pop(e) {
    
    return this.collection.pop(e)
  }

  peek(e) {
    this.collection.filter((a, b) => a > b)
    return this.collection.peek(e)
    // return this.collection.push()
  }

  isEmpty(){
    if (this.collection == 0) {
      return true
    } else {
      return false
    }
  }

  clear() {
   
  }

  print() {
    console.log(this.collection);
  }
}

// DO NOT CHANGE CODE BELOW THIS LINE
module.exports = Stack;
