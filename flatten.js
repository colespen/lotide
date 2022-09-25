const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  const flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flat.push(arr[i]);
    } else {
      for (const a of arr[i]) {
        flat.push(a);
      }
    }
  }
  return flat;
};

////  Tests
const arr1a = [1, 2, [3, 4], 5, [6]];
const arr1b = [1, 2, 3, 4, 5, 6];
const arr2a = [1, [2, 4, 6, 4, 2], 3, 4, 5, 6, [33, 2, -6, 2.4], 9];
const arr2b = [1, 2, 4, 6, 4, 2, 3, 4, 5, 6, 33, 2, -6, 2.4, 9];

assertArraysEqual(flatten(arr1a), arr1b);

assertArraysEqual(flatten(arr2a), arr2b);