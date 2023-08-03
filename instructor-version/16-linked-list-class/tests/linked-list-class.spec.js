// test.js
const chai = require('chai');
const LinkedList = require('../linked-list-class');

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
});