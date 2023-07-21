// test.js
const chai = require('chai');
const LinkedList = require('../remove-item');

const { expect } = chai;

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should have an add method', () => {
    expect(linkedList.add).to.be.a('function');
  });

  it('should assign head to the first node added', () => {
    linkedList.add(1);
    expect(linkedList.head).to.deep.equal({ data: 1, next: null });
  });

  it('should have the previous node reference the newest node created', () => {
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.head.next).to.deep.equal({ data: 2, next: null });
  });

  it('should update the size of the LinkedList', () => {
    expect(linkedList.size).to.equal(0);
    linkedList.add(1);
    expect(linkedList.size).to.equal(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.size).to.equal(3);
  });

  it('should have a remove method', () => {
    expect(linkedList.remove).to.be.a('function');
  });

  it('should reassign head to the second node when the first node is removed', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.remove(1);
    expect(linkedList.head).to.deep.equal({ data: 2, next: { data: 3, next: null } });
  });

  it('should decrease the length of the linked list by one for every node removed', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.remove(1);
    expect(linkedList.size).to.equal(2);
    linkedList.remove(3);
    expect(linkedList.size).to.equal(1);
  });

  it('should reassign the reference of the previous node of the removed node to the removed node\'s next reference', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.remove(2);
    expect(linkedList.head.next).to.deep.equal({ data: 3, next: null });
  });

  it('should not change the linked list if the element does not exist in the linked list', () => {
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.remove(4);
    expect(linkedList.head).to.deep.equal({ data: 1, next: { data: 2, next: { data: 3, next: null } } });
    expect(linkedList.size).to.equal(3);
  });
});
