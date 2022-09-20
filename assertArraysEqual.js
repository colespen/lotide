function eqArrays(a, b) {
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
}

function assertArraysEqual(actual, expected) {
  eqArrays(actual, expected) ? 
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([43, 42, 41], [43, 42, 41]);
assertArraysEqual(["10", "20", "30"], ["10", "20", "30"]);
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
