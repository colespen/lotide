const without = function(source, itemRemove) {
  const toRemove = new Set(itemRemove);
  const newArr = source.filter((item) => {
    return !toRemove.has(item);
  });
  return newArr;
};

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => Assertion Passed: 2,3 === 2,3
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([21, "12", "14.5", 900], ["900", 21, 14.5]), [ '12', '14.5', 900 ]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// Helper Functions Copied Over

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




// function without(source, itemRemove) {
//   let arr = [];
//   for (x = 0; x < source.length; x++) {
//     for (i = 0; i < itemRemove.length; i++) {
//      console.log(itemRemove[i]);
//       if (itemRemove[i] !== source[x]) {
//         console.log(source[x]);
//       }

//     }
//     //console.log(arr);
//   }
// }