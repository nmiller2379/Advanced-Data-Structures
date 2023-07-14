class Set {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.values(this.dictionary);
    }
    // Your code goes here.
  }

// DO NOT CHANGE THE CODE BELOW THIS LINE
  module.exports = Set;