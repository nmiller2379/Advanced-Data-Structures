class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data, this.tail);
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.size--;
      }
      current = current.next;
    }
  }

  reverse() {
    if (this.size === 0) {
      return null; // Nothing to reverse in an empty list
    }

    let current = this.head;
    while (current) {
      // Swap prev and next pointers for each node
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      // Move to the next node
      current = temp;
    }

    // Swap the head and tail pointers
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

// Example usage:
const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Original List:");
console.log(list.head.data); // 1
console.log(list.head.next.data); // 2
console.log(list.head.next.next.data); // 3

list.reverse();

console.log("Reversed List:");
console.log(list.head.data); // 3
console.log(list.head.next.data); // 2
console.log(list.head.next.next.data); // 1

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = DoublyLinkedList;
