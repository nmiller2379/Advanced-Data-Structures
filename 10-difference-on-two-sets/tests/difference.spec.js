// Import necessary modules
const { expect } = require('chai');
const Set = require('../difference');

// Describe the Set class
describe('Set', () => {
  let set;

  // Create a new Set object before each test
  beforeEach(() => {
    set = new Set();
  });

  // Test the has method
  describe('has', () => {
    it('should return true if element is present in the set', () => {
      set.add('a');
      expect(set.has('a')).to.be.true;
    });

    it('should return false if element is not present in the set', () => {
      set.add('a');
      expect(set.has('b')).to.be.false;
    });
  });

  // Test the values method
  describe('values', () => {
    it('should return an array of all values in the set', () => {
      set.add('a');
      set.add('b');
      set.add('c');
      expect(set.values()).to.deep.equal(['a', 'b', 'c']);
    });
  });

  // Test the add method
  describe('add', () => {
    it('should add an element to the set', () => {
      set.add('a');
      expect(set.has('a')).to.be.true;
      expect(set.size()).to.equal(1);
    });
  });

  // Test the remove method
  describe('remove', () => {
    it('should remove an element from the set', () => {
      set.add('a');
      set.remove('a');
      expect(set.has('a')).to.be.false;
      expect(set.size()).to.equal(0);
    });
  });

  // Test the size method
  describe('size', () => {
    it('should return the size of the set', () => {
      set.add('a');
      set.add('b');
      expect(set.size()).to.equal(2);
    });
  });

  // Test the union method
  describe('union', () => {
    it('should return the union of two sets', () => {
      const setA = new Set();
      const setB = new Set();

      setA.add('a');
      setA.add('b');
      setB.add('b');
      setB.add('c');

      const unionSet = setA.union(setB);

      expect(unionSet.values()).to.deep.equal(['a', 'b', 'c']);
    });
  });

  // Test the intersection method
  describe('intersection', () => {
    it('should return the intersection of two sets', () => {
      const setA = new Set();
      const setB = new Set();

      setA.add('a');
      setA.add('b');
      setB.add('b');
      setB.add('c');

      const intersectionSet = setA.intersection(setB);

      expect(intersectionSet.values()).to.deep.equal(['b']);
    });
  });

  // Test the difference method
  describe('difference', () => {
    it('should return the difference of two sets', () => {
      const setA = new Set();
      const setB = new Set();

      setA.add('a');
      setA.add('b');
      setA.add('c');
      setB.add('a');
      setB.add('b');
      setB.add('d');
      setB.add('e');

      const differenceSet = setA.difference(setB);

      expect(differenceSet.values()).to.deep.equal(['c']);
    });
  });
});
