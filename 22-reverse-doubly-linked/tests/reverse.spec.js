const { expect } = require('chai');
const LinkedList = require('../reverse');

// The DoublyLinkedList should have a method called reverse.

// Reversing an empty list should return null.

// The reverse method should reverse the list.

// The next and previous references should be correctly maintained when a list is reversed.

describe('reverse a linked list', () => {
    it('should reverse an empty list', () => {
        const list = new LinkedList();
        expect(list.reverse()).to.equal(null);
    });
    
    it('should reverse a list', () => {
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.reverse();
        expect(list.head.data).to.equal(3);
        expect(list.head.next.data).to.equal(2);
        expect(list.head.next.next.data).to.equal(1);
        expect(list.head.next.next.next).to.equal(null);
        expect(list.tail.data).to.equal(1);
        expect(list.tail.prev.data).to.equal(2);
        expect(list.tail.prev.prev.data).to.equal(3);
        expect(list.tail.prev.prev.prev).to.equal(null);
    });
    });