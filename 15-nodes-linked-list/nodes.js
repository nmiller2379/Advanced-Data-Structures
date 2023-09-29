class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

const Kitten = new Node("Kitten");
const Puppy = new Node("Puppy");

Kitten.next = Puppy;

// only add code below this line

// DO NOT CHANGE THE CODE BELOW THIS LINE
module.exports = {
  Kitten,
  Puppy,
  Cat,
  Dog,
};
