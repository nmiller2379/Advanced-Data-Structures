class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  remove(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1; // Element not found
  }

  elementAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.data;
  }
}

module.exports = LinkedList;
