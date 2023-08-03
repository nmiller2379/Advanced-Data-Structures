const assert = require('chai').assert;
const Map = require('../map');

describe('Map', function() {
  let map;

  beforeEach(function() {
    map = new Map();
  });

  it('should add key-value pairs correctly', function() {
    map.add('key1', 'value1');
    assert.equal(map.size(), 1);
    assert.isTrue(map.has('key1'));
    assert.equal(map.get('key1'), 'value1');

    map.add('key2', 'value2');
    assert.equal(map.size(), 2);
    assert.isTrue(map.has('key2'));
    assert.equal(map.get('key2'), 'value2');
  });

  it('should remove key-value pairs correctly', function() {
    map.add('key1', 'value1');
    map.add('key2', 'value2');

    map.remove('key1');
    assert.equal(map.size(), 1);
    assert.isFalse(map.has('key1'));
    assert.isUndefined(map.get('key1'));
    assert.isTrue(map.has('key2'));
    assert.equal(map.get('key2'), 'value2');

    map.remove('key2');
    assert.equal(map.size(), 0);
    assert.isFalse(map.has('key2'));
    assert.isUndefined(map.get('key2'));
  });

  it('should return values correctly', function() {
    map.add('key1', 'value1');
    map.add('key2', 'value2');

    const values = map.values();
    assert.sameMembers(values, ['value1', 'value2']);
  });

  it('should return the correct size', function() {
    assert.equal(map.size(), 0);

    map.add('key1', 'value1');
    assert.equal(map.size(), 1);

    map.add('key2', 'value2');
    assert.equal(map.size(), 2);

    map.remove('key1');
    assert.equal(map.size(), 1);

    map.clear();
    assert.equal(map.size(), 0);
  });

  it('should clear the map', function() {
    map.add('key1', 'value1');
    map.add('key2', 'value2');

    map.clear();
    assert.equal(map.size(), 0);
    assert.isFalse(map.has('key1'));
    assert.isFalse(map.has('key2'));
  });
});
