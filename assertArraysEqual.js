const eqArrays = require('./eqArrays');

//Function Implementation
const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

////  Tests
/*
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([43, 42, 41], [43, 42, 41]); // => true
assertArraysEqual(["10", "20", "30"], ["10", "20", "30"]); // => true
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]); // => false
*/

module.exports = assertArraysEqual;