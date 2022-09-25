const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemRemove) {
  const toRemove = new Set(itemRemove);
  const newArr = source.filter((item) => {
    return !toRemove.has(item);
  });
  return newArr;
};

////  Tests
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([21, "12", "14.5", 900], ["900", 21, 14.5]), [ '12', '14.5', 900 ]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);