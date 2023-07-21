const { expect } = require('chai');
const Set = require('../subset'); 

describe('Set', () => {
  describe('#isSubsetOf', () => {
    it('should return true if the first Set is contained in the second Set', () => {
      const set1 = new Set();
      set1.add('a');
      set1.add('b');

      const set2 = new Set();
      set2.add('a');
      set2.add('b');
      set2.add('c');
      set2.add('d');

      expect(set1.isSubsetOf(set2)).to.be.true;
    });

    it('should return false if the first Set is not contained in the second Set', () => {
      const set1 = new Set();
      set1.add('a');
      set1.add('b');
      set1.add('c');

      const set2 = new Set();
      set2.add('a');
      set2.add('b');

      expect(set1.isSubsetOf(set2)).to.be.false;
    });

    it('should return true if both Sets are empty', () => {
      const set1 = new Set();
      const set2 = new Set();

      expect(set1.isSubsetOf(set2)).to.be.true;
    });

    it('should return false if the first Set is not contained in the second Set', () => {
      const set1 = new Set();
      set1.add('a');
      set1.add('b');

      const set2 = new Set();
      set2.add('c');
      set2.add('d');

      expect(set1.isSubsetOf(set2)).to.be.false;
    });
  });
});

