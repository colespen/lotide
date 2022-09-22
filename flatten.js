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

const eqArrays = function(a, b) {
  let result = true;
  if (a.length !== b.length) {
    result = false;
  }
  a.forEach((num1, i) => {
    const num2 = b[i];
    if (num1 !== num2) {
      result = false;
    }
  });
  return result;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

arr1a = [1, 2, [3, 4], 5, [6]];
arr1b = [1, 2, 3, 4, 5, 6];
arr2a = [1, [2, 4, 6, 4, 2], 3, 4, 5, 6, [33, 2, -6, 2.4], 9];
arr2b = [1, 2, 4, 6, 4, 2, 3, 4, 5, 6, 33, 2, -6, 2.4, 9];

assertArraysEqual(flatten(arr1a), arr1b);

assertArraysEqual(flatten(arr2a), arr2b);