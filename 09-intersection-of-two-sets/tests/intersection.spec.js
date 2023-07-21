const { expect } = require('chai');
const Set = require('../intersection');

describe('Set', () => {
  let set;

  beforeEach(() => {
    set = new Set();
  });

  it('should add elements to the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.size()).to.equal(3);
    expect(set.values()).to.deep.equal(['a', 'b', 'c']);
  });

  it('should remove elements from the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    set.remove('b');

    expect(set.size()).to.equal(2);
    expect(set.values()).to.deep.equal(['a', 'c']);
  });

  it('should check if an element exists in the set', () => {
    set.add('a');
    set.add('b');
    set.add('c');

    expect(set.has('b')).to.be.true;
    expect(set.has('d')).to.be.false;
  });

  it('should return the intersection of two sets', () => {
    const setA = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');

    const setB = new Set();
    setB.add('a');
    setB.add('b');
    setB.add('d');
    setB.add('e');

    const intersection = setA.intersection(setB);
    expect(intersection.values()).to.deep.equal(['a', 'b']);
  });

  it('should return the union of two sets', () => {
    const setA = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');

    const setB = new Set();
    setB.add('a');
    setB.add('b');
    setB.add('d');
    setB.add('e');

    const union = setA.union(setB);
    expect(union.values()).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
  });
});