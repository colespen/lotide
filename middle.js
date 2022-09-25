const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  array.splice(0, 1);
  array.splice(-1, 1);
  if (array.length % 2 === 0) {
    while (array.length > 2) {
      array.splice(0, 1);
      array.splice(-1, 1);
    }
  } else if (array.length > 1) {
    array.splice(0, 1);
    array.splice(-1, 1);
  }
  return array;
};

////  Tests
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

